import "./global.css";

export const metadata = {
	title: "Wedding Photographer in Madhya Pradesh | Capturing Your Love Story",
	description:
		"Professional wedding photographer in Madhya Pradesh offering candid, traditional, and cinematic photography for weddings, pre-weddings, and receptions.",
	keywords: [
		"Wedding Photographer",
		"Wedding Photographer in Madhya Pradesh",
		"Best Wedding Photographer in India",
		"Candid Wedding Photography",
		"Pre Wedding Photoshoot",
		"Traditional Wedding Photography",
		"Drone Wedding Photography",
		"Madhya Pradesh Wedding Studio",
	],
	authors: [{ name: "Rishi Photography" }],
	openGraph: {
		title: "Wedding Photographer in Madhya Pradesh | Rishi Photography",
		description:
			"Capturing love, laughter, and timeless wedding moments across Madhya Pradesh. Candid, cinematic, and traditional photography by Rishi Photography.",
		url: "https://rishi-photogrpahy.vercel.app/",
		siteName: "Rishi Photography",
		images: [
			{
				url: "https://rishi-photogrpahy.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Wedding Photographer in Madhya Pradesh",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Wedding Photographer in Madhya Pradesh",
		description:
			"Award-winning wedding photographer capturing love stories across India.",
		images: ["https://rishi-photogrpahy.vercel.app/og-image.jpg"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: "Rishi Photography",
						image: "https://rishi-photogrpahy.vercel.app/og-image.jpg",
						url: "https://rishi-photogrpahy.vercel.app/",
						telephone: "+91-9977879238",
						address: {
							"@type": "PostalAddress",
							streetAddress: "123 Wedding Lane",
							addressLocality: "Bhopal",
							addressRegion: "Madhya Pradesh",
							postalCode: "462001",
							addressCountry: "IN",
						},
						priceRange: "₹₹₹",
						sameAs: [
							"https://www.instagram.com/rishi_photography_55",
							"https://facebook.com/rishiphotography",
						],
						description:
							"Professional wedding photographer in Madhya Pradesh specializing in candid, traditional, and cinematic photography.",
					}),
				}}></script>
		</html>
	);
}
