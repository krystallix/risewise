"use client";

export function Closing() {
  return (
    <div className="a4-page blue-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        {/* Top: icon */}
        <div>
          <div className="brand-icon white">✳</div>
        </div>

        {/* Mid: main content */}
        <div style={{ flex: 1, paddingTop: "auto", marginTop: "auto", paddingBottom: "48px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
            }}
          >
            Penutup
          </p>

          <h2
            style={{
              fontSize: "50px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Tertarik untuk<br />
            berdiskusi lebih<br />
            lanjut?
          </h2>

          <div
            style={{
              height: "1.5px",
              backgroundColor: "rgba(255,255,255,0.25)",
              marginBottom: "24px",
            }}
          />

          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            Hubungi saya via WhatsApp untuk jadwalkan sesi demo gratis 30 menit.
            Saya akan tunjukan bagaimana cara sistem ini bekerja, tanpa komitmen di depan.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6281247759998?text=Halo+Aji%2C+saya+tertarik+dengan+proposal+sistem+toko+aki.",
                  "_blank"
                )
              }
              style={{
                backgroundColor: "#ffffff",
                color: "#1754d4",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.06em",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Chat WhatsApp
            </button>
            <button
              onClick={() => window.print()}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.06em",
                padding: "12px 24px",
                border: "1.5px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
              }}
            >
              Simpan PDF
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.6,
              }}
            >
              Aji Nursafiki (Risewise)<br />
              Yogyakarta, Indonesia<br />
            </p>
          </div>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
            14
          </span>
        </div>
      </div>
    </div>
  );
}
