import "./globals.css";
import Link from "next/link";
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet"></link>

export const metadata = {
  title: "Rezza | Portfolio",
  description: "Portfolio Mahasiswa Sistem Informasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* TAMBAHAN LINK FONT GOOGLE DI SINI */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* NAVBAR */}
          {/* --- MULAI EDIT DI SINI --- */}
        <nav className="glass-navbar">
          {/* Bagian Kiri: Nama */}
          <div className="nav-brand">
            Rezza Alfat
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
