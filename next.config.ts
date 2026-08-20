import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isGitHubPages ? "/RETO-ROPO" : undefined,
};

export default nextConfig;
