"use client";
import React, { useState, useEffect } from "react";

// Component Imports
import Header from "./Header";
import HomeNavItem from "./HomeNavItem";
import ServiceNavItem from "./ServiceNavitem";
import AboutNavItem from "./AboutNavItem";
import PricingNavItem from "./PricingNavItem";
import FooterNavItem from "./Footer";
import Testimonials from "./Testimonials";
import Features from "./Features";

const Theme5: React.FC = () => {
    // --- STATIC MOCK DATA ---
    const staticThemeData = {
        primary_color: "#4f46e5", // Indigo 600
        company_name: "SuperNexApe",
        logo: "/supernexape.png",
    };

    const staticSettingsData = {
        contact_email: "support@supernexape.com",
        about_description: "We are a cutting-edge digital agency focused on delivering high-performance web solutions and innovative mobile applications for the modern era.",
        footer_text: "© 2026 SuperNexApe. All rights reserved.",
    };

   const staticPlans = {
    "Monthly": [
        { 
            id: 1, 
            name: "Starter", 
            amount: "29", 
            features: JSON.stringify(["Basic Analytics", "1 Project", "Email Support"]) 
        },
        { 
            id: 2, 
            name: "Professional Gold", // Added 'Gold' to trigger the dark card styling
            amount: "99", 
            features: JSON.stringify(["Advanced Analytics", "10 Projects", "Priority Support", "Custom Domains"]) 
        },
        { 
            id: 3, 
            name: "Enterprise", 
            amount: "199", 
            features: JSON.stringify(["Unlimited Projects", "24/7 Dedicated Support", "SLA Guarantee"]) 
        },
    ],
    "Yearly": [
        { 
            id: 4, 
            name: "Starter Annual", 
            amount: "250", 
            features: JSON.stringify(["Basic Analytics", "1 Project", "Email Support"]) 
        }
    ]
};

    const staticBanners = [
        { id: 1, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", title: "Welcome to SuperNexApe" }
    ];

    const staticTestimonials = [
        { 
            id: 1, 
            author: "John Doe", 
            quote: "This platform changed the way we handle our digital infrastructure.", 
            role: "CEO at TechFlow" 
        },
        { 
            id: 2, 
            author: "Sarah Smith", 
            quote: "Incredible speed and support. Highly recommended!", 
            role: "Product Manager" 
        },
    ];

    const staticApkUrl = "#";

    // --- LOGIC ---
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about-us" },
        { name: "Pricing", href: "#pricing" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.replace("#", ""));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    return (
        <div className="min-h-screen bg-white selection:bg-indigo-100 font-sans">
            {/* Header with static data */}
            <Header 
                themeData={staticThemeData as any} 
                activeSection={activeSection} 
                apkUrl={staticApkUrl} 
            />

            <main className="relative pt-20 lg:pt-28">
                {/* 1. HERO / HOME */}
                <section id="home" className="w-full">
                    <HomeNavItem banner={staticBanners as any} primaryColor={staticThemeData.primary_color} />
                </section>

                {/* 2. SERVICES */}
                <section id="services" className="w-full">
                    <ServiceNavItem primaryColor={staticThemeData.primary_color} />
                </section>

                <Features settingsData={staticSettingsData as any} />

                {/* 3. ABOUT US */}
                <section id="about-us" className="w-full">
                    <AboutNavItem
                        primaryColor={staticThemeData.primary_color}
                        companyName={staticThemeData.company_name}
                        settingsData={staticSettingsData as any}
                    />
                </section>

                <Testimonials testimonials={staticTestimonials} />

                {/* 4. PRICING */}
                <section id="pricing" className="w-full">
                    <PricingNavItem 
                        themeData={staticThemeData as any} 
                        plans={staticPlans as any} 
                    />
                </section>
            </main>

            {/* 7. FOOTER */}
            <FooterNavItem 
                themeData={staticThemeData as any} 
                settingsData={staticSettingsData as any} 
            />

            {/* GLOBAL ANIMATIONS */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
                
                body {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    scroll-behavior: smooth;
                }

                @keyframes spring-snap {
                    0% { transform: scale(0.4); opacity: 0; }
                    70% { transform: scale(1.1); }
                    100% { transform: scale(1); opacity: 1; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .animate-spring-snap { animation: spring-snap 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
                .animate-float { animation: float 4s ease-in-out infinite; }

                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
            `}</style>
        </div>
    );
};

export default Theme5;