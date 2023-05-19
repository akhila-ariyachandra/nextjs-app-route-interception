/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    dirs: ["app", "components", "lib"],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
