import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Wood Fired Pizza Oven team. Questions, suggestions, or collaboration inquiries welcome.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero" id="contact-hero">
        <h1 className="animate-in">
          Get in <span>Touch</span>
        </h1>
        <p className="animate-in animate-delay-1">
          Have a question or suggestion? We&apos;d love to hear from you.
        </p>
      </section>

      <div className="about-content" id="contact-content">
        <h2>Contact Us</h2>
        <p>
          Whether you have a question about wood-fired ovens, want to suggest a
          topic for us to cover, or are interested in collaborating — feel free
          to reach out.
        </p>
        <p>
          📧 Email us at:{" "}
          <a
            href="mailto:hello@wood-fired-pizza-oven.us"
            style={{ color: "var(--color-accent-light)", textDecoration: "underline" }}
          >
            hello@wood-fired-pizza-oven.us
          </a>
        </p>
        <p>
          We typically respond within 24–48 hours. For general inquiries about
          recipes or oven recommendations, check our blog first — you might find
          exactly what you&apos;re looking for!
        </p>
      </div>
    </>
  );
}
