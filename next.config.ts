import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "**.supabase.co",
			},
		],
	},
	reactStrictMode: true,
	poweredByHeader: false,
	compress: true,
};

export default nextConfig;
