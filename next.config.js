/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com', 'flic.kr'],
  },
};

module.exports = nextConfig;
