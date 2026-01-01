import React from 'react';
import { 
  Lightbulb, 
  Cpu, 
  Layout, 
  Code, 
  TrendingUp, 
  Globe, 
  Palette, 
  FileCode, 
  Github, 
  Zap,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Project, TechItem, ProcessStep, ExperienceItem } from './types';

export const PROJECTS: Project[] = []; 

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Next.js', icon: Zap },
  { name: 'IA Generativa', icon: Cpu },
  { name: 'Git/GitHub', icon: Github },
  { name: 'Web Design', icon: Layout },
  { name: 'Performance', icon: Globe }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2024 - Presente',
    title: 'Desenvolvedor Frontend & IA',
    company: 'Freelance / Projetos Próprios',
    description: 'Focado em integrar fluxos de trabalho de IA no desenvolvimento frontend, criando interfaces ultra-rápidas e centradas no usuário.',
    icon: Briefcase
  },
  {
    year: '2023 - 2024',
    title: 'Especialista em Interface',
    company: 'Lab de Inovação',
    description: 'Exploração de novas fronteiras em UX, combinando motion design avançado com lógica de componentes modulares.',
    icon: Palette
  },
  {
    year: '2022',
    title: 'Estudos em Sistemas',
    company: 'Formação Acadêmica',
    description: 'Início da jornada técnica com foco em lógica de programação e arquitetura de software moderna.',
    icon: GraduationCap
  }
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