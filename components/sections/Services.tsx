"use client";
import React from "react";
import { 
  Landmark, Banknote, Smartphone, Receipt, CreditCard, 
  ShieldCheck, Plane, FileText, Medal, Fingerprint, 
  Wallet, Car, BadgePercent, TrendingUp, UserPlus, Ticket 
} from "lucide-react";
import { motion } from "framer-motion";
// Add this import at the top
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: <Landmark className="text-orange-500" />, title: "AePS Aadhaar ATM", desc: "Cash withdrawal & balance enquiry via biometric.", earn: "₹150", tag: "Hot" },
  { icon: <Banknote className="text-blue-500" />, title: "Money Transfer", desc: "Instant IMPS/NEFT transfers to 400+ banks.", earn: "₹250", tag: "Popular" },
  { icon: <Smartphone className="text-purple-500" />, title: "Mobile & DTH", desc: "Recharge for Jio, Airtel, Vi, and all DTH.", earn: "4%", tag: "Instant" },
  { icon: <Receipt className="text-emerald-500" />, title: "BBPS Payments", desc: "Pay Electricity, Gas, Water, and Broadband bills.", earn: "₹50", tag: "Essential" },
  { icon: <CreditCard className="text-indigo-500" />, title: "Micro ATM", desc: "Debit card cash withdrawals at your shop.", earn: "₹50", tag: "New" },
  { icon: <ShieldCheck className="text-rose-500" />, title: "Insurance", desc: "Life, Health, Motor, and Crop insurance plans.", earn: "25%", tag: "High Margin" },
  { icon: <Plane className="text-cyan-500" />, title: "Travel & IRCTC", desc: "Train, Bus, and Flight ticket bookings.", earn: "₹500", tag: "Premium" },
  { icon: <FileText className="text-slate-500" />, title: "PAN Services", desc: "Apply for new PAN card or corrections instantly.", earn: "₹100", tag: "Govt" },
  { icon: <Medal className="text-amber-500" />, title: "Digital Gold", desc: "Buy 24K certified gold starting from ₹10.", earn: "2%", tag: "Safe" },
  { icon: <Fingerprint className="text-cyan-600" />, title: "Aadhaar Pay", desc: "Accept payments via Aadhaar without cards.", earn: "Merchant", tag: "Active" },
  { icon: <Wallet className="text-emerald-600" />, title: "Cash Collection", desc: "Collect loan EMIs for HDFC, Bajaj, and SBI.", earn: "₹50", tag: "CMS" },
  { icon: <Car className="text-orange-600" />, title: "FASTag", desc: "Instant recharge for all bank FASTags.", earn: "Instant", tag: "Travel" },
  { icon: <BadgePercent className="text-blue-600" />, title: "Loan Services", desc: "Personal and Business loan lead generation.", earn: "Payout", tag: "Finance" },
  { icon: <TrendingUp className="text-purple-600" />, title: "Mutual Funds", desc: "Start SIPs for your customers easily.", earn: "Trail", tag: "Invest" },
  { icon: <UserPlus className="text-indigo-600" />, title: "Account Opening", desc: "Open Savings & Current accounts via e-KYC.", earn: "₹300", tag: "Banking" },
  { icon: <Ticket className="text-rose-600" />, title: "Insurance POS", desc: "Become a certified IRDA Insurance agent.", earn: "High", tag: "Certified" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Floating Badge */}
              <span className="absolute top-6 right-6 text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white border border-slate-200 text-slate-400 rounded-full group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-colors">
                {s.tag}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement, )}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-8 font-medium">{s.desc}</p>
              
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                 <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-cyan-600 uppercase tracking-widest">Commission</span>
                   <span className="text-sm font-black text-slate-900 uppercase">{s.earn}</span>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
           <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-xl active:scale-95">
              Explore All 25+ Solutions
           </button>
        </div>
      </div>
    </section>
  );
}

