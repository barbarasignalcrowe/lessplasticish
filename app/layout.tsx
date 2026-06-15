import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lessplasticish.com'),
  title: {
    default: 'LessPlasticish — Less Plastic, Less Panic',
    template: '%s | LessPlasticish'
  },
  description: 'Practical low-plastic swaps for your home, starting with water, food storage, and everyday kitchen routines.',
  openGraph: {
    title: 'LessPlasticish — Less Plastic, Less Panic',
    description: 'Practical low-plastic swaps for your home, starting with water, food storage, and everyday kitchen routines.',
    url: 'https://lessplasticish.com',
    siteName: 'LessPlasticish',
    images: [{ url: '/images/mila-kitchen.png', width: 1536, height: 2688, alt: 'Mila in a warm kitchen holding a low-plastic home swap' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LessPlasticish — Less Plastic, Less Panic',
    description: 'Practical low-plastic swaps for your home, starting with water, food storage, and everyday kitchen routines.',
    images: ['/images/mila-kitchen.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="LessPlasticish home">
            <span className="brand-mark">LP</span>
            <span>LessPlasticish</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/start-here-after-the-plastic-detox">Start Here</a>
            <a href="/water-filter-swaps-plastic-bottle-waste">Water Guide</a>
            <a href="/starter-checklist">Free Checklist</a>
            <a href="/about">About</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong>LessPlasticish</strong>
            <p>Less plastic, less panic. Practical swaps for real homes.</p>
          </div>
          <div className="footer-links">
            <a href="/disclosure">Affiliate & health disclosure</a>
            <a href="/starter-checklist">Free checklist</a>
          </div>
          <p className="fine-print">Educational content only. Not medical advice. Product links may be affiliate links, which means we may earn a commission if you buy through them at no extra cost to you.</p>
        </footer>
      </body>
    </html>
  );
}
