"use client";

import React, { useState } from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-section" id="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section {
          margin: 60px 0;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .faq-title {
          font-family: var(--font-heading), serif;
          font-size: 2rem;
          margin-bottom: 32px;
          text-align: center;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          border-color: var(--color-accent);
          background: var(--color-bg-card-hover);
        }
        .faq-item.open {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-glow);
        }
        .faq-question {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: var(--color-text);
        }
        .faq-icon {
          font-size: 1.5rem;
          color: var(--color-accent-light);
          font-weight: 300;
          transition: transform 0.3s ease;
        }
        .faq-item.open .faq-icon {
          color: var(--color-accent);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-item.open .faq-answer {
          max-height: 500px;
        }
        .faq-answer-inner {
          padding: 0 24px 24px;
          color: var(--color-text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
}
