import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Penting agar jadi HTML statis
  basePath: '/portofolio-si', // Harus sama dengan nama repositori kamu
  images: {
    unoptimized: true, // Agar foto-foto temanmu tetap muncul
  },
};

export default nextConfig;