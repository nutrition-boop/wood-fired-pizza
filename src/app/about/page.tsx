import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Wood Fired Pizza Oven — your trusted source for wood-fired cooking knowledge, reviews, and recipes.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero" id="about-hero">
        <h1 className="animate-in">
          About <span>Us</span>
        </h1>
        <p className="animate-in animate-delay-1">
          Passionate about the art and craft of wood-fired pizza making.
        </p>
      </section>

      <div className="about-content" id="about-content">
        <h2>Our Story</h2>
        <p>
          Welcome to Wood Fired Pizza Oven — your ultimate online resource for
          everything related to wood-fired pizza cooking. We started this blog
          out of a deep passion for the tradition, flavor, and craft of cooking
          pizza in a wood-fired oven.
        </p>
        <p>
          Whether you&apos;re a backyard enthusiast looking to build your first
          oven, or a seasoned pizzaiolo searching for authentic Neapolitan
          recipes, we&apos;ve got you covered. Our team of writers and
          contributors brings years of hands-on experience to every article.
        </p>

        <h2>What We Cover</h2>
        <p>
          Our blog covers a wide range of topics including:
        </p>
        <ul style={{ listStyle: "disc", paddingLeft: 24, color: "var(--color-text-secondary)", marginBottom: 20 }}>
          <li style={{ marginBottom: 8 }}>In-depth reviews of wood-fired pizza ovens for every budget</li>
          <li style={{ marginBottom: 8 }}>Authentic pizza dough recipes and techniques</li>
          <li style={{ marginBottom: 8 }}>Step-by-step guides for building your own pizza oven</li>
          <li style={{ marginBottom: 8 }}>Tips and tricks for temperature control and fire management</li>
          <li style={{ marginBottom: 8 }}>Accessories and tools every pizza maker needs</li>
          <li style={{ marginBottom: 8 }}>Comparisons and buyer&apos;s guides</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          We believe that everyone deserves to enjoy incredible, restaurant-quality
          pizza at home. Our mission is to empower home cooks with the knowledge,
          techniques, and inspiration they need to master wood-fired cooking.
        </p>
        <p>
          Every article is written with care, backed by real experience, and
          designed to help you get the most out of your wood-fired pizza oven
          journey.
        </p>
      </div>
    </>
  );
}
