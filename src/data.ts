/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, JournalEntry, ExplorationItem, StatItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cianan',
    title: 'CIANAN',
    subtitle: 'Full-stack multi-role web application with Stock Management and HR System modules.',
    category: 'Full-Stack Web App',
    image: '/src/assets/images/1.gif',
    tags: ['PHP/PDO', 'MySQL', 'Chart.js', 'Session Auth'],
    link: 'https://github.com/Waards/management',
    colSpan: 'md:col-span-7',
    color: 'from-blue-900/40 to-slate-900/20'
  },
  {
    id: 'ghl-automation',
    title: 'GHL Automation Suite',
    subtitle: 'Sales funnel design, workflow automation, and CRM integration pipelines for client businesses.',
    category: 'CRM & Automation',
    image: '/src/assets/images/1.jpg',
    tags: ['GoHighLevel', 'Funnels', 'Workflows'],
    link: 'https://app.ignitesystems.io/v2/preview/v002f1dTimLQJu1xgBeF?notrack=true',
    colSpan: 'md:col-span-5',
    color: 'from-stone-900/40 to-zinc-950/20'
  },
  {
    id: 'interactive-ui',
    title: 'Interactive UI Widgets',
    subtitle: 'Crafting responsive, fluid interfaces with GSAP timelines and Framer Motion spring animations for immersive user experiences.',
    category: 'Creative UI',
    image: '/src/assets/images/ui.mp4',
    tags: ['CSS 3D', 'Pixel Art', 'GSAP'],
    link: 'https://wardsportv3.vercel.app/',
    colSpan: 'md:col-span-5',
    color: 'from-amber-950/20 to-stone-900/40'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration Hub',
    subtitle: 'Multi-model AI routing via OpenRouter, ultra-fast inference with Groq, and n8n workflow automation.',
    category: 'AI & Automation',
    image: '/src/assets/images/2.jpg',
    tags: ['OpenRouter', 'Groq', 'n8n', 'REST APIs'],
    link: '/ai-integration',
    colSpan: 'md:col-span-7',
    color: 'from-zinc-900/40 to-slate-950/20'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'j-1',
    title: 'Building CIANAN: Lessons from a Multi-Role System',
    excerpt: 'How I architected a stock management and HR system with role-based dashboards, session auth, and weighted attendance calculations.',
    date: 'May 18, 2026',
    image: '/src/assets/images/1.gif',
    tags: ['Development', 'Architecture'],
    media: '/src/assets/images/1.gif',
    description: 'Architected a full-stack multi-role web application featuring stock management, HR modules, role-based dashboards, session authentication, and weighted attendance calculations — all built with PHP/PDO and MySQL.'
  },
  {
    id: 'j-2',
    title: 'Automating Workflows with n8n and GoHighLevel',
    excerpt: 'A deep dive into building automated pipelines for lead nurturing, follow-ups, and CRM synchronization using no-code automation tools.',
    date: 'April 22, 2026',
    image: '/src/assets/images/1.jpg',
    tags: ['Automation', 'CRM'],
    media: '/src/assets/images/1.jpg',
    description: 'Designed and deployed automated sales funnels, workflow automation pipelines, and CRM synchronization systems using GoHighLevel and n8n — streamlining lead nurturing and client follow-ups.'
  },
  {
    id: 'j-3',
    title: 'Enterprise Dashboard Architecture: Patterns & Best Practices',
    excerpt: 'Designing scalable, maintainable dashboard systems with modular state management, role-based views, and real-time data pipelines.',
    date: 'Mar 11, 2026',
    image: '/src/assets/images/3.jpg',
    tags: ['Architecture', 'Design Patterns'],
    media: '/src/assets/images/ui.mp4',
    description: 'Crafted responsive, fluid dashboard interfaces with GSAP timelines and Framer Motion spring animations — featuring modular state management, role-based views, and real-time data pipelines for scalable enterprise systems.'
  },
  {
    id: 'j-4',
    title: 'AI Integration Patterns: OpenRouter & Groq',
    excerpt: 'Comparing multi-model routing vs ultra-fast inference — and how I use both patterns to build intelligent application features.',
    date: 'Feb 05, 2026',
    image: '/src/assets/images/2.jpg',
    tags: ['AI', 'APIs'],
    media: '/src/assets/images/2.jpg',
    description: 'Implemented multi-model AI routing via OpenRouter and ultra-fast inference with Groq, integrated with n8n workflow automation and REST APIs to build intelligent, responsive application features.'
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: 'exp-1',
    title: 'Full-Stack Web Development',
    category: 'Multi-Role Systems',
    image: '/src/assets/images/vp1.gif',
    aspectRatio: 'aspect-square',
    rotation: '-rotate-2',
    description: 'Full-stack developer with hands-on experience in React, Vue, PHP/PDO, and MySQL — building multi-role systems like CIANAN with stock management, HR modules, and interactive UI widgets.',
    tools: ['React', 'Vue', 'PHP/PDO', 'MySQL', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    title: 'AI Integration & API Routing',
    category: 'LLM Orchestration',
    image: '/src/assets/images/vp2.gif',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-3',
    description: 'AI integration specialist working with OpenRouter multi-model routing and Groq ultra-fast inference — building intelligent features with REST APIs and n8n workflow automation.',
    tools: ['OpenRouter', 'Groq', 'REST APIs', 'n8n']
  },
  {
    id: 'exp-3',
    title: 'CRM & Marketing Automation',
    category: 'Pipeline Engineering',
    image: '/src/assets/images/vp3.jpg',
    aspectRatio: 'aspect-square',
    rotation: 'hover:rotate-6 -rotate-1',
    description: 'GoHighLevel CRM specialist — designing sales funnels, workflow automations, lead nurturing pipelines, and calendar integrations to streamline client operations and boost conversions.',
    tools: ['GoHighLevel', 'Funnels', 'n8n', 'CRM Pipelines']
  },
  {
    id: 'exp-4',
    title: 'Interactive UI & Animation',
    category: 'Creative Frontend',
    image: '/src/assets/images/vp4.jpg',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-6',
    description: 'Creative UI developer crafting fluid interfaces with GSAP timelines, Framer Motion spring animations, 3D CSS effects, and interactive desk buddy widgets with WASD controls.',
    tools: ['GSAP', 'Framer Motion', 'CSS 3D', 'Canvas']
  },
  {
    id: 'exp-5',
    title: 'Workflow Automation',
    category: 'Process Optimization',
    image: '/src/assets/images/vp5.gif',
    aspectRatio: 'aspect-square',
    rotation: '-rotate-6',
    description: 'Automation engineer building n8n workflows with 400+ integrations, custom REST APIs, and intelligent data processing — from lead nurturing to automated follow-ups and CRM sync.',
    tools: ['n8n', 'REST APIs', 'Webhooks', 'GoHighLevel']
  },
  {
    id: 'exp-6',
    title: 'Full-Stack & AI Development',
    category: 'Tech Fusion',
    image: '/src/assets/images/vp6.gif',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-2',
    description: 'IT graduate from CvSU constantly expanding the tech stack — blending full-stack development, AI integration, interactive animations, and automation into every project.',
    tools: ['React', 'PHP', 'MySQL', 'OpenRouter', 'Groq']
  }
];

export const STATS: StatItem[] = [
  {
    number: '6+',
    label: 'Years Experience',
    description: 'Full-stack development and API integration, working remotely with clients across multiple industries.'
  },
  {
    number: '80+',
    label: 'Projects Done',
    description: 'From full-stack web apps and CRM systems to AI integrations and interactive UI components.'
  },
  {
    number: '99%',
    label: 'Client Satisfaction',
    description: 'Focused on clean code, seamless user experiences, and reliable automation solutions.'
  }
];
