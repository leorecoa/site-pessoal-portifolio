
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
// Fix: Added ArrowRight to the imports from lucide-react
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="max-w-2xl">
          <motion.span 
            className="text-indigo-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter font-display">Projetos <br /><span className="text-white/20 italic">em destaque</span></h2>
          <p className="text-white/40 text-lg leading-relaxed">Uma curadoria de soluções digitais onde a estética encontra a funcionalidade através de tecnologias modernas.</p>
        </div>
        <motion.a 
          href="https://github.com/leorecoa" 
          target="_blank"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors border-b border-white/10 pb-2"
          whileHover={{ gap: '1rem' }}
        >
          GitHub completo &rarr;
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group relative flex flex-col rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden backdrop-blur-3xl hover:border-white/20 transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <motion.a 
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white text-black rounded-full shadow-2xl"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-indigo-500 text-white rounded-full shadow-2xl"
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-indigo-400 transition-colors font-display">{project.title}</h3>
              <p className="text-sm text-white/30 leading-relaxed font-light group-hover:text-white/50 transition-colors">
                {project.description}
              </p>
              <div className="mt-auto pt-8 flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-indigo-400/60 transition-colors">
                Ver detalhes <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
