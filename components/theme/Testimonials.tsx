import React, { useEffect, useState, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused || !testimonials.length) return;
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextTestimonial, testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Thousands</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[450px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full"
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl flex flex-col items-center text-center">
                <div className="absolute top-8 left-10 hidden md:block opacity-20">
                  <Quote size={80} className="text-white" />
                </div>

                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-3xl text-white font-light italic leading-relaxed mb-10">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md opacity-50" />
                    <img
                      src={testimonials[current].avatar || `https://i.pravatar.cc/150?u=${current}`}
                      alt={testimonials[current].author}
                      className="relative w-20 h-20 rounded-full border-2 border-white/50 object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl tracking-wide">
                      {testimonials[current].author}
                    </div>
                    <div className="text-pink-200/70 text-sm font-medium uppercase tracking-wider">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Navigation Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsPaused(true);
              }}
              className="group relative py-4"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`h-1.5 transition-all duration-500 rounded-full ${
                index === current 
                  ? "w-10 bg-gradient-to-r from-orange-400 to-pink-500" 
                  : "w-4 bg-white/20 group-hover:bg-white/40"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;