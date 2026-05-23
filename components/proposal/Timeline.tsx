const phases = [
  {
    no: "01",
    name: "Konsultasi dan Persiapan",
    duration: "1–2 hari",
    tasks: [
      "Diskusi kebutuhan dan finalisasi paket",
      "Penandatanganan perjanjian kerja",
      "Pembayaran DP 50%",
      "Pengumpulan data awal: logo, foto produk, info toko",
    ],
  },
  {
    no: "02",
    name: "Pengembangan Sistem",
    duration: "7–14 hari",
    tasks: [
      "Pembangunan website publik dan dashboard manajemen",
      "Konfigurasi database, autentikasi, dan fitur sesuai paket",
      "Input data produk awal dan konfigurasi toko",
      "Setup domain, hosting, dan uji coba internal",
    ],
  },
  {
    no: "03",
    name: "Pelatihan dan Uji Coba",
    duration: "1–2 hari",
    tasks: [
      "Sesi pelatihan penggunaan sistem sesuai paket",
      "Simulasi transaksi, invoice, dan share ke WhatsApp",
      "Revisi dan penyesuaian jika diperlukan",
      "Pelunasan pembayaran 50%",
    ],
  },
  {
    no: "04",
    name: "Go Live dan Pendampingan",
    duration: "7–14 hari",
    tasks: [
      "Sistem resmi aktif dan siap digunakan penuh",
      "Pendampingan via WhatsApp selama periode awal",
      "Respons terhadap kendala sesuai paket yang dipilih",
    ],
  },
];

export function Timeline() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Timeline Pengerjaan</p>
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
            Proses Kerja Sama
          </h2>
          <div className="rule-blue" />

          <div style={{ marginBottom: "24px" }}>
            {phases.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 130px 1fr",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid #e2e8f0",
                  alignItems: "start",
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1754d4",
                    opacity: 0.45,
                    paddingTop: "2px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.no}
                </span>

                {/* Phase info */}
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "3px" }}>
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1754d4",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.duration}
                  </p>
                </div>

                {/* Tasks */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {p.tasks.map((t, j) => (
                    <li key={j} style={{ fontSize: "14px", color: "#444", lineHeight: 1.5 }}>
                      <span style={{ marginRight: "8px", color: "#1754d4" }}>•</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              borderLeft: "3px solid #1754d4",
              paddingLeft: "16px",
              marginTop: "8px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.65 }}>
              Timeline di atas bersifat estimasi. Durasi aktual dapat berbeda tergantung pada
              kelengkapan data klien, waktu respons selama proses, dan kompleksitas paket yang dipilih.
              Total estimasi: <strong style={{ color: "#111" }}>10–32 hari kerja.</strong>
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "14px", color: "#1754d4", fontWeight: 600 }}>11</span>
        </div>
      </div>
    </div>
  );
}
