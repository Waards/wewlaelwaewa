/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, JournalEntry, ExplorationItem, StatItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'automotive-motion',
    title: 'Automotive Motion',
    subtitle: 'Crafting premium interactive motion states for electric hypercars.',
    category: 'Motion Design',
    image: '/src/assets/images/automotive_motion_1779695330695.png',
    tags: ['WebGL', 'Interaction', 'UI/UX'],
    link: '#',
    colSpan: 'md:col-span-7',
    color: 'from-blue-900/40 to-slate-900/20'
  },
  {
    id: 'urban-architecture',
    title: 'Urban Architecture',
    subtitle: 'Brutalist concrete architecture archives and exploration portal.',
    category: 'Spatial Platform',
    image: '/src/assets/images/urban_architecture_1779695347974.png',
    tags: ['Nuances', 'Curation', 'React'],
    link: '#',
    colSpan: 'md:col-span-5',
    color: 'from-stone-900/40 to-zinc-950/20'
  },
  {
    id: 'human-perspective',
    title: 'Human Perspective',
    subtitle: 'Immersive light structures studying human shadow relationships.',
    category: 'Interactive Installation',
    image: '/src/assets/images/human_perspective_1779695366333.png',
    tags: ['Installations', 'Concept', 'Creative Coding'],
    link: '#',
    colSpan: 'md:col-span-5',
    color: 'from-amber-950/20 to-stone-900/40'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    subtitle: 'Sophisticated typography and custom metal debossed stationery style systems.',
    category: 'Direction & Brand',
    image: '/src/assets/images/brand_identity_1779695383721.png',
    tags: ['Typography', 'Minimalism', 'Identity'],
    link: '#',
    colSpan: 'md:col-span-7',
    color: 'from-zinc-900/40 to-slate-950/20'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'j-1',
    title: 'Design Nuances: The Magic of micro-interactions',
    excerpt: 'An investigation into how standard UI gestures transform into elevated, satisfying human conversations through physics-based easing.',
    date: 'May 18, 2026',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/journal_ux/300/300',
    tags: ['Interaction', 'Essays']
  },
  {
    id: 'j-2',
    title: 'The Brutalist concrete aesthetic in digital spaces',
    excerpt: 'Why raw typography, immense margins, and stark high-contrast layouts are dominating high-end, editorial digital interfaces today.',
    date: 'April 22, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/journal_typography/300/300',
    tags: ['Architecture', 'Visual Style']
  },
  {
    id: 'j-3',
    title: 'The decline of the standard grid and return of fluidity',
    excerpt: 'How viewport triggers, parallax, and custom cursor guides are breaking traditional column blocks for the better.',
    date: 'Mar 11, 2026',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/journal_interactive/300/300',
    tags: ['Layout', 'Code']
  },
  {
    id: 'j-4',
    title: 'Designing with darkness: HSL values for deep comfort',
    excerpt: 'How to manage ultra-dark UI, screen glare, and premium shadows to prevent sight strain and foster visual immersion.',
    date: 'Feb 05, 2026',
    readTime: '3 min read',
    image: 'https://picsum.photos/seed/journal_psychology/300/300',
    tags: ['Colours', 'Ergonomics']
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
    number: '20+',
    label: 'Years Experience',
    description: 'Working across global agencies, crafting bespoke visual codes for elite brands.'
  },
  {
    number: '95+',
    label: 'Projects Done',
    description: 'Bespoke design, performance-focused code, full-scale digital systems.'
  },
  {
    number: '200%',
    label: 'Satisfied Clients',
    description: 'Delivering triple-distilled layouts, visual pacing, and extreme engineering craftsmanship.'
  }
];
