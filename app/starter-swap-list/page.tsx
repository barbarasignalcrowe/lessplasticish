import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The LessPlasticish Starter Swap List',
  description: 'Beginner-friendly low-plastic home swaps for food storage, water bottles, cleaning, dishes, and everyday kitchen routines.'
};

const starterPicks = [
  {
    lane: 'Food storage',
    title: 'Glass meal prep containers',
    href: 'https://amzn.to/4ovBaYR',
    why: 'A practical first swap if your leftovers, lunches, or meal prep usually sit in plastic containers.',
    note: 'Still check lid material and care instructions. The goal is to reduce daily plastic contact, not replace every container overnight.',
  },
  {
    lane: 'Water on the go',
    title: 'Stainless steel water bottle',
    href: 'https://amzn.to/4etkyw2',
    why: 'Useful for replacing grab-and-go disposable water bottles with something your household will actually carry.',
    note: 'Many bottles still have plastic lid or straw parts. That is okay for a starter swap; do not call it fully plastic-free.',
  },
  {
    lane: 'Cleaning routine',
    title: 'Glass spray bottles',
    href: 'https://amzn.to/4vaiiRu',
    why: 'A simple way to make refillable cleaners feel normal and reduce repeat plastic bottle purchases.',
    note: 'Sprayers usually include plastic parts. Look for durability and replacement options before buying multiples.',
  },
  {
    lane: 'Sink area',
    title: 'Bamboo dish brush set',
    href: 'https://amzn.to/4fMcsRD',
    why: 'Good first sink-area swap if you are replacing worn plastic brushes or disposable sponges.',
    note: 'Brushes need drying time. Check whether refill heads are easy to replace before treating it as a long-term setup.',
  },
  {
    lane: 'Food prep',
    title: 'Bamboo cutting board set',
    href: 'https://amzn.to/44dwSvH',
    why: 'A reasonable next step if your plastic cutting board is heavily scratched or ready to retire.',
    note: 'Wood and bamboo boards need basic care. Keep separate boards for food safety and replace boards when deeply damaged.',
  },
  {
    lane: 'Backup storage',
    title: 'Compostable storage bags',
    href: 'https://amzn.to/4ouCCdI',
    why: 'Useful as a better backup for moments when a disposable bag is still the realistic option.',
    note: 'This is not the same as a reusable swap. Use it as backup, not as permission to keep a disposable-heavy routine.',
  },
];

const nextPicks = [
  {
    title: 'Water filter options',
    body: 'Pitchers, countertop filters, and under-sink filters belong in the water guide because claims, certifications, replacement costs, and installation fit matter.',
    href: '/water-filter-swaps-plastic-bottle-waste',
    cta: 'Read the water guide',
  },
  {
    title: 'Cookware upgrades',
    body: 'Stainless steel and cast iron cookware are useful later, but they are not the first beginner move unless your current cookware is already due for replacement.',
    href: '#cookware-note',
    cta: 'See cookware note',
  },
  {
    title: 'The free checklist',
    body: 'If you want the calm order of operations, use the PDF checklist before buying anything else.',
    href: '/starter-checklist',
    cta: 'Download the checklist',
  },
];

export default function StarterSwapListPage() {
  return (
    <main className="article">
      <p className="eyebrow">Starter swaps</p>
      <h1>The LessPlasticish Starter Swap List</h1>
      <p className="lede">Beginner-friendly low-plastic swaps for real homes. Start with the items you use every week, not a giant cart full of panic purchases.</p>
      <div className="disclosure">As an Amazon Associate, LessPlasticish earns from qualifying purchases. Some links on this page are affiliate links, which means we may earn a commission if you buy through them at no extra cost to you. Educational content only; not medical advice.</div>

      <p>This list is intentionally small. The point is to make the first few swaps obvious: food storage, water habits, cleaning refills, dish tools, and worn kitchen basics.</p>
      <div className="callout">Barbara rule: buy only what replaces a routine you already repeat. If it sits in a cabinet unused, it was not a swap — it was clutter.</div>

      <h2>Best first swaps to consider</h2>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {starterPicks.map((pick) => (
          <article className="card" key={pick.title}>
            <p className="num">{pick.lane}</p>
            <h3>{pick.title}</h3>
            <p><strong>Why it fits:</strong> {pick.why}</p>
            <p><strong>Before you buy:</strong> {pick.note}</p>
            <a href={pick.href} rel="sponsored nofollow noopener noreferrer" target="_blank">View on Amazon →</a>
          </article>
        ))}
      </div>

      <h2>What to buy first</h2>
      <ol>
        <li>If you heat leftovers in plastic, start with glass food storage.</li>
        <li>If disposable water bottles keep showing up, get a reusable bottle and fix the home water setup next.</li>
        <li>If your cleaning routine uses single-use plastic bottles, start with refillable glass spray bottles.</li>
        <li>If your sink area is full of disposable sponges and worn plastic brushes, replace that next.</li>
        <li>If your cutting board is deeply scratched, retire it instead of replacing lower-use items first.</li>
      </ol>

      <h2>What can wait</h2>
      <p>Do not replace every container, pan, tool, and cleaning product in one weekend. Use what you have. Replace what is worn, high-contact, or used daily.</p>
      <div className="cards" style={{gridTemplateColumns: '1fr'}}>
        {nextPicks.map((pick) => (
          <article className="card" key={pick.title}>
            <h3>{pick.title}</h3>
            <p>{pick.body}</p>
            <a href={pick.href}>{pick.cta} →</a>
          </article>
        ))}
      </div>

      <h2 id="cookware-note">Cookware note</h2>
      <p>Cookware can become its own rabbit hole. For LessPlasticish, the better article is not “throw everything out.” It is: replace scratched, worn, or disliked pieces first, then consider stainless steel or cast iron if they fit how you actually cook.</p>
      <p>We will build a separate cookware guide before publishing cookware affiliate links. That page needs care instructions, use-case notes, and careful language around “non-toxic” claims.</p>

      <h2>Keep this calm</h2>
      <p>The best low-plastic home is not the one with the most aesthetic products. It is the one where better defaults become boring and repeatable.</p>
      <p><a className="button" href="/starter-checklist">Download the starter checklist</a></p>
    </main>
  );
}
