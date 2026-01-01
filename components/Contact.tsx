
import React, { useRef } from 'react';
import Section from './Section';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Mail, ArrowRight, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs para os elementos magnéticos
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  // Motion values para GitHub
  const ghX = useMotionValue(0);
  const ghY = useMotionValue(0);
  const springGhX = useSpring(ghX, { damping: 20, stiffness: 100 });
  const springGhY = useSpring(ghY, { damping: 20, stiffness: 100 });

  // Motion values para LinkedIn
  const lnX = useMotionValue(0);
  const lnY = useMotionValue(0);
  const springLnX = useSpring(lnX, { damping: 20, stiffness: 100 });
  const springLnY = useSpring(lnY, { damping: 20, stiffness: 100 });

  // Motion values para E-mail
  const emX = useMotionValue(0);
  const emY = useMotionValue(0);
  const springEmX = useSpring(emX, { damping: 20, stiffness: 100 });
  const springEmY = useSpring(emY, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Lógica magnética genérica para múltiplos elementos
    const updateMagnetic = (ref: React.RefObject<HTMLElement | null>, xVal: any, yVal: any) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 250) {
          const power = (250 - distance) / 250;
          xVal.set(distanceX * 0.35 * power);
          yVal.set(distanceY * 0.35 * power);
        } else {
          xVal.set(0);
          yVal.set(0);
        }
      }
    };

    updateMagnetic(githubRef, ghX, ghY);
    updateMagnetic(linkedinRef, lnX, lnY);
    updateMagnetic(emailRef, emX, emY);
  };

  const handleMouseLeave = () => {
    ghX.set(0);
    ghY.set(0);
    lnX.set(0);
    lnY.set(0);
    emX.set(0);
    emY.set(0);
  };

  return (
    <Section id="contact" className="!min-h-[80vh]">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        
        <motion.h2 
          className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos aprender <br /> e construir <span className="text-indigo-400">juntos?</span>
        </motion.h2>

        <motion.p 
          className="max-w-xl mx-auto text-lg text-white/50 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Aberto a aprender, colaborar e construir. Se você busca evolução e tecnologia de ponta, vamos nos conectar.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Botão GitHub Premium */}
          <motion.a 
            ref={githubRef}
            href="https://github.com/leorecoa"
            target="_blank"
            style={{ x: springGhX, y: springGhY }}
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(99, 102, 241, 0.6)',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-10 py-5 bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white rounded-full font-bold transition-all duration-500 shadow-2xl overflow-visible"
          >
            <Github className="w-5 h-5 text-indigo-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" />
            <span className="relative z-10 tracking-tight">GitHub</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-indigo-400" />
            
            <motion.div 
              className="absolute -inset-1 border border-indigo-500/0 rounded-full group-hover:border-indigo-500/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>

          {/* Botão LinkedIn Premium */}
          <motion.a 
            ref={linkedinRef}
            href="https://www.linkedin.com/in/leandro-jess%C3%A9-7b575539a/"
            target="_blank"
            style={{ x: springLnX, y: springLnY }}
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(0, 119, 181, 0.6)',
              boxShadow: '0 0 40px rgba(0, 119, 181, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-10 py-5 bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white rounded-full font-bold transition-all duration-500 shadow-2xl overflow-visible"
          >
            <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" />
            <span className="relative z-10 tracking-tight">Leandro Jesse</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-blue-400" />
            
            <motion.div 
              className="absolute -inset-1 border border-blue-500/0 rounded-full group-hover:border-blue-500/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
          
          {/* Badge de E-mail Premium - Visual (Sem link) */}
          <motion.div 
            ref={emailRef}
            style={{ x: springEmX, y: springEmY }}
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(99, 102, 241, 0.6)',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            className="group interactive relative flex items-center gap-4 px-10 py-5 bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white rounded-full font-bold transition-all duration-500 shadow-2xl overflow-visible cursor-default"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" />
            <span className="relative z-10 tracking-tight lowercase">leorecoa2@gmail.com</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-indigo-400" />
            
            <motion.div 
              className="absolute -inset-1 border border-indigo-500/0 rounded-full group-hover:border-indigo-500/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
          <span>© 2024 Leandro Jesse</span>
          <span>Focado em Aprendizado & IA</span>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
