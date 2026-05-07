import React from 'react';
import PizzaCalculator from '@/components/PizzaCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Poolish Pizza Dough Calculator | Professional Pre-Ferment Ratios",
  description: "Create incredibly aromatic and light pizza dough with our Poolish calculator. Perfect for achieving a large, airy cornicione and complex flavors.",
};

export default function PoolishCalculatorPage() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="animate-in">Poolish Pizza <span>Dough Calculator</span></h1>
        <p className="animate-in animate-delay-1">Master the art of pre-fermentation for a lighter, crispier, and more aromatic crust.</p>
      </section>

      <section className="section">
        <PizzaCalculator 
          title="Poolish Dough" 
          description="High-hydration pre-ferment method" 
          type="poolish" 
          defaultHydration={68} 
        />

        <div className="article">
          <h2>Why Use a Poolish for Your Pizza?</h2>
          <p>
            A Poolish is a liquid pre-ferment (typically 100% hydration) that is prepared hours before the final dough. This technique, popularized by French bakers, introduces a complex flavor profile and a superior "honeycomb" structure to your pizza crust.
          </p>
          
          <h3>The Benefits of Poolish</h3>
          <ul>
            <li><strong>Enhanced Aroma:</strong> The long, slow fermentation of the poolish develops organic acids and alcohols that smell and taste incredible.</li>
            <li><strong>Better Texture:</strong> The enzymes produced during the pre-ferment help break down starches, resulting in a lighter, more digestible dough.</li>
            <li><strong>Bigger Crust:</strong> Poolish doughs are famous for their "cornicione"—the high, airy outer rim that chars beautifully in the oven.</li>
          </ul>

          <h3>How to Use This Calculator</h3>
          <p>
            Our calculator assumes a standard **30% Poolish**. This means 30% of your total flour is used in the pre-ferment. You mix equal parts flour and water with a tiny amount of yeast, let it sit for 12-16 hours at room temperature until it's bubbly and slightly sunken in the middle, then combine it with the rest of your ingredients.
          </p>

          <blockquote>
            "A perfect poolish should look like a living, breathing landscape of bubbles—that's the secret to a world-class crust."
          </blockquote>
          
          <h3>The Poolish Timeline</h3>
          <ol>
            <li><strong>The Night Before:</strong> Mix the 'Part 1: Poolish' ingredients. Stir until there are no dry spots. Cover and leave at room temperature (68-72°F) for 12-16 hours.</li>
            <li><strong>Mixing the Final Dough:</strong> Pour the 'Part 2: Final Mix' water into your poolish to help loosen it. Add the poolish-water mixture to your remaining flour and salt.</li>
            <li><strong>Kneading:</strong> Knead until smooth. Because poolish doughs are often higher hydration (65-70%), they may be sticky. Use the 'slap and fold' technique if needed.</li>
            <li><strong>Bulk Fermentation:</strong> Let the dough rest for 1-2 hours at room temperature.</li>
            <li><strong>Balling:</strong> Divide into balls and let them proof for another 2-4 hours before baking.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
