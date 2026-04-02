"use client";
import React from "react";
import { Smartphone, Download, ShieldCheck, Star } from "lucide-react";

export default function AppPromo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-600 font-black text-xs uppercase tracking-widest block mb-4">Mobile Platform</span>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
              Your Bank in <br /> <span className="text-cyan-500">Your Pocket.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              Run your entire digital banking business from your Android smartphone. Works offline, 24/7 availability.
            </p>
            
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl flex items-center gap-4 hover:bg-cyan-600 transition-all shadow-2xl">
              <Download size={24} />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Download on</div>
                <div className="text-lg font-black leading-none">Google Play</div>
              </div>
            </button>

            <div className="flex gap-8 mt-12">
               <div className="flex items-center gap-2"><Star className="text-orange-400" size={18} fill="currentColor"/> <span className="text-xs font-bold text-slate-600 uppercase">4.8 Rating</span></div>
               <div className="flex items-center gap-2"><Smartphone className="text-cyan-500" size={18} /> <span className="text-xs font-bold text-slate-600 uppercase">10L+ Installs</span></div>
               <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-500" size={18} /> <span className="text-xs font-bold text-slate-600 uppercase">Bank-Grade</span></div>
            </div>
          </div>

          {/* Interactive Phone Mockup */}
          <div className="relative flex justify-center">
             <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] p-4 relative overflow-hidden">
                <div className="bg-white h-full w-full rounded-[2rem] p-6 space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-cyan-600 font-black text-xs">NexApe</span>
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                   </div>
                   <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white">
                      <div className="text-[10px] opacity-60 uppercase mb-1">Wallet Balance</div>
                      <div className="text-2xl font-black tracking-tighter">₹32,840.00</div>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      {["AePS", "DMT", "Bills", "Recharge"].map(item => (
                        <div key={item} className="bg-slate-50 p-4 rounded-xl text-center text-[10px] font-black uppercase text-slate-900 border border-slate-100">{item}</div>
                      ))}
                   </div>
                   <div className="pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">Recent Transactions</div>
                      <div className="flex justify-between text-[10px] font-bold py-2 border-b border-slate-50"><span>Withdrawal</span><span className="text-emerald-500">+₹84</span></div>
                      <div className="flex justify-between text-[10px] font-bold py-2 border-b border-slate-50"><span>DMT Transfer</span><span className="text-emerald-500">+₹150</span></div>
                   </div>
                </div>
                {/* Dynamic Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}