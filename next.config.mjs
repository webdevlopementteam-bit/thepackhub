/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  allowedDevOrigins: ["192.168.1.37"],

  async redirects() {
    return [
      // Old product URLs → current product pages
      {
        source: "/:base(product|products)/baking-paper-cups-manufacturer-in-delhi",
        destination: "/product/baking-paper-cups",
        permanent: true,
      },
      {
        source: "/:base(product|products)/cake-box",
        destination: "/product/custom-printed-cake-box-manufacturer-india",
        permanent: true,
      },

      // Old /products/* URLs → /product/*
      {
        source: "/products",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/product/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
