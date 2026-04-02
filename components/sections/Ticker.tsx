export default function Ticker() {
  const items = ["AePS Cash Withdrawal", "DMT Money Transfer", "Mobile Recharge", "BBPS Bill Payments", "IRCTC Booking", "PAN Services", "Micro ATM", "Insurance"];

  return (
    <div className="bg-cyan-500 py-5 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="animate-ticker flex items-center">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="inline-flex items-center mx-10 text-white font-black text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-white/40 mr-4" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}