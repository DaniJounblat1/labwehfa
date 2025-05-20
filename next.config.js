/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This enables static HTML export (required for GitHub Pages)
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ["placeholder.com"],
    unoptimized: true // Required for static export if you're using <Image>
  }
};

module.exports = nextConfig;
