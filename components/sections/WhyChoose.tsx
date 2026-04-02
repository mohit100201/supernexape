"use client";
import React from "react";
import { ShieldCheck, Zap, Wallet, Headset, Map, Users } from "lucide-react";

const REASONS = [
  { icon: <ShieldCheck />, title: "RBI Compliant", desc: "Operating under strict regulatory frameworks." },
  { icon: <Zap />, title: "Instant Payouts", desc: "Settlements processed in under 50 milliseconds." },
  { icon: <Wallet />, title: "Unified Wallet", desc: "One balance for all 25+ digital services." },
  { icon: <Headset />, title: "24/7 Support", desc: "Expert assistance in Hindi, English & UAE Hub." },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
              Trusted by <br />
              <span className="text-cyan-500 text-6xl">5 Lakh+ Partners</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {REASONS.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-cyan-500">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
             <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-bold italic opacity-80">"Serving every corner of India, from metros to remote villages."</h3>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                   <div>
                      <div className="text-4xl font-black text-cyan-400">700+</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">Districts</div>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-cyan-400">₹40Cr+</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">Daily Volume</div>
                   </div>
                </div>
             </div>
             <Map className="absolute -bottom-10 -right-10 text-white opacity-5 w-64 h-64" />
          </div>
        </div>
      </div>
    </section>
  );
}