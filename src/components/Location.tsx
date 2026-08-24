export function Location() {
  return (
    <section id="ubicacion" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-[11px] tracking-widest uppercase mb-4 opacity-60">NUESTRA UBICACIÓN</h3>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Dónde Encontrarnos</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-8 h-[1px] bg-neutral-900"></div>
          <div className="w-8 h-[1px] bg-neutral-900 opacity-20"></div>
        </div>
      </div>
      
      <div className="w-full h-[400px] bg-cream-dark relative overflow-hidden group">
        <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none z-10" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.696191769647!2d-57.94042882347101!3d-34.93918597371901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e66cc485efb1%3A0xa1936e78ecfa6ff9!2sC.%207%201756%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover absolute inset-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="bg-white px-6 py-3 text-[10px] shadow-sm tracking-widest uppercase flex items-center gap-2">
            <svg width='14' height='14' fill='currentColor' viewBox='0 0 16 16'><path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'/></svg>
            Calle 7 n 1756, La Plata
          </div>
        </div>
      </div>
    </section>
  );
}
