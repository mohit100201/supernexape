"use client";
import React from "react";
import { motion } from "framer-motion";
import { History, ShieldCheck, TrendingUp, Users } from "lucide-react";

const STATS = [
  { label: "Active Retailers", value: "5L+", color: "text-cyan-500" },
  { label: "States Covered", value: "28+", color: "text-slate-900" },
  { label: "Founded", value: "2012", color: "text-orange-500" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-600 font-black text-xs uppercase tracking-[0.3em] block mb-4">
              Corporate Profile
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
              Pioneering Rural <br />
              <span className="text-cyan-500">Digital Banking.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium">
              Established in 2012, <strong className="text-slate-900">SuperNexape</strong> has evolved from a simple recharge utility into India’s most robust banking correspondent infrastructure.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  RBI Compliant and ISO Certified processes ensuring 100% security for every paisa processed.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shrink-0">
                  <TrendingUp size={20} />
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  Processing ₹500Cr+ monthly volume across 700+ districts in India.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center text-center group hover:border-cyan-200 transition-all">
                <div className={`text-4xl font-black mb-2 font-outfit ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col items-center justify-center text-center">
               <History className="text-cyan-400 mb-2" size={24} />
               <div className="text-[10px] font-black uppercase tracking-widest opacity-60">12+ Years of Trust</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}