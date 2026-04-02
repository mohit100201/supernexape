"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { ThemeData } from "@/interface/common.interface";

interface HeaderProps {
  themeData: ThemeData;
  activeSection: string;
  apkUrl: string;
}

const Header: React.FC<HeaderProps> = ({ themeData, activeSection, apkUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", target: "home" },
    { name: "Services", target: "services" },
    { name: "About", target: "about-us" },
    { name: "Pricing", target: "pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <nav className="max-w-[1440px] mx-auto px-6 py-6 flex justify-between items-center pointer-events-auto">
        
        {/* --- 1. CLEAN LOGO-ONLY BRANDING --- */}
        <div 
          className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={themeData.logo}
            alt="SuperNexApe Logo"
            className={`object-contain transition-all duration-700 ${
              isScrolled 
                ? "w-24 h-24 lg:w-32 lg:h-32"
                : "w-24 h-24 lg:w-32 lg:h-32"
            } hover:scale-105 active:scale-95`}
          />
        </div>

        {/* --- 2. THE FLOATING ISLAND NAV --- */}
        <div className={`hidden lg:flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled 
            ? "bg-slate-900/95 text-white shadow-2xl shadow-indigo-500/20 translate-y-2 px-3 py-2 rounded-full border border-white/10" 
            : "bg-white/70 text-slate-600 px-6 py-4 rounded-[2rem] border border-slate-200/50 shadow-sm"
        } backdrop-blur-xl`}>
          
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.target)}
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 relative group ${
                    isActive 
                      ? (isScrolled ? "text-white" : "text-indigo-600") 
                      : "hover:opacity-100 opacity-60"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? "bg-indigo-400" : "bg-indigo-600"
                    }`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className={`w-px h-6 mx-4 ${isScrolled ? "bg-white/10" : "bg-slate-200"}`} />

          {/* Action Area */}
          <div className="flex items-center gap-3">
            <button className={`flex items-center gap-2 text-xs font-bold transition-colors ${
              isScrolled ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-indigo-600"
            }`}>
              <LogIn size={14} />
              Login
            </button>
          </div>
        </div>

        {/* --- 3. MOBILE TOGGLE --- */}
        <button
          className={`lg:hidden p-4 rounded-full transition-all duration-500 ${
            isScrolled ? "bg-indigo-600 text-white shadow-indigo-500/40" : "bg-white text-slate-900 shadow-xl border border-slate-100"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <div className={`fixed inset-0 bg-slate-950 transition-all duration-700 lg:hidden ${
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}>
        <div className="flex flex-col h-full p-10 pt-32 gap-8">
          {navItems.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.target);
                setIsMenuOpen(false);
              }}
              className="text-4xl font-black text-white text-left tracking-tighter hover:text-indigo-500 flex justify-between items-center group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="group-hover:translate-x-4 transition-transform">{item.name}</span>
              <span className="text-indigo-600 text-xl font-mono">0{idx + 1}</span>
            </button>
          ))}
          
          <div className="mt-auto pt-10 border-t border-white/10">
            <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black text-center active:scale-95 transition-transform">
              AGENT LOGIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;