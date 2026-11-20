"use client";

import React, { useState, useMemo } from "react";
import {
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Sparkles,
    Search,
    Layers,
    Smartphone,
    Zap,
    BarChart3,
    UserPlus,
    Activity,
} from "lucide-react";
import { StackingHighlights, type Highlight } from "@/components/landing/StackingHighlights";

interface FeatureItem {
    id: number;
    title: string;
    desc: string;
}

interface FeatureCategory {
    icon: string;
    label: string;
    shortLabel: string;
    features: FeatureItem[];
}

const categories: FeatureCategory[] = [
    {
        icon: "🚀",
        label: "কোর টেকনোলজি ও সুপার-ফাস্ট পারফরম্যান্স (Core Technology & Performance)",
        shortLabel: "কোর টেকনোলজি",
        features: [
            {
                id: 1,
                title: "Next.js 16 (App Router) ও React 19 আর্কিটেকচার",
                desc: "সর্বাধুনিক Next.js অ্যাপ রাউটার ও React 19 টেকনোলজি স্ট্যাক যা আধুনিক ওয়েব অ্যাপের সর্বোচ্চ গতি ও নিরাপত্তা নিশ্চিত করে।",
            },
            {
                id: 2,
                title: "৬ মাসের ফ্রি হাই-পারফরম্যান্স ক্লাউড হোস্টিং",
                desc: "সার্ভার খরচ নিয়ে চিন্তা করতে হবে না — আপনার স্টোরের জন্য প্রথম ৬ মাস হাই-স্পিড ক্লাউড হোস্টিং সম্পূর্ণ ফ্রি।",
            },
            {
                id: 3,
                title: "সিকিউর MongoDB Atlas ক্লাউড ডাটাবেস",
                desc: "দ্রুত ও নিরাপদ ক্লাউড নো-এসকিউএল ডাটাবেস যা বিপুল পরিমাণ প্রোডাক্ট, কাস্টমার ও অর্ডার ডাটা সহজে হ্যান্ডেল করে।",
            },
            {
                id: 5,
                title: "SSR, ISR ও CSR হাইব্রিড রেন্ডারিং",
                desc: "সার্ভার-সাইড রেন্ডারিং, ব্যাকগ্রাউন্ড অটো রিভ্যালিডেশন (ISR) ও স্মুথ ক্লায়েন্ট ইন্টার‍্যাকশনের নিখুঁত সমন্বয়।",
            },
            {
                id: 6,
                title: "PWA (প্রোগ্রেসিভ ওয়েব অ্যাপ ও অফলাইন সাপোর্ট)",
                desc: "কোনো প্লে-স্টোর বা অ্যাপ স্টোর ছাড়াই কাস্টমাররা সরাসরি ব্রাউজার থেকে মোবাইল ও ডেস্কটপে অ্যাপের মতো ইনস্টল করতে পারবেন।",
            },
            {
                id: 7,
                title: "Google Core Web Vitals অপ্টিমাইজেশন",
                desc: "গুগলের LCP, CLS ও স্পিড মেট্রিক্সে ৯০+ পারফরম্যান্স স্কোর বজায় রাখতে অপ্টিমাইজড কোডবেস।",
            },
            {
                id: 8,
                title: "সম্পূর্ণ রেসপনসিভ ফ্লুইড ডিজাইন",
                desc: "স্মার্টফোন, ট্যাবলেট, ল্যাপটপ ও বড় ডেস্কটপ — প্রতিটি স্ক্রিনে পিক্সেল-পারফেক্ট লেআউট।",
            },
            {
                id: 9,
                title: "ফ্রি অটোমেটেড SSL সার্টিফিকেট (HTTPS)",
                desc: "কাস্টমার ডাটা ও চেকআউট সম্পূর্ণ এনক্রিপ্টেড ও নিরাপদ রাখতে অটো-রিনিউয়াল SSL সার্টিফিকেট।",
            },
            {
                id: 10,
                title: "অ্যাডভান্সড HTTP সিকিউরিটি ও ডাটা স্যানিটাইজেশন",
                desc: "XSS, Injection ও CSRF আক্রমণ প্রতিরোধে আধুনিক সিকিউরিটি হার্ডেনিং ও ডাটা প্রটেকশন।",
            },
        ],
    },
    {
        icon: "🔔",
        label: "রিয়েল-টাইম পুশ নোটিফিকেশন ও ইনস্ট্যান্ট এলার্ট (Push Notifications & Alerts)",
        shortLabel: "পুশ নোটিফিকেশন",
        features: [
            {
                id: 12,
                title: "মোবাইল ও ডেস্কটপ ওয়েব পুশ নোটিফিকেশন (Web Push / VAPID)",
                desc: "ব্রাউজার বা ওয়েবসাইট বন্ধ থাকলেও নতুন অর্ডার, রিটার্ন বা রিভিউ আসা মাত্রই অ্যাডমিনের মোবাইল ও পিসিতে রিয়েল-টাইম পুশ নোটিফিকেশন!",
            },
            {
                id: 13,
                title: "সেন্ট্রাল অ্যাডমিন নোটিফিকেশন সেন্টার",
                desc: "নতুন অর্ডার, লো-স্টক, রিটার্ন রিকোয়েস্ট ও কাস্টমার রিভিউ — সব এলার্ট এক জায়গায় ফিল্টার, রিড/আনরিড ও ম্যানেজ করার ড্যাশবোর্ড।",
            },
            {
                id: 14,
                title: "ওয়ান-ক্লিক পুশ এলার্ট অ্যাক্টিভেশন ও টেস্ট নোটিফিকেশন",
                desc: "অ্যাডমিন প্যানেল থেকেই এক ক্লিকে মোবাইল ও ডেস্কটপ পুশ এলার্ট চালু/বন্ধ (Enable/Disable) করা এবং ইনস্ট্যান্ট 'Send Test Alert' বাটন দিয়ে পরীক্ষা করার সুবিধা।",
            },
        ],
    },
    {
        icon: "🎨",
        label: "স্টোর ব্র্যান্ডিং, ব্যানার ও ইন্টারফেস কন্ট্রোল (Branding & Storefront Controls)",
        shortLabel: "ব্র্যান্ডিং ও ব্যানার",
        features: [
            {
                id: 21,
                title: "ডায়নামিক হিরো ব্যানার ও স্লাইডার ম্যানেজমেন্ট",
                desc: "অ্যাডমিন প্যানেল থেকে মোবাইল ও ডেস্কটপের জন্য আলাদা প্রমোশনাল ব্যানার ও স্লাইডার আপলোড ও শিডিউল।",
            },
            {
                id: 25,
                title: "ডায়নামিক লোগো ও ফেভিকন আপলোডার",
                desc: "ডেভেলপার ছাড়াই সরাসরি অ্যাডমিন প্যানেল থেকে ওয়েবসাইটের লোগো ও ফেভিকন পরিবর্তন।",
            },
            {
                id: 26,
                title: "মোবাইল অ্যাপ-লাইক বটম নেভিগেশন বার",
                desc: "মোবাইল ভিজিটরদের দ্রুত ব্রাউজিংয়ের জন্য নিচে ফিক্সড অ্যাপ-স্টাইল নেভিগেশন বার (Home, Shop, Cart, Account)।",
            },
            {
                id: 27,
                title: "ডার্ক ও লাইট থিম মোড (Day & Night Mode)",
                desc: "কাস্টমারের চোখের আরাম ও আধুনিক লুকের জন্য ডার্ক এবং লাইট থিম সুইচ করার সুবিধা।",
            },
            {
                id: 28,
                title: "বাংলা ও ইংরেজি ডুয়াল ল্যাঙ্গুয়েজ সাপোর্ট",
                desc: "অ্যাডমিন ড্যাশবোর্ড ও ইন্টারফেসে সহজে বাংলা ও ইংরেজি ভাষা সুইচ করার সুবিধা।",
            },
        ],
    },
    {
        icon: "📦",
        label: "কুরিয়ার অটোমেশন, শিপিং ও অর্ডার ম্যানেজমেন্ট (Courier & Order Fulfillment)",
        shortLabel: "কুরিয়ার ও অর্ডার",
        features: [
            {
                id: 29,
                title: "আনলিমিটেড অর্ডার প্রসেসিং ও ম্যানেজমেন্ট",
                desc: "প্রতি মাসে যত খুশি অর্ডার প্রসেস, ফিল্টার, সার্চ ও স্ট্যাটাস ম্যানেজ করুন — কোনো অর্ডার লিমিট বা কমিশন নেই।",
            },
            {
                id: 30,
                title: "পাঠাও কুরিয়ার API অটোমেশন (Pathao Courier)",
                desc: "অ্যাডমিন প্যানেল থেকেই স্টোর, সিটি, জোন ও এরিয়া সিলেক্ট করে এক ক্লিকে পাঠাও কুরিয়ারে পার্সেল বুকিং।",
            },
            {
                id: 31,
                title: "স্টিডফাস্ট কুরিয়ার API অটোমেশন (Steadfast Courier)",
                desc: "ওয়ান-ক্লিকে স্টিডফাস্ট কুরিয়ারে কনসাইনমেন্ট বুকিং এবং স্বয়ংক্রিয় ট্র্যাকিং কোড জেনারেশন।",
            },
            {
                id: 32,
                title: "রেডএক্স কুরিয়ার API অটোমেশন (RedX Courier)",
                desc: "পিকআপ স্টোর ও ডেলিভারি এরিয়া সিলেক্ট করে এক ক্লিকে রেডএক্স কুরিয়ারে পার্সেল এন্ট্রি ও বুকিং।",
            },
            {
                id: 33,
                title: "বাল্ক কুরিয়ার ডিসপ্যাচ (Bulk Dispatch)",
                desc: "একসাথে একাধিক অর্ডার সিলেক্ট করে মাত্র এক ক্লিকে পাঠাও, রেডএক্স বা স্টিডফাস্টে বাল্ক বুকিং।",
            },
            {
                id: 34,
                title: "অটোমেটিক কুরিয়ার স্ট্যাটাস সিঙ্ক (Sync + Cronjob)",
                desc: "ওয়ান-ক্লিক Sync Courier বাটন ও ব্যাকগ্রাউন্ড ক্রনজব দিয়ে কুরিয়ারের ডেলিভারি স্ট্যাটাস স্বয়ংক্রিয় আপডেট।",
            },
            {
                id: 35,
                title: "লাইভ অর্ডার ও কুরিয়ার পার্সেল ট্র্যাকিং",
                desc: "কাস্টমাররা অর্ডার আইডি দিয়ে সরাসরি ওয়েবসাইট থেকেই স্টেপ-বাই-স্টেপ প্রগ্রেস বারসহ পার্সেলের অবস্থান দেখতে পারবেন।",
            },
            {
                id: 36,
                title: "রিটার্ন ও রিফান্ড ম্যানেজমেন্ট সিস্টেম",
                desc: "কাস্টমারের রিটার্ন রিকোয়েস্ট, রিজন ট্র্যাকিং, অনুমোদন এবং স্টক রিস্টোর ম্যানেজমেন্ট।",
            },
            {
                id: 37,
                title: "এরিয়াভিত্তিক ডায়নামিক ডেলিভারি চার্জ",
                desc: "ঢাকা সিটি, সাব-ঢাকা এবং ঢাকার বাইরে কাস্টম এরিয়া অনুযায়ী স্বয়ংক্রিয় ডেলিভারি চার্জ ক্যালকুলেশন।",
            },
            {
                id: 38,
                title: "ফ্রি ডেলিভারি থ্রেশহোল্ড ইঞ্জিন",
                desc: "নির্দিষ্ট টাকার বেশি অর্ডার করলে গ্রাহকদের জন্য স্বয়ংক্রিয়ভাবে ফ্রি হোম ডেলিভারি চালু হওয়া।",
            },
            {
                id: 39,
                title: "পয়েন্ট-অফ-সেল (POS) ও কাউন্টার বিলিং সিস্টেম",
                desc: "ফোন কল, হোয়াটসঅ্যাপ বা শোরুমের অফলাইন বিক্রয়ের জন্য দ্রুত বিল তৈরি, ডিসকাউন্ট ও ক্যাশ/MFS/ব্যাংক পেমেন্ট এন্ট্রি।",
            },
            {
                id: 391,
                title: "পাবলিক অনলাইন বিল ও ইনভয়েস শেয়ারিং লিংক",
                desc: "প্রতিটি অফলাইন/POS বিলের জন্য ইউনিক ওয়েব লিংক যা কাস্টমারকে হোয়াটসঅ্যাপে পাঠালে সরাসরি ইনভয়েস দেখতে ও প্রিন্ট করতে পারবে।",
            },
            {
                id: 392,
                title: "কাস্টমার বকেয়া (Due) ট্র্যাকিং ও আংশিক পেমেন্ট কালেকশন",
                desc: "প্রতিটি কাস্টমারের মোট বকেয়া (Total Due) হিসাব, নতুন বিলের সাথে পূর্বের বকেয়া যুক্ত করা ও আংশিক পেমেন্ট রিসিভ।",
            },
            {
                id: 40,
                title: "৮০মিমি (80mm) থার্মাল POS রিসিট প্রিন্টিং",
                desc: "বিল সেভ করার সাথে সাথেই ওয়ান-ক্লিকে ৮০মিমি থার্মাল পেপারে প্রফেশনাল ক্যাশ মেমো / POS রিসিট প্রিন্ট করার সুবিধা।",
            },
            {
                id: 41,
                title: "বারকোডসহ স্টিকার ইনভয়েস ও শিপিং লেবেল প্রিন্টিং",
                desc: "কুরিয়ার পার্সেলের গায়ে লাগানোর জন্য অটো-জেনারেটেড বারকোডসহ স্টিকার ইনভয়েস ও শিপিং লেবেল প্রিন্ট ফরম্যাট।",
            },
            {
                id: 42,
                title: "প্রফেশনাল PDF ইনভয়েস জেনারেশন",
                desc: "আপনার ব্র্যান্ডের লোগো ও বিস্তারিত বিবরণসহ ওয়ান-ক্লিকে প্রিন্ট ও ডাউনলোডযোগ্য প্রফেশনাল পিডিএফ ইনভয়েস।",
            },
            {
                id: 41,
                title: "ডেলিভারি চালান ও প্যাকিং স্লিপ প্রিন্টিং",
                desc: "ওয়্যারহাউস ও প্যাকিং টিমের জন্য আলাদা ডেলিভারি চালান ও প্যাকিং স্লিপ প্রিন্ট সুবিধা।",
            },
            {
                id: 42,
                title: "শর্ট প্রোডাক্ট ও লো-স্টক এলার্ট ড্যাশবোর্ড",
                desc: "যেকোনো পণ্যের স্টক কমে গেলে ফুরিয়ে যাওয়ার আগেই ড্যাশবোর্ডে তাৎক্ষণিক লো-স্টক সতর্কবার্তা।",
            },
            {
                id: 43,
                title: "কাস্টমার সাকসেস রেট (%) ফ্রড চেকিং ও ডুপ্লিকেট এলার্ট",
                desc: "অর্ডারের পাশে কাস্টমারের পূর্বের ডেলিভারি সাকসেস রেট (%) ও ডুপ্লিকেট অর্ডার এলার্ট দেখে ফেক অর্ডার প্রতিরোধ।",
            },
        ],
    },
    {
        icon: "💳",
        label: "পেমেন্ট গেটওয়ে ও স্মার্ট চেকআউট সিস্টেম (Payments & Smart Checkout)",
        shortLabel: "পেমেন্ট ও চেকআউট",
        features: [
            {
                id: 44,
                title: "SSLCommerz মাল্টি-চ্যানেল পেমেন্ট গেটওয়ে",
                desc: "ভিসা, মাস্টারকার্ড, অ্যামেক্স, ইন্টারনেট ব্যাংকিং এবং মোবাইল ব্যাংকিংয়ের সমন্বিত অটোমেটেড পেমেন্ট।",
            },
            {
                id: 46,
                title: "ডায়নামিক ম্যানুয়াল MFS পেমেন্ট (বিকাশ, নগদ, রকেট)",
                desc: "পার্সোনাল বা মার্চেন্ট নম্বর কনফিগারেশন, কাস্টমার পেমেন্ট গাইড ও TrxID ভেরিফিকেশন সিস্টেম।",
            },
            {
                id: 47,
                title: "ইন্টারঅপারেবল Bangla QR পেমেন্ট সাপোর্ট",
                desc: "যেকোনো ব্যাংকিং বা MFS অ্যাপ দিয়ে বাংলা কিউআর কোড স্ক্যান করে দ্রুত পেমেন্ট সুবিধা।",
            },
            {
                id: 48,
                title: "ক্যাশ অন ডেলিভারি (COD) চেকআউট",
                desc: "সারা বাংলাদেশে বিশ্বস্ত ক্যাশ অন ডেলিভারি এবং আংশিক অগ্রিম ডেলিভারি চার্জ পেমেন্ট অপশন।",
            },
            {
                id: 49,
                title: "ওয়ান-পেজ ফাস্ট গেস্ট চেকআউট (অপশনাল ইমেইল)",
                desc: "কোনো একাউন্ট বা বাধ্যতামূলক ইমেইল ছাড়াই শুধু নাম, ফোন নম্বর ও ঠিকানা দিয়ে কয়েক সেকেন্ডে অর্ডার সম্পন্ন।",
            },
            {
                id: 50,
                title: "স্মার্ট সিঙ্গেল-অ্যাড কার্ট ও ডুপ্লিকেট প্রটেকশন",
                desc: "একই পণ্য ভুলবশত বারবার কার্টে যোগ হওয়া আটকাতে ইন্টেলিজেন্ট ALREADY IN CART স্ট্যাটাস ও কার্ট ড্রয়ার কন্ট্রোল।",
            },
            {
                id: 51,
                title: "ইনকমপ্লিট ফর্ম ভ্যালিডেশন ও সিকিউর চেকআউট",
                desc: "সঠিক ফোন নম্বর ও ঠিকানা পূরণ না করা পর্যন্ত ভুল অর্ডার ঠেকাতে স্মার্ট ফর্ম ভ্যালিডেশন।",
            },
            {
                id: 52,
                title: "সেন্ট্রাল পেমেন্ট লেজার ও ট্রানজাকশন হিস্ট্রি",
                desc: "সকল অনলাইন, MFS এবং COD পেমেন্টের স্ট্যাটাস ও ট্রানজেকশন আইডি এক ড্যাশবোর্ডে ট্র্যাকিং।",
            },
        ],
    },
    {
        icon: "📈",
        label: "মার্কেটিং, সার্ভার-সাইড CAPI ট্র্যাকিং ও সেলস বুস্টার (Marketing & CRO)",
        shortLabel: "মার্কেটিং ও ট্র্যাকিং",
        features: [
            {
                id: 53,
                title: "সার্ভার-সাইড ফেসবুক কনভার্সন API (Facebook CAPI)",
                desc: "ব্রাউজার অ্যাড-ব্লকার ও iOS 14+ প্রাইভেসি আপডেট বাইপাস করে সার্ভার থেকে ১০০% নির্ভুল ডেটা মেটায় পাঠানো।",
            },
            {
                id: 54,
                title: "মেটা (ফেসবুক) পিক্সেল ফুল ইভেন্ট ট্র্যাকিং",
                desc: "PageView, ViewContent, AddToCart, InitiateCheckout ও Purchase ইভেন্ট অটো-ডিডুপ্লিকেশনসহ ট্র্যাকিং।",
            },
            {
                id: 55,
                title: "সার্ভার-সাইড টিকটক ইভেন্টস API (TikTok CAPI) ও পিক্সেল",
                desc: "টিকটক অ্যাডের জন্য _ttp ও ttclid ফরওয়ার্ডিংসহ সার্ভার-সাইড ইভেন্ট ট্র্যাকিং এবং ড্যাশবোর্ড থেকে ওয়ান-ক্লিক টেস্ট ইভেন্ট।",
            },
            {
                id: 56,
                title: "গুগল ট্যাগ ম্যানেজার (GTM) ও গুগল অ্যানালিটিক্স ৪ (GA4)",
                desc: "ভিজিটর ট্রাফিক সোর্স, রিয়েল-টাইম অ্যাক্টিভিটি, লোকেশন ও কনভার্সন ফানেলের গভীর বিশ্লেষণ।",
            },
            {
                id: 57,
                title: "হাই-কনভার্টিং সিঙ্গেল প্রোডাক্ট ল্যান্ডিং পেজ বিল্ডার",
                desc: "ফেসবুক/টিকটক অ্যাডের সেলস বহুগুণ বাড়াতে অ্যাডমিন প্যানেল থেকেই আলাদা ল্যান্ডিং পেজ (/lp/slug) তৈরির সুবিধা।",
            },
            {
                id: 58,
                title: "অ্যাডভান্সড CRO (কনভার্সন রেট অপ্টিমাইজেশন)",
                desc: "ভিজিটরকে কাস্টমারে রূপান্তর করতে দ্রুতগতির প্রোডাক্ট পেজ, ট্রাস্ট ব্যাজ ও ফাস্ট অর্ডার ফ্লো।",
            },
            {
                id: 59,
                title: "ডায়নামিক ডিসকাউন্ট কুপন ইঞ্জিন",
                desc: "ফিক্সড টাকা বা পার্সেন্টেজ (%) ডিসকাউন্ট, মেয়াদ ও সর্বোচ্চ ব্যবহারের লিমিটসহ প্রমো কোড সিস্টেম।",
            },
            {
                id: 60,
                title: "স্পেশাল অফার ও ফ্ল্যাশ সেল ক্যাম্পেইন",
                desc: "উৎসব বা সাপ্তাহিক ক্যাম্পেইনের জন্য টাইমার ও ডিসকাউন্টসহ আকর্ষণীয় অফার ম্যানেজমেন্ট।",
            },
            {
                id: 61,
                title: "এব্যান্ডনড কার্ট রিকভারি ও ট্র্যাকিং (Abandoned Carts)",
                desc: "চেকআউট পেজে এসেও অর্ডার সম্পূর্ণ না করা কাস্টমারদের ফোন নম্বর ও পণ্যের তালিকা দেখে ফলো-আপ করার সুবিধা।",
            },
            {
                id: 62,
                title: "কাস্টমার লয়্যালটি ও রিওয়ার্ডস প্রোগ্রাম",
                desc: "নিয়মিত গ্রাহকদের ধরে রাখতে লয়্যালটি পয়েন্ট ও স্পেশাল রিটার্নিং কাস্টমার অফার সিস্টেম।",
            },
            {
                id: 63,
                title: "নিউজলেটার ও সাবস্ক্রাইবার লিস্ট ম্যানেজমেন্ট",
                desc: "ক্রেতাদের ইমেইল সংগ্রহ করে ভবিষ্যৎ ক্যাম্পেইন ও নতুন পণ্যের আপডেট পাঠানোর ডাটাবেস।",
            },
            {
                id: 64,
                title: "ইউজার ও সাবস্ক্রাইবার ওয়ান-ক্লিক বাল্ক ইমেইল ও CSV এক্সপোর্ট",
                desc: "অ্যাডমিন প্যানেলের ইউজার ও সাবস্ক্রাইবার পেজ থেকে সরাসরি এক ক্লিকে সিঙ্গেল বা সবার কাছে (Send Email to All — BCC) প্রমোশনাল ইমেইল পাঠানো, ইমেইল কপি এবং CSV এক্সপোর্ট সুবিধা।",
            },
            {
                id: 64,
                title: "হোয়াটসঅ্যাপ ফ্লোটিং চ্যাট ও সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
                desc: "যেকোনো পেজ থেকে এক ক্লিকে হোয়াটসঅ্যাপে চ্যাট ও ফেসবুক/ইনস্টাগ্রাম/টিকটক/ইউটিউব চ্যানেল সংযোগ।",
            },
        ],
    },
    {
        icon: "📊",
        label: "ফাইন্যান্সিয়াল একাউন্টিং ও ৮টি বিজনেস রিপোর্ট (Accounting & 8 Reports)",
        shortLabel: "একাউন্টিং ও রিপোর্ট",
        features: [
            {
                id: 649,
                title: "ড্যাশবোর্ড লাইভ ওভারভিউ ও রিয়েল-টাইম KPI চার্ট",
                desc: "এক নজরে মোট সেলস, অর্ডার স্ট্যাটাস, ক্যাশ/ব্যাংক/MFS ব্যালেন্স, এক্সপেন্স ব্রেকডাউন ও লো-স্টক গ্রাফিক্যাল ওভারভিউ।",
            },
            {
                id: 65,
                title: "ডাবল-এন্ট্রি একাউন্টিং লেজার সিস্টেম",
                desc: "প্রতিটি আর্থিক লেনদেনের বিপরীতে স্বয়ংক্রিয় ডেবিট ও ক্রেডিট জার্নাল এন্ট্রি এবং ব্যালেন্স ট্র্যাকিং।",
            },
            {
                id: 66,
                title: "লাইভ একাউন্টস পেয়েবল (AP) ও রিসিভেবল (AR)",
                desc: "সাপ্লায়ারদের বকেয়া বিল এবং কুরিয়ার/ক্লায়েন্টদের কাছ থেকে পাওনা টাকার রিয়েল-টাইম হিসাব।",
            },
            {
                id: 67,
                title: "ক্যাশ, ব্যাংক ও মোবাইল ওয়ালেট (MFS) একাউন্টস লেজার",
                desc: "অফিসের নগদ টাকা, ব্যাংক একাউন্ট এবং বিকাশ/নগদ ওয়ালেটের আলাদা লাইভ ব্যালেন্স ম্যানেজমেন্ট।",
            },
            {
                id: 68,
                title: "সাপ্লায়ার ম্যানেজমেন্ট ও পারচেজ বিলিং",
                desc: "সরবরাহকারীদের তালিকা, পণ্য ক্রয়ের ইনভয়েস, আংশিক পেমেন্ট ও বকেয়া খতিয়ান সংরক্ষণ।",
            },
            {
                id: 69,
                title: "বিজনেস লোন ও কিস্তি ট্র্যাকিং",
                desc: "ব্যবসায়িক ঋণের হিসাব, কিস্তির শিডিউল ও পরিশোধিত টাকার পূর্ণাঙ্গ হিসাব।",
            },
            {
                id: 691,
                title: "লোন প্রোভাইডার ও আসন্ন কিস্তি এলার্ট ড্যাশবোর্ড",
                desc: "ঋণদাতা প্রতিষ্ঠান বা ব্যক্তিদের প্রোফাইল এবং আসন্ন কিস্তির তারিখ আলাদাভাবে ট্র্যাকিং।",
            },
            {
                id: 70,
                title: "কাস্টম ইনকাম ও এক্সপেন্স ক্যাটাগরি ম্যানেজমেন্ট",
                desc: "অফিস ভাড়া, স্টাফ বেতন, মার্কেটিং ও প্যাকেজিং খরচসহ সকল আয়-ব্যয়ের ক্যাটাগরিভিত্তিক হিসাব।",
            },
            {
                id: 71,
                title: "ডেইলি সেলস ও সামারি রিপোর্ট (Daily Report)",
                desc: "প্রতিদিনের মোট অর্ডার, সেলস, ডেলিভারি ও কালেকশনের বিস্তারিত দৈনিক রিপোর্ট।",
            },
            {
                id: 72,
                title: "মান্থলি সেলস ও গ্রোথ রিপোর্ট (Monthly Report)",
                desc: "মাসভিত্তিক আয়, ব্যয়, অর্ডার ভলিউম এবং ব্যবসায়িক গ্রোথের গ্রাফিক্যাল পরিসংখ্যান।",
            },
            {
                id: 73,
                title: "অর্ডারভিত্তিক প্রফিট ও লস রিপোর্ট (Order Profit Report)",
                desc: "প্রতিটি অর্ডারের ক্রয়মূল্য, ডেলিভারি চার্জ ও ডিসকাউন্ট বাদ দিয়ে নিট লাভ/ক্ষতির নিখুঁত হিসাব।",
            },
            {
                id: 74,
                title: "আইটেমভিত্তিক প্রফিট রিপোর্ট (Item Profit Report)",
                desc: "কোন প্রোডাক্ট থেকে কত টাকা নিট মুনাফা হচ্ছে তা আলাদাভাবে বিশ্লেষণের রিপোর্ট।",
            },
            {
                id: 75,
                title: "প্রোডাক্টভিত্তিক ও ব্র্যান্ডভিত্তিক সেলস রিপোর্ট",
                desc: "সর্বোচ্চ বিক্রীত পণ্য (Top Selling) ও ব্র্যান্ড অনুযায়ী বিক্রয়ের পূর্ণাঙ্গ পারফরম্যান্স রিপোর্ট।",
            },
            {
                id: 76,
                title: "পারচেজ ও এক্সপেন্স রিপোর্ট (Purchase & Expense Reports)",
                desc: "নির্দিষ্ট তারিখের মধ্যে মোট পণ্য ক্রয় এবং পরিচালন ব্যয়ের বিস্তারিত রিপোর্ট ও এক্সপোর্ট।",
            },
        ],
    },
    {
        icon: "🔍",
        label: "অ্যাডভান্সড টেকনিক্যাল ও এসইও আর্কিটেকচার (Technical SEO)",
        shortLabel: "টেকনিক্যাল এসইও",
        features: [
            {
                id: 77,
                title: "ডায়নামিক মেটা টাইটেল ও ডেসক্রিপশন",
                desc: "প্রতিটি প্রোডাক্ট, ক্যাটাগরি ও ব্লগের জন্য গুগল-ফ্রেন্ডলি স্বয়ংক্রিয় মেটা ট্যাগ জেনারেশন।",
            },
            {
                id: 78,
                title: "স্ট্রাকচার্ড ডাটা ও স্কিমা মার্কআপ (Schema.org JSON-LD)",
                desc: "গুগল সার্চ রেজাল্টে প্রোডাক্ট প্রাইস, স্টক ও স্টার রেটিং রিচ স্নিপেট হিসেবে দেখানোর সেটআপ।",
            },
            {
                id: 79,
                title: "অটোমেটিক ডায়নামিক XML সাইটম্যাপ ও Robots.txt",
                desc: "নতুন প্রোডাক্ট আপলোড করার সাথে সাথেই গুগলে দ্রুত ইন্ডেক্সিংয়ের জন্য ডায়নামিক সাইটম্যাপ।",
            },
            {
                id: 80,
                title: "ওপেন গ্রাফ (Open Graph) ও Twitter/X কার্ড সেটআপ",
                desc: "ফেসবুক, হোয়াটসঅ্যাপ ও মেসেঞ্জারে প্রোডাক্ট লিংক শেয়ার করলে আকর্ষণীয় ছবি, দাম ও টাইটেল প্রিভিউ।",
            },
            {
                id: 81,
                title: "ক্যানোনিকাল ইউআরএল (Canonical URL) হ্যান্ডলিং",
                desc: "ডুপ্লিকেট কন্টেন্টের এসইও পেনাল্টি এড়াতে প্রতিটি পেজে সঠিক ক্যানোনিকাল লিংক।",
            },
            {
                id: 82,
                title: "গুগল সার্চ কনসোল ও ওয়েবমাস্টার রেডি",
                desc: "গুগল সার্চ কনসোলে সহজেই সাইট ভেরিফাই করে অর্গানিক র‍্যাঙ্কিং ও কিওয়ার্ড ট্র্যাকিং।",
            },
        ],
    },
    {
        icon: "✨",
        label: "প্রিমিয়াম ইউজার এক্সপিরিয়েন্স ও ফ্রন্টএন্ড UI (UX & Frontend UI)",
        shortLabel: "UX ও ফ্রন্টএন্ড UI",
        features: [
            {
                id: 83,
                title: "এআই পাওয়ার্ড স্মার্ট চ্যাটবট অ্যাসিস্ট্যান্ট",
                desc: "আপনার অনুপস্থিতিতেও ২৪/৭ কাস্টমারদের প্রশ্নের উত্তর দেওয়া ও পণ্য খুঁজে দিতে ইন্টেলিজেন্ট এআই চ্যাটবট।",
            },
            {
                id: 84,
                title: "কুইক ভিউ ও কুইক অ্যাড মোডাল (Quick View / Quick Add)",
                desc: "পেজ রিলোড না করেই পপ-আপে প্রোডাক্টের ছবি, সাইজ/কালার ভ্যারিয়েন্ট সিলেক্ট করে সাথে সাথে কার্টে যোগ।",
            },
            {
                id: 85,
                title: "ভয়েস সার্চ ফাংশনালিটি (Voice Search)",
                desc: "কাস্টমাররা টাইপ না করে মুখে কথা বললেই সাথে সাথে পছন্দের পণ্য খুঁজে পাওয়ার আধুনিক সুবিধা।",
            },
            {
                id: 86,
                title: "ইনস্ট্যান্ট প্রাইস স্লাইডার ও মাল্টি-ফিল্টারিং",
                desc: "দাম, ক্যাটাগরি, ব্র্যান্ড, সাইজ ও কালার অনুযায়ী রিয়েল-টাইম প্রোডাক্ট ফিল্টারিং ও সর্টিং।",
            },
            {
                id: 87,
                title: "কাস্টমার উইশলিস্ট সিস্টেম (Wishlist)",
                desc: "পছন্দের পণ্যগুলো আলাদা করে সেভ করে রাখা এবং পরে এক ক্লিকে অর্ডার করার সুবিধা।",
            },
            {
                id: 88,
                title: "ভেরিফাইড কাস্টমার রিভিউ ও স্টার রেটিং",
                desc: "ক্রেতাদের মতামত, রেটিং ও অ্যাডমিন মডারেশন সিস্টেম যা আপনার ব্র্যান্ডের বিশ্বাসযোগ্যতা বাড়ায়।",
            },
            {
                id: 89,
                title: "স্প্ল্যাশ স্ক্রিন, স্মুথ স্ক্রলিং ও স্কেলিটন লোডার",
                desc: "ইন্টারনেট ধীর হলেও খালি পেজের বদলে প্রিমিয়াম স্কেলিটন লোডার ও স্মুথ স্ক্রলিং অভিজ্ঞতা।",
            },
            {
                id: 90,
                title: "প্রিমিয়াম মাইক্রো-অ্যানিমেশন ও ইন্টার‍্যাকশন",
                desc: "আধুনিক অ্যাপের অনুভূতি দিতে দৃষ্টিনন্দন হোভার এফেক্ট, কার্ট অ্যানিমেশন ও বাটন ট্রানজিশন।",
            },
            {
                id: 91,
                title: "গুগল ম্যাপ ও শোরুম লোকেশন ইন্টিগ্রেশন",
                desc: "কাস্টমাররা যেন সহজেই আপনার অফিস বা শোরুমের লোকেশন খুঁজে পায় সেজন্য লাইভ গুগল ম্যাপ।",
            },
            {
                id: 92,
                title: "মডার্ন Sonner টোস্ট ও SweetAlert2 এলার্ট",
                desc: "কার্ট আপডেট, অর্ডার কনফার্মেশন ও অ্যাডমিন অ্যাকশনের জন্য বিশ্বমানের ভিজ্যুয়াল নোটিফিকেশন।",
            },
        ],
    },
    {
        icon: "🛠️",
        label: "ইনভেন্টরি, CMS, সিকিউরিটি ও সাপোর্ট (Inventory, CMS & Administration)",
        shortLabel: "ইনভেন্টরি ও CMS",
        features: [
            {
                id: 93,
                title: "আনলিমিটেড প্রোডাক্ট, ক্যাটাগরি ও ব্র্যান্ড ম্যানেজমেন্ট",
                desc: "স্টোরে যত খুশি পণ্য, সাব-ক্যাটাগরি ও ব্র্যান্ড যোগ করার পূর্ণ স্বাধীনতা — কোনো লিমিটেশন নেই।",
            },
            {
                id: 94,
                title: "মাল্টি-অ্যাট্রিবিউট ভ্যারিয়েন্ট ও SKU স্টক কন্ট্রোল",
                desc: "সাইজ, কালার ও স্পেসিফিকেশন অনুযায়ী আলাদা স্টক, প্রাইসিং ও ইউনিক SKU ম্যানেজমেন্ট।",
            },
            {
                id: 95,
                title: "প্রোডাক্ট ব্যাচ ও এক্সপায়ারি ডেট ট্র্যাকিং",
                desc: "মেয়াদোত্তীর্ণ হওয়ার আগেই পণ্যের ব্যাচ ও এক্সপায়ারি ডেট ড্যাশবোর্ডে আগাম সতর্কতা হিসেবে দেখানো।",
            },
            {
                id: 96,
                title: "টিপট্যাপ (Tiptap) অ্যাডভান্সড রিচ-টেক্সট এডিটর",
                desc: "প্রোডাক্ট ডেসক্রিপশন, ব্লগ ও পলিসি পেজ প্রফেশনালি ফরম্যাট করার জন্য শক্তিশালী এডিটর।",
            },
            {
                id: 97,
                title: "ব্লগ ও আর্টিকেল পাবলিশিং CMS",
                desc: "অর্গানিক গুগল ট্রাফিক ও ব্র্যান্ড অথরিটি বাড়াতে অ্যাডমিন প্যানেল থেকে নিয়মিত ব্লগ প্রকাশের সুবিধা।",
            },
            {
                id: 98,
                title: "ডায়নামিক FAQ ও কাস্টমার টেস্টিমোনিয়াল CMS",
                desc: "সাধারণ প্রশ্নোত্তর ও কাস্টমারদের প্রশংসাপত্র ড্যাশবোর্ড থেকে সহজেই যুক্ত ও এডিট করার সুবিধা।",
            },
            {
                id: 99,
                title: "রোল-বেসড এক্সেস কন্ট্রোল (Admin, Manager, Customer)",
                desc: "অ্যাডমিন ও কাস্টমারদের জন্য আলাদা নিরাপদ ড্যাশবোর্ড এবং শুধুমাত্র ইমেইল দিয়ে নতুন অ্যাডমিন অ্যাসাইন।",
            },
            {
                id: 991,
                title: "সিস্টেম ইউজার ও স্টাফ ম্যানেজমেন্ট",
                desc: "টিমের সদস্য, ম্যানেজার ও অ্যাডমিন অ্যাকাউন্ট তৈরি ও পরিচালনা করার আলাদা প্যানেল।",
            },
            {
                id: 100,
                title: "সিকিউর ইমেইল ও পাসওয়ার্ড অথেনটিকেশন",
                desc: "কাস্টমার ও অ্যাডমিনদের জন্য নিরাপদ ইমেইল-পাসওয়ার্ড রেজিস্ট্রেশন, লগইন এবং ফরগট/রিসেট পাসওয়ার্ড ফ্লো।",
            },
            {
                id: 101,
                title: "কাস্টমার পার্সোনাল ড্যাশবোর্ড ও অর্ডার হিস্ট্রি",
                desc: "কাস্টমারদের সকল পূর্বের অর্ডার, ইনভয়েস, উইশলিস্ট ও প্রোফাইল ম্যানেজ করার নিজস্ব পোর্টাল।",
            },
            {
                id: 102,
                title: "এক্সেল/CSV প্রোডাক্ট ও ডাটা এক্সপোর্ট",
                desc: "এক্সেল বা CSV ফাইল ফরম্যাটে স্টোরের প্রোডাক্ট, ইউজার ও সাবস্ক্রাইবার ডাটা এক ক্লিকে এক্সপোর্ট ও ব্যাকআপ নেওয়ার সুবিধা।",
            },
            {
                id: 104,
                title: "কোনো অগ্রিম পেমেন্ট নয় — পছন্দ হলে তারপর পেমেন্ট",
                desc: "সম্পূর্ণ ঝুঁকিমুক্ত অর্ডার প্রক্রিয়া: ওয়েবসাইট লাইভ দেখে শতভাগ সন্তুষ্ট হওয়ার পর পেমেন্ট সম্পন্ন করুন।",
            },
            {
                id: 105,
                title: "লাইফটাইম টেকনিক্যাল সাপোর্ট ও গাইডলাইন",
                desc: "সাইট লঞ্চের পর যেকোনো কারিগরি সহায়তা ও সমস্যা সমাধানে আমাদের ডেডিকেটেড টিমের সার্বক্ষণিক সাপোর্ট।",
            },
        ],
    },
];

interface FeaturesProps {
    hostingVariant?: "6months" | "1year-domain";
}

export const Features = ({ hostingVariant = "6months" }: FeaturesProps) => {
    // Default: Core Tech + Push Notifications open so key upgrades stand out immediately
    const [openCategories, setOpenCategories] = useState<number[]>([0, 1]);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleCategory = (index: number) => {
        setOpenCategories((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const expandAll = () => {
        setOpenCategories(categories.map((_, i) => i));
    };

    const collapseAll = () => {
        setOpenCategories([]);
    };

    const numberedCategories = useMemo(() => {
        let seq = 1;
        return categories.map((cat) => ({
            ...cat,
            features: cat.features.map((f) => {
                const id = seq++;
                if (hostingVariant === "1year-domain" && id === 2) {
                    return {
                        id,
                        title: "১ বছরের ফ্রি .com ডোমেইন ও হাই-পারফরম্যান্স ক্লাউড হোস্টিং",
                        desc: "ডোমেইন ও সার্ভার খরচ নিয়ে চিন্তা করতে হবে না — আপনার স্টোরের জন্য প্রথম ১ বছর আন্তর্জাতিক .com ডোমেইন ও হাই-স্পিড ক্লাউড হোস্টিং সম্পূর্ণ ফ্রি।",
                    };
                }
                return { ...f, id };
            }),
        }));
    }, [hostingVariant]);

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return numberedCategories;
        const q = searchQuery.toLowerCase().trim();
        return numberedCategories
            .map((cat) => {
                const matchedFeatures = cat.features.filter(
                    (f) =>
                        f.title.toLowerCase().includes(q) ||
                        f.desc.toLowerCase().includes(q) ||
                        String(f.id).includes(q)
                );
                return {
                    ...cat,
                    features: matchedFeatures,
                };
            })
            .filter((cat) => cat.features.length > 0);
    }, [searchQuery, numberedCategories]);

    const isSearching = searchQuery.trim().length > 0;
    const totalFeatures = useMemo(
        () => categories.reduce((sum, cat) => sum + cat.features.length, 0),
        []
    );

    const highlightData: Highlight[] = [
        {
            id: "courier",
            header: "Live Tracking",
            title: "Courier & Delivery Automation",
            description: "অটোমেটিক অর্ডার পাঠান পাঠাও, রেডাক্স অথবা স্টিডফাস্টে। এক ক্লিকে বাল্ক ডিসপ্যাচ, শিপিং লেবেল প্রিন্ট করুন এবং ড্যাশবোর্ড থেকেই পার্সেল ট্র্যাক করুন।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/courier.png",
            icon: <CheckCircle2 className="w-4 h-4" />,
            bullets: [
                "এক ক্লিকে পাঠাও, রেডএক্স ও স্টিডফাস্ট বুকিং",
                "বাল্ক ডিসপ্যাচ ও অটো স্ট্যাটাস সিঙ্ক",
                "কাস্টমারদের জন্য রিয়েল-টাইম পার্সেল ট্র্যাকিং",
            ],
            headerBgCls: "bg-green-500/10",
            headerTextCls: "text-green-500 border-green-500/20",
            imageBgColor: "bg-accent/20",
            reverse: false,
        },
        {
            id: "dashboard",
            header: "Control Your Business",
            title: "Advanced Admin Dashboard & Push Alerts",
            description: "স্প্রেডশিটের ঝামেলা ভুলে যান। আমাদের ড্যাশবোর্ডে পাচ্ছেন মোবাইল ও ডেস্কটপ পুশ নোটিফিকেশন, লো-স্টক ওয়ার্নিং, ডাবল-এন্ট্রি একাউন্টিং ও ৮টি বিজনেস রিপোর্ট।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/dashboard.png",
            icon: <Activity className="w-4 h-4" />,
            bullets: [
                "মোবাইল ও ডেস্কটপ রিয়েল-টাইম ওয়েব পুশ নোটিফিকেশন",
                "সেন্ট্রাল নোটিফিকেশন সেন্টার ও লো-স্টক ওয়ার্নিং",
                "ডাবল-এন্ট্রি একাউন্টিং ও ৮টি প্রফিট-সেলস রিপোর্ট",
            ],
            headerBgCls: "bg-orange-500/10",
            headerTextCls: "text-orange-500 border-orange-500/20",
            imageBgColor: "bg-orange-500/5",
            reverse: true,
        },
        {
            id: "ai",
            header: "24/7 Smart Support",
            title: "AI Powered Chatbot Assistant",
            description: "আপনার অনুপস্থিতিতেও কাস্টমারদের সকল প্রশ্নের উত্তর দিতে এবং অর্ডার গাইড করতে আমাদের রয়েছে ইন্টেলিজেন্ট এআই চ্যাটবট সুবিধা।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/ai.png",
            icon: <Sparkles className="w-4 h-4" />,
            bullets: [
                "২৪/৭ ইনস্ট্যান্ট রিপ্লাই সুবিধা",
                "অটোমেটেড কাস্টমার এনগেজমেন্ট",
                "প্রোডাক্ট গাইডেন্স এবং সাপোর্ট",
            ],
            headerBgCls: "bg-primary/10",
            headerTextCls: "text-primary border-primary/20",
            imageBgColor: "bg-primary/5",
            reverse: false,
        },
        {
            id: "pwa",
            header: "App-like Experience",
            title: "PWA & Offline Shopping",
            description: "কোনো অ্যাপ স্টোর ছাড়াই আপনার ওয়েবসাইট সরাসরি মোবাইল বা ডেস্কটপে অ্যাপের মত ইন্সটল করুন। ইন্টারনেট ছাড়াও সাইট ব্রাউজ করার সুবিধা ও পুশ এলার্ট।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/pwa.png",
            icon: <Smartphone className="w-4 h-4" />,
            bullets: [
                "এক ক্লিকে মোবাইল ও ডেস্কটপ অ্যাপ ইন্সটলেশন",
                "অফলাইন ব্রাউজিং এবং স্মার্ট স্কেলিটন লোডিং",
                "সুপার ফাস্ট মোবাইল অ্যাপ-লাইক ইউআই",
            ],
            headerBgCls: "bg-blue-500/10",
            headerTextCls: "text-blue-500 border-blue-500/20",
            imageBgColor: "bg-blue-500/5",
            reverse: true,
        },
        {
            id: "cms",
            header: "Easy Content Management",
            title: "Advanced Blog & Content Editor",
            description: "ব্লগ, ল্যান্ডিং পেজ বা প্রোডাক্ট ডেসক্রিপশন লিখুন একদম প্রফেশনালি। টিপট্যাপ (Tiptap) ভিত্তিক রিচ-টেক্সট এডিটরের মাধ্যমে সাজান আপনার মনের মত করে।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/cms.png",
            icon: <Zap className="w-4 h-4" />,
            bullets: [
                "টিপট্যাপ ভিত্তিক শক্তিশালী রিচ-টেক্সট এডিটর",
                "হাই-কনভার্টিং সিঙ্গেল প্রোডাক্ট ল্যান্ডিং পেজ বিল্ডার",
                "সরাসরি ড্যাশবোর্ড থেকে এসইও ও ব্যানার কন্ট্রোল",
            ],
            headerBgCls: "bg-orange-500/10",
            headerTextCls: "text-orange-500 border-orange-500/20",
            imageBgColor: "bg-accent/20",
            reverse: false,
        },
        {
            id: "analytics",
            header: "Real-time Business Insights",
            title: "Server-Side CAPI & Advanced Analytics",
            description: "ফেসবুক CAPI, টিকটক সার্ভার-সাইড CAPI, GTM ও GA4-এর মাধ্যমে ১০০% নির্ভুল এড ট্র্যাকিং এবং রিয়েল-টাইম সেলস ও প্রফিট অ্যানালিটিক্স।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/analytics.png",
            icon: <BarChart3 className="w-4 h-4" />,
            bullets: [
                "Facebook CAPI + TikTok CAPI সার্ভার-সাইড ট্র্যাকিং",
                "৮টি বিস্তারিত ফাইন্যান্সিয়াল ও প্রফিট রিপোর্ট",
                "এব্যান্ডনড কার্ট রিকভারি ও কাস্টমার ইনসাইটস",
            ],
            headerBgCls: "bg-purple-500/10",
            headerTextCls: "text-purple-500 border-purple-500/20",
            imageBgColor: "bg-purple-500/5",
            reverse: true,
        },
        {
            id: "loyalty",
            header: "Customer Relationship Booster",
            title: "Loyalty System & Dynamic Management",
            description: "কাস্টমারদের আটকে রাখুন লয়্যালটি পয়েন্ট এবং ডায়নামিক কুপনের মাধ্যমে। সাথে থাকছে অটোমেটেড ইনভেন্টরি এলার্ট এবং স্মার্ট ডেলিভারি ম্যানেজমেন্ট।",
            image: "/images/landing-pages/ecommerce-promo/rumasworld/loyalty.png",
            icon: <UserPlus className="w-4 h-4" />,
            bullets: [
                "কাস্টমার লয়্যালটি ও রিওয়ার্ডস প্রোগ্রাম",
                "ডায়নামিক কুপন এবং এরিয়াভিত্তিক ডেলিভারি চার্জ",
                "লো-স্টক এলার্ট, এক্সপায়ারি ট্র্যাকিং ও লাইভ সাপোর্ট",
            ],
            headerBgCls: "bg-pink-500/10",
            headerTextCls: "text-pink-500 border-pink-500/20",
            imageBgColor: "bg-pink-500/5",
            reverse: false,
        },
    ];

    return (
        <section id="features" className="pt-12 lg:pt-16">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>১ থেকে {totalFeatures} পর্যন্ত ক্রমানুসারে পূর্ণাঙ্গ ফিচার তালিকা</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        আপনার ব্যবসার জন্য পাচ্ছেন{" "}
                        <span className="text-primary italic">{totalFeatures}টি অ্যাডভান্সড ফিচার</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        মোবাইল ও ডেস্কটপ পুশ নোটিফিকেশন, পাঠাও-রেডএক্স-স্টিডফাস্ট অটোমেশন, ফেসবুক ও টিকটক CAPI, এবং ডাবল-এন্ট্রি একাউন্টিংসহ আধুনিক ই-কমার্স ব্যবসার সবকিছু এক প্ল্যাটফর্মে।
                    </p>
                </div>

                {/* Filter and Expand/Collapse Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 p-2 rounded-2xl bg-card border border-border/60">
                    <div className="relative w-full sm:w-80">
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ফিচার খুঁজুন (যেমন: পুশ, পাঠাও, বিকাশ, টিকটক)..."
                            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end px-1">
                        <button
                            type="button"
                            onClick={expandAll}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-muted hover:bg-accent text-foreground transition-colors cursor-pointer"
                        >
                            <Layers className="w-3.5 h-3.5" />
                            <span>সব খুলুন</span>
                        </button>
                        <button
                            type="button"
                            onClick={collapseAll}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-muted hover:bg-accent text-foreground transition-colors cursor-pointer"
                        >
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>সব বন্ধ করুন</span>
                        </button>
                    </div>
                </div>

                {/* Vertical Category Accordion List */}
                <div className="space-y-4">
                    {filteredCategories.map((cat) => {
                        const originalIndex = categories.findIndex((c) => c.label === cat.label);
                        const isOpen = isSearching || openCategories.includes(originalIndex);

                        return (
                            <div
                                key={cat.label}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-card ${isOpen
                                    ? "border-primary/40 shadow-md ring-1 ring-primary/20"
                                    : "border-border/60 hover:border-border hover:shadow-sm"
                                    }`}
                            >
                                {/* Category Header Button */}
                                <button
                                    type="button"
                                    onClick={() => toggleCategory(originalIndex)}
                                    className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors hover:bg-accent/40 focus:outline-none cursor-pointer"
                                >
                                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                                        <span className="text-2xl md:text-3xl flex-shrink-0">
                                            {cat.icon}
                                        </span>
                                        <div className="min-w-0">
                                            <h3 className="text-base md:text-lg font-bold text-foreground truncate">
                                                {cat.label}
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {cat.features.length} টি প্রিমিয়াম ফিচার অন্তর্ভুক্ত
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5 flex-shrink-0">
                                        <span
                                            className={`hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${isOpen
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {cat.features.length} টি ফিচার
                                        </span>
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen
                                                ? "bg-primary/10 border-primary/30 text-primary rotate-180"
                                                : "bg-muted/50 border-border text-muted-foreground"
                                                }`}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </button>

                                {/* Nested Features List */}
                                {isOpen && (
                                    <div className="px-4 pb-5 md:px-5 md:pb-6 pt-1 border-t border-border/40 bg-card/60">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                            {cat.features.map((feat) => (
                                                <div
                                                    key={feat.id}
                                                    className="flex items-start gap-3 p-3.5 rounded-xl bg-background border border-border/40 hover:border-primary/40 hover:shadow-sm transition-all duration-200 group"
                                                >
                                                    <div className="flex flex-col items-center gap-1.5 flex-shrink-0 mt-0.5">
                                                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                                                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                                                            #{feat.id}
                                                        </span>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-semibold text-sm text-foreground leading-snug">
                                                            {feat.title}
                                                        </p>
                                                        {feat.desc && (
                                                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                                                                {feat.desc}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {filteredCategories.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-card">
                        <p className="text-muted-foreground text-sm">
                            &quot;{searchQuery}&quot; দিয়ে কোনো ফিচার খুঁজে পাওয়া যায়নি।
                        </p>
                    </div>
                )}

                {/* Footer Counter & Trust Badge */}
                <div className="mt-10 p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center max-w-2xl mx-auto">
                    <p className="text-foreground font-semibold text-sm md:text-base">
                        সর্বমোট <span className="text-primary font-bold">{totalFeatures}টি</span> অ্যাডভান্সড ই-কমার্স ফিচার অন্তর্ভুক্ত
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                        {hostingVariant === "1year-domain"
                            ? "কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই — ১ বছরের ফ্রি .com ডোমেইন ও ক্লাউড হোস্টিং, শতভাগ পছন্দ হলে তারপর পেমেন্ট ও লাইফটাইম টেকনিক্যাল সাপোর্ট।"
                            : "কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই — প্রথম ৬ মাস ফ্রি ক্লাউড হোস্টিং, শতভাগ পছন্দ হলে তারপর পেমেন্ট ও লাইফটাইম টেকনিক্যাল সাপোর্ট।"}
                    </p>
                </div>
            </div>

            {/* Sticky Scroll Highlight Cards (Preserved) */}
            <div className="container mx-auto px-4 mt-12">
                <StackingHighlights highlights={highlightData} />
            </div>
        </section>
    );
};
