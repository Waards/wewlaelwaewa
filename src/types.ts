/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  colSpan: string; // Tailwind column span for bento grid, e.g. 'md:col-span-7', 'md:col-span-5'
  color: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: string;
  rotation: string; // CSS rotation class like 'rotate-3' or '-rotate-2'
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}
