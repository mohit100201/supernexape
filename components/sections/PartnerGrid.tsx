"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Store, 
  Users, 
  Globe, 
  Link as LinkIcon, 
  Tag, 
  Lightbulb, 
  ArrowRight 
} from "lucide-react";

const PARTNER_MODELS = [
  {
    icon: <Store size={32} />,
    title: "Become a Retailer",
    desc: "Turn your shop into a digital banking outlet. Offer 25+ services. Zero fee.",
    earning: "Earn ₹50,000+/month",
    link: "#",
    color: "text-cyan-500"
  },
  {
    icon: <Users size={32} />,
    title: "Become a Distributor",
    desc: "Build a retailer network. Earn override commission on all transactions.",
    earning: "Earn ₹5 Lakh+/month",
    link: "#",
    color: "text-blue-500"
  },
  {
    icon: <Globe size={32} />,
    title: "Master Distributor",
    desc: "State-level fintech leadership. Onboard distributors, earn on entire state.",
    earning: "Earn ₹10 Lakh+/month",
    link: "#",
    color: "text-indigo-500"
  },
  {
    icon: <LinkIcon size={32} />,
    title: "API Partner",
    desc: "Integrate NexApe APIs into your app. 25+ financial services. 99.9% uptime.",
    earning: "Custom pricing",
    link: "#",
    color: "text-purple-500"
  },
  {
    icon: <Tag size={32} />,
    title: "White Label Solution",
    desc: "Launch your own fintech brand in 7 days on our robust infrastructure.",
    earning: "Highest margins",
    link: "#",
    color: "text-rose-500"
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Custom Partnership",
    desc: "Have a unique use case? We partner with banks, NBFCs, and enterprises.",
    earning: "Contact for details",
    link: "#",
    color: "text-amber-500"
  }
];

export default function PartnerGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-cyan-600 font-black text-xs uppercase tracking-[0.3em] block mb-4">
            Partnership Models
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Partner With <span className="text-cyan-500">NexApe</span>
          </h2>
          <p className="text-slate-500 max-w-2xl font-medium leading-relaxed">
            Choose the partnership model that fits your ambition. From local shop owners to state-level fintech leaders.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNER_MODELS.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-slate-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-200 block relative overflow-hidden"
            >
              {/* Icon */}
              <div className={`${item.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-black text-xl text-slate-900 mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {item.desc}
              </p>

              {/* Stats/Earning Badge */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-6 group-hover:bg-cyan-50 transition-colors duration-500">
                <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>
                  {item.earning}
                </span>
              </div>

              {/* Footer Link */}
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-widest">
                Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}