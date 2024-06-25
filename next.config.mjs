/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
    deviceSizes: [600, 800, 1200, 2400, 3600],
  },
};

export default nextConfig;
