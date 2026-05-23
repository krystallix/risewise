import Image from "next/image";

interface FeatureRow {
  no: string;
  title: string;
  tag: string;
  desc: string;
  benefit: string;
  img?: string; // path from /public
  imgAlt?: string;
}

const featuresPage1: FeatureRow[] = [
  {
    no: "01",
    title: "Katalog Produk",
    tag: "Website Publik",
    desc: "Halaman katalog lengkap dengan filter kategori, merek, ampere, dan kondisi. Search real-time. Setiap produk menampilkan foto, harga, spesifikasi teknis, dan tombol Pesan via WhatsApp.",
    benefit: "Pelanggan bisa lihat stok dan harga tanpa harus datang ke toko.",
    img: "/ref/feature_01.png",
    imgAlt: "Katalog produk Siswanto Aki",
  },
  {
    no: "02",
    title: "Rekomendasi Aki per Kendaraan",
    tag: "Website Publik",
    desc: "Database 167+ kendaraan. Pelanggan cari berdasarkan merek atau model, langsung tampil 3 pilihan: Standar, Upgrade, dan Upgrade Lanjutan beserta kode aki dan kapasitas Ah.",
    benefit: "Tidak ada lagi salah beli aki karena tidak tahu spesifikasi kendaraan.",
    img: "/ref/feature_02.png",
    imgAlt: "Rekomendasi aki per kendaraan",
  },
];

const featuresPage2: FeatureRow[] = [
  {
    no: "03",
    title: "Blog dan Artikel Otomotif",
    tag: "SEO & Konten",
    desc: "Halaman artikel dengan kategori, tag, dan filter. Konten tampil sebagai kartu dengan gambar. Setiap artikel sudah dioptimasi SEO mulai dari title, meta, Open Graph, hingga sitemap secara otomatis.",
    benefit: "Artikel yang relevan mendongkrak peringkat Google toko secara organik.",
    img: "/ref/feature_03.png",
    imgAlt: "Blog dan artikel otomotif",
  },
  {
    no: "04",
    title: "Detail Produk Lengkap",
    tag: "Katalog",
    desc: "Halaman detail produk menampilkan foto, harga tukar tambah, spesifikasi teknis (kapasitas Ah, voltase, tipe, garansi), dan daftar kendaraan yang cocok menggunakan aki tersebut.",
    benefit: "Pelanggan yakin membeli tanpa perlu banyak pertanyaan.",
    img: "/ref/feature_06.png",
    imgAlt: "Detail produk aki dengan spesifikasi lengkap",
  },
];

const featuresPage3: FeatureRow[] = [
  {
    no: "05",
    title: "Dashboard Manajemen Bisnis",
    tag: "Business Intelligence",
    desc: "Menampilkan ringkasan pendapatan, profit, grafik 6 bulan terakhir, produk terlaris, transaksi terbaru, info stok menipis, serta inventori aki bekas dalam satu layar utama.",
    benefit: "Tahu kondisi bisnis hari ini tanpa hitung manual dari buku kas.",
    img: "/ref/feature_04.png",
    imgAlt: "Dashboard manajemen bisnis",
  },
  {
    no: "06",
    title: "Manajemen Transaksi & Invoice",
    tag: "Kasir Digital",
    desc: "Catat penjualan, pembelian stok, dan tukar tambah secara langsung dengan pemotongan stok otomatis. Invoice digital dibuat instan dengan tampilan profesional, lengkap dengan QR Code dan tombol share cepat ke WhatsApp.",
    benefit: "Nota terkirim ke pelanggan dalam hitungan detik, tanpa tulis tangan.",
    img: "/ref/feature_05.png",
    imgAlt: "Transaksi dan invoice digital",
  },
];

const featuresPage4: FeatureRow[] = [
  {
    no: "07",
    title: "Manajemen Stok dan Produk",
    tag: "Inventori",
    desc: "Tambah, edit, hapus produk. Kelola harga modal, jual, dan tukar tambah. Upload foto. Peringatan otomatis saat stok tersisa 3 unit atau kurang.",
    benefit: "Tidak ada lagi stok habis tanpa disadari saat ada pembeli.",
  },
  {
    no: "08",
    title: "Database Pelanggan & Sistem Login",
    tag: "CRM & Keamanan",
    desc: "Simpan nama, HP, dan riwayat pembelian pelanggan. Dashboard hanya diakses setelah login. Website publik tetap terbuka untuk semua pengunjung.",
    benefit: "Data bisnis terlindungi; data pelanggan tersimpan untuk program loyalitas.",
  },
];

function PageHeading({ title, pageNum }: { title: string; pageNum: string }) {
  return (
    <>
      <p className="section-label">Fitur Sistem</p>
      <h2
        style={{
          fontSize: "42px",
          fontWeight: 800,
          color: "#1754d4",
          marginBottom: "16px",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <div className="rule-blue" style={{ marginBottom: "16px" }} />
    </>
  );
}

function FeatureItem({ f }: { f: FeatureRow }) {
  return (
    <div
      style={{
        padding: f.img ? "16px 0" : "12px 0",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      {/* Top row: number + title + tag */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 800,
            color: "#1754d4",
            opacity: 0.4,
            minWidth: "28px",
            letterSpacing: "0.04em",
          }}
        >
          {f.no}
        </span>
        <span style={{ fontSize: "17px", fontWeight: 700, color: "#111" }}>{f.title}</span>
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#1754d4",
            border: "1px solid #1754d4",
            padding: "2px 7px",
            borderRadius: "2px",
            flexShrink: 0,
          }}
        >
          {f.tag}
        </span>
      </div>

      {/* Content: text */}
      <div style={{ paddingLeft: "40px", marginBottom: f.img ? "12px" : "0" }}>
        <p style={{ fontSize: "14.5px", color: "#444", lineHeight: 1.6, marginBottom: "4px" }}>
          {f.desc}
        </p>
        <p style={{ fontSize: "14px", color: "#1754d4", fontStyle: "italic", fontWeight: 500 }}>
          → {f.benefit}
        </p>
      </div>

      {/* Screenshot below description, centered and large */}
      {f.img && (
        <div style={{ paddingLeft: "40px", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "580px",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              overflow: "hidden",
              borderRadius: "4px",
              backgroundColor: "#fcfcfc",
            }}
          >
            <Image
              src={f.img}
              alt={f.imgAlt || ""}
              width={1160}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "210px",
                display: "block",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturePage({
  features,
  title,
  pageNum,
}: {
  features: FeatureRow[];
  title: string;
  pageNum: string;
}) {
  return (
    <div className="a4-page cream-page">
      <div className="page-inner" style={{ justifyContent: "space-between" }}>
        <div>
          <div className="brand-icon blue">✳</div>
        </div>

        <div style={{ flex: 1, paddingTop: "24px" }}>
          <PageHeading title={title} pageNum={pageNum} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {features.map((f) => (
              <FeatureItem key={f.no} f={f} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "right", paddingTop: "8px" }}>
          <span style={{ fontSize: "13px", color: "#1754d4", fontWeight: 600 }}>{pageNum}</span>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <>
      <FeaturePage features={featuresPage1} title="Fitur Website Publik" pageNum="6" />
      <FeaturePage features={featuresPage2} title="Fitur Publik & SEO" pageNum="7" />
      <FeaturePage features={featuresPage3} title="Fitur Dashboard Manajemen" pageNum="8" />
      <FeaturePage features={featuresPage4} title="Fitur Tambahan & Keamanan" pageNum="9" />
    </>
  );
}
