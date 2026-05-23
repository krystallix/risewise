export function Cover() {
  return (
    <div className="a4-page blue-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        {/* Top: icon */}
        <div>
          <div className="brand-icon white">✳</div>
        </div>

        {/* Mid: title block */}
        <div style={{ marginTop: "auto", paddingBottom: "40px" }}>
          <h1
            style={{
              fontSize: "61px",
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Penawaran<br />
            Sistem Manajemen<br />
            Bisnis Aki
          </h1>
          <div
            style={{
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.4)",
              marginBottom: "14px",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Risewise (Aji Nursafiki)
          </p>
        </div>

        {/* Bottom: year */}
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.06em",
            }}
          >
            2026
          </p>
        </div>
      </div>
    </div>
  );
}
