const tocItems = [
  { label: "Perkenalan Penyedia Jasa", pages: "3" },
  { label: "Latar Belakang", pages: "4" },
  { label: "Tujuan & Ruang Lingkup", pages: "5" },
  { label: "Fitur Sistem", pages: "6–9" },
  { label: "Deliverables", pages: "10" },
  { label: "Timeline Pengerjaan", pages: "11" },
  { label: "Paket Harga", pages: "12" },
  { label: "Syarat dan Ketentuan", pages: "13" },
  { label: "Penutup", pages: "14" },
];

export function TableOfContents() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        {/* Top: icon */}
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        {/* TOC content */}
        <div style={{ flex: 1, paddingTop: "48px" }}>
          <h2
            style={{
              fontSize: "50px",
              fontWeight: 800,
              color: "#1754d4",
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Daftar Isi
          </h2>


          <div>
            {tocItems.map((item, i) => (
              <div key={i} className="toc-row">
                <span className="toc-label">{item.label}</span>
                <span className="toc-page">{item.pages}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: page number */}
        <div style={{ textAlign: "right" }}>
          <span
            style={{
              fontSize: "12px",
              color: "#1754d4",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            2
          </span>
        </div>
      </div>
    </div>
  );
}
