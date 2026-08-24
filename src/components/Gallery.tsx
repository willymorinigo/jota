import { motion } from 'motion/react';

const images = [
  '/galeria_1.jpg',
  '/galeria_2.jpg',
  '/galeria_3.jpg',
  '/galeria_4.jpg',
  '/galeria_5.jpg',
  '/galeria_6.jpg',
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-[11px] tracking-widest uppercase mb-4 opacity-60">NUESTRO ESPACIO</h3>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Galería del Espacio</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-8 h-[1px] bg-neutral-900"></div>
          <div className="w-8 h-[1px] bg-neutral-900 opacity-20"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative aspect-square overflow-hidden bg-cream-dark"
          >
            <div className="absolute inset-0 bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={src}
              alt={`Espacio evento ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
