export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Plastic swaps for real life</p>
            <h1>Less plastic, less panic.</h1>
            <p className="lede">Practical low-plastic swaps for your home — starting with water, food storage, and the everyday routines that matter most.</p>
            <div className="actions">
              <a className="button" href="/starter-checklist">Get the starter checklist</a>
              <a className="button ghost" href="/starter-swap-list">See starter swaps</a>
            </div>
            <div className="trust-strip" aria-label="Trust notes">
              <span className="pill">No perfectionism</span>
              <span className="pill">No panic shopping</span>
              <span className="pill">Affiliate links disclosed</span>
              <span className="pill">Educational, not medical advice</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="/images/mila-kitchen.png" alt="Mila in a bright kitchen holding a practical low-plastic home swap" />
            <div className="note-card">Mila’s rule: start where plastic touches your routine the most.</div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container narrow">
          <p className="eyebrow">Start calmly</p>
          <h2>Plastic is everywhere. Start with one simple swap.</h2>
          <p className="body-large">After documentaries, headlines, and microplastic studies, it is easy to feel like every bottle, container, and takeout lid is suddenly a problem. The better move is to start where daily contact repeats most: water, food storage, reheating, and kitchen tools.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">The first path</p>
          <h2>Start with the swaps that repeat every day.</h2>
          <div className="cards">
            <article className="card accent">
              <p className="num">01 / Water setup</p>
              <h3>Fix your bottled-water habit first.</h3>
              <p>A better water setup can reduce plastic bottle waste and make your daily routine easier. Compare pitchers, countertop filters, under-sink filters, shower filters, and whole-home options by budget and effort.</p>
              <a href="/water-filter-swaps-plastic-bottle-waste">Compare water filter options →</a>
            </article>
            <article className="card peach">
              <p className="num">02 / Food + heat</p>
              <h3>Stop heating food in plastic.</h3>
              <p>This is one of the easiest behavior swaps. Move food to glass, ceramic, or stainless before heating, then replace your most-used containers over time.</p>
              <a href="/start-here-after-the-plastic-detox">Read the start-here guide →</a>
            </article>
            <article className="card">
              <p className="num">03 / Kitchen tools</p>
              <h3>Replace worn plastic where it gets daily use.</h3>
              <p>Cutting boards, utensils, lunch containers, and food storage are better first targets than decorative low-use items.</p>
              <a href="/starter-swap-list">See starter swaps →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <img src="/images/mila-water.png" alt="Mila holding household swap items in a bright kitchen" />
          <div>
            <p className="eyebrow">Free starter guide</p>
            <h2>Get the LessPlasticish Starter Checklist.</h2>
            <p className="body-large">7 easy swaps to reduce everyday plastic exposure without replacing your whole life.</p>
            <ul className="checklist">
              <li>the first water setup decision to make</li>
              <li>the simplest reheating rule</li>
              <li>what food storage to replace first</li>
              <li>what can wait</li>
              <li>a calm 7-day starter plan</li>
            </ul>
            <a className="button" href="/starter-checklist">Send me the checklist</a>
            <div className="actions"><a className="button ghost" href="/starter-swap-list">See the starter swap list</a></div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split">
          <div>
            <p className="eyebrow">Popular first swap</p>
            <h2>Choose a better water setup.</h2>
            <p className="body-large">If your home still depends on bottled water, this is one of the strongest places to start. A better water setup can reduce plastic bottle waste, simplify your routine, and create a practical first high-impact swap.</p>
            <div className="actions"><a className="button secondary" href="/water-filter-swaps-plastic-bottle-waste">Read the water guide</a></div>
          </div>
          <div className="card">
            <p className="eyebrow">Not a zero-waste purity test</p>
            <h3>Use less plastic without getting weird, wasteful, or overwhelmed.</h3>
            <p>We focus on practical home swaps, beginner-friendly product research, and realistic routines that fit actual kitchens, families, budgets, and busy lives.</p>
            <a href="/about">Learn about LessPlasticish →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
