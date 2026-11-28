import { getEffectiveMarketingSettings } from "@/lib/marketing-settings";

async function hashData(data: string): Promise<string> {
  if (!data) return "";
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export interface FacebookCapiEventParams {
  eventName: string;
  eventId?: string;
  eventSourceUrl?: string;
  userData?: {
    email?: string;
    phone?: string;
    name?: string;
    fbp?: string;
    fbc?: string;
    clientIp?: string;
    clientUserAgent?: string;
  };
  customData?: Record<string, any>;
}

export interface FacebookCapiResult {
  sent: boolean;
  skipped?: boolean;
  eventId?: string;
  reason?: string;
  error?: string;
}

export async function sendFacebookCapiEvent(
  params: FacebookCapiEventParams
): Promise<FacebookCapiResult> {
  try {
    const settings = await getEffectiveMarketingSettings();
    const pixelId = settings.metaPixelId;
    const accessToken = settings.facebookAccessToken;

    if (!pixelId || !accessToken) {
      return {
        sent: false,
        skipped: true,
        reason: "Facebook CAPI not configured",
      };
    }

    const userData = params.userData || {};
    const rawEmail = userData.email || "";
    const rawPhone = userData.phone || "";
    const rawName = userData.name ? String(userData.name).trim() : "";
    const rawFirstName = rawName ? rawName.split(/\s+/)[0] : "";
    const rawLastName =
      rawName && rawName.includes(" ")
        ? rawName.split(/\s+/).slice(1).join(" ")
        : "";

    const hashedEmail = rawEmail ? await hashData(rawEmail) : undefined;

    let phone = rawPhone ? String(rawPhone).replace(/\D/g, "") : "";
    if (phone && !phone.startsWith("88")) {
      phone = "88" + phone;
    }
    const hashedPhone = phone ? await hashData(phone) : undefined;
    const hashedFirstName = rawFirstName
      ? await hashData(rawFirstName)
      : undefined;
    const hashedLastName = rawLastName
      ? await hashData(rawLastName)
      : undefined;

    const fbUserData: Record<string, any> = {
      ...(userData.clientIp && { client_ip_address: userData.clientIp }),
      ...(userData.clientUserAgent && {
        client_user_agent: userData.clientUserAgent,
      }),
      ...(userData.fbp && { fbp: userData.fbp }),
      ...(userData.fbc && { fbc: userData.fbc }),
      ...(hashedEmail && { em: [hashedEmail] }),
      ...(hashedPhone && { ph: [hashedPhone] }),
      ...(hashedFirstName && { fn: [hashedFirstName] }),
      ...(hashedLastName && { ln: [hashedLastName] }),
    };

    const eventId = params.eventId || crypto.randomUUID();

    const payload: Record<string, any> = {
      data: [
        {
          event_name: params.eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          ...(params.eventSourceUrl && {
            event_source_url: params.eventSourceUrl,
          }),
          action_source: "website",
          user_data: fbUserData,
          custom_data: params.customData || {},
        },
      ],
    };

    if (settings.facebookTestEventCode) {
      payload.test_event_code = settings.facebookTestEventCode.trim();
    }

    const fbResponse = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error("[FB CAPI] Error:", result);
      return {
        sent: false,
        error: result?.error?.message || "Facebook CAPI request failed",
      };
    }

    return { sent: true, eventId };
  } catch (error) {
    console.error("[FB CAPI] Unexpected error:", error);
    return {
      sent: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
