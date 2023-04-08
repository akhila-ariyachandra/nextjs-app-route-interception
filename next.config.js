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
    appDir: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
