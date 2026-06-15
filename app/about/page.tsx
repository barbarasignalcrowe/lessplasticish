import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'LessPlasticish is for people who want to use less plastic without getting weird, wasteful, or overwhelmed.'
};

export default function AboutPage() {
  return (
    <main className="article">
      <p className="eyebrow">About</p>
      <h1>LessPlasticish is not a zero-waste purity test.</h1>
      <p className="lede">This is for people who want to use less plastic without getting weird, wasteful, or overwhelmed.</p>
      <p>We focus on practical home swaps, beginner-friendly product research, and realistic routines that fit actual kitchens, families, budgets, and busy lives.</p>
      <p>The goal is not perfect plastic-free living. The goal is a calmer default routine: better water habits, smarter food storage, less heating in plastic, and fewer daily plastic-heavy convenience loops.</p>
      <div className="callout">Mila is our recurring less-plastic home guide. She is not a doctor, scientist, founder, or credentialed expert. She helps make the guidance easier to follow; the brand does the research and disclosure work.</div>
      <p><a className="button" href="/starter-checklist">Get the starter checklist</a></p>
    </main>
  );
}
