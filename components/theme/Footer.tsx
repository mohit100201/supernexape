"use client";
import React from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { SettingsData, ThemeData } from "@/interface/common.interface";

interface FooterNavItemProps {
  themeData: ThemeData;
  settingsData: SettingsData;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ themeData, settingsData }) => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: "Home", target: "home" },
    { name: "Services", target: "services" },
    { name: "About Us", target: "about-us" },
    { name: "Pricing", target: "pricing" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden selection:bg-indigo-500/30">
      {/* ─── BACKGROUND DECORATION ─── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">

        {/* ─── TOP SECTION: NEWSLETTER / CTA ─── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-20 border-b border-white/5">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
              Ready to <span className="text-indigo-400">transform</span> <br /> your business?
            </h2>
            <p className="text-slate-400 text-lg max-w-md font-medium">
              Join 10,000+ businesses growing with your platform.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-slate-900 rounded-[2rem] p-2 border border-white/10 backdrop-blur-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none text-white px-6 py-4 w-full focus:outline-none placeholder:text-slate-500 font-medium"
              />
              <button
                className="p-4 rounded-2xl text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-bold whitespace-nowrap"
                style={{ backgroundColor: themeData.primary_color }}
              >
                Get Started <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: LINKS & BRAND ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20">

          {/* Brand Identity - LOGO ONLY */}
          <div className="space-y-8 flex flex-col items-start">
            <div 
              className="relative group cursor-pointer transition-transform duration-500 hover:scale-110"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
               <img 
                 src={themeData.logo} 
                 alt="Logo" 
                 className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-[0_0_15px_rgba(79,70,229,0.3)]" 
               />
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Empowering global entrepreneurs with seamless financial infrastructure and real-time intelligence.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => scrollToSection(item.target)}
                    className="text-slate-500 hover:text-indigo-400 flex items-center gap-2 group transition-colors bg-transparent border-none p-0 cursor-pointer"
                  >
                    {item.name} 
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" 
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 font-medium text-slate-500">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security Standards</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Reach Us</h4>
            <div className="space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0"><Mail size={18} /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium break-all">{settingsData?.support_email || "support@supernexape.com"}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0"><Phone size={18} /></div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                  <p className="text-white font-medium">+91 95299 11808 (IN)</p>
                  <p className="text-white font-medium">+971 55 477 6481 (UAE)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0"><MapPin size={18} /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Address</p>
                  <p className="text-white font-medium leading-relaxed max-w-[240px]">
                    Gk-11/89 Gf-3, Indrapuram, Shipra Sun City, Ghaziabad, Uttar Pradesh, India, 201014
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: COPYRIGHT ─── */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} <span className="text-white font-bold">SUPERNEXAPE</span>. Built for the future of finance.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavItem;