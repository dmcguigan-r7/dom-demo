/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/dom-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
