"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Store, 
  Users, 
  Globe, 
  Cpu, 
  Tag, 
  Lightbulb, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

const MODELS = [
  {
    icon: <Store size={28} />,
    title: "Retailer",
    desc: "Turn your shop into a digital bank. 25+ services. Zero fee.",
    earn: "₹50,000+/mo",
    color: "text-cyan-500",
  },
  {
    icon: <Users size={28} />,
    title: "Distributor",
    desc: "Build a retailer network. Earn override commissions.",
    earn: "₹5 Lakh+/mo",
    color: "text-blue-500",
  },
  {
    icon: <Globe size={28} />,
    title: "Master Dist.",
    desc: "State-level leadership. Manage entire districts.",
    earn: "₹10 Lakh+/mo",
    color: "text-indigo-500",
  },
  {
    icon: <Cpu size={28} />,
    title: "API Partner",
    desc: "Integrate our secure REST APIs into your own app.",
    earn: "Custom Payouts",
    color: "text-purple-500",
  }
];

export default function PartnershipSection() {
  return (
    <section id="partners" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-600 font-black text-xs uppercase tracking-[0.3em] block mb-4">
              Revenue Models
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Scale With <span className="text-cyan-500 font-outfit">NexApe.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-cyan-500 transition-colors">
            View All Models <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-slate-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-200 relative overflow-hidden"
            >
              <div className={`${item.color} mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
              </div>

              <h3 className="font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-[11px] leading-relaxed mb-6 font-medium h-10">
                {item.desc}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between group-hover:bg-cyan-50 transition-colors">
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Potential</span>
                    <span className={`text-xs font-black uppercase ${item.color}`}>{item.earn}</span>
                </div>
                <TrendingUp size={14} className={item.color} />
              </div>

              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-cyan-500/5 blur-2xl rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}