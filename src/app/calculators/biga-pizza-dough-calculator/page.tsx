import React from 'react';
import PizzaCalculator from '@/components/PizzaCalculator';
import { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Biga Pizza Dough Calculator | Stiff Pre-Ferment Ratios",
  description: "Master the Italian Biga method with our professional calculator. Achieve maximum flavor, structure, and a beautiful golden crust in your wood-fired oven.",
};

export default function BigaCalculatorPage() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="animate-in">Biga Pizza <span>Dough Calculator</span></h1>
        <p className="animate-in animate-delay-1">The secret to maximum flavor and a strong, aromatic crust through stiff pre-fermentation.</p>
      </section>

      <section className="section">
        <PizzaCalculator 
          title="Biga Dough" 
          description="Stiff Italian pre-ferment method" 
          type="biga" 
          defaultHydration={70} 
        />

        <div className="article">
          <h3>The Power of the Biga Method</h3>
          <p>
            A <strong>Biga</strong> is a stiff pre-ferment (usually 45-50% hydration) that is widely used in Italian baking to improve the strength and flavor of the dough. Unlike the liquid poolish, a biga promotes <strong>lactic acid development</strong>, which gives the finished pizza a distinct, slightly tangy flavor and a very strong gluten network.
          </p>
          
          <h3>Why Advanced Bakers Love Biga</h3>
          <ul>
            <li><strong>Structure:</strong> The stiff nature of biga creates a very strong dough that can support high hydration levels (up to 75-80%) without becoming unmanageable.</li>
            <li><strong>Flavor Complexity:</strong> The slow, cool fermentation of a biga produces a deep, nutty flavor that is the hallmark of artisanal Italian bread and pizza.</li>
            <li><strong>Perfect Browning:</strong> Biga doughs often brown better in the oven, giving you a beautiful golden-brown color even in slightly lower temperature zones.</li>
          </ul>

          <h3>How to Prepare Your Biga</h3>
          <p>
            Unlike a batter-like poolish, a biga should be crumbly. Mix the flour, water, and yeast just until the flour is hydrated. It shouldn't look like a finished dough; it should look like rough clumps. Ferment it in a cool place (60-65°F is ideal) for 16-24 hours.
          </p>

          <blockquote>
            "Biga is for the patient pizzaiolo who understands that great crust isn't built in an hour—it's grown overnight."
          </blockquote>
          
          <h3>Step-by-Step Instructions</h3>
          <ol>
            <li><strong>The Biga Mix:</strong> Combine 'Part 1: Biga' ingredients. Mix roughly until no dry flour remains. Do not over-knead. Ferment for 16-24 hours.</li>
            <li><strong>Breaking the Biga:</strong> On the day of baking, break the biga into small pieces and add them to the remaining water.</li>
            <li><strong>Final Incorporation:</strong> Add the remaining flour and salt. Knead thoroughly until the biga is completely integrated into the final dough.</li>
            <li><strong>Rest and Ball:</strong> Let the dough rest for 1 hour, then form into balls and proof for 3-5 hours.</li>
          </ol>

          <FAQAccordion 
            faqs={[
              { question: "What is the difference between Biga and Poolish?", answer: "Biga is a stiff pre-ferment (low hydration), while Poolish is a liquid pre-ferment (high hydration). Biga typically adds more structure and a nuttier flavor, while Poolish adds more extensibility and a floral aroma." },
              { question: "Can I use Biga for 100% hydration doughs?", answer: "Biga is actually the preferred method for very high hydration doughs because it provides the gluten strength needed to hold all that water." },
              { question: "How long can I keep Biga in the fridge?", answer: "You can cold-ferment Biga for up to 48-72 hours, but it's best used within 24 hours of reaching its peak." },
              { question: "Should I use a mixer for Biga?", answer: "It's often easier to mix Biga by hand to avoid over-developing the gluten too early." },
              { question: "What temperature is best for Biga?", answer: "Biga loves cool temperatures. 16-18°C (60-64°F) is considered the sweet spot for the best flavor development." }
            ]} 
          />
        </div>
      </section>
    </main>
  );
}
