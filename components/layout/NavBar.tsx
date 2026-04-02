"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom Scroll Function to keep URL clean (removes # from address bar)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust based on your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { name: "Home", target: "home" },
    { name: "Services", target: "services" },
    { name: "About", target: "about" },
    { name: "Partners", target: "partners" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 ${
      scrolled ? "py-2" : "py-6"
    }`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center relative transition-all duration-500 h-16 ${
        scrolled 
        ? "bg-slate-900/95 backdrop-blur-xl border border-white/10 px-6 rounded-full shadow-2xl" 
        : "bg-white/50 backdrop-blur-md border border-slate-200/50 px-8 rounded-[2rem]"
      }`}>
        
        {/* LOGO CONTAINER - Absolute positioning prevents it from stretching the navbar height */}
       {/* LOGO CONTAINER */}
<div 
  className="absolute left-6 lg:left-10 cursor-pointer transition-all duration-500"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  style={{ top: scrolled ? '50%' : '50%', transform: 'translateY(-50%)' }}
>
  <img 
    // Logic: If scrolled (dark bg), use Light logo. Otherwise, use standard logo.
    src={scrolled ? "/SuperNexapeLight.png" : "/supernexape.png"} 
    alt="SuperNexApe" 
    className={`transition-all duration-700 object-contain drop-shadow-2xl ${
        scrolled ? 'w-24 lg:w-32' : 'w-40 lg:w-56' 
    }`} 
  />
</div>

        {/* Placeholder to push links to the right so they don't overlap the logo */}
        <div className={`transition-all duration-500 ${scrolled ? 'w-24 lg:w-32' : 'w-40 lg:w-56'}`} />

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className={`flex gap-8 text-xs font-black uppercase tracking-[0.2em] ${scrolled ? 'text-white' : 'text-slate-600'}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => scrollToSection(item.target)}
                  className="hover:text-cyan-500 transition-colors cursor-pointer bg-transparent border-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div className={`w-px h-6 ${scrolled ? 'bg-white/10' : 'bg-slate-200'}`} />

          <div className="flex items-center gap-4">
            <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${scrolled ? 'text-slate-300' : 'text-slate-900'}`}>
              <LogIn size={14} /> Login
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-cyan-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[110] flex flex-col p-10">
           <button className="self-end text-white" onClick={() => setMobileOpen(false)}><X size={32}/></button>
           <div className="flex flex-col gap-8 mt-20">
             {navItems.map(item => (
               <button 
                 key={item.name} 
                 onClick={() => scrollToSection(item.target)} 
                 className="text-left text-5xl font-black text-white tracking-tighter hover:text-cyan-500 transition-colors bg-transparent border-none"
               >
                 {item.name}
               </button>
             ))}
           </div>
        </div>
      )}
    </nav>
  );
}
