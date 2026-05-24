const goals = [
  "Mendigitalisasi pencatatan transaksi agar otomatis terhitung dan tersimpan aman",
  "Menyediakan laporan bisnis real-time yang mudah dibaca tanpa perlu hitung manual",
  "Mempercepat pembuatan dan pengiriman invoice via WhatsApp dalam hitungan detik",
  "Menjaga akurasi stok produk secara otomatis setiap ada transaksi penjualan",
  "Membangun website online yang bisa ditemukan di Google pencarian lokal",
  "Garansi dapat terpantau, sehingga tidak ada lupa tanggal garansi berakhir",
  "Mendokumentasikan data pelanggan dan riwayat pembelian secara terstruktur",
];

const scope = [
  { area: "Website Publik", items: "Beranda, katalog produk, rekomendasi aki, artikel/blog, tentang kami, kontak, FAQ, yang sudah dilengkapi dengan optimasi SEO" },
  { area: "Dashboard Manajemen", items: "Login, transaksi, stok, katalog, pelanggan, invoice, laporan bisnis, artikel." },
  { area: "Fitur Pendukung", items: "Invoice digital, share WhatsApp, QR Code garansi, notifikasi stok, setup domain dan hosting" },
  { area: "Pelatihan", items: "Sesi pelatihan dan pendampingan penggunaan sistem sesuai paket yang dipilih" },
];

export function Goals() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Tujuan dan Ruang Lingkup</p>
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
            Apa yang Ingin<br />Dicapai
          </h2>
          <div className="rule-blue" />

          {/* Goals */}
          <ul style={{ marginBottom: "36px" }}>
            {goals.map((g, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "14px",
                  padding: "9px 0",
                  borderBottom: "1px solid #e2e8f0",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1754d4",
                    opacity: 0.5,
                    paddingTop: "2px",
                    letterSpacing: "0.04em",
                    minWidth: "20px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "15px", color: "#222", lineHeight: 1.55 }}>{g}</span>
              </li>
            ))}
          </ul>

          {/* Scope summary */}
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
            Cakupan Pekerjaan
          </p>
          {scope.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                padding: "8px 0",
                borderBottom: i < scope.length - 1 ? "1px solid #e2e8f0" : "none",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "110px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#888",
                  paddingTop: "1px",
                }}
              >
                {s.area}
              </span>
              <span style={{ fontSize: "14px", color: "#333", lineHeight: 1.55 }}>{s.items}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "12px", color: "#1754d4", fontWeight: 600 }}>5</span>
        </div>
      </div>
    </div>
  );
}
