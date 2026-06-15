import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Water Filter Swaps for Reducing Plastic Bottle Waste at Home',
  description: 'Compare pitcher, countertop, under-sink, shower, and whole-home water filter options by budget, effort, and household fit.'
};

const options = [
  ['Filter pitchers and dispensers', 'Best for renters, small households, and low-budget starter swaps. Watch filter cost, reservoir plastic, certifications, and refill friction.'],
  ['Countertop water filters', 'Best for families, daily water drinkers, and replacing bottled-water habits without under-sink installation. This is the strongest first affiliate lane.'],
  ['Under-sink filters', 'Best for homeowners who want filtered water directly from the tap and less counter clutter. Higher intent, higher order value, more installation work.'],
  ['Shower filters', 'Best as a bathroom add-on. Keep claims conservative: chlorine smell and shower experience, not medical promises.'],
  ['Whole-home filtration', 'Best for homeowners ready for a larger project after testing or clarifying water goals. High ticket, slower conversion.'],
  ['Portable filter bottles', 'Best for travel, hiking, emergency kits, or people who buy bottled water away from home. Useful add-on, not the main household system.']
];

export default function WaterGuidePage() {
  return (
    <main className="article">
      <p className="eyebrow">Water guide</p>
      <h1>Best Water Filter Swaps for Reducing Plastic Bottle Waste at Home</h1>
      <p className="lede">Want to cut down on plastic water bottles without overhauling your life? Start with a water setup your household will actually use.</p>
      <div className="disclosure">Some links on this page may be affiliate links. If you buy through them, LessPlasticish may earn a commission at no extra cost to you. This page is educational and is not medical advice.</div>

      <p>If plastic bottles are one of the easiest plastic habits to spot in your home, your water setup is one of the best places to start. The goal is not to buy the fanciest system. The goal is to choose a setup you will actually use every day.</p>
      <div className="callout">Quick take: for LessPlasticish, the strongest first affiliate focus is countertop and under-sink filtration. Pitchers are useful but lower ticket. Whole-home systems are high ticket but slower conversion.</div>

      <h2>Before you buy: know your water problem</h2>
      <p>Do not buy based on fear. Buy based on fit. Check your local water report if available, decide whether your concern is taste, chlorine, PFAS, microplastics, bottled-water waste, or convenience, and be honest about installation and filter replacement maintenance.</p>

      <h2>Compare your options</h2>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {options.map(([title, body]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>

      <h2>Product selection rules</h2>
      <ul>
        <li>Clear testing or certification information.</li>
        <li>Transparent replacement filter cost.</li>
        <li>Strong reviews beyond the brand website.</li>
        <li>Reasonable return policy.</li>
        <li>Product fits a practical household routine.</li>
        <li>Claims do not require medical or scientific overreach.</li>
      </ul>

      <h2>Programs to evaluate next</h2>
      <p>Aquasana, Epic Water Filters, Waterdrop, LifeStraw, AquaTru / Water & Wellness-style retailers, and Clearly Filtered if affiliate terms are viable.</p>
      <p>This page is intentionally product-placeholder ready. Specific product links should be added only after affiliate terms, testing claims, commissions, and return policies are checked.</p>

      <h2>Start with the setup you will actually repeat</h2>
      <p>Less plastic works best when it becomes boring and repeatable. Choose the water setup your household can maintain, then move to food storage, reheating, and daily kitchen swaps.</p>
      <p><a className="button" href="/starter-checklist">Get the starter checklist</a></p>
    </main>
  );
}
