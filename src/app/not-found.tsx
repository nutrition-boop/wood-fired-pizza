import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", paddingTop: 100 }}>
      <div className="empty-state">
        <div className="empty-state-icon">🍕</div>
        <h3>Page Not Found</h3>
        <p style={{ marginBottom: 24 }}>
          Oops! Looks like this page got lost in the oven.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "var(--gradient-fire)",
            color: "#fff",
            borderRadius: "var(--radius-md)",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
