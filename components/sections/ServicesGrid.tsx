"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HOME_SERVICES } from "@/app/lib/constants";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-600 font-black text-xs uppercase tracking-[0.4em] block mb-4"
          >
            Digital Service Hub
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            One Platform. <span className="text-cyan-500">25+ Services.</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
            Everything your customers need, from cash withdrawals to travel bookings, powered by one single wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_SERVICES.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/services/${s.id}`}
                  className="group relative block p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute top-6 right-6 text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white border border-slate-200 text-slate-400 rounded-full group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-colors">
                    {s.tag}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className={s.color} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 font-medium">{s.desc}</p>

                  
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-block px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-xl active:scale-95"
          >
            Explore All 25+ Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
