import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
            <Logo />
          </Link>
          <p>
            Your ultimate resource for wood-fired pizza ovens. Expert reviews,
            authentic recipes, building guides, and tips to master the art of
            wood-fired cooking.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Topics</h4>
          <Link href="/blog">Recipes</Link>
          <Link href="/blog">Oven Reviews</Link>
          <Link href="/blog">Building Guides</Link>
          <Link href="/blog">Tips &amp; Tricks</Link>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Wood Fired Pizza Oven. All rights reserved.</p>
      </div>
    </footer>
  );
}
