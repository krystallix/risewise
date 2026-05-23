const problems = [
  {
    no: "01",
    title: "Pencatatan transaksi masih manual",
    desc: "Buku kas atau kertas mudah hilang, salah hitung, dan tidak bisa dicari ulang dengan cepat.",
  },
  {
    no: "02",
    title: "Stok produk tidak terpantau secara real-time",
    desc: "Seringkali baru tahu stok habis saat ada pembeli. Tidak ada peringatan otomatis.",
  },
  {
    no: "03",
    title: "Pembuatan nota memakan waktu",
    desc: "Menulis atau mengetik nota satu per satu tidak efisien, apalagi saat toko sedang ramai.",
  },
  {
    no: "04",
    title: "Tidak ada rekap performa bisnis",
    desc: "Untuk tahu pendapatan bulan ini, harus hitung ulang dari semua nota, proses yang rawan kesalahan.",
  },
  {
    no: "05",
    title: "Data pelanggan tidak tersimpan terstruktur",
    desc: "Nomor HP tersebar di kontak HP, chat WhatsApp, dan kertas susah dilacak kembali.",
  },
  {
    no: "06",
    title: "Garansi aki tidak terpantau",
    desc: "Tidak ada pencatatan tanggal pembelian dan tanggal garansi berakhir.",
  },
  {
    no: "07",
    title: "Stok aki tukar tambah tidak terpantau",
    desc: "Aki bekas dari pelanggan tidak tercatat nilainya secara sistematis, sehingga seringkali menjadi aset yang terbuang sia-sia.",
  },
  {
    no: "08",
    title: "Toko sulit ditemukan secara online",
    desc: "Calon pelanggan yang mencari di Google tidak bisa menemukan toko karena tidak ada website.",
  },
];

export function Background() {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "48px" }}>
          <p className="section-label">Latar Belakang</p>
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
            Masalah yang Sering<br />Terjadi di Toko Aki
          </h2>
          <div className="rule-blue" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            {problems.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 16px 14px 0",
                  borderBottom: "1px solid #e2e8f0",
                  paddingRight: i % 2 === 0 ? "24px" : "0",
                  paddingLeft: i % 2 === 1 ? "24px" : "0",
                  borderLeft: i % 2 === 1 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#1754d4",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                    opacity: 0.5,
                  }}
                >
                  {p.no}
                </div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "3px" }}>
                  {p.title}
                </p>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.55 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "12px", color: "#1754d4", fontWeight: 600 }}>4</span>
        </div>
      </div>
    </div>
  );
}
