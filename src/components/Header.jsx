import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-950/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <motion.a href="#" className="font-semibold tracking-tight" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>Astraea</motion.a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur hover:bg-white/20">Let’s Talk</a>
      </div>
    </header>
  );
}
