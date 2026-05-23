"use client";

export function PrintBar() {
  return (
    <div
      className="no-print"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#0f3fa8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 24px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px", letterSpacing: "-0.01em" }}>
          ✳ Risewise
        </span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>|</span>
        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px" }}>
          Proposal Sistem Manajemen Toko Aki
        </span>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/6281234567890?text=Halo+Aji%2C+saya+tertarik+dengan+proposal+sistem+toko+aki.",
              "_blank"
            )
          }
          style={{
            backgroundColor: "transparent",
            color: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(255,255,255,0.25)",
            padding: "6px 16px",
            fontSize: "11px",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          Chat WhatsApp
        </button>
        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: "#ffffff",
            color: "#1754d4",
            border: "none",
            padding: "6px 16px",
            fontSize: "11px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          Simpan PDF
        </button>
      </div>
    </div>
  );
}
