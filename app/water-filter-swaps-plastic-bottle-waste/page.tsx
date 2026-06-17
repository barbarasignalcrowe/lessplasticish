import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Water Filter Swaps for Reducing Plastic Bottle Waste at Home',
  description: 'Choose a practical water filter setup by household type, budget, installation effort, and bottled-water habit — without panic-shopping.'
};

const options = [
  {
    title: 'Filter pitcher or dispenser',
    bestFor: 'Renters, small kitchens, starter budgets, and households that want the lowest-effort first step.',
    watch: 'Pitchers still use plastic parts, can be slow, and only work if someone keeps them filled.',
    effort: 'Very low',
    price: '$',
  },
  {
    title: 'Countertop water filter',
    bestFor: 'Families, daily water drinkers, and people trying to stop buying plastic water bottles without under-sink installation.',
    watch: 'Takes counter space and still needs filter replacement discipline.',
    effort: 'Low',
    price: '$$–$$$',
  },
  {
    title: 'Under-sink filter',
    bestFor: 'Homeowners or long-term renters who want filtered water straight from the tap with less counter clutter.',
    watch: 'Installation matters. Check faucet compatibility, replacement filters, and return policy before buying.',
    effort: 'Medium',
    price: '$$–$$$$',
  },
  {
    title: 'Reverse osmosis system',
    bestFor: 'Households that want a more serious filtration setup and are willing to handle installation, tank space, and maintenance.',
    watch: 'Not all RO systems are equal. Look for performance data, replacement filter cost, and whether remineralization matters to you.',
    effort: 'Medium–high',
    price: '$$$–$$$$',
  },
  {
    title: 'Shower filter',
    bestFor: 'A bathroom add-on when chlorine smell, shower feel, or hair/skin routine is the concern.',
    watch: 'Do not buy based on miracle claims. Treat it as comfort/routine support, not medical treatment.',
    effort: 'Low',
    price: '$$–$$$',
  },
  {
    title: 'Whole-home filtration',
    bestFor: 'Homeowners ready for a larger water project after checking water goals, space, plumbing, and budget.',
    watch: 'This is not the beginner default. Get clear on the actual water issue first.',
    effort: 'High',
    price: '$$$$',
  },
];

const productRules = [
  'The brand publishes testing, certifications, or performance data in plain language.',
  'The filter addresses your actual concern — taste, chlorine, PFAS, lead, microplastics, bottled-water reduction, or convenience.',
  'Replacement filters are easy to buy and not wildly expensive.',
  'The setup fits your kitchen, plumbing, rental status, and patience level.',
  'The return policy is reasonable if the system does not fit your home.',
  'The claims do not rely on fear, miracle health language, or vague “detox” promises.',
];

const firstPicks = [
  ['If you buy plastic water bottles weekly', 'Start with a countertop or under-sink setup. Pitchers can work, but the daily friction may make bottled water creep back in.'],
  ['If you rent or move often', 'Start with a pitcher, dispenser, countertop unit, or portable filter bottle. Avoid plumbing-heavy installs unless your lease allows it.'],
  ['If your main issue is taste or chlorine smell', 'Look for systems certified or tested for taste/odor or chlorine reduction. Do not overbuy before checking your water report.'],
  ['If you want the clean-counter option', 'Compare under-sink filters and reverse osmosis systems. Check installation, filter replacement cost, and faucet requirements.'],
  ['If you want a bathroom add-on', 'A shower filter can be a reasonable second-step swap, but keep expectations practical and avoid medical claims.'],
];

const amazonWaterPicks = [
  {
    title: 'Glass water filter pitcher',
    href: 'https://amzn.to/4vWW7yn',
    fit: 'A lower-effort starter option for renters, small kitchens, and households that want filtered water without installation.',
    check: 'Confirm the filter claim, replacement schedule, and what the pitcher is actually tested or certified to reduce before buying.',
  },
  {
    title: 'Countertop gravity water filter',
    href: 'https://amzn.to/4fQS81y',
    fit: 'A stronger bottled-water reduction option for households that want more capacity without under-sink plumbing.',
    check: 'Check counter space, filter replacement cost, published testing, and whether the system fits your household’s daily water volume.',
  },
  {
    title: 'Under-sink water filter',
    href: 'https://amzn.to/3Qknl2L',
    fit: 'A cleaner-counter setup for long-term renters or homeowners who want filtered water from the tap.',
    check: 'Check installation requirements, faucet compatibility, replacement filters, return policy, and published performance data.',
  },
];

const affiliateShortlist = [
  ['Pitcher and dispenser filters', 'Best when you want the easiest first step, rent your home, or need something that does not require tools or plumbing changes.'],
  ['Countertop and under-sink filters', 'Best when bottled water is a regular habit and you want a higher-capacity setup for everyday drinking water.'],
  ['Whole-home and specialty systems', 'Best saved for specific water goals, homeownership decisions, or confirmed issues from a water report or test.'],
];

const faqs = [
  ['Do I need the most expensive filter?', 'No. The best first filter is the one that solves your actual water habit and gets used every day. A pricey system that your household ignores is not a better swap.'],
  ['Should I replace every plastic bottle and container at once?', 'No. Start with the repeat behavior: daily water, reheating food, and most-used storage. Panic replacing everything usually creates waste and overwhelm.'],
  ['Are water filters medical devices?', 'No. LessPlasticish content is educational only. If you have a specific health concern, talk with a qualified professional and use your local water report or testing data.'],
  ['What should I check before buying?', 'Check the product performance data, certifications or testing claims, replacement filter cost, installation requirements, warranty, and return policy.'],
];

export default function WaterGuidePage() {
  return (
    <main className="article">
      <p className="eyebrow">Water guide</p>
      <h1>Best Water Filter Swaps for Reducing Plastic Bottle Waste at Home</h1>
      <p className="lede">Want to cut down on plastic water bottles without panic-buying a complicated system? Start with a water setup your household will actually use.</p>
      <div className="disclosure">As an Amazon Associate, LessPlasticish earns from qualifying purchases. Some links on this page are affiliate links, which means we may earn a commission if you buy through them at no extra cost to you. This page is educational and is not medical advice.</div>

      <p>If plastic bottles are one of the easiest plastic habits to spot in your home, your water setup is one of the best places to start. The goal is not to buy the fanciest filter. The goal is to make better water the easiest default.</p>
      <div className="callout">Quick take: if you buy bottled water every week, start with a countertop or under-sink filter. If you rent or need the simplest first move, start with a pitcher or dispenser. Whole-home systems can wait until you know your actual water goals.</div>

      <h2>First: know what problem you are solving</h2>
      <p>Do not buy based on fear. Buy based on fit. Your water goal may be taste, chlorine smell, fewer plastic bottles, PFAS concern, lead concern, microplastics concern, convenience, or a rental-friendly setup.</p>
      <p>If you are on public water, look for your local Consumer Confidence Report. The EPA explains that public water systems provide annual water quality reports, and the CDC recommends reviewing that report if you have questions about what is in your tap water.</p>
      <p>Useful starting points: <a href="https://www.epa.gov/ccr">EPA Consumer Confidence Reports</a>, <a href="https://www.cdc.gov/drinking-water/about/how-to-read-drinking-water-quality-reports.html">CDC guide to reading water quality reports</a>, and <a href="https://www.nsf.org/consumer-resources/articles/contaminant-reduction-claims-guide">NSF contaminant reduction claims guide</a>.</p>

      <h2>Choose by household situation</h2>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {firstPicks.map(([title, body]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>

      <h2>Compare the main water filter options</h2>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {options.map((option) => (
          <article className="card" key={option.title}>
            <p className="num">{option.effort} effort · {option.price}</p>
            <h3>{option.title}</h3>
            <p><strong>Best for:</strong> {option.bestFor}</p>
            <p><strong>Watch for:</strong> {option.watch}</p>
          </article>
        ))}
      </div>

      <h2>Starter filter options to compare</h2>
      <p>These are Amazon affiliate links, so treat them as starting points for comparison — not medical recommendations and not a replacement for checking your local water report.</p>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {amazonWaterPicks.map((pick) => (
          <article className="card" key={pick.title}>
            <h3>{pick.title}</h3>
            <p><strong>Fit:</strong> {pick.fit}</p>
            <p><strong>Check first:</strong> {pick.check}</p>
            <a href={pick.href} rel="sponsored nofollow noopener noreferrer" target="_blank">View on Amazon →</a>
          </article>
        ))}
      </div>

      <h2>What to check before choosing a filter</h2>
      <p>A good water-filter choice should match your actual water goal, your kitchen, and the amount of maintenance you will realistically keep up with.</p>
      <ul>
        {productRules.map((rule) => <li key={rule}>{rule}</li>)}
      </ul>

      <h2>Which filter lane fits your home?</h2>
      <p>Use these lanes to narrow the search before you compare individual products.</p>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {affiliateShortlist.map(([brand, note]) => (
          <article className="card" key={brand}>
            <h3>{brand}</h3>
            <p>{note}</p>
          </article>
        ))}
      </div>

      <h2>Simple buying checklist</h2>
      <ul>
        <li>What problem am I solving: taste, bottled-water habit, contaminant concern, or convenience?</li>
        <li>Does this product publish testing, certification, or performance data?</li>
        <li>How often do replacement filters need to be changed?</li>
        <li>What does replacement cost look like over a year?</li>
        <li>Will this fit my counter, sink, cabinet, shower, or rental rules?</li>
        <li>Is the brand making reasonable claims, or selling panic?</li>
      </ul>

      <h2>FAQ</h2>
      {faqs.map(([question, answer]) => (
        <section key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </section>
      ))}

      <h2>Start with the setup you will actually repeat</h2>
      <p>Less plastic works best when it becomes boring and repeatable. Choose the water setup your household can maintain, then move to food storage, reheating, and daily kitchen swaps.</p>
      <p><a className="button" href="/starter-checklist">Download the starter checklist</a></p>
    </main>
  );
}
