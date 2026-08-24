import { Logo } from './Logo';
import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cream-dark py-16 px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="scale-90" />
        
        <div className="flex gap-6 text-neutral-500">
          <a href="#" className="hover:text-neutral-900 transition-colors p-2">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors p-2">
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a href="https://wa.me/5492215348635" className="hover:text-neutral-900 transition-colors p-2">
            <Phone size={20} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className="text-xs text-neutral-500 font-light tracking-wider text-center md:text-right">
          <p className="font-medium text-neutral-900 mb-2 tracking-[0.2em]">#FESTEJALINDO</p>
          <p>© {new Date().getFullYear()} Jota Eventos.</p>
          <p className="mt-1">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
