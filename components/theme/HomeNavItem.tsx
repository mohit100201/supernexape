"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  tag: string;
}

interface HomeNavItemProps {
  banner?: any[];
  primaryColor?: string;
}

const HomeNavItem: React.FC<HomeNavItemProps> = ({ banner, primaryColor = "#6366f1" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultHeroSlides: HeroSlide[] = [
    { 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
      tag: "Next-Gen Infrastructure",
      title: "The Future of Digital Banking.",
      subtitle: "Scalable APIs and robust security for the modern fintech landscape."
    },
    { 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      tag: "Global Connectivity",
      title: "Bridge the Gap in Payments.",
      subtitle: "Instant settlements and global reach through a single unified gateway."
    }
  ];

  const heroSlides: HeroSlide[] = banner && banner.length > 0
    ? banner.map((item, index) => ({
        image: item.banner ?? item.imageUrl ?? defaultHeroSlides[index % defaultHeroSlides.length].image,
        tag: item.tag || defaultHeroSlides[index % defaultHeroSlides.length].tag,
        title: item.title || defaultHeroSlides[index % defaultHeroSlides.length].title,
        subtitle: item.subtitle || defaultHeroSlides[index % defaultHeroSlides.length].subtitle,
      }))
    : defaultHeroSlides;

  const handleSlideChange = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    handleSlideChange((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, heroSlides.length, handleSlideChange]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen min-h-[850px] w-full bg-slate-50 flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px]" />
      </div>

      {/* MAIN CONTENT CARD */}
      <div className="relative w-full h-full max-w-[1440px] mx-6 lg:mx-10 overflow-hidden rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] bg-slate-950 border border-slate-800">
        
        {/* 1. ANIMATED BACKGROUND LAYERS */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.23, 1, 0.32, 1) ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
            }`}
          >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
            <img
              src={slide.image}
              alt="Hero"
              className={`h-full w-full object-cover transition-transform duration-[20000ms] linear ${
                index === currentSlide ? "scale-125 rotate-1" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* 2. FOREGROUND CONTENT */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center px-12 lg:px-24">
          <div className="max-w-3xl space-y-8">
            
            {/* Dynamic Tag */}
            <div className="overflow-hidden">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-300 text-xs font-black uppercase tracking-[0.3em] animate-reveal-text">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                {heroSlides[currentSlide].tag}
              </div>
            </div>

            {/* Main Title */}
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] animate-reveal-text delay-100">
                {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                  <span key={i} className={i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <p className="text-xl text-slate-300 font-medium max-w-xl leading-relaxed animate-reveal-text delay-200">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-6 pt-6 animate-reveal-text delay-300">
              <button 
                className="group relative px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                       {i === 3 ? "10k+" : <Globe size={12}/>}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Trusted by Global Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FLOATING TECH SPECS (The "Attractive" Edge) */}
        <div className="absolute right-12 bottom-12 z-30 hidden xl:flex gap-4">
          {[
            { icon: <ShieldCheck size={20}/>, label: "PCI-DSS v4.0", val: "Certified" },
            { icon: <Zap size={20}/>, label: "Uptime", val: "99.99%" },
            { icon: <Cpu size={20}/>, label: "Latency", val: "< 50ms" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-2 group hover:bg-white/10 transition-colors">
              <div className="text-indigo-400">{item.icon}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
              <div className="text-lg font-black text-white">{item.val}</div>
            </div>
          ))}
        </div>

        {/* 4. SLIDER PROGRESS BARS */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-40 flex gap-2">
           {heroSlides.map((_, i) => (
             <div key={i} className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-indigo-500 transition-all duration-[8000ms] linear ${i === currentSlide ? "w-full" : "w-0"}`} 
                  style={{ backgroundColor: i === currentSlide ? primaryColor : 'transparent' }}
                />
             </div>
           ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes reveal-text {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal-text { 
          animation: reveal-text 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; 
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default HomeNavItem;