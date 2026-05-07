import React from 'react';
import PizzaCalculator from '@/components/PizzaCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Neapolitan Pizza Dough Calculator | Professional AVPN Ratios",
  description: "Calculate the perfect Neapolitan pizza dough recipe using professional AVPN standards. Adjust hydration, yeast, and salt for 60-second wood-fired pizzas.",
};

export default function NeapolitanCalculatorPage() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="animate-in">Neapolitan Pizza <span>Dough Calculator</span></h1>
        <p className="animate-in animate-delay-1">The gold standard for wood-fired pizza. Engineered for 900°F ovens and pillowy crusts.</p>
      </section>

      <section className="section">
        <PizzaCalculator 
          title="Neapolitan Dough" 
          description="Traditional direct method dough" 
          type="neapolitan" 
          defaultHydration={62} 
        />

        <div className="article">
          <h3>The Baker's Percentage Formula</h3>
          <p>
            Our calculator uses the <strong>Baker's Percentage</strong> system. In this method, every ingredient is calculated as a percentage of the total flour weight (which is always 100%). This ensures perfect consistency regardless of whether you are making 2 pizzas or 200.
          </p>
          <pre><code>Ingredient Weight = (Total Flour Weight × Ingredient %) / 100</code></pre>

          <h3>Why Use Our Neapolitan Calculator?</h3>
          <p>
            Unlike generic calculators, our tool is calibrated for the <strong>high-heat environment</strong> of wood-fired ovens. It accounts for the rapid moisture loss that occurs at 900°F and recommends hydration levels (58-65%) that prevent the dough from becoming too tough or too soggy.
          </p>

          <blockquote>
            "Neapolitan pizza is not just food; it's a centuries-old tradition of balance between heat, water, and wheat."
          </blockquote>
          
          <h3>Step-by-Step Instructions</h3>
          <ol>
            <li><strong>Whisk the Water and Salt:</strong> Dissolve the salt completely in the water first. This protects the yeast from direct contact with salt.</li>
            <li><strong>Add Yeast:</strong> Stir in the yeast until dissolved.</li>
            <li><strong>Incorporate Flour:</strong> Add 90% of the flour and mix by hand or with a low-speed mixer until a shaggy mass forms.</li>
            <li><strong>Knead:</strong> Gradually add the remaining flour and knead for 10-15 minutes until the dough is smooth, elastic, and reaches a temperature of about 23-26°C.</li>
            <li><strong>Rest and Ball:</strong> Cover the dough and let it rest for 2 hours. Divide into balls (typically 250g each) and place in a proofing box for the final 6-24 hours.</li>
          </ol>

          <FAQAccordion 
            faqs={[
              { question: "What is the best flour for Neapolitan pizza?", answer: "Always use Tipo 00 flour with a medium-high protein content (11-13%). Brands like Antimo Caputo are the gold standard." },
              { question: "Why is there no oil in this recipe?", answer: "Traditional Neapolitan pizza (AVPN) forbids oil. Oil is used in lower-temp ovens to help browning, but at 900°F, it would burn and ruin the flavor." },
              { question: "How long should I ferment the dough?", answer: "At least 8 hours at room temperature, or up to 24-48 hours if using a cold ferment in the refrigerator." },
              { question: "What is the ideal dough ball weight?", answer: "A standard 12-inch Neapolitan pizza typically uses a dough ball between 250g and 280g." },
              { question: "Can I use active dry yeast?", answer: "Yes, but you should dissolve it in warm water first. Our calculator assumes Instant Dry Yeast (IDY) for simplicity." }
            ]} 
          />
        </div>
      </section>
    </main>
  );
}
