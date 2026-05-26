/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.yashasviprasad.com",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default nextConfig;
