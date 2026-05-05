export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          background: "linear-gradient(135deg, #e85d26 0%, #ff9f1c 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(232, 93, 38, 0.4)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="22"
          height="22"
        >
          <path d="M12 2c0 0-5.5 6-5.5 10.5a5.5 5.5 0 0011 0C17.5 8 12 2 12 2zm0 13a2.5 2.5 0 01-2.5-2.5c0-1.8 2.5-4.5 2.5-4.5s2.5 2.7 2.5 4.5A2.5 2.5 0 0112 15z" />
        </svg>
      </div>
      <span
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          letterSpacing: "-0.5px",
          color: "#fff",
        }}
      >
        Wood Fired
      </span>
    </div>
  );
}
