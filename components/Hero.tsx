
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-400, 400], [15, -15]);
  const rotateY = useTransform(springX, [-400, 400], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="px-5 py-2 text-[11px] font-bold tracking-[0.4em] uppercase bg-white/5 border border-white/10 rounded-full text-indigo-400 backdrop-blur-md shadow-2xl">
            AI-Assisted Experience
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-[14vw] md:text-[10vw] font-bold tracking-tighter mb-8 leading-[0.8] select-none font-display"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          LEANDRO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 filter drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]">JESSE</span>
        </motion.h1>

        <motion.p 
          className="max-w-2xl mx-auto text-base md:text-xl text-white/40 mb-14 leading-relaxed font-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Transformando o complexo em sublime através de design generativo e código performático.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Explorar Projetos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.a>
          
          <motion.a 
            href="https://github.com/leorecoa"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-12 py-5 border border-white/10 rounded-full text-white font-medium transition-all backdrop-blur-sm"
          >
            <Github className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
            Repositórios
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Scroll</span>
        <motion.div 
          className="w-px h-20 bg-gradient-to-b from-indigo-500 via-white/20 to-transparent"
          animate={{ height: [40, 80, 40], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
