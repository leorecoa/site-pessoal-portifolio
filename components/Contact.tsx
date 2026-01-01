
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="!min-h-[70vh]">
      <div className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        
        <motion.h2 
          className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos conversar <br /> sobre seu <span className="text-indigo-400">próximo projeto?</span>
        </motion.h2>

        <motion.p 
          className="max-w-xl mx-auto text-lg text-white/50 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Se você busca alguém que une design excepcional com tecnologia de ponta, entre em contato. Sou movido por projetos que desafiam o status quo.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a 
            href="mailto:contato@leandrojesse.com"
            className="flex items-center gap-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
            whileHover={{ y: -5 }}
          >
            <Mail className="w-5 h-5" />
            Mandar Email
          </motion.a>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/leorecoa" 
              target="_blank"
              className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs uppercase font-bold tracking-[0.2em]">
          <span>© 2024 Leandro Jesse</span>
          <span>Designed & Built with IA assistance</span>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
