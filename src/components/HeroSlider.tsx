import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/galeria_1.jpg',
    title: 'ESPACIO DIVERTIDO',
  },
  {
    image: '/galeria_2.jpg',
    title: 'FIESTAS ÚNICAS',
  },
  {
    image: '/galeria_3.jpg',
    title: 'DIVERSIÓN TOTAL',
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-cream" id="inicio">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-cream-dark z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover opacity-60 relative z-20 mix-blend-multiply"
          />
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-neutral-900 px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight uppercase mb-4 text-center text-neutral-900"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-80 max-w-lg mx-auto text-center mt-2"
            >
              Un entorno alegre y elegante diseñado para vos
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-[1px] transition-all duration-500 ${
              idx === current ? 'bg-neutral-900 w-12' : 'bg-neutral-900/30 w-12 hover:bg-neutral-900/60'
            }`}
          />
        ))}
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-neutral-900/70 hover:text-neutral-900 transition-colors p-2">
        <ChevronLeft strokeWidth={1} size={40} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-neutral-900/70 hover:text-neutral-900 transition-colors p-2">
        <ChevronRight strokeWidth={1} size={40} />
      </button>
    </div>
  );
}
