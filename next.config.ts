import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — pure HTML/CSS/JS, no server required
  output: "export",

  // Optimize images for static export
  images: {
    unoptimized: true, // Required for static export (no server for on-demand optimization)
  },

  // Performance: compress output
  compress: true,

  // Security headers (applied at hosting layer for static, but useful for dev)
  // Trailing slash for clean static file structure
  trailingSlash: true,
};

export default nextConfig;
