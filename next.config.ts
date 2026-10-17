/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    turbopackRustReactCompiler: true,
  },
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
