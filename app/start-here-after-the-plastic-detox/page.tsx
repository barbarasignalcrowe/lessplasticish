import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Here After The Plastic Detox',
  description: 'Feeling overwhelmed after learning about microplastics and plastic exposure? Start with practical swaps for water, food storage, reheating, and kitchen routines — without replacing your whole life.'
};

export default function StartHerePage() {
  return (
    <main className="article">
      <p className="eyebrow">Start here</p>
      <h1>Start Here After The Plastic Detox: What to Replace First</h1>
      <p className="lede">If The Plastic Detox sent you into your kitchen side-eyeing every container, bottle, and takeout lid, pause for a second.</p>
      <div className="disclosure">This article is educational and is not medical advice. Some links may be affiliate links, which means LessPlasticish may earn a commission if you buy through them at no extra cost to you.</div>

      <p>You do not need to throw everything away. You do not need to replace your whole life by Friday. And you definitely do not need to turn your home into a perfect glass-and-bamboo showroom to make useful progress.</p>
      <p>The better move is simpler: start with the plastic you use most often, especially around food, water, heat, and daily routines.</p>
      <div className="callout">Less plastic. Less panic. Replace the plastic that has the most repeated contact with food, water, heat, or your daily body routine first.</div>

      <h2>First: do not panic-purge your house</h2>
      <p>A panic purge feels productive. It usually is not. Throwing away every plastic item at once can be expensive, wasteful, and overwhelming. It can also send you into the kind of perfectionism that makes people quit before they build one useful habit.</p>

      <h2>The highest-priority first swaps</h2>
      <ol>
        <li>Your daily water setup.</li>
        <li>Heating food in plastic.</li>
        <li>Leftovers and food storage.</li>
        <li>Worn plastic cutting boards and utensils.</li>
        <li>Lunch/snack routines.</li>
        <li>Bathroom and personal care refills.</li>
        <li>Laundry and clothing microfibers later.</li>
      </ol>

      <h2>Swap 1: fix your daily water setup</h2>
      <p>If your household buys plastic water bottles regularly, this is the first revenue-worthy and behavior-worthy swap.</p>
      <p>A better water setup can reduce plastic bottle waste and make the habit easier to repeat. The right choice depends on your home, budget, and patience for installation.</p>
      <p><a className="button" href="/water-filter-swaps-plastic-bottle-waste">Compare water filter options</a></p>

      <h2>Swap 2: stop heating food in plastic</h2>
      <p>This is one of the easiest behavior changes to start before you buy anything. If you are reheating leftovers, move the food to glass, ceramic, or stainless before heating. Start with the moment where heat enters the picture.</p>
      <div className="callout">Simple rule: store however you need to for now. Heat in something else.</div>

      <h2>Swap 3: upgrade food storage as plastic wears out</h2>
      <p>You probably do not need a perfect matching 40-piece set immediately. Start with the containers you use every week: leftovers, lunch packing, hot or oily foods, and cracked or stained containers.</p>

      <h2>Swap 4: look at worn cutting boards and utensils</h2>
      <p>A deeply cut plastic cutting board is a reasonable upgrade point. You do not have to replace every utensil in one weekend, but if plastic tools are scratched, melted, flaking, or heavily worn, they move up the list.</p>

      <h2>Swap 5: make lunch and snack packing easier</h2>
      <p>This is useful, especially for families or daily lunch-packers, but it is not the first major purchase priority for everyone. Match the swap to the routine. Do not buy five alternatives before testing one.</p>

      <h2>What can wait</h2>
      <p>You can wait on replacing every pantry package, buying a whole new cookware set immediately, swapping every bathroom product at once, replacing your wardrobe, and buying expensive whole-home systems before you know your water goals.</p>

      <h2>Get the checklist</h2>
      <p>If you want the short version, download The LessPlasticish Starter Checklist. It gives you 7 easy swaps to reduce everyday plastic exposure without replacing your whole life.</p>
      <p><a className="button" href="/starter-checklist">Get the starter checklist</a></p>
    </main>
  );
}
