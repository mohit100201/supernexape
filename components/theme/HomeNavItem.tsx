"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface HeroSlide {
  image: string;
}

interface HomeNavItemProps {
  banner?: any[];
  primaryColor?: string;
}

const HomeNavItem: React.FC<HomeNavItemProps> = ({ banner, primaryColor = "#4f46e5" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultHeroSlides: HeroSlide[] = [
    { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80" },
    { image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80" },
    { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" },
  ];

  const heroSlides: HeroSlide[] = banner && banner.length > 0
      ? banner.map((item, index) => ({
          image: item.banner ?? item.imageUrl ?? defaultHeroSlides[index % defaultHeroSlides.length].image,
        }))
      : defaultHeroSlides;

  const handleSlideChange = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000); 
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    handleSlideChange((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, heroSlides.length, handleSlideChange]);

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full bg-white flex items-center justify-center py-10">
      
      {/* MAIN CARD CONTAINER */}
      <div className="relative w-full h-full max-w-[1500px] mx-4 lg:mx-12 overflow-hidden rounded-[40px] shadow-2xl bg-slate-950">
        
        {/* 1. LAYERED BACKGROUNDS (Scoped to Card) */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Hero Background"
              className={`h-full w-full object-cover transition-transform duration-[10000ms] linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
           
          </div>
        ))}

        {/* 2. DYNAMIC MESH PARTICLES */}
        <div className="absolute inset-0 opacity-30 z-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[160px] animate-pulse delay-700" />
        </div>


        {/* 5. SLIDER NAVIGATION (Scoped to Card) */}
        <div className="absolute bottom-10 left-12 lg:left-20 z-40 flex items-center gap-8">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <button onClick={prevSlide} className="text-white/60 hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-3">
              {heroSlides.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handleSlideChange(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? "w-10" : "w-3 bg-white/20"}`}
                  style={{ backgroundColor: i === currentSlide ? primaryColor : undefined }}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="text-white/60 hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes reveal-text {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-reveal-text { animation: reveal-text 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default HomeNavItem;