import React from 'react';
import PizzaCalculator from '@/components/PizzaCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biga Pizza Dough Calculator | Traditional Italian Pre-Ferment",
  description: "Calculate the perfect Biga pizza dough recipe. Biga is a stiff pre-ferment that produces a unique crumb structure and incredible depth of flavor.",
};

export default function BigaCalculatorPage() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="animate-in">Biga Pizza <span>Dough Calculator</span></h1>
        <p className="animate-in animate-delay-1">The secret of the Italian master bakers. A stiff pre-ferment for maximum crumb structure and flavor.</p>
      </section>

      <section className="section">
        <PizzaCalculator 
          title="Biga Dough" 
          description="Stiff pre-ferment (45-50% hydration)" 
          type="biga" 
          defaultHydration={70} 
        />

        <div className="article">
          <h2>Understanding the Biga Method</h2>
          <p>
            While Poolish is liquid, a **Biga** is a stiff, crumbly pre-ferment. This Italian technique is traditionally used to add strength and a specific nutty flavor to doughs. It's the preferred method for many artisanal pizza styles, including contemporary Neapolitan and Pizza in Pala.
          </p>
          
          <h3>Why Biga is Different</h3>
          <ul>
            <li><strong>Dough Strength:</strong> The lower hydration in a biga (typically 45-50%) encourages more acidic development, which strengthens the gluten network.</li>
            <li><strong>Flavor Depth:</strong> Biga produces a deeper, more bread-like flavor compared to the floral notes of a poolish.</li>
            <li><strong>Open Crumb:</strong> Biga is excellent for high-hydration pizzas (70%+) because it helps the dough hold onto large air bubbles during the bake.</li>
          </ul>

          <h3>Professional Tips for Biga</h3>
          <p>
            When mixing your biga, **do not knead it**. You want a shaggy, crumbly mess where all the flour is hydrated but no gluten has been developed yet. The yeast will do the work over the next 16-24 hours.
          </p>

          <blockquote>
            "Biga is about patience. You're building a foundation of flavor that no direct-method dough can ever match."
          </blockquote>
          
          <h3>The Biga Workflow</h3>
          <ol>
            <li><strong>Creating the Biga:</strong> Mix 'Part 1: Biga' ingredients roughly. It should look like clumpy wet sand. Do not form a smooth ball. Cover and ferment at 18°C (64°F) for 16-20 hours.</li>
            <li><strong>The Final Mix:</strong> Break the biga into small pieces into your mixing bowl. Add the remaining water and use your hands or a whisk to create a "milky" slurry.</li>
            <li><strong>Adding Dry Ingredients:</strong> Add the remaining flour and salt. Mix until combined.</li>
            <li><strong>The High-Hydration Stretch:</strong> Because biga is often used for 70%+ hydration, the dough will be very soft. Perform several rounds of 'stretch and folds' every 30 minutes to build strength.</li>
            <li><strong>Proofing:</strong> Bulk ferment for 1 hour, ball, and proof for another 3-5 hours before baking.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
