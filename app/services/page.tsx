"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import { HOME_SERVICES } from "../lib/constants";


export default function AllServicesPage() {
  return (
    <>
     
      <main className="pt-32 bg-white">
        {/* Header Section */}
        <section className="bg-slate-950 py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
             <nav className="flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-6 justify-center lg:justify-start">
                <Link href="/">Home</Link> <ChevronRight size={10} /> <span className="text-white opacity-40">All Services</span>
             </nav>
             <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
                Our Service <span className="text-cyan-500">Suite.</span>
             </h1>
             <p className="text-slate-400 text-lg max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                Institutional-grade financial infrastructure. One wallet, 25+ real-time banking services.
             </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link href={`/services/${s.id}`} className="group block p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 hover:shadow-2xl transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className={s.color} size={24} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6 font-medium line-clamp-2">{s.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                       <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{s.earn}</span>
                       <ArrowRight size={14} className="text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}