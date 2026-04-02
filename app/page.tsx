import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";
import Features from "@/components/sections/Features";
import PartnerGrid from "@/components/sections/PartnerGrid";
import Partners from "@/components/sections/Partners";
import AppPromo from "@/components/sections/AppPromo";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import AboutSection from "@/components/sections/AboutSection";
import PartnershipSection from "@/components/sections/PartnerShipSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* 1. BRAND IDENTITY & MOMENTUM */}
        <Hero />
        <Ticker />
        
        {/* 2. VALUE DISCOVERY */}
        {/* Show what you do immediately after the hook */}
        <Services  />
        
        {/* 3. TRUST & AUTHORITY */}
        {/* Move Testimonials up to build credibility early */}
        <Testimonials />

        <AboutSection />
        <WhyChoose />
        
        {/* 4. TECHNICAL AUTHORITY */}
        {/* Prove that the platform is robust and secure */}
        <Features />

        <PartnershipSection/>
        
        {/* 5. THE BUSINESS OPPORTUNITY */}
        {/* Show the partnership tiers and the grid of models */}
        <PartnerGrid />
        <Partners />
        
        {/* 6. ECOSYSTEM ACCESSIBILITY */}
        {/* Present the mobile experience */}
        <AppPromo />
        
        {/* 7. CONVERSION ENGINE */}
        {/* Address final friction and then give the big push */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
