"use client";
import { SettingsData } from "@/interface/common.interface";
import { CheckCircle2, Clock, Lock as LockIcon, ShieldCheck, Cpu, Globe, Zap, Server } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface FeaturesProps {
  settingsData: SettingsData;
}

const Features: React.FC<FeaturesProps> = ({ settingsData }) => {
  // --- Removed useScroll/useTransform to prevent layout shifting ---

  const metrics = [
    { label: "Daily Transactions", value: "2M+", icon: Zap },
    { label: "Global Nodes", value: "140+", icon: Globe },
    { label: "Average Latency", value: "<40ms", icon: Cpu },
  ];

  const features = [
    {
      icon: LockIcon,
      title: "PCI DSS Level 1",
      desc: "Military-grade certification for secure global processing.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      title: "Real-time Audits",
      desc: "Continuous automated monitoring with 0-sec response.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: CheckCircle2,
      title: "Uptime SLA",
      desc: "Guaranteed 99.99% availability via redundant clusters.",
      color: "from-emerald-500 to-teal-400",
    },
    {
      icon: Server,
      title: "Multi-Cloud",
      desc: "Distributed infrastructure across AWS, Azure, and Google.",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative bg-[#020617] overflow-hidden border-b border-white/5">
      
      {/* 1. BACKGROUND GRID (Z-Index -1) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-8"
          >
            <ShieldCheck size={16} /> Security Architecture v2.0
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Built for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-text-shimmer bg-[length:200%_auto]">
              Modern Enterprise
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 border-t border-b border-white/5 py-10">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-1">
                <m.icon className="mx-auto text-indigo-500 mb-3" size={20} />
                <div className="text-3xl md:text-4xl font-black text-white">{m.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <f.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-black text-white mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Live Data Bar (Static Height) */}
            <div className="p-6 rounded-[2rem] bg-indigo-600/5 border border-indigo-500/20">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Network Traffic Live</span>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase">AES_256_ENC</div>
                </div>
                <div className="flex items-end gap-1 h-8">
                    {[...Array(32)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ height: ["20%", "80%", "30%", "100%", "20%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                            className="flex-1 bg-indigo-500/30 rounded-full"
                        />
                    ))}
                </div>
            </div>
          </div>

          {/* Right Side: Visual (Self-Contained) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img
                src={
                  settingsData?.url1
                    ? `https://api.pinepe.in/storage/${settingsData.url1}`
                    : "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                }
                alt="Server"
                className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-indigo-500">
                          <ShieldCheck className="text-white" size={18} />
                      </div>
                      <div>
                          <div className="text-white font-black text-xs uppercase tracking-tight">Security Protocol</div>
                          <div className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">Active Verification</div>
                      </div>
                  </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;