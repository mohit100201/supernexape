"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Send, Smartphone, Zap, CreditCard, ShieldCheck, Rocket, List } from 'lucide-react';

const ORBIT_SERVICES = [
  { icon: <Landmark size={20} />, label: 'AePS' },
  { icon: <Send size={20} />, label: 'DMT' },
  { icon: <Smartphone size={20} />, label: 'Recharge' },
  { icon: <Zap size={20} />, label: 'BBPS' },
  { icon: <CreditCard size={20} />, label: 'mATM' },
  { icon: <ShieldCheck size={20} />, label: 'Insurance' },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-950 pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            🇮🇳 India's Fastest Growing Fintech Network
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            Turn Your Shop Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Digital Bank.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed font-medium">
            Join 5L+ retailers. Offer AePS, Money Transfer, and 25+ services. Real-time commission credited instantly.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-cyan-500/30 active:scale-95 flex items-center gap-3">
              <Rocket size={18} /> Register Free
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 border border-white/10 transition-all">
              <List size={18} /> All Services
            </button>
          </div>
        </motion.div>

        {/* Orbit Visualization */}
        <div className="relative hidden lg:flex justify-center items-center h-[500px]">
          {/* Orbit Rings */}
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
          <div className="absolute w-[280px] h-[280px] border border-white/10 rounded-full" />
          
          {/* Center Logo - REDUCED SIZE */}
          <div className="z-20 bg-slate-900 px-6 py-3 rounded-full border border-cyan-500/30 shadow-[0_0_40px_rgba(14,165,184,0.2)]">
              <span className="text-white font-black text-xl uppercase tracking-tighter italic">
                SuperNex<span className="text-cyan-500">Ape</span>
              </span>
          </div>

          {/* Orbiting Icons */}
          {ORBIT_SERVICES.map((svc, i) => {
            const angle = (i * 360) / ORBIT_SERVICES.length;
            return (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ 
                    width: '400px', // Diameter of the path
                    height: '400px',
                    rotate: angle 
                }}
              >
                <motion.div 
                  className="w-14 h-14 bg-slate-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-xl text-white group hover:border-cyan-500 transition-colors"
                  animate={{ rotate: -360 }} // Counter-rotate to stay upright
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ marginLeft: 'auto' }} // Pushes the icon to the edge of the 400px diameter
                >
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">{svc.icon}</div>
                  <span className="text-[7px] font-black uppercase mt-1 tracking-tighter">{svc.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}