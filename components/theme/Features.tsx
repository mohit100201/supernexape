import { SettingsData } from "@/interface/common.interface";
import { CheckCircle2, Clock, DollarSign, Lock as LockIcon, ShieldCheck } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface FeaturesProps {
  settingsData: SettingsData;
}

const Features: React.FC<FeaturesProps> = ({ settingsData }) => {
  const features = [
    {
      icon: LockIcon,
      title: "PCI DSS Level 1",
      desc: "Highest security certification for global payments.",
      color: "text-blue-400",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      desc: "Round-the-clock surveillance and instant alerts.",
      color: "text-orange-400",
    },
    {
      icon: CheckCircle2,
      title: "99.99% Uptime",
      desc: "Industry-leading reliability you can count on.",
      color: "text-emerald-400",
    },
    {
      icon: DollarSign,
      title: "Best Rates",
      desc: "Competitive pricing with no hidden fees.",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950">
      {/* --- THE ANIMATED GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-orange-600/30 to-transparent blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -50, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-tl from-blue-600/20 to-transparent blur-[120px] rounded-full" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
              <ShieldCheck size={16} />
              Security & Reliability
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-400">
                Enterprise Scale
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300/80 mb-12 leading-relaxed max-w-xl">
              Bank-grade infrastructure trusted by the world's leading companies. 
              We handle complex transactions with military-grade encryption.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10">
                      <Icon className={feature.color} size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image/Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Image Glowing Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src={
                  settingsData?.url1
                    ? `https://api.pinepe.in/storage/${settingsData.url1}`
                    : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                }
                alt="Dashboard"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 to-transparent" />
            </div>

            {/* Floating Glass Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white/10 backdrop-blur-2xl p-5 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 flex items-center gap-4"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <div>
                <div className="text-white font-bold text-xs uppercase tracking-tighter">Live Security</div>
                <div className="text-slate-300 text-[10px] font-medium">Encrypted & Verified</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;