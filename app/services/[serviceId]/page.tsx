"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/layout/NavBar";
import { HOME_SERVICES } from "@/app/lib/constants";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const router = useRouter();
  
  // Find the service data based on the URL ID
  const service = HOME_SERVICES.find(s => s.id === serviceId);

  if (!service) return <div className="p-20 text-center font-black">Service Not Found</div>;

  const Icon = service.icon;

  return (
    <>
      
      <main className="pt-24 bg-white min-h-screen">
        
        {/* Detail Hero */}
        <section className="bg-slate-950 py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <button 
              onClick={() => router.back()} 
              className="flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> Return to Suite
            </button>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-12">
               <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-cyan-500">
                  <Icon size={48} />
               </div>
               <div>
                  <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
                    {service.title}
                  </h1>
                  <p className="text-slate-400 text-lg max-w-xl font-medium opacity-80 italic">
                    "{service.desc}"
                  </p>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Info Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left: Key Features */}
            <div className="lg:col-span-2 space-y-8">
               <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3">
                  <Zap className="text-cyan-500" size={24} /> Key Deliverables
               </h2>
               <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-start gap-4">
                       <CheckCircle2 className="text-cyan-500 shrink-0" size={18} />
                       <p className="text-xs font-bold text-slate-600 leading-relaxed uppercase tracking-tight">
                         High-uptime processing with real-time settlement & automated reconciliation.
                       </p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Revenue Card */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                    <TrendingUp className="text-cyan-400" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profit Margin</span>
                </div>
                <div className="text-5xl font-black tracking-tighter mb-2 font-outfit text-cyan-400">
                    {service.earn}
                </div>
                <p className="text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">Potential Daily Revenue</p>
                
                <div className="space-y-4 mb-10">
                   <div className="flex justify-between text-[10px] font-black uppercase border-b border-white/5 pb-2">
                      <span className="text-slate-500">Uptime</span> <span className="text-emerald-400">99.9%</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-black uppercase border-b border-white/5 pb-2">
                      <span className="text-slate-500">Settlement</span> <span className="text-white">Real-Time</span>
                   </div>
                </div>

                <button className="w-full py-4 bg-cyan-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-cyan-600 transition-all active:scale-95 shadow-xl shadow-cyan-500/20">
                    Register to Start
                </button>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}