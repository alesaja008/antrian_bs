import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  turbopack: {},
};

// @ts-ignore — next-pwa@2.x tidak punya type yang kompatibel dengan NextConfig terbaru
export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  ...nextConfig,
});
