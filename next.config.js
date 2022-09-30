/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/meister",
  assetPrefix: "/meister",
  images: { unoptimized: true },
  // sassLoaderOptions: {
  //   includePaths: ["./components"],
  // },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/introduce": { page: "/introduce" },
    };
  },
};

module.exports = nextConfig;
