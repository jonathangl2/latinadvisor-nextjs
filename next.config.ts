import type { NextConfig } from "next";

console.log('🔍 Variables de entorno:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('BASE_PATH:', process.env.NEXT_PUBLIC_BASE_PATH);
console.log('ASSET_PREFIX:', process.env.NEXT_PUBLIC_ASSET_PREFIX);
console.log('SITE_URL:', process.env.NEXT_PUBLIC_SITE_URL);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";


const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: basePath,
  assetPrefix: assetPrefix,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./styles/scss"],
    additionalData: `@use "env" as *; $basePath: "${basePath}"; $siteUrl: "${siteUrl}";`,
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["bootstrap"],
  },
};
export default nextConfig;