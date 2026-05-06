import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Configuration pour un site avec serveur (nécessaire pour les routes API)
};

export default nextConfig;
