export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-cyan-500 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8">Ready to start earning?</h2>
          <p className="text-cyan-100 text-lg mb-12 max-w-xl mx-auto font-medium">Join 5 Lakh+ retailers across India. Free registration, instant activation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="tel" 
              placeholder="Enter Mobile Number" 
              className="px-8 py-5 rounded-2xl bg-white text-slate-900 w-full max-w-xs focus:outline-none font-bold"
            />
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-slate-800 transition-all active:scale-95 w-full sm:w-auto">
              Register Free
            </button>
          </div>
        </div>
        {/* Background Decorative Rings */}
        <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>
    </section>
  );
}