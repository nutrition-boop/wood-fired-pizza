import React from 'react';
import PizzaCalculator from '@/components/PizzaCalculator';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

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
          <h3>The Science of Poolish Pre-Ferment</h3>
          <p>
            A <strong>Poolish</strong> is a highly hydrated liquid pre-ferment (typically 100% hydration) that leverages extended fermentation to maximize <strong>enzymatic activity</strong>. This process breaks down complex starches into simple sugars, resulting in a superior "honeycomb" structure and a more digestible crust.
          </p>
          
          <h3>Why Professionals Choose Poolish</h3>
          <ul>
            <li><strong>The Cornicione:</strong> Poolish produces the high, airy outer rim known as the <em>cornicione</em>, characterized by thin, crispy walls and large air pockets.</li>
            <li><strong>Aromatic Depth:</strong> The long fermentation develops organic acids that provide a floral, nutty aroma impossible to achieve with the direct method.</li>
            <li><strong>Extended Shelf Life:</strong> The increased acidity from the poolish helps the final pizza stay fresh and soft for longer.</li>
          </ul>

          <h3>How to Mix Your Poolish</h3>
          <p>
            Mix the 'Part 1: Poolish' flour and water with a tiny pinch of yeast. Stir until it looks like a thick batter. Cover and let it sit at room temperature (around 70°F) for 12-16 hours. You'll know it's ready when the surface is covered in small bubbles and it has a slightly alcoholic, sweet smell.
          </p>

          <blockquote>
            "A perfect poolish should look like a living, breathing landscape of bubbles—that's the secret to a world-class crust."
          </blockquote>
          
          <h3>Step-by-Step Instructions</h3>
          <ol>
            <li><strong>The Night Before:</strong> Mix the Poolish ingredients. Cover and ferment for 12-16 hours.</li>
            <li><strong>Final Mix:</strong> Add the remaining water to the poolish to loosen it. Then add the remaining flour and salt.</li>
            <li><strong>Kneading:</strong> Knead until smooth. Poolish dough is often 65-70% hydration, so use 'slap and fold' techniques.</li>
            <li><strong>Bulk Proof:</strong> Rest the dough for 1-2 hours, then ball and proof for another 2-4 hours.</li>
          </ol>

          <FAQAccordion 
            faqs={[
              { question: "Can I ferment poolish in the fridge?", answer: "Yes, but let it sit at room temperature for 2 hours first to get the yeast active. Cold fermentation (CT) can last 24-48 hours." },
              { question: "What should the poolish look like when it's ready?", answer: "It should be double in size, bubbly, and just starting to collapse slightly in the center." },
              { question: "Can I use poolish for New York style pizza?", answer: "Absolutely! It adds a great flavor and crispiness to NY style doughs as well." },
              { question: "How much of the total flour should be in the poolish?", answer: "Typically 20% to 50%. Our calculator defaults to 30% for a balanced flavor and easier handling." },
              { question: "What if my poolish smells like vinegar?", answer: "If it smells too acidic or like vinegar, it might be over-proofed. It's still safe to use, but the dough might be weaker." }
            ]} 
          />
        </div>
      </section>
    </main>
  );
}
