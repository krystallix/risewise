const deliverables = [
  {
    no: "01",
    title: "Sistem yang Aktif dan Bisa Digunakan",
    desc: "Website publik toko dan dashboard manajemen yang sudah dikonfigurasi, sudah diisi data awal, dan siap digunakan.",
  },
  {
    no: "02",
    title: "Data Awal yang Sudah Diinput",
    desc: "Produk awal sesuai katalog klien, konfigurasi data toko (nama, alamat, nomor HP, logo), dan data kendaraan untuk rekomendasi aki.",
  },
  {
    no: "03",
    title: "Domain dan Hosting Aktif",
    desc: "Setup domain dan hosting sudah selesai. Situs dapat diakses dari internet. Biaya domain ditanggung klien di luar paket.",
  },
  {
    no: "04",
    title: "Panduan Penggunaan",
    desc: "Dokumen panduan sederhana penggunaan dashboard. Rekaman sesi pelatihan (jika dilakukan via Zoom).",
  },
  {
    no: "05",
    title: "Pelatihan Langsung",
    desc: "Sesi pelatihan penggunaan sistem untuk pemilik dan karyawan, durasi sesuai paket yang dipilih.",
  },
  {
    no: "06",
    title: "Pendampingan Pasca-Launch",
    desc: "Pendampingan via WhatsApp selama 7–14 hari pertama setelah sistem aktif. Respons sesuai paket.",
  },
];

const notIncluded = [
  "Biaya pembelian dan perpanjangan domain tahunan",
  "Desain logo atau aset merek (jika belum ada)",
  "Integrasi dengan marketplace eksternal (Tokopedia, Shopee, dll.)",
  "Fitur di luar ruang lingkup paket yang dipilih",
];

export function Deliverables() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Deliverables</p>
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
            Yang Akan Diserahkan
          </h2>
          <div className="rule-blue" />

          <div style={{ marginBottom: "28px" }}>
            {deliverables.map((d, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: "14px",
                  padding: "11px 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1754d4",
                    opacity: 0.45,
                    paddingTop: "2px",
                  }}
                >
                  {d.no}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "3px" }}>
                    {d.title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.55 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Not included */}
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
                marginBottom: "10px",
              }}
            >
              Tidak Termasuk dalam Paket
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {notIncluded.map((item, i) => (
                <li key={i} style={{ fontSize: "14px", color: "#555", lineHeight: 1.5 }}>
                  <span style={{ marginRight: "8px", color: "#1754d4" }}>•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "14px", color: "#1754d4", fontWeight: 600 }}>10</span>
        </div>
      </div>
    </div>
  );
}
