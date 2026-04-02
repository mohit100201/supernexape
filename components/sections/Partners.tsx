"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Users, Code, CheckCircle, ArrowUpRight } from 'lucide-react';

const TABS = [
  { id: 'r', icon: <Store size={18}/>, label: 'Retailer', title: 'Start a Banking Shop', val: '₹50,000+' },
  { id: 'd', icon: <Users size={18}/>, label: 'Distributor', title: 'Network Builder', val: '₹5 Lakh+' },
  { id: 'a', icon: <Code size={18}/>, label: 'API Partner', title: 'Developer Portal', val: 'Direct Access' },
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState('r');

  return (
    <section className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-2 mb-20 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                activeTab === tab.id ? 'bg-cyan-500 text-white shadow-xl translate-y-[-4px]' : 'bg-slate-900 text-slate-400 border border-white/5'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="grid lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-3xl p-12 lg:p-20 rounded-[4rem] border border-white/10"
          >
            <div>
              <h3 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">
                {TABS.find(t => t.id === activeTab)?.title}
              </h3>
              <ul className="space-y-6">
                {['Zero Joining Fee', 'Instant Commission Delivery', 'Full Technical Support'].map((item) => (
                  <li key={item} className="flex items-center gap-4 font-bold text-slate-300 uppercase text-xs tracking-widest">
                    <CheckCircle className="text-cyan-400" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-16 rounded-[3rem] flex flex-col justify-center text-center shadow-inner">
              <span className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em] mb-4">Monthly Potential</span>
              <div className="text-6xl font-black text-slate-950 mb-8 tracking-tighter">
                {TABS.find(t => t.id === activeTab)?.val}
              </div>
              <button className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-500 transition-colors flex items-center justify-center gap-3">
                Apply Now <ArrowUpRight size={20}/>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}