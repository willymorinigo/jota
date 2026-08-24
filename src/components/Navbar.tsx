import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-12 py-6 border-b border-cream-dark bg-cream/90 backdrop-blur-sm">
      <Logo />
      
      <div className="hidden md:flex gap-10 mt-4 md:mt-0 text-[11px] tracking-widest uppercase opacity-70">
        <a href="#inicio" className="hover:opacity-100 border-b border-transparent hover:border-neutral-900 transition-all">Inicio</a>
        <a href="#espacio" className="hover:opacity-100 border-b border-transparent hover:border-neutral-900 transition-all">El Espacio</a>
        <a href="#galeria" className="hover:opacity-100 border-b border-transparent hover:border-neutral-900 transition-all">Galería</a>
        <a href="#ubicacion" className="hover:opacity-100 border-b border-transparent hover:border-neutral-900 transition-all">Ubicación</a>
      </div>

      <a href="#reserva" className="hidden md:inline-block bg-neutral-900 text-white px-6 py-2 text-[10px] tracking-widest uppercase hover:bg-neutral-800 transition-colors">
        Reservar
      </a>
    </nav>
  );
}
