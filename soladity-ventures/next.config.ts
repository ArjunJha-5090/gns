import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: pure HTML/CSS/JS — host anywhere (Vercel, Netlify, GitHub Pages, cPanel)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
