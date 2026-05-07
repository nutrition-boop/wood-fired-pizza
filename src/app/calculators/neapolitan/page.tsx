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
          <h2>The Science of Neapolitan Pizza Dough</h2>
          <p>
            Authentic Neapolitan pizza (Pizza Napoletana) is defined by its simplicity and strict ratios. According to the AVPN (Associazione Verace Pizza Napoletana), the dough must consist only of flour, water, salt, and yeast. No oil, no sugar.
          </p>
          
          <h3>Key Ratios for Success</h3>
          <ul>
            <li><strong>Hydration:</strong> Typically between 58% and 65%. Higher hydration results in a lighter, more airy crust but requires better handling skills.</li>
            <li><strong>Salt:</strong> Usually 2.5% to 3.0%. Salt doesn't just add flavor; it strengthens the gluten structure and controls yeast fermentation.</li>
            <li><strong>Flour:</strong> Use highly refined "00" flour with a medium-to-high protein content (11-13%) and a W-value between 250 and 310.</li>
          </ul>

          <h3>Fermentation is Key</h3>
          <p>
            A true Neapolitan dough needs time. While our calculator gives you the ingredients, the magic happens during the 8 to 24-hour fermentation period. For the best results, use room temperature fermentation for the first 2 hours, then ball the dough and let it rest for another 6-20 hours.
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
        </div>
      </section>
    </main>
  );
}
