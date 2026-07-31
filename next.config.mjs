// Demo deploys (MORFOOS_DEMO=1): admin is not shipped; skip auth-secret guard during production builds.
if (process.env.MORFOOS_DEMO === "1" && !process.env.MORFOOS_AUTH_SECRET?.trim()) {
  process.env.MORFOOS_AUTH_SECRET = "demo-mode-build-placeholder";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["@morfoos/core", "@morfoos/morfoos-os"],
  experimental: {
    optimizePackageImports: ["@morfoos/core"],
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [256, 384, 400, 640],
  },
};

export default nextConfig;
