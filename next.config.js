// next.config.js
const nextConfig = {
  output: 'standalone', // optional but good for custom builds
  experimental: {
    appDir: true, // only if using app directory
  },
};

module.exports = nextConfig;
