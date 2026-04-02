"use client";
import React from "react";
import { Mail, MapPin, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden selection:bg-cyan-500/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <img src="/supernexape.png" alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                SuperNex<span className="text-cyan-500">ape</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              The neural engine of modern fintech. Providing institutional-grade infrastructure for real-time global
              digital banking.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {["AePS Aadhaar", "DMT Remit", "BBPS Utility", "Partner API"].map((link) => (
                <li key={link} className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-cyan-400">
                  <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Global Operations</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group flex gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                  <MapPin className="text-cyan-500 shrink-0" size={24} />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    GK-11/89 GF-3, Indrapuram, Shipra Sun City,
                    <br />
                    Ghaziabad, Ghaziabad, Uttar Pradesh, India,
                    <br />
                    201014
                  </p>
                </div>
                <div className="flex items-center gap-4 px-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="text-cyan-500" size={18} />
                  </div>
                  <p className="text-sm font-bold hover:text-cyan-400 cursor-pointer transition-colors">
                    support@supernexape.in
                  </p>
                </div>
              </div>

              <div className="max-w-[240px]"> {/* Restricts the width so it doesn't span the whole container */}
                <a
                  href="tel:+971 55 477 6481"
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group block"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      India HQ
                    </span>
                    <span className="text-sm grayscale group-hover:grayscale-0 transition-all">
                      🇮🇳
                    </span>
                  </div>

                  <p className="text-white font-black tracking-tight text-base group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    +971 55 477 6481
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              Copyright {currentYear} SuperNexape. Engineering the Future.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[9px] text-emerald-500 font-black uppercase tracking-widest animate-pulse">
              <Zap size={10} fill="currentColor" /> All Systems Operational
            </div>
          </div>

          <div className="flex gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            {["Privacy", "Terms", "Compliance", "Security"].map((legal) => (
              <span key={legal} className="hover:text-white cursor-pointer transition-colors relative group">
                {legal}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
