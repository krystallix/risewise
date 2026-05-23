const terms = [
  {
    no: "01",
    title: "Masa Berlaku Penawaran",
    desc: "Proposal ini berlaku 30 hari sejak tanggal dokumen. Harga dan ketentuan dapat berubah setelah masa berlaku habis.",
  },
  {
    no: "02",
    title: "Pembayaran",
    desc: "50% DP saat proyek dimulai, 50% pelunasan saat sistem selesai dan siap diserahkan. Pembayaran via transfer bank.",
  },
  {
    no: "03",
    title: "Revisi",
    desc: "Revisi dalam ruang lingkup paket dapat diajukan selama masa pengembangan. Fitur di luar ruang lingkup dikenakan biaya tambahan.",
  },
  {
    no: "04",
    title: "Timeline",
    desc: "Estimasi bersifat perkiraan. Durasi aktual tergantung kelengkapan data klien dan waktu respons selama proses diskusi.",
  },
  {
    no: "05",
    title: "Kerahasiaan Data",
    desc: "Semua data bisnis yang diberikan selama pengembangan diperlakukan rahasia dan hanya digunakan untuk keperluan proyek ini.",
  },
  {
    no: "06",
    title: "Hak Kepemilikan",
    desc: "Setelah pelunasan selesai, klien memiliki hak penuh atas sistem dan konten yang dibangun. Kode sumber diserahkan atas permintaan.",
  },
  {
    no: "07",
    title: "Maintenance",
    desc: "Biaya bulanan mencakup hosting aktif, pembaruan keamanan rutin, dan respons gangguan. Pengembangan fitur baru tidak termasuk.",
  },
  {
    no: "08",
    title: "Domain dan Hosting",
    desc: "Pendaftaran domain dapat dibantu. Biaya domain dan perpanjangan tahunan ditanggung klien, di luar paket setup.",
  },
  {
    no: "09",
    title: "Pembatalan",
    desc: "Jika pembatalan dilakukan setelah DP dibayar dan pekerjaan sudah berjalan, maka DP tidak dapat dikembalikan. Namun, jika pekerjaan belum dimulai, DP akan dikembalikan secara penuh.",
  },
];

export function Terms() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Syarat dan Ketentuan</p>
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
            Ketentuan<br />Kerja Sama
          </h2>
          <div className="rule-blue" />

          <div>
            {terms.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 140px 1fr",
                  gap: "14px",
                  padding: "9px 0",
                  borderBottom: "1px solid #e2e8f0",
                  alignItems: "start",
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
                  {t.no}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#111", paddingTop: "1px" }}>
                  {t.title}
                </span>
                <span style={{ fontSize: "14px", color: "#444", lineHeight: 1.55 }}>{t.desc}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#888",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            Dengan melanjutkan ke tahap pembayaran DP, klien dianggap telah membaca dan menyetujui
            seluruh ketentuan di atas.
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "14px", color: "#1754d4", fontWeight: 600 }}>13</span>
        </div>
      </div>
    </div>
  );
}
