
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  // Coordenadas para a rotação 3D do Hero
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Coordenadas para o efeito magnético do botão
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Molas mais suaves para o efeito magnético
  const springBtnX = useSpring(btnX, { damping: 20, stiffness: 100 });
  const springBtnY = useSpring(btnY, { damping: 20, stiffness: 100 });

  const rotateX = useTransform(springY, [-400, 400], [10, -10]);
  const rotateY = useTransform(springX, [-400, 400], [-10, 10]);

  // Ciclo de frases criativas para a badge
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = [
    "CÓDIGO QUE RESPIRA",
    "DESIGN AUMENTADO POR IA",
    "EXPERIÊNCIAS SEM FRONTEIRAS",
    "PENSANDO O AMANHÃ"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Atualiza rotação do container
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);

    // Lógica Magnética para o Botão
    if (buttonRef.current) {
      const btnRect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;
      
      const distanceX = e.clientX - btnCenterX;
      const distanceY = e.clientY - btnCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Raio de ativação da "insinuação" (300px)
      if (distance < 300) {
        const power = (300 - distance) / 300; // 0 a 1
        btnX.set(distanceX * 0.3 * power);
        btnY.set(distanceY * 0.3 * power);
      } else {
        btnX.set(0);
        btnY.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    btnX.set(0);
    btnY.set(0);
  };

  const creativeText = "Arquiteto de ecossistemas digitais onde o intelecto humano orquestra a potência da inteligência artificial.";
  const words = creativeText.split(" ");

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1.5, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 1.2 },
          scale: { duration: 1.8 }
        }}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8 h-10 flex items-center justify-center"
        >
          <div className="relative px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <AnimatePresence mode="wait">
              <motion.span 
                key={phraseIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                transition={{ duration: 0.5 }}
                className="text-[10px] font-black tracking-[0.4em] uppercase text-indigo-400 block"
              >
                {phrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-[12vw] md:text-[8vw] font-bold tracking-tighter mb-8 leading-[0.85] select-none font-display"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        >
          LEANDRO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 filter drop-shadow-[0_0_20px_rgba(124,58,237,0.4)] uppercase">Jesse</span>
        </motion.h1>

        <div className="max-w-3xl mx-auto mb-14 px-4 overflow-hidden">
          <motion.p 
            className="flex flex-wrap justify-center gap-x-2 text-base md:text-xl text-white/50 leading-relaxed font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                }}
                className={word === "inteligência" || word === "artificial." || word === "humano" ? "text-white font-medium" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.a 
            ref={buttonRef}
            href="https://github.dev/leorecoa"
            target="_blank"
            style={{ 
              x: springBtnX, 
              y: springBtnY 
            }}
            whileHover={{ 
              scale: 1.1,
              borderColor: 'rgba(99, 102, 241, 0.6)',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-12 py-5 bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-white rounded-full font-bold transition-colors duration-500 overflow-visible shadow-2xl"
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="glow"
            />
            
            <Github className="w-6 h-6 text-indigo-400 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" />
            <span className="relative z-10 tracking-tight">Acessar GitHub</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100 group-hover:text-indigo-400" />
            
            <motion.div 
              className="absolute -inset-1 border border-indigo-500/0 rounded-full group-hover:border-indigo-500/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Explore</span>
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
