const bio = [
  ["Nama", "Aji Nursafiki"],
  ["Status", "Freelancer / Perorangan"],
  ["Lokasi", "Yogyakarta, Indonesia"],
  ["Brand", "Risewise"],
  ["Referensi Kerja", "akimobiljogja.com"],
  ["Kontak", "Via WhatsApp"],
];

const highlights = [
  "Pengembangan sistem web untuk bisnis kecil dan menengah di Indonesia",
  "Platform manajemen toko, kasir digital, invoice, dan website bisnis",
  "Pengalaman langsung membangun sistem untuk bisnis aki, bisnis playstation, dan bisnis online aktif di Yogyakarta",
  "Mengerjakan setiap proyek secara langsung, tidak melalui perantara",
  "Komunikasi mudah, revisi cepat, dan transparan sejak awal hingga selesai",
];

export function Introduction() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Perkenalan Penyedia Jasa</p>
          <h2
            style={{
              fontSize: "45px",
              fontWeight: 800,
              color: "#1754d4",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Risewise
          </h2>
          <div className="rule-blue" />

          {/* Bio table */}
          <div style={{ marginBottom: "36px" }}>
            {bio.map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "10px 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <span
                  style={{
                    width: "120px",
                    flexShrink: 0,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#888",
                  }}
                >
                  {label}
                </span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#111" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1754d4",
              marginBottom: "12px",
            }}
          >
            Tentang Pekerjaan Saya
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#333",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#1754d4",
                    marginTop: "8px",
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "12px", color: "#1754d4", fontWeight: 600 }}>3</span>
        </div>
      </div>
    </div>
  );
}
