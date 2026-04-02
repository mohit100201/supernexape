// src/lib/services-data.ts
import { 
  Landmark, Banknote, Smartphone, Receipt, CreditCard, 
  ShieldCheck, Plane, FileText, Medal, Fingerprint, 
  Wallet, Car, BadgePercent, TrendingUp, UserPlus, Ticket 
} from "lucide-react";

export const HOME_SERVICES = [
  { id: "aeps", icon: Landmark, title: "AePS Aadhaar ATM", desc: "Cash withdrawal & balance enquiry via biometric.", earn: "₹150", tag: "Hot", color: "text-orange-500" },
  { id: "dmt", icon: Banknote, title: "Money Transfer", desc: "Instant IMPS/NEFT transfers to 400+ banks.", earn: "₹250", tag: "Popular", color: "text-blue-500" },
  { id: "recharge", icon: Smartphone, title: "Mobile & DTH", desc: "Recharge for Jio, Airtel, Vi, and all DTH.", earn: "4%", tag: "Instant", color: "text-purple-500" },
  { id: "bbps", icon: Receipt, title: "BBPS Payments", desc: "Pay Electricity, Gas, Water, and Broadband bills.", earn: "₹50", tag: "Essential", color: "text-emerald-500" },
  { id: "microatm", icon: CreditCard, title: "Micro ATM", desc: "Debit card cash withdrawals at your shop.", earn: "₹50", tag: "New", color: "text-indigo-500" },
  { id: "insurance", icon: ShieldCheck, title: "Insurance", desc: "Life, Health, Motor, and Crop insurance plans.", earn: "25%", tag: "High Margin", color: "text-rose-500" },
  { id: "travel", icon: Plane, title: "Travel & IRCTC", desc: "Train, Bus, and Flight ticket bookings.", earn: "₹500", tag: "Premium", color: "text-cyan-500" },
  { id: "pan", icon: FileText, title: "PAN Services", desc: "Apply for new PAN card or corrections instantly.", earn: "₹100", tag: "Govt", color: "text-slate-500" },
];