interface PkgData {
  no: string;
  name: string;
  setup: string;
  monthly: string;
  featured?: boolean;
  features: string[];
}

const packages: PkgData[] = [
  {
    no: "01",
    name: "Landing Page",
    setup: "Rp 1.200.000",
    monthly: "Rp 45.000 / bln",
    features: [
      "Website profil bisnis 1–3 halaman",
      "Informasi toko, layanan, dan kontak",
      "Katalog produk sederhana",
      "Tombol WhatsApp langsung",
      "Desain responsif mobile",
      "SEO dasar",
    ],
  },
  {
    no: "02",
    name: "Starter",
    setup: "Rp 3.500.000",
    monthly: "Rp 100.000 / bln",
    featured: true,
    features: [
      "Semua fitur Landing Page",
      "Dashboard manajemen (1 akun)",
      "Katalog produk lengkap",
      "Rekomendasi aki per kendaraan",
      "Transaksi penjualan",
      "Invoice digital",
    ],
  },
  {
    no: "03",
    name: "Bisnis",
    setup: "Rp 6.500.000",
    monthly: "Rp 250.000 / bln",
    features: [
      "Semua fitur Starter",
      "Transaksi beli stok dan tukar tambah",
      "Pencatatan stok aki lama",
      "Database pelanggan",
      "Dashboard lengkap + grafik 6 bulan",
      "Artikel / blog + SEO lanjutan",
    ],
  },
];
export function Pricing() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Paket Harga</p>
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
            Pilihan Paket
          </h2>
          <div className="rule-blue" />

          {/* Package cards */}
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.no}
                style={{
                  border: pkg.featured ? "none" : "1.5px solid #1754d4",
                  backgroundColor: pkg.featured ? "#1754d4" : "transparent",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    paddingBottom: "12px",
                    borderBottom: `1px solid ${pkg.featured ? "rgba(255,255,255,0.25)" : "#e2e8f0"}`,
                    marginBottom: "12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: pkg.featured ? "rgba(255,255,255,0.65)" : "#888",
                      marginBottom: "2px",
                    }}
                  >
                    Paket {pkg.no}
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: pkg.featured ? "#ffffff" : "#1754d4",
                      letterSpacing: "-0.01em",
                      marginBottom: "8px",
                    }}
                  >
                    {pkg.name}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: pkg.featured ? "#ffffff" : "#111",
                      marginBottom: "1px",
                    }}
                  >
                    {pkg.setup}
                  </p>
                  <p style={{ fontSize: "11px", color: pkg.featured ? "rgba(255,255,255,0.6)" : "#888", marginBottom: "4px" }}>
                    sekali bayar (setup)
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: pkg.featured ? "rgba(255,255,255,0.85)" : "#444" }}>
                    + {pkg.monthly}
                  </p>
                </div>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "12px",
                        color: pkg.featured ? "rgba(255,255,255,0.88)" : "#333",
                        lineHeight: 1.45,
                        display: "flex",
                        gap: "7px",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          color: pkg.featured ? "rgba(255,255,255,0.5)" : "#1754d4",
                          fontWeight: 700,
                        }}
                      >
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div
            style={{
              borderLeft: "3px solid #1754d4",
              paddingLeft: "16px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1754d4",
                marginBottom: "8px",
              }}
            >
              Catatan
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                "Biaya domain (.com) ~Rp 150.000–200.000/tahun, di luar paket. Pendaftaran dapat dibantu.",
                "Pembayaran bertahap: 50% DP di awal, 50% pelunasan saat sistem selesai.",
                "Harga fitur diluar paket bisa dinegosiasikan.", 
                "Harga selain paket bisa dinegosiasikan."
              ].map((note, i) => (
                <li key={i} style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>
                  <span style={{ marginRight: "8px", color: "#1754d4" }}>•</span>{note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "14px", color: "#1754d4", fontWeight: 600 }}>12</span>
        </div>
      </div>
    </div>
  );
}
