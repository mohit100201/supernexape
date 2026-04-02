"use client";
import React from "react";
import { Fingerprint, Receipt, SendHorizontal, Smartphone, Wallet, Train, ArrowRight, ShieldCheck } from "lucide-react";

const ServiceNavItem: React.FC<{ primaryColor?: string }> = ({ primaryColor = "#6366f1" }) => {
  const features = [
    {
      title: "AEPS",
      desc: "Empower your point of sale with Aadhaar-based biometric banking. Secure cash withdrawals and balance inquiries at the touch of a finger.",
      icon: <Fingerprint size={64} />,
      color: "from-slate-900 to-slate-800",
      accent: "text-orange-400",
      label: "Banking Systems"
    },
    {
      title: "BBPS",
      desc: "The ultimate unified bill payment ecosystem. Manage electricity, water, gas, and broadband for over 200+ billers instantly.",
      icon: <Receipt size={64} />,
      color: "from-indigo-950 to-blue-900",
      accent: "text-blue-300",
      label: "Utility Network"
    },
    {
      title: "DMT",
      desc: "Domestic Money Transfer reimagined. Instant IMPS/NEFT settlements to any bank in India, 24/7/365 with zero downtime.",
      icon: <SendHorizontal size={64} />,
      color: "from-emerald-950 to-teal-900",
      accent: "text-emerald-400",
      label: "Fast Transfers"
    },
    {
      title: "PAYOUTS",
      desc: "Complete lifecycle management of funds. From automated vendor disbursements to smart UPI/QR collection systems.",
      icon: <Wallet size={64} />,
      color: "from-gray-900 to-zinc-900",
      accent: "text-rose-400",
      label: "Liquidity Tools"
    }
  ];

  return (
    <section id="services" className="relative bg-[#f8fafc] pb-[20vh]">
      {/* 1. SECTION INTRO */}
      <div className="py-32 px-8 max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest">
          Platform Capabilities
        </div>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8">
          The Service <span className="text-indigo-600">Notebook.</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Our infrastructure is built in layers. Scroll down to flip through the core modules of our digital ecosystem.
        </p>
      </div>

      {/* 2. THE STACKED NOTEBOOK CARDS */}
      <div className="flex flex-col items-center px-4">
        {features.map((service, idx) => (
          <div
            key={idx}
            className="sticky w-full max-w-6xl flex items-center justify-center"
            style={{ 
              top: `${100 + (idx * 32)}px`, // Visible notebook tabs
              height: '70vh',
              perspective: '1000px' // Required for the 3D animation
            }}
          >
            <div 
              className={`group relative w-full h-[450px] md:h-[550px] rounded-[3.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 
                         shadow-[0_-20px_60px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden 
                         bg-gradient-to-br ${service.color} 
                         transition-all duration-700 ease-out 
                         hover:scale-[1.01] animate-reveal-card`}
            >
              
              {/* Card Header Decoration (Notebook Wire/Spiral Effect) */}
              <div className="absolute top-0 left-12 right-12 h-1.5 flex justify-between gap-4">
                 {[...Array(8)].map((_, i) => (
                   <div key={i} className="w-8 h-8 -translate-y-4 rounded-full bg-[#f8fafc] border-4 border-slate-200" />
                 ))}
              </div>

              {/* LEFT CONTENT - Optimized for Readability */}
              <div className="flex-[1.2] flex flex-col justify-between relative z-10">
                <div className="space-y-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-[0.2em] ${service.accent}`}>
                    <ShieldCheck size={14} /> {service.label}
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  
                  {/* Text Background Box for extreme readability */}
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-inner">
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <button className="group mt-6 inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
                  Launch Module <ArrowRight size={20} className={service.accent} />
                </button>
              </div>

              {/* RIGHT VISUAL - Iconic Display */}
              <div className="flex-1 hidden md:flex items-center justify-center relative">
                 <div className={`relative w-64 h-64 rounded-[4rem] flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 ${service.accent}`}>
                    {/* Floating Orbs around the icon */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full blur-xl opacity-50 bg-current`} />
                    <div className="relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        {service.icon}
                    </div>
                 </div>
                 
                 {/* Large subtle index number */}
                 <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white opacity-[0.03] leading-none select-none">
                    0{idx + 1}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        /* 1. Reveal Animation: Cards "Tilt" into place as you scroll */
        @keyframes reveal-card {
          0% { transform: rotateX(-15deg) translateY(50px); opacity: 0.8; }
          100% { transform: rotateX(0deg) translateY(0); opacity: 1; }
        }

        .animate-reveal-card {
          animation: reveal-card linear both;
          animation-timeline: view();
          animation-range: entry 10% cover 40%;
        }

        /* 2. Custom Scrollbar for the Notebook */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        body {
            background-color: #f8fafc;
        }
      `}</style>
    </section>
  );
};

export default ServiceNavItem;