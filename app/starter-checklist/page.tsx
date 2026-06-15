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
              <a className="button" href="mailto:?subject=LessPlasticish Starter Checklist&body=The checklist PDF is being designed. For now, start here: https://lessplasticish.com/start-here-after-the-plastic-detox">Email me a reminder</a>
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
            <p className="body-large">This will become the opt-in PDF. For V1, the page is drafted and ready for email capture once the provider is selected.</p>
          </div>
          <ul className="checklist">
            {swaps.map((swap) => <li key={swap}>{swap}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
