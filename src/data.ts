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
    image: 'https://picsum.photos/seed/cianan_dev/300/300',
    tags: ['Development', 'Architecture']
  },
  {
    id: 'j-2',
    title: 'Automating Workflows with n8n and GoHighLevel',
    excerpt: 'A deep dive into building automated pipelines for lead nurturing, follow-ups, and CRM synchronization using no-code automation tools.',
    date: 'April 22, 2026',
    image: 'https://picsum.photos/seed/automation_flow/300/300',
    tags: ['Automation', 'CRM']
  },
    {
    id: 'j-3',
    title: 'Enterprise Dashboard Architecture: Patterns & Best Practices',
    excerpt: 'Designing scalable, maintainable dashboard systems with modular state management, role-based views, and real-time data pipelines.',
    date: 'Mar 11, 2026',
    image: 'https://picsum.photos/seed/enterprise_dash/300/300',
    tags: ['Architecture', 'Design Patterns']
  },
  {
    id: 'j-4',
    title: 'AI Integration Patterns: OpenRouter & Groq',
    excerpt: 'Comparing multi-model routing vs ultra-fast inference — and how I use both patterns to build intelligent application features.',
    date: 'Feb 05, 2026',
    image: 'https://picsum.photos/seed/ai_patterns/300/300',
    tags: ['AI', 'APIs']
  }
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: 'exp-1',
    title: 'Abstract Sculpture study',
    category: 'Interactive WebGL',
    image: 'https://picsum.photos/seed/sculpture_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: '-rotate-2'
  },
  {
    id: 'exp-2',
    title: 'Neon Light Installation',
    category: 'Projection Mapping',
    image: 'https://picsum.photos/seed/neon_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-3'
  },
  {
    id: 'exp-3',
    title: 'Brutalist Concrete Pillar',
    category: '3D Scan Art',
    image: 'https://picsum.photos/seed/structure_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: 'hover:rotate-6 -rotate-1'
  },
  {
    id: 'exp-4',
    title: 'Prism Color Spectrum',
    category: 'Raymarching Canvas',
    image: 'https://picsum.photos/seed/prism_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-6'
  },
  {
    id: 'exp-5',
    title: 'Shattered Obsidian Glass',
    category: 'Simulated Physics',
    image: 'https://picsum.photos/seed/glass_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: '-rotate-6'
  },
  {
    id: 'exp-6',
    title: 'Cosmic Slate Terrains',
    category: 'Procedural Shader',
    image: 'https://picsum.photos/seed/space_dark/400/400',
    aspectRatio: 'aspect-square',
    rotation: 'rotate-2'
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
