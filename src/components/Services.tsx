import { motion } from 'motion/react';
import { Check, Star, Plus } from 'lucide-react';

export function Services() {
  return (
    <section id="espacio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-cream-dark">
      <div className="text-center mb-16">
        <h3 className="text-[11px] tracking-widest uppercase mb-4 opacity-60">LA EXPERIENCIA</h3>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Todo lo que Necesitás</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-8 h-[1px] bg-neutral-900"></div>
          <div className="w-8 h-[1px] bg-neutral-900 opacity-20"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Incluido */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-cream-dark p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Check size={18} className="text-sage" />
            <h4 className="text-[13px] tracking-widest uppercase font-medium">Incluido</h4>
          </div>
          <ul className="space-y-4 text-sm font-light text-neutral-600">
            <li className="flex gap-2">
              <span className="text-sage mt-1">✓</span> 3 horas de evento
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✓</span> Animación completa
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✓</span> Salón totalmente equipado
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✓</span> Moza y encargada de cocina
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✓</span> WiFi, Seguro Civil y Médico
            </li>
          </ul>
        </motion.div>

        {/* Juegos y Atracciones */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-cream-dark p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star size={18} className="text-sage" />
            <h4 className="text-[13px] tracking-widest uppercase font-medium">Atracciones</h4>
          </div>
          <ul className="space-y-4 text-sm font-light text-neutral-600">
            <li className="flex gap-2">
              <span className="text-sage mt-1">✦</span> Inflable Dante y Pelotero Pelusa
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✦</span> Juegos de agua y Spa
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✦</span> Plaza blanda y Laberinto
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✦</span> Metegol, Sapo y Rayuela
            </li>
            <li className="flex gap-2">
              <span className="text-sage mt-1">✦</span> Malones
            </li>
          </ul>
        </motion.div>

        {/* Extras */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-900 text-white border border-neutral-800 p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Plus size={18} className="text-sage-light" />
            <h4 className="text-[13px] tracking-widest uppercase font-medium">Servicios Extras</h4>
          </div>
          <ul className="space-y-4 text-sm font-light text-neutral-300">
            <li className="flex gap-2">
              <span className="opacity-50 mt-1">+</span> Menú adultos e infantil
            </li>
            <li className="flex gap-2">
              <span className="opacity-50 mt-1">+</span> Show de burbujas
            </li>
            <li className="flex gap-2">
              <span className="opacity-50 mt-1">+</span> Música
            </li>
            <li className="flex gap-2">
              <span className="opacity-50 mt-1">+</span> Piñata incluida (opcional)
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
