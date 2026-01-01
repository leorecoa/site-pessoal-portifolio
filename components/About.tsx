
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
              Arquitetando o <span className="text-white/20 italic">invisível</span>.
            </h2>
            
            <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light max-w-2xl">
              <p>
                Olá, eu sou o <span className="text-white font-medium">Leandro Jesse</span>. Minha missão é fundir a criatividade humana com a precisão algorítmica. 
              </p>
              <p>
                Como desenvolvedor focado em interfaces, vejo cada linha de código como uma pincelada em uma tela digital infinita. A utilização de <span className="text-indigo-400 font-medium">Inteligência Artificial</span> no meu workflow permite que eu transcenda os limites tradicionais da produtividade.
              </p>
              <p>
                Não entrego apenas sites; entrego experiências imersivas que respiram e reagem ao usuário, garantindo que a tecnologia sirva à intenção do design.
              </p>
            </div>
            
            <motion.div 
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white font-display">5+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Anos Exp.</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white font-display">50+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Projetos</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white font-display">IA</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 relative group">
          <motion.div 
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="https://picsum.photos/seed/leandroprofile/800/1000" 
              alt="Leandro Jesse Portrait" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent mix-blend-overlay opacity-60" />
          </motion.div>
          
          {/* Floating Element */}
          <motion.div 
            className="absolute -top-10 -right-10 w-44 h-44 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center p-8 text-center"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
              Transformando Ideias em Código
            </span>
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl hidden md:block">
             <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">Disponível para Projetos</span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
