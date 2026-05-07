"use client";

import React, { useState, useEffect } from 'react';
import { calculateDough, DoughResult } from '@/lib/pizzaMath';

interface CalculatorProps {
  title: string;
  description: string;
  type: 'neapolitan' | 'poolish' | 'biga';
  defaultHydration: number;
}

export default function PizzaCalculator({ title, description, type, defaultHydration }: CalculatorProps) {
  // Inputs
  const [ballCount, setBallCount] = useState(4);
  const [ballWeight, setBallWeight] = useState(250);
  const [hydration, setHydration] = useState(defaultHydration);
  const [salt, setSalt] = useState(2.5);
  const [yeast, setYeast] = useState(0.2);
  const [oil, setOil] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [waste, setWaste] = useState(2);
  
  // Preferment specific
  const [prefFlourPercent, setPrefFlourPercent] = useState(type === 'neapolitan' ? 0 : 30);
  const [prefHydration, setPrefHydration] = useState(type === 'poolish' ? 100 : 45);

  const [result, setResult] = useState<DoughResult | null>(null);

  useEffect(() => {
    const res = calculateDough(
      ballCount,
      ballWeight,
      hydration,
      salt,
      yeast,
      oil,
      sugar,
      waste,
      type !== 'neapolitan' ? {
        type: type as 'poolish' | 'biga',
        flourPercent: prefFlourPercent,
        hydration: prefHydration
      } : undefined
    );
    setResult(res);
  }, [ballCount, ballWeight, hydration, salt, yeast, oil, sugar, waste, prefFlourPercent, prefHydration, type]);

  if (!result) return null;

  return (
    <div className="calculator-container">
      <div className="calculator-grid">
        {/* Input Section */}
        <div className="calculator-inputs">
          <div className="input-header">
            <h3>Configure Your Dough</h3>
            <p>Adjust the values below to customize your recipe.</p>
          </div>

          <div className="input-group-grid">
            <div className="input-field">
              <label>Dough Balls</label>
              <input 
                type="number" 
                value={ballCount} 
                onChange={(e) => setBallCount(Number(e.target.value))} 
                min="1"
              />
            </div>
            <div className="input-field">
              <label>Weight per Ball (g)</label>
              <input 
                type="number" 
                value={ballWeight} 
                onChange={(e) => setBallWeight(Number(e.target.value))} 
                min="50"
              />
            </div>
          </div>

          <div className="input-field">
            <label>Hydration: {hydration}%</label>
            <input 
              type="range" 
              value={hydration} 
              onChange={(e) => setHydration(Number(e.target.value))} 
              min="50" max="90" step="1"
            />
          </div>

          <div className="input-group-grid">
            <div className="input-field">
              <label>Salt (%)</label>
              <input 
                type="number" 
                value={salt} 
                onChange={(e) => setSalt(Number(e.target.value))} 
                step="0.1"
              />
            </div>
            <div className="input-field">
              <label>Yeast (%)</label>
              <input 
                type="number" 
                value={yeast} 
                onChange={(e) => setYeast(Number(e.target.value))} 
                step="0.01"
              />
            </div>
          </div>

          {type !== 'neapolitan' && (
            <div className="preferment-section">
              <h4>{type.charAt(0).toUpperCase() + type.slice(1)} Settings</h4>
              <div className="input-field">
                <label>Flour in {type} (% of total)</label>
                <input 
                  type="range" 
                  value={prefFlourPercent} 
                  onChange={(e) => setPrefFlourPercent(Number(e.target.value))} 
                  min="5" max="100"
                />
                <span className="value-display">{prefFlourPercent}%</span>
              </div>
            </div>
          )}

          <div className="advanced-settings">
            <details>
              <summary>Advanced Settings (Oil, Sugar, Waste)</summary>
              <div className="input-group-grid" style={{ marginTop: '15px' }}>
                <div className="input-field">
                  <label>Oil (%)</label>
                  <input type="number" value={oil} onChange={(e) => setOil(Number(e.target.value))} step="0.5" />
                </div>
                <div className="input-field">
                  <label>Sugar (%)</label>
                  <input type="number" value={sugar} onChange={(e) => setSugar(Number(e.target.value))} step="0.5" />
                </div>
                <div className="input-field">
                  <label>Residue (%)</label>
                  <input type="number" value={waste} onChange={(e) => setWaste(Number(e.target.value))} step="0.5" />
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Output Section */}
        <div className="calculator-results">
          <div className="results-card">
            <div className="results-header">
              <h3>Your Recipe</h3>
              <div className="total-weight-badge">{result.totalWeight}g Total</div>
            </div>

            {result.preferment && (
              <div className="result-section">
                <h4 className="section-title-alt">Part 1: The {result.preferment.type.toUpperCase()}</h4>
                <div className="ingredient-list">
                  <div className="ingredient-item">
                    <span>Flour</span>
                    <strong>{result.preferment.flour}g</strong>
                  </div>
                  <div className="ingredient-item">
                    <span>Water</span>
                    <strong>{result.preferment.water}g</strong>
                  </div>
                  <div className="ingredient-item">
                    <span>Yeast</span>
                    <strong>{result.preferment.yeast}g</strong>
                  </div>
                </div>
                <p className="mixing-note">Mix and ferment for 12-24 hours before making the final dough.</p>
              </div>
            )}

            <div className="result-section">
              <h4 className="section-title-alt">{result.preferment ? 'Part 2: Final Mix' : 'Ingredients'}</h4>
              <div className="ingredient-list">
                <div className="ingredient-item">
                  <span>Flour</span>
                  <strong>{result.finalMix ? result.finalMix.flour : result.totalFlour}g</strong>
                </div>
                <div className="ingredient-item">
                  <span>Water</span>
                  <strong>{result.finalMix ? result.finalMix.water : result.totalWater}g</strong>
                </div>
                <div className="ingredient-item">
                  <span>Salt</span>
                  <strong>{result.totalSalt}g</strong>
                </div>
                {!result.preferment && (
                  <div className="ingredient-item">
                    <span>Yeast</span>
                    <strong>{result.totalYeast}g</strong>
                  </div>
                )}
                {result.totalOil > 0 && (
                  <div className="ingredient-item">
                    <span>Oil</span>
                    <strong>{result.totalOil}g</strong>
                  </div>
                )}
                {result.totalSugar > 0 && (
                  <div className="ingredient-item">
                    <span>Sugar</span>
                    <strong>{result.totalSugar}g</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary" onClick={() => window.print()}>Print Recipe</button>
              <button className="btn-secondary" onClick={() => {
                const text = `Pizza Recipe: ${result.totalFlour}g Flour, ${result.totalWater}g Water, ${result.totalSalt}g Salt...`;
                navigator.clipboard.writeText(text);
                alert('Recipe copied to clipboard!');
              }}>Copy Text</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-container {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          margin: 40px 0;
        }
        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 900px) {
          .calculator-grid { grid-template-columns: 1fr; }
        }
        .calculator-inputs {
          padding: 40px;
          border-right: 1px solid var(--color-border);
        }
        .calculator-results {
          padding: 40px;
          background: rgba(232,93,38,0.03);
        }
        .input-header h3 { font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 8px; }
        .input-header p { color: var(--color-text-secondary); margin-bottom: 32px; font-size: 0.95rem; }
        
        .input-group-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
        .input-field { margin-bottom: 24px; }
        .input-field label { display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-text-muted); margin-bottom: 8px; }
        .input-field input[type="number"] {
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          color: #fff;
          font-size: 1.1rem;
          outline: none;
        }
        .input-field input[type="number"]:focus { border-color: var(--color-accent); }
        .input-field input[type="range"] {
          width: 100%;
          accent-color: var(--color-accent);
          height: 6px;
          background: var(--color-border);
          border-radius: 5px;
          outline: none;
        }

        .preferment-section {
          margin: 32px 0;
          padding: 24px;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-border);
        }
        .preferment-section h4 { margin-bottom: 16px; font-size: 1.1rem; }

        .results-card {
          position: sticky;
          top: 100px;
        }
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .results-header h3 { font-family: var(--font-heading); font-size: 1.8rem; }
        .total-weight-badge {
          background: var(--gradient-fire);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .result-section { margin-bottom: 32px; }
        .section-title-alt {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-accent-light);
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(232,93,38,0.2);
          padding-bottom: 8px;
        }
        
        .ingredient-list { display: flex; flex-direction: column; gap: 12px; }
        .ingredient-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .ingredient-item span { color: var(--color-text-secondary); }
        .ingredient-item strong { font-size: 1.2rem; }

        .mixing-note { font-size: 0.85rem; color: var(--color-text-muted); font-style: italic; margin-top: 12px; }

        .action-buttons { display: flex; gap: 12px; margin-top: 40px; }
        .btn-primary, .btn-secondary {
          flex: 1;
          padding: 14px;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-primary { background: var(--gradient-fire); border: none; color: #fff; }
        .btn-secondary { background: transparent; border: 1px solid var(--color-border); color: var(--color-text); }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }
        .btn-secondary:hover { background: var(--color-bg-card-hover); }

        .advanced-settings summary {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          cursor: pointer;
          user-select: none;
        }
        .advanced-settings summary:hover { color: var(--color-text-secondary); }
      `}</style>
    </div>
  );
}
