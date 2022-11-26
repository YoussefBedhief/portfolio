/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
}
