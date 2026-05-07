"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" id="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`} id="main-nav">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <div className="dropdown">
            <span className="dropdown-trigger">
              Calculators ▾
            </span>
            <div className="dropdown-menu">
              <Link href="/calculators/neapolitan-pizza-dough-calculator" onClick={() => setMenuOpen(false)}>
                Neapolitan Calculator
              </Link>
              <Link href="/calculators/poolish-pizza-dough-calculator" onClick={() => setMenuOpen(false)}>
                Poolish Calculator
              </Link>
              <Link href="/calculators/biga-pizza-dough-calculator" onClick={() => setMenuOpen(false)}>
                Biga Calculator
              </Link>
            </div>
          </div>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
