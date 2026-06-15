import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate & Health Disclosure',
  description: 'LessPlasticish affiliate and health disclosure.'
};

export default function DisclosurePage() {
  return (
    <main className="article">
      <p className="eyebrow">Disclosure</p>
      <h1>Affiliate & health disclosure</h1>
      <h2>Affiliate links</h2>
      <p>Some links on LessPlasticish may be affiliate links. If you buy through those links, LessPlasticish may earn a commission at no extra cost to you.</p>
      <p>Affiliate relationships do not remove the need for product scrutiny. Our goal is to recommend products that fit the swap being explained and make sense for real household routines.</p>
      <h2>Educational content only</h2>
      <p>LessPlasticish provides educational content and product research only. We do not provide medical advice, diagnosis, or treatment recommendations.</p>
      <p>Any health-related decisions should be made with qualified professionals and appropriate testing or source information. We avoid claims that a product can fix fertility, hormones, disease, or medical conditions.</p>
      <h2>Product claims</h2>
      <p>When a product claims to filter, reduce, remove, or avoid a substance, readers should check the brand’s published testing, certifications, replacement requirements, and limitations before buying.</p>
    </main>
  );
}
