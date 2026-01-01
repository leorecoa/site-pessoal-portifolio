
import React, { useRef } from 'react';
import Section from './Section';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { damping: 20, stiffness: 100 });
  const springBtnY = useSpring(btnY, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const btnRect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;
      const distanceX = e.clientX - btnCenterX;
      const distanceY = e.clientY - btnCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < 300) {
        const power = (300 - distance) / 300;
        btnX.set(distanceX * 0.3 * power);
        btnY.set(distanceY * 0.3 * power);
      } else {
        btnX.set(0);
        btnY.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <Section id="projects">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full py-20 px-8 md:px-20 rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <motion.span 
            className="text-indigo-400 font-bold text-xs uppercase tracking-[0.4em] mb-6 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Portfolio & Lab
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter font-display leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore meus <br />
            <span className="text-white/20 italic">experimentos</span> <br />
            no GitHub.
          </motion.h2>

          <motion.p 
            className="text-white/40 text-xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Meu trabalho é uma jornada contínua de descobertas através do código. Veja como aplico IA e tecnologias modernas para resolver problemas reais.
          </motion.p>

          <motion.a 
            ref={buttonRef}
            href="https://github.dev/leorecoa" 
            target="_blank"
            style={{ x: springBtnX, y: springBtnY }}
            whileHover={{ 
              scale: 1.1,
              borderColor: 'rgba(99, 102, 241, 0.6)',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white rounded-full font-bold transition-all duration-500 shadow-2xl overflow-visible"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <Github className="w-6 h-6 text-indigo-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" />
            <span className="relative z-10 text-lg tracking-tight">Ver Repositórios no GitHub</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-indigo-400" />
            
            <motion.div 
              className="absolute -inset-1 border border-indigo-500/0 rounded-full group-hover:border-indigo-500/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </div>

        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </Section>
  );
};

export default Projects;
