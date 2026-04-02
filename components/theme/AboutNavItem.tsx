"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, Zap, ShieldCheck, Globe, Cpu, Layers, Fingerprint } from "lucide-react";
import { SettingsData } from "@/interface/common.interface";

interface AboutNavItemProps {
  primaryColor?: string;
  companyName?: string;
  settingsData: SettingsData;
}

const AboutNavItem: React.FC<AboutNavItemProps> = ({ 
  primaryColor = "#4f46e5", 
  companyName = "SuperNexApe",
  settingsData
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const element = document.getElementById("about-us");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-us" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      
      {/* ─── 1. TECH-GRID BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ─── LEFT: MASKED COMPOSITION (STABLE UI) ─── */}
          <div className="lg:col-span-6 relative">
            <div className={`relative transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              
              {/* Main Image with a Tech-Frame */}
              <div className="relative p-4 bg-white rounded-[3rem] shadow-2xl border border-slate-200">
                <div className="relative rounded-[2rem] overflow-hidden group">
                  <img
                    src={settingsData?.url2 ? `https://api.pinepe.in/storage/${settingsData.url2}` : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"}
                    alt="Infrastructure"
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                </div>

                {/* Floating Stats - No Shaking (Static Shadow) */}
                <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-black tracking-tighter text-indigo-400">140+</div>
                    <div className="h-10 w-px bg-white/20" />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                      Global <br /> Nodes
                    </div>
                  </div>
                </div>

                {/* Secure Badge */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Fingerprint size={20} />
                    </div>
                    <span className="text-xs font-black uppercase text-slate-700">AES-256 Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: BOLD TYPOGRAPHY & ECOSYSTEM ─── */}
          <div className="lg:col-span-6 space-y-12">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
                <Cpu size={14} className="text-indigo-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">The SuperNex Core</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Scaling the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Unstoppable.</span>
              </h2>
              
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                SuperNexApe isn't just a platform; it's the <strong>neural engine</strong> for modern commerce. We've replaced legacy systems with a multi-cloud stack designed for sub-50ms transaction speeds.
              </p>
            </div>

            {/* Feature Modules */}
            <div className="grid gap-4">
              {[
                { icon: <Globe />, title: "Hyper-Connective API", desc: "One integration, infinite endpoints across 200+ regions.", color: "bg-blue-500" },
                { icon: <Layers />, title: "Distributed Ledger", desc: "Transparent, real-time reconciliation with zero latency.", color: "bg-indigo-600" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <button 
                className="px-10 py-5 rounded-full bg-slate-900 text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ backgroundColor: primaryColor }}
              >
                Our Architecture <ArrowUpRight size={18} />
              </button>
              
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-none">5,000+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Enterprises</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        /* Removed the shaking 'animate-float' and 'animate-blob' */
        /* Replaced with a subtle reveal */
        @keyframes reveal-tech {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-tech {
          animation: reveal-tech 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutNavItem;