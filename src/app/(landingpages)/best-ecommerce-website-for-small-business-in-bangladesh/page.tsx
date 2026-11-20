import { Metadata } from "next";
import dynamic from "next/dynamic";

import { preload } from "react-dom";

// Local components
import { Hero } from "../components/ecommerce-promo/Hero";
import { DemoBanner } from "../components/ecommerce-promo/DemoBanner";

// Dynamic components (Lazy Loaded)
const Features = dynamic(() => import("../components/ecommerce-promo/Features").then(mod => mod.Features));
const FAQs = dynamic(() => import("../components/ecommerce-promo/FAQs").then(mod => mod.FAQs));
const FloatingCTAs = dynamic(() => import("@/components/landing/FloatingCTAs").then(mod => mod.FloatingCTAs));

export const metadata: Metadata = {
    title: "ব্যবসার জন্য প্রিমিয়াম ই-কমার্স ওয়েবসাইট | ১০০টি ফিচার + ফ্রি .com ডোমেইন ও হোস্টিং মাত্র ৮,৯৯৯ টাকা",
    description: "আপনার ব্যবসার জন্য পান ১০০টি অ্যাডভান্সড ফিচারসহ সুপার-ফাস্ট ও রেসপনসিভ ই-কমার্স ওয়েবসাইট। সাথে থাকছে ১ বছরের ফ্রি .com ডোমেইন ও Unlimited Cloud হোস্টিং, মোবাইল-ডেস্কটপ পুশ নোটিফিকেশন, POS থার্মাল রিসিট, পাঠাও-রেডএক্স-স্টিডফাস্ট কুরিয়ার, ফেসবুক ও টিকটক CAPI এবং পেমেন্ট গেটওয়ে। কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই।",
    keywords: ["best ecommerce website bangladesh", "small business website", "ecommerce website with free domain hosting bangladesh", "web design bangladesh", "jiapixel ecommerce", "ই-কমার্স ওয়েবসাইট বাংলাদেশ"],
    openGraph: {
        title: "ব্যবসার জন্য প্রিমিয়াম ই-কমার্স ওয়েবসাইট | ১০০টি ফিচার + ফ্রি ডোমেইন ও হোস্টিং",
        description: "মাত্র ৮,৯৯৯ টাকায় ১০০টি ফিচার ও ১ বছরের ফ্রি .com ডোমেইন-হোস্টিংসহ আপনার অনলাইন স্টোর শুরু করুন। কোনো অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন।",
        images: [{ url: "/images/landing-pages/ecommerce-promo/rumasworld/hero.png" }],
    }
};

const BestEcommerceLandingPage = () => {
    // Preload the first banner image
    preload('/images/landing-pages/ecommerce-promo/rumasworld/banner-5.webp', { as: 'image' });

    return (
        <div className="min-h-screen w-full relative">
            {/* Content Layer */}
            <div className="relative z-10">
                <Hero
                    price={8999}
                    priceBadge="মাত্র ৮,৯৯৯ টাকায় (ফ্রি ডোমেইন ও হোস্টিং)"
                    source="best-ecommerce-website-for-small-business-in-bangladesh"
                    includeFreeDomainAndYearHosting={true}
                />
                <DemoBanner />
                <Features hostingVariant="1year-domain" />
                <FAQs variant="8000" />
            </div>

            <FloatingCTAs
                source="best-ecommerce-website-for-small-business-in-bangladesh"
                price={8999}
            />
        </div>
    );
};

export default BestEcommerceLandingPage;
