/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
    turbo: {},
    instrumentationHook: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
