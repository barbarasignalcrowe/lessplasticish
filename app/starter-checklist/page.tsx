import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The LessPlasticish Starter Checklist',
  description: '7 easy swaps to reduce everyday plastic exposure without replacing your whole life.'
};

const swaps = [
  'Fix your daily water setup.',
  'Stop heating food in plastic.',
  'Replace your most-used food storage first.',
  'Retire worn plastic cutting boards and utensils.',
  'Make lunch and snack packing less plastic-heavy.',
  'Reduce one plastic-heavy convenience habit.',
  'Start with one room: the kitchen.'
];

export default function ChecklistPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Free starter guide</p>
            <h1>The LessPlasticish Starter Checklist</h1>
            <p className="lede">7 easy swaps to reduce everyday plastic exposure without replacing your whole life.</p>
            <div className="actions">
              <a className="button" href="/files/lessplasticish-starter-checklist-v1.pdf" download>Download the checklist</a>
              <a className="button ghost" href="/start-here-after-the-plastic-detox">Read the start-here guide</a>
            </div>
          </div>
          <div className="hero-card">
            <img src="/images/mila-couch.png" alt="Mila sitting in a calm home setting" />
            <div className="note-card">Use what you have. Replace what matters. Let the rest wait its turn.</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Inside the checklist</p>
            <h2>Start with the swaps that repeat most.</h2>
            <p className="body-large">The branded PDF is ready. Download it now, then use the start-here guide when you want the fuller explanation.</p>
          </div>
          <ul className="checklist">
            {swaps.map((swap) => <li key={swap}>{swap}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
