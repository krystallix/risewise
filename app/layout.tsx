import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposal Penawaran — Sistem Manajemen Toko Aki",
  description:
    "Proposal penawaran jasa pembuatan sistem manajemen bisnis berbasis web untuk toko aki dan usaha otomotif. Disiapkan oleh Aji Nursafiki, pengembang web freelance di Yogyakarta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
