const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    unoptimized: true, // disable Next.js built-in Image Optimization
  },
};

module.exports = withPlugins([], nextConfig);
