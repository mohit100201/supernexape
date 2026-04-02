"use client";
import React, { useState, useEffect } from "react";
import { Check, Zap, Crown, Rocket, Star, ArrowRight } from "lucide-react";

interface PricingNavItemProps {
  themeData: any;
  plans: Record<string, any[]>;
}

const PricingNavItem: React.FC<PricingNavItemProps> = ({ themeData, plans }) => {
  const roleNames = plans ? Object.keys(plans) : [];
  const [activeRole, setActiveRole] = useState(roleNames[0] || "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const el = document.getElementById("pricing");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activePlans = plans[activeRole] || [];

  return (
    <section id="pricing" className="py-32 px-6 lg:px-12 bg-[#fcfcfd] relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/30 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
             <Star size={16} className="text-amber-400 fill-amber-400" />
             <span className="text-xs font-black uppercase tracking-widest text-slate-500">Transparent Pricing</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Plans for every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-text-shimmer bg-[length:200%_auto]">
                stage of growth.
            </span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">Choose the perfect tier to supercharge your business operations.</p>
          
          {/* LIQUID ROLE SWITCHER */}
          <div className="inline-flex p-2 bg-white rounded-[2rem] shadow-xl border border-slate-100 mt-10 relative">
            {roleNames.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`relative z-10 px-8 py-3 rounded-[1.5rem] text-sm font-bold transition-all duration-500 ${
                  activeRole === role ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {activeRole === role && (
                    <div 
                        className="absolute inset-0 z-[-1] rounded-[1.5rem] animate-spring-snap shadow-lg" 
                        style={{ backgroundColor: themeData.primary_color }} 
                    />
                )}
                {role.charAt(0).toUpperCase() + role.slice(1).replace(/_/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {activePlans.map((plan, index) => {
            const isGold = plan.name.toLowerCase().includes("gold") || plan.name.toLowerCase().includes("premium");
            const features = JSON.parse(plan.features || "[]");

            return (
              <div
                key={index}
                className={`relative p-10 rounded-[3.5rem] transition-all duration-700 group hover:-translate-y-4 ${
                  isGold 
                  ? "bg-slate-900 text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] scale-105 z-20" 
                  : "bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl z-10"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {isGold && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-black tracking-widest shadow-xl animate-bounce-slow">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-8">
                  {/* Icon & Title */}
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isGold ? "bg-white/10" : "bg-indigo-50"}`}>
                        {isGold ? <Crown className="text-amber-400" /> : <Rocket className="text-indigo-600" />}
                    </div>
                    <div className="text-right">
                        <h3 className={`text-2xl font-black tracking-tight ${isGold ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                        <p className={isGold ? "text-slate-400" : "text-slate-500"}>Base Tier</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="py-6 border-y border-slate-100/10 flex items-baseline gap-1">
                    <span className="text-6xl font-black tracking-tighter">₹{plan.amount}</span>
                    <span className={`text-sm font-bold ${isGold ? "text-slate-400" : "text-slate-400"}`}>/month</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {features.map((feature: string, fIdx: number) => (
                      <li 
                        key={fIdx} 
                        className={`flex items-center gap-3 text-sm font-medium transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                        style={{ transitionDelay: `${index * 100 + fIdx * 50}ms` }}
                      >
                        <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isGold ? "bg-indigo-500 text-white" : "bg-emerald-100 text-emerald-600"}`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={isGold ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-5 rounded-[2rem] font-black text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden relative group/btn active:scale-95 ${
                      isGold 
                      ? "bg-white text-slate-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
                      : "text-white shadow-xl hover:opacity-90"
                    }`}
                    style={{ backgroundColor: !isGold ? themeData.primary_color : undefined }}
                  >
                     <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>

                {/* Background Pattern for Dark Card */}
                {isGold && (
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none rounded-[3.5rem]" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes spring-snap {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        .animate-spring-snap {
          animation: spring-snap 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 3s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PricingNavItem;