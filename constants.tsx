
import React from 'react';
import { Lightbulb, Cpu, Layout, Code, TrendingUp } from 'lucide-react';
import { Project, TechItem, ProcessStep } from './types';

export const PROJECTS: Project[] = []; // Removendo projetos específicos conforme solicitado

export const TECH_STACK: TechItem[] = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Inteligência Artificial', icon: '🧠' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Descoberta',
    description: 'Imersão no problema para encontrar a solução técnica e estética mais eficiente.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: 'Arquitetura IA',
    description: 'Utilização de LLMs para refinar a lógica de negócios e acelerar a escrita de código limpo.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Design-to-Code',
    description: 'Tradução fiel de layouts para componentes modulares e acessíveis.',
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: 'Refino Técnico',
    description: 'Otimização de performance e garantia de uma experiência mobile impecável.',
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Entrega',
    description: 'Monitoramento e evolução contínua da solução digital.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];
