"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    loc: "Jaipur, Rajasthan",
    text: "Kirana shop mein PinePe lagaya — pehle mahine hi ₹18,000 extra kama liya sirf AePS aur money transfer se. Commission real-time milta hai.",
    initials: "RK",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Anil Verma",
    loc: "Lucknow, Uttar Pradesh",
    text: "420 retailers ke saath ₹2.5 Lakh per month consistently. PinePe ka back-office excellent hai — real-time data, fund management, sab smooth.",
    initials: "AV",
    color: "from-orange-400 to-red-500"
  },
  {
    name: "Sunita Patel",
    loc: "Indore, Madhya Pradesh",
    text: "Insurance commission sabse zyada milta hai. Medical shop ke saath ₹22,000 extra income ho jaata hai monthly without any extra effort.",
    initials: "SP",
    color: "from-purple-400 to-indigo-500"
  },
  {
    name: "Prashant Tiwari",
    loc: "Pune, Maharashtra",
    text: "API integration sirf 3 din mein hua. 99.9% uptime guaranteed. Best fintech API partner in India for financial services.",
    initials: "PT",
    color: "from-emerald-400 to-teal-500"
  },
  {
    name: "Mahesh Gupta",
    loc: "Patna, Bihar",
    text: "Fertilizer shop ke saath ₹25,000 extra per month PinePe se. AePS ke through gaon ke log cash nikalte hain mere yahan. Sab mere paas aate hain!",
    initials: "MG",
    color: "from-blue-400 to-indigo-600"
  },
  {
    name: "Dinesh Singh",
    loc: "Bhubaneswar, Odisha",
    text: "White Label brand PinePe se 7 din mein launch kiya. Ab 1,800 retailers in 4 states. Tech infrastructure world-class hai.",
    initials: "DS",
    color: "from-rose-400 to-orange-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
            Real Retailers. <br />
            <span className="text-cyan-500 font-outfit">Real Results.</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            NexApe partners earning extra income every month across 28+ states in India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Floating Quote Icon */}
              <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-cyan-500/10 transition-colors duration-500" size={60} />

              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <p className="text-slate-600 italic font-medium leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-black text-sm shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-cyan-600 uppercase tracking-widest mt-1">
                    <MapPin size={10} />
                    {review.loc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}