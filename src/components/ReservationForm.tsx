import { useState } from 'react';
import { motion } from 'motion/react';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    invitados: '',
    mensaje: ''
  });

  const WHATSAPP_NUMBER = '5492215348635';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let formattedDate = formData.fecha;
    if (formData.fecha) {
      const [year, month, day] = formData.fecha.split('-');
      if (year && month && day) {
        formattedDate = `${day}/${month}/${year}`;
      }
    }

    const text = `Hola Jota Eventos! Quería consultar por una reserva.%0A%0A*Nombre:* ${formData.nombre}%0A*Fecha:* ${formattedDate}%0A*Invitados:* ${formData.invitados}%0A*Mensaje:* ${formData.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="reserva" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h3 className="text-[11px] tracking-widest uppercase mb-4 opacity-60">RESERVA TU FECHA</h3>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Planifiquemos tu Evento</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-8 h-[1px] bg-neutral-900"></div>
          <div className="w-8 h-[1px] bg-neutral-900 opacity-20"></div>
        </div>
      </div>
        
      <div className="max-w-xl mx-auto">
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit} 
          className="bg-white border border-cream-dark p-8 md:p-10 shadow-sm flex flex-col gap-4"
        >
          <input 
            required
            type="text" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full bg-cream border-none p-4 text-xs focus:ring-1 focus:ring-sage outline-none font-sans" 
            placeholder="Nombre Completo"
          />
          
          <input 
            required
            type="date" 
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="w-full bg-cream border-none p-4 text-xs focus:ring-1 focus:ring-sage outline-none font-sans uppercase text-neutral-500" 
          />

          <select 
            name="invitados"
            value={formData.invitados}
            onChange={handleChange}
            className="w-full bg-cream border-none p-4 text-xs focus:ring-1 focus:ring-sage outline-none font-sans text-neutral-500"
          >
            <option value="">Cantidad de Invitados</option>
            <option value="hasta 30">Hasta 30 personas</option>
            <option value="30 a 60">30 a 60 personas</option>
            <option value="más de 60">Más de 60 personas</option>
          </select>

          <textarea 
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full bg-cream border-none p-4 text-xs focus:ring-1 focus:ring-sage outline-none font-sans resize-none" 
            placeholder="¿Qué tipo de celebración es?"
          ></textarea>

          <button 
            type="submit" 
            className="w-full bg-sage text-white py-4 mt-2 tracking-widest uppercase text-[10px] hover:bg-sage-dark transition-colors"
          >
            Enviar a WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
