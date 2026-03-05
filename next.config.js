/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Add any image domains you use
    unoptimized: process.env.NODE_ENV === "development", // Only unoptimize in dev
  },
  // Ensure proper asset prefix for Vercel
  assetPrefix: process.env.NODE_ENV === "production" ? undefined : undefined,
  // Enable static exports if needed (but not for Vercel)
  // output: 'export', // Comment this out if you have it
};

module.exports = nextConfig;
