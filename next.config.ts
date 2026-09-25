import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist above it).
  turbopack: {
    root: __dirname,
  },
  async headers() {
    // Conservative, non-breaking hardening headers. A full Content-Security-Policy
    // is deliberately left out: the embedded project previews under
    // /project-previews/** rely on an inline script and on Google Fonts loaded
    // live, and a strict CSP would need per-route tuning to avoid breaking them.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  images: {
    // Local SVG placeholders live in /public/images. SVG optimization is
    // disabled by default for security, so we explicitly opt in for our
    // own first-party placeholder assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
