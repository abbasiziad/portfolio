import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 required for static export

  images: {
    unoptimized: true, // 👈 required for GitHub Pages (no Next image optimizer)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  trailingSlash: true, // 👈 helps avoid 404 issues on GitHub Pages
};

export default nextConfig;