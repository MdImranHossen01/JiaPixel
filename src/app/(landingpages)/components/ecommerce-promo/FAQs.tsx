import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Check,
    Info,
    FileText,
    DollarSign,
    ShieldCheck,
    HelpCircle,
    AlertTriangle,
} from "lucide-react";

interface FAQsProps {
    variant?: "3500" | "8000";
}

export const FAQs = ({ variant = "3500" }: FAQsProps) => {
    const is8000 = variant === "8000";
    return (
        <section className="-mt-10 md:mt-0 pb-16 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-4xl">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>স্বচ্ছতা ও নিশ্চয়তা</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        সাধারণ জিজ্ঞাসা ও <span className="text-primary">প্রশ্নোত্তর</span>
                    </h2>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        প্যাকেজ প্রাইসিং, কাজের প্রক্রিয়া, শর্তাবলী এবং গ্রাহকদের সাধারণ সকল প্রশ্নের স্পষ্ট উত্তর নিচে দেওয়া হলো।
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {/* Item 1: Investment & Pricing Breakdown */}
                    <AccordionItem
                        value="item-pricing"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline transition-all text-left">
                            <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                                <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                                প্যাকেজ প্রাইসিং ও সুবিধা (Package &amp; Pricing Breakdown)
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            <p className="mb-4 text-foreground font-medium">
                                আমাদের প্রিমিয়াম ই-কমার্স ওয়েবসাইট প্যাকেজের স্বচ্ছ খরচের বিবরণ:
                            </p>
                            <div className="overflow-x-auto rounded-xl border border-border/50 bg-background/60">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-muted/50 border-b border-border/50 font-semibold text-foreground">
                                        <tr>
                                            <th className="p-3.5">প্যাকেজে যা যা থাকছে</th>
                                            <th className="p-3.5 text-right">স্ট্যাটাস ও বিবরণ</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/30">
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                Complete E-Commerce Platform Development
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                ✅ Included (১০০টি অ্যাডভান্সড ফিচার)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                {is8000
                                                    ? "গ্লোবাল .com ডোমেইন, হাই-পারফরম্যান্স ক্লাউড হোস্টিং ও ফ্রি SSL"
                                                    : "হাই-পারফরম্যান্স ক্লাউড হোস্টিং ও ফ্রি SSL"}
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                {is8000
                                                    ? "✅ Included (১ বছরের জন্য সম্পূর্ণ ফ্রি)"
                                                    : "✅ Included (প্রথম ৬ মাস সম্পূর্ণ ফ্রি)"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                মোবাইল ও ডেস্কটপ পুশ নোটিফিকেশন + PWA অ্যাপ
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                ✅ Included (রিয়েল-টাইম অর্ডার এলার্ট)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                পাঠাও, রেডএক্স ও স্টিডফাস্ট কুরিয়ার + POS রিসিট
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                ✅ Included (বাল্ক ডিসপ্যাচ ও ৮০মিমি থার্মাল প্রিন্ট)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                Facebook CAPI, TikTok CAPI ও মেটা পিক্সেল
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                ✅ Included (সার্ভার-সাইড ট্র্যাকিং সহ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3.5 font-medium text-foreground">
                                                ডাবল-এন্ট্রি একাউন্টিং ও ৮টি বিজনেস রিপোর্ট
                                            </td>
                                            <td className="p-3.5 text-right text-primary font-semibold">
                                                ✅ Included (লাভ-ক্ষতি ও সেলস রিপোর্ট)
                                            </td>
                                        </tr>
                                        <tr className="bg-primary/5 font-bold text-base">
                                            <td className="p-3.5 text-foreground">
                                                সর্বমোট প্যাকেজ ফি (এককালীন)
                                            </td>
                                            <td className="p-3.5 text-right text-primary text-lg">
                                                {is8000 ? "মাত্র ৮,৯৯৯ টাকা" : "মাত্র ৩,৫০০ টাকা"}
                                            </td>
                                        </tr>
                                        <tr className="bg-muted/30">
                                            <td className="p-3.5 text-muted-foreground">
                                                অগ্রিম পেমেন্ট (Advance Payment)
                                            </td>
                                            <td className="p-3.5 text-right font-semibold text-foreground">
                                                ০ টাকা (পছন্দ হলে তারপর পেমেন্ট)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 p-4 md:p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-start gap-3.5 shadow-sm">
                                <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                        <h4 className="font-extrabold text-foreground text-sm md:text-base tracking-tight">
                                            🛡️ কোনো অগ্রিম পেমেন্ট নয় — ১০০% ঝুঁকিমুক্ত অর্ডার
                                        </h4>
                                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                                            Zero Advance Risk-Free
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                                        প্রজেক্ট শুরু করতে কোনো অগ্রিম টাকা দিতে হবে না। আমরা আগে আপনার ওয়েবসাইটটি সম্পূর্ণ তৈরি করে লাইভ রিভিউ করতে দেব — সব ফিচার ও ডিজাইন আপনার <span className="text-primary font-bold">শতভাগ পছন্দ হওয়ার পর</span> পেমেন্ট সম্পন্ন করে ডেলিভারি বুঝে নেবেন।
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Item 2: Client Requirements */}
                    <AccordionItem
                        value="item-requirements"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline transition-all text-left">
                            <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                                <Info className="w-5 h-5 text-primary flex-shrink-0" />
                                কাজ শুরু করতে আপনার কাছ থেকে কী কী লাগবে? (Client Requirements)
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            <p className="mb-4 text-foreground font-medium">
                                আপনার স্টোরের সেটআপ শুরু করতে নিচের সাধারণ তথ্যগুলো দিলেই চলবে:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">1. Business Information</span>
                                    <span className="text-xs text-muted-foreground">ব্যবসার নাম, লোগো, পছন্দের থিম কালার এবং সংক্ষিপ্ত &quot;About Us&quot; বিবরণ।</span>
                                </div>
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">2. Contact Details</span>
                                    <span className="text-xs text-muted-foreground">ফোন নম্বর, হোয়াটসঅ্যাপ নম্বর, ইমেইল এবং অফিস বা শোরুমের ঠিকানা।</span>
                                </div>
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">3. Social Media Links</span>
                                    <span className="text-xs text-muted-foreground">ফেসবুক পেজ, ইনস্টাগ্রাম, টিকটক ও ইউটিউব চ্যানেলের লিংক।</span>
                                </div>
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">4. Domain Name</span>
                                    <span className="text-xs text-muted-foreground">
                                        {is8000
                                            ? "আপনার পছন্দের .com ডোমেইন নাম (যেমন: www.yourbrand.com) — যা ১ বছরের জন্য সম্পূর্ণ ফ্রি রেজিস্টার করে দেওয়া হবে।"
                                            : "আপনার নিজস্ব ডোমেইন থাকলে তার DNS এক্সেস, অথবা নতুন ডোমেইন নেওয়ার নির্দেশনা।"}
                                    </span>
                                </div>
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">5. Marketing &amp; Tracking</span>
                                    <span className="text-xs text-muted-foreground">Facebook Pixel / CAPI, TikTok Pixel / Events API, GTM ও GA4 আইডি (ঐচ্ছিক, পরেও বসাতে পারবেন)।</span>
                                </div>
                                <div className="p-3 rounded-xl bg-background border border-border/40">
                                    <span className="font-semibold text-foreground text-sm block">6. Courier &amp; Payment</span>
                                    <span className="text-xs text-muted-foreground">পাঠাও, স্টিডফাস্ট বা রেডএক্স API Key এবং বিকাশ/নগদ/SSLCommerz তথ্য (যার ভিডিও গাইড আমরাই দেব)।</span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Item 3: Terms & Conditions */}
                    <AccordionItem
                        value="item-terms"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-lg md:text-xl font-bold py-6 hover:no-underline transition-all text-left">
                            <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                                শর্তাবলী ও সার্ভিস পলিসি (Terms &amp; Conditions)
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-foreground text-sm">ডেলিভারি সময়সীমা: </span>
                                        <span className="text-xs text-muted-foreground">আপনার রিকোয়ারমেন্ট পাওয়ার পর সাধারণত ৩ থেকে ৭ দিনের মধ্যে সম্পূর্ণ ওয়েবসাইট লাইভ করে ডেলিভারি দেওয়া হয়।</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-foreground text-sm">
                                            {is8000 ? "১ বছর ফ্রি .com ডোমেইন ও ক্লাউড হোস্টিং: " : "৬ মাস ফ্রি ক্লাউড হোস্টিং: "}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {is8000
                                                ? "প্যাকেজের সাথে প্রথম ১ বছর আন্তর্জাতিক .com ডোমেইন (১০০% মালিকানা আপনার), হাই-স্পিড ক্লাউড হোস্টিং ও SSL সার্টিফিকেট সম্পূর্ণ ফ্রি। পরবর্তীতে চাইলে আমাদের ক্লাউডে রিনিউ অথবা নিজস্ব হোস্টিংয়ে নিতে পারবেন।"
                                                : "প্যাকেজের সাথে প্রথম ৬ মাস হাই-স্পিড ক্লাউড হোস্টিং ও SSL সার্টিফিকেট সম্পূর্ণ ফ্রি। পরবর্তীতে চাইলে আমাদের ক্লাউডে রিনিউ অথবা নিজস্ব হোস্টিংয়ে নিতে পারবেন।"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-foreground text-sm">কনটেন্ট ও প্রোডাক্ট আপলোড: </span>
                                        <span className="text-xs text-muted-foreground">আমরা স্যাম্পল লেআউট, ক্যাটাগরি ও ব্যানার সাজিয়ে দেব; পরবর্তীতে আনলিমিটেড প্রোডাক্ট ও ব্লগ আপনি নিজেই খুব সহজে ড্যাশবোর্ড থেকে আপলোড করতে পারবেন।</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-foreground text-sm">ভিডিও টিউটোরিয়াল ও গাইডলাইন: </span>
                                        <span className="text-xs text-muted-foreground">প্রোডাক্ট আপলোড, কুরিয়ার বুকিং, POS রিসিট প্রিন্ট, পুশ নোটিফিকেশন ও পিক্সেল/CAPI সেটআপের জন্য ধাপে ধাপে ভিডিও টিউটোরিয়াল দেওয়া হবে।</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-foreground text-sm">লাইফটাইম টেকনিক্যাল সাপোর্ট: </span>
                                        <span className="text-xs text-muted-foreground">প্ল্যাটফর্মের নিয়মিত সিকিউরিটি আপডেট ও টেকনিক্যাল সাপোর্ট Jiapixel-এর ক্লাউড ইনফ্রাস্ট্রাকচারে হোস্ট করা প্রজেক্টের জন্য সর্বদা প্রযোজ্য থাকবে।</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 p-4 md:p-5 rounded-2xl bg-muted/40 border border-border/60 shadow-sm">
                                <div className="flex items-center gap-2 mb-3.5">
                                    <div className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 border border-primary/25">
                                        <AlertTriangle className="w-4 h-4" />
                                    </div>
                                    <h5 className="font-bold text-foreground text-xs md:text-sm uppercase tracking-wide">
                                        কেন নিজস্ব পার্সোনাল হোস্টিংয়ে ফ্রি লাইফটাইম সাপোর্ট প্রযোজ্য হবে না?
                                    </h5>
                                </div>
                                <div className="space-y-2.5 text-xs md:text-sm">
                                    <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                                        <span className="font-bold text-foreground">১. সার্ভার কনফিগারেশন ও কন্ট্রোল: </span>
                                        <span className="text-muted-foreground">
                                            আধুনিক <strong className="text-primary font-semibold">Next.js 16, React 19 ও MongoDB</strong> আর্কিটেকচারের জন্য বিশেষায়িত Node.js রানটাইম ও ক্যাশিং ইঞ্জিন প্রয়োজন — যা তৃতীয় পক্ষের সাধারণ শেয়ার্ড হোস্টিংয়ে থাকে না এবং এর ইন্টারনাল রুট সার্ভার এক্সেস আমাদের নিয়ন্ত্রণে থাকে না।
                                        </span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                                        <span className="font-bold text-foreground">২. সার্ভার ডাউন ও মেমোরি লিমিটেশন: </span>
                                        <span className="text-muted-foreground">
                                            থার্ড-পার্টি শেয়ার্ড হোস্টিংয়ে রিসোর্স লিমিট এক্সিড করে সার্ভার স্লো হওয়া বা ক্র্যাশ করা কোডের ত্রুটি নয় বরং হোস্টিং প্রোভাইডারের দুর্বলতা — যার দায় বাইরের কোনো সার্ভারে আমরা নিতে পারি না।
                                        </span>
                                    </div>
                                    <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                                        <span className="font-bold text-foreground">৩. অটোমেটেড সিকিউরিটি ও ক্রনজব মনিটরিং: </span>
                                        <span className="text-muted-foreground">
                                            আমাদের ক্লাউড সার্ভারে সার্বক্ষণিক <strong className="text-primary font-semibold">অটো-ব্যাকআপ, সিকিউরিটি প্যাচ ও কুরিয়ার লাইভ স্ট্যাটাস সিঙ্ক</strong> ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে মনিটর করা হয় — যা বাইরের হোস্টিংয়ে ট্র্যাক করা সম্ভব নয়।
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 1 */}
                    <AccordionItem
                        value="faq-1"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ১. ওয়েবসাইট তৈরি করতে কতদিন সময় লাগবে?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            আপনার প্রজেক্টের রিকোয়ারমেন্ট ও লোগো-তথ্য পাওয়ার পর সাধারণত <strong>৩ থেকে ৭ দিনের মধ্যেই</strong> আমরা সম্পূর্ণ ডিজাইন, কাস্টমাইজেশন ও ডেভেলপমেন্ট শেষে লাইভ ডেলিভারি দিয়ে থাকি।
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 2 */}
                    <AccordionItem
                        value="faq-2"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ২. কাজের আগে কি কোনো অগ্রিম পেমেন্ট করতে হবে?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            না, কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই। আগে আমাদের কাজ দেখবেন, লাইভ ওয়েবসাইট ও অ্যাডমিন ড্যাশবোর্ড চেক করে আপনার <strong>শতভাগ পছন্দ হলে তারপর পেমেন্ট</strong> সম্পন্ন করবেন।
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 3 */}
                    <AccordionItem
                        value="faq-3"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ৩. হোস্টিং কি একদম ফ্রি পাওয়া যাবে? আর ডোমেইন কীভাবে নেব?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            {is8000 ? (
                                <>হ্যাঁ! এই প্যাকেজে প্রথম <strong>১ বছরের জন্য আন্তর্জাতিক .com ডোমেইন (১০০% মালিকানা আপনার), হাই-স্পিড ক্লাউড হোস্টিং ও SSL সার্টিফিকেট সম্পূর্ণ ফ্রি</strong> অন্তর্ভুক্ত রয়েছে।</>
                            ) : (
                                <>হ্যাঁ, প্রথম <strong>৬ মাসের জন্য হাই-স্পিড ক্লাউড হোস্টিং ও SSL সার্টিফিকেট সম্পূর্ণ ফ্রি</strong>। আপনার নিজের ডোমেইন থাকলে সেটা আমরা ফ্রিতে কানেক্ট করে দেব, আর না থাকলে আপনার নামে নতুন যেকোনো ডোমেইন (যেমন: .com, .shop, .com.bd ইত্যাদি) রেজিস্টার করতে সম্পূর্ণ সহায়তা করব।</>
                            )}
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 4 */}
                    <AccordionItem
                        value="faq-4"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ৪. নতুন অর্ডার এলে কি মোবাইলে ইনস্ট্যান্ট নোটিফিকেশন পাওয়া যাবে?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            জ্বী! আমাদের সিস্টেমে <strong>মোবাইল ও ডেস্কটপ ওয়েব পুশ নোটিফিকেশন (VAPID)</strong> এবং <strong>PWA অ্যাপ</strong> সাপোর্ট রয়েছে। ব্রাউজার বন্ধ থাকলেও নতুন অর্ডার, রিটার্ন বা রিভিউ এলে সাথে সাথে আপনার ফোনে ও ল্যাপটপে পুশ নোটিফিকেশন চলে আসবে।
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 5 */}
                    <AccordionItem
                        value="faq-5"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ৫. ওয়েবসাইটে কি কোনো মাসিক সফটওয়্যার ফি বা হিডেন চার্জ আছে?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            একদমই না! কোনো মাসিক সফটওয়্যার সাবস্ক্রিপশন, অর্ডার কমিশন বা হিডেন চার্জ নেই। আপনি আনলিমিটেড প্রোডাক্ট আপলোড ও আনলিমিটেড অর্ডার প্রসেস করতে পারবেন সম্পূর্ণ বিনামূল্যে।
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 6 */}
                    <AccordionItem
                        value="faq-6"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ৬. আমি কি পাঠাও, রেডএক্স ও স্টিডফাস্টে এক ক্লিকে অর্ডার পাঠাতে পারব?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            হ্যাঁ! অ্যাডমিন ড্যাশবোর্ড থেকেই সরাসরি <strong>পাঠাও, রেডএক্স এবং স্টিডফাস্ট</strong> কুরিয়ারে সিঙ্গেল বা বাল্ক অর্ডার বুকিং, বারকোড স্টিকার লেবেল প্রিন্ট, ৮০মিমি থার্মাল POS রিসিট এবং ওয়ান-ক্লিক কুরিয়ার স্ট্যাটাস সিঙ্ক করতে পারবেন।
                        </AccordionContent>
                    </AccordionItem>

                    {/* FAQ 7 */}
                    <AccordionItem
                        value="faq-7"
                        className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20 group overflow-hidden"
                    >
                        <AccordionTrigger className="text-base md:text-lg font-bold py-5 hover:no-underline transition-all text-left">
                            <span className="group-hover:text-primary transition-colors">
                                ৭. ভবিষ্যতে কোনো টেকনিক্যাল সমস্যা হলে কি সাপোর্ট পাওয়া যাবে?
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 text-left border-t border-border/10 pt-4">
                            নিশ্চয়ই! আমাদের ডেডিকেটেড সাপোর্ট টিম যেকোনো কারিগরি সমস্যায় আপনাকে সাহায্য করতে সর্বদা প্রস্তুত। পাশাপাশি ওয়েবসাইট পরিচালনার প্রতিটি ধাপের জন্য সহজ বাংলা ভিডিও গাইডলাইনও দেওয়া হবে।
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};
