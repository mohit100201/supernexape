"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Cpu, 
  Globe, 
  Server, 
  Activity,
  CheckCircle2
} from "lucide-react";

const METRICS = [
  { label: "Daily Transactions", value: "2M+", icon: Activity },
  { label: "Global Nodes", value: "140+", icon: Globe },
  { label: "Average Latency", value: "<40ms", icon: Cpu },
];

const CORE_FEATURES = [
  {
    icon: <Lock className="text-blue-400" />,
    title: "PCI DSS Level 1",
    desc: "The gold standard in security for global payment processing.",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: <Zap className="text-orange-400" />,
    title: "Real-time Audits",
    desc: "Continuous automated monitoring with sub-second response times.",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    icon: <CheckCircle2 className="text-emerald-400" />,
    title: "99.99% Uptime",
    desc: "Enterprise-grade reliability via geographically redundant clusters.",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: <Server className="text-indigo-400" />,
    title: "Multi-Cloud Stack",
    desc: "Infrastructure distributed across AWS, Azure, and Google Cloud.",
    gradient: "from-indigo-500/20 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative bg-[#020617] overflow-hidden">
      
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <ShieldCheck size={14} /> Security Architecture v2.0
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight font-outfit">
            Built for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400">
              Modern Enterprise
            </span>
          </h2>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 border-y border-white/5 py-10">
            {METRICS.map((m, i) => (
              <div key={i} className="space-y-1">
                <m.icon className="mx-auto text-indigo-500 mb-3" size={20} />
                <div className="text-3xl md:text-4xl font-black text-white font-outfit">{m.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INTERACTIVE CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bento Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {CORE_FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden hover:border-indigo-500/30 transition-colors"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-black text-white mb-2 tracking-tight uppercase">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Live Data Visualization (The Pulse) */}
            <div className="p-6 rounded-[2rem] bg-indigo-600/5 border border-indigo-500/20">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Network Traffic Live</span>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">Encrypted_Channel: AES_256_GCM</div>
                </div>
                {/* Animated Bars */}
                <div className="flex items-end gap-1.5 h-10">
                    {[...Array(40)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ height: ["20%", "70%", "40%", "100%", "20%"] }}
                            transition={{ 
                              duration: 1.5 + Math.random(), 
                              repeat: Infinity, 
                              delay: i * 0.05 
                            }}
                            className="flex-1 bg-indigo-500/20 rounded-full"
                        />
                    ))}
                </div>
            </div>
          </div>

          {/* Right Side: Immersive Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Fintech Infrastructure"
                className="w-full h-[550px] object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
              
              {/* Floating ID Tag */}
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10">
                  <div className="flex items-center gap-5">
                      <div className="p-3 rounded-2xl bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                          <ShieldCheck className="text-white" size={20} />
                      </div>
                      <div>
                          <div className="text-white font-black text-sm uppercase tracking-tight">NexApe Guard v4.2</div>
                          <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">End-to-End Encrypted</div>
                      </div>
                  </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}