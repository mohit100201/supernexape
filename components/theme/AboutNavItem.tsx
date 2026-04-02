"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Target, Eye, Award, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { SettingsData } from "@/interface/common.interface";

interface AboutNavItemProps {
  primaryColor?: string;
  companyName?: string;
  settingsData: SettingsData;
}

const AboutNavItem: React.FC<AboutNavItemProps> = ({ 
  primaryColor = "#4f46e5", 
  companyName = "Our Company" ,
  settingsData
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Simple intersection observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById("about-us");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-us" className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      
      {/* ─── BACKGROUND DECORATION ─── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* ─── LEFT SIDE: INTERACTIVE IMAGE COMPOSITION ─── */}
          <div className={`relative transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
            
            {/* Main Image with Mask */}
            <div className="relative z-10">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                <img
                 src={
                    settingsData?.url2
                      ? `https://api.pinepe.in/storage/${settingsData.url2}`
                      : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  }
                  
                  alt="Our Team"
                  className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Floating Glass Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-sm font-medium opacity-80 italic">"Technology is best when it brings people together."</p>
                    </div>
                </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-10 -right-10 bg-slate-900 p-8 rounded-[3rem] shadow-2xl animate-float z-20 border border-slate-800">
                <div className="text-center">
                    <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">10+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Years of Excellence</p>
                </div>
            </div>

            {/* Moving Circle Decoration */}
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute -bottom-12 -left-4 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
            </div>
          </div>

          {/* ─── RIGHT SIDE: TYPOGRAPHY & CONTENT ─── */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
                <Sparkles size={16} className="text-indigo-600 animate-spin-slow" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">The Modern Standard</span>
              </div>
              
              <h2 className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                Defining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Future.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                We're on a mission to <span className="text-slate-900 font-bold border-b-4 border-indigo-100">revolutionize</span> how businesses handle global transactions. By merging human-centric design with powerful neural processing.
              </p>

              {/* Icon-Text Points */}
              <div className="grid gap-6">
                {[
                    { icon: <Zap className="text-orange-500" />, title: "Hyper-Growth Strategy", desc: "Scaling your reach across 150+ countries instantly." },
                    { icon: <ShieldCheck className="text-emerald-500" />, title: "Zero-Knowledge Security", desc: "Your data stays yours. Privacy is our core foundation." }
                ].map((point, i) => (
                    <div key={i} className="group flex gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            {point.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">{point.title}</h4>
                            <p className="text-slate-500 text-sm">{point.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Action Area */}
            <div className="flex items-center gap-8 pt-6">
              <button 
                className="group relative px-10 py-5 rounded-[2rem] text-white font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  Start Our Story <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <div className="flex -space-x-4">
                 {[1,2,3,4].map((i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                     </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
                    5k+
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default AboutNavItem;