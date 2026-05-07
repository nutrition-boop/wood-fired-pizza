import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Pizza Dough Calculators | Neapolitan, Poolish, Biga",
  description: "Free, professional-grade pizza dough calculators. Perfect your hydration, salt, and yeast ratios for Neapolitan, Poolish, and Biga dough styles.",
};

export default function CalculatorsHubPage() {
  const calculators = [
    {
      title: "Neapolitan Calculator",
      slug: "neapolitan",
      description: "The traditional direct method for authentic wood-fired pizza. Standard AVPN ratios.",
      icon: "🍕",
      color: "var(--color-accent)"
    },
    {
      title: "Poolish Calculator",
      slug: "poolish",
      description: "Use a liquid pre-ferment for an incredibly light and aromatic crust with big bubbles.",
      icon: "🍯",
      color: "#ff9f1c"
    },
    {
      title: "Biga Calculator",
      slug: "biga",
      description: "A stiff Italian pre-ferment that adds maximum flavor and structure to high-hydration doughs.",
      icon: "🍞",
      color: "#ff7a45"
    }
  ];

  return (
    <main className="main">
      <section className="hero">
        <h1 className="animate-in">Pizza Dough <span>Calculators</span></h1>
        <p className="animate-in animate-delay-1">Professional tools for the serious pizzaiolo. Choose your method and perfect your crust.</p>
      </section>

      <section className="section">
        <div className="calculators-grid">
          {calculators.map((calc) => (
            <Link href={`/calculators/${calc.slug}`} key={calc.slug} className="calc-hub-card animate-in">
              <div className="calc-icon" style={{ background: calc.color }}>{calc.icon}</div>
              <h3>{calc.title}</h3>
              <p>{calc.description}</p>
              <span className="calc-link">Open Calculator →</span>
            </Link>
          ))}
        </div>

        <div className="article" style={{ marginTop: '80px' }}>
          <h2>Why Use a Pizza Dough Calculator?</h2>
          <p>
            Pizza making is as much a science as it is an art. A variation of just 1% in hydration or 0.1% in yeast can be the difference between a dough that's easy to handle and one that's a sticky mess or over-proofed.
          </p>
          <p>
            Our calculators use **Baker's Percentages**, the industry standard for consistency. By calculating every ingredient relative to the total flour weight, you can scale your recipes up or down with perfect precision every time.
          </p>
          <h3>Which Calculator Should You Choose?</h3>
          <ul>
            <li><strong>Neapolitan:</strong> Best if you want a classic, reliable dough that's ready in 8-24 hours. Perfect for beginners and purists.</li>
            <li><strong>Poolish:</strong> Choose this if you love a very light, crispy crust and have time to start your dough 24 hours in advance.</li>
            <li><strong>Biga:</strong> The choice for advanced bakers looking for the most complex flavor and the strongest dough structure for high-hydration pizzas.</li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .calculators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 20px;
        }
        .calc-hub-card {
          background: var(--gradient-card);
          border: 1px solid var(--color-border);
          padding: 40px;
          border-radius: var(--radius-xl);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .calc-hub-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-glow);
        }
        .calc-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 24px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .calc-hub-card h3 {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          margin-bottom: 12px;
        }
        .calc-hub-card p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .calc-link {
          color: var(--color-accent-light);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </main>
  );
}
