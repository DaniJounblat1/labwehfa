/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.com"],
    unoptimized: true,
    formats: ["image/webp", "image/jpeg", "image/png"],
  },
  // Add this to ensure proper client-side navigation
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
