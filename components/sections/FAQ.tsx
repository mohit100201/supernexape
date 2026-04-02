"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "What documents are required?", a: "Aadhaar Card, PAN Card, and a bank passbook. Activation usually takes 24 hours." },
  { q: "Is there any registration fee?", a: "No. SuperNexape registration is 100% free for retailers." },
  { q: "When is commission paid?", a: "Commission is credited to your wallet instantly in real-time." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left font-bold text-slate-900"
              >
                {faq.q}
                {open === i ? <Minus size={20}/> : <Plus size={20}/>}
              </button>
              {open === i && (
                <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
