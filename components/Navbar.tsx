
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6 pointer-events-none">
      <motion.div 
        className={`flex items-center gap-2 md:gap-8 px-4 md:px-8 py-3 rounded-full border border-white/5 backdrop-blur-2xl bg-black/40 pointer-events-auto transition-all duration-700 ${scrolled ? 'shadow-2xl shadow-indigo-500/10 scale-95 border-white/10' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all px-3 py-1 hover:bg-white/5 rounded-full"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
