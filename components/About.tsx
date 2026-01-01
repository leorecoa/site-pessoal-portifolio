
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Sobre Mim</span>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter font-display">
              Criatividade <span className="text-white/20 italic">Aumentada</span>.
            </h2>
            
            <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light max-w-2xl">
              <p>
                Utilizo a <span className="text-white font-medium">Inteligência Artificial</span> como minha principal aliada no desenvolvimento, permitindo um ciclo de aprendizado rápido e experimentação contínua.
              </p>
              <p>
                Meu foco é a <span className="text-indigo-400 font-medium">produtividade e a excelência técnica</span>. Através de ferramentas generativas, acelero a entrega de soluções robustas sem comprometer a qualidade do código.
              </p>
              <p>
                Tenho profundo interesse em <span className="text-white font-bold">UX/UI moderna</span> e no desenvolvimento de interfaces interativas que proporcionam experiências fluidas e memoráveis para o usuário.
              </p>
            </div>
            
            <motion.div 
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col group cursor-default">
                <span className="text-5xl font-bold text-indigo-400 font-display tracking-tighter group-hover:scale-110 transition-transform">2+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Anos Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col group cursor-default">
                <span className="text-5xl font-bold text-white font-display tracking-tighter group-hover:scale-110 transition-transform">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Projetos</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col group cursor-default">
                <span className="text-5xl font-bold text-indigo-400 font-display tracking-tighter group-hover:scale-110 transition-transform">IA</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Driven</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 relative group">
          <motion.div 
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="https://avatars.githubusercontent.com/u/203870432?v=4" 
              alt="Leandro Jesse Portrait" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 to-transparent mix-blend-overlay opacity-60" />
          </motion.div>
          
          <motion.div 
            className="absolute -top-10 -right-10 w-44 h-44 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center p-8 text-center shadow-2xl"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
              Aprendizado & Experimentação
            </span>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
