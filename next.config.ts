import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async rewrites() {
    return [
        {
            source: '/blog',
            destination: `${process.env.BLOG_DOMAIN}/blog/welcome`,
        },
    ];
  }
};

export default nextConfig;
