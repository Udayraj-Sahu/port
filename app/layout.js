import "./global.css";

export const metadata = {
	title: "Best Wedding Photographer in Kareli | Narsinghpur, Madhya Pradesh",
	description:
		"Professional wedding photographer in Kareli, Narsinghpur (MP). Candid, cinematic, and traditional photography capturing beautiful wedding memories.",
	keywords: [
		"Wedding Photographer in Kareli",
		"Best Wedding Photographer in Kareli Narsinghpur",
		"Candid Wedding Photography Kareli",
		"Pre Wedding Photographer in Narsinghpur",
		"Traditional Wedding Photographer in MP",
		"Wedding Studio in Kareli",
		"Madhya Pradesh Wedding Photographer",
	],
	viewport:
		"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
	authors: [{ name: "Rishi Photography" }],
	openGraph: {
		title: "Wedding Photographer in Kareli | Rishi Photography",
		description:
			"Capture your wedding memories with Kareli’s top wedding photographer. Serving Narsinghpur, Jabalpur, and nearby Madhya Pradesh regions.",
		url: "https://rishi-photography.vercel.app",
		siteName: "Rishi Photography",
		images: [
			{
				url: "https://rishi-photography.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Best Wedding Photographer in Kareli Narsinghpur",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Top Wedding Photographer in Kareli - Rishi Photography",
		description:
			"Award-winning wedding photography in Kareli, Narsinghpur (MP). Candid, cinematic, and traditional photoshoots.",
		images: ["https://rishi-photography.vercel.app/og-image.jpg"],
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
						image: "https://rishi-photography.vercel.app/og-image.jpg",
						"@id": "https://rishi-photography.vercel.app",
						url: "https://rishi-photography.vercel.app",
						telephone: "+91-9876543210",
						address: {
							"@type": "PostalAddress",
							streetAddress: "Main Road, Kareli",
							addressLocality: "Kareli",
							addressRegion: "Madhya Pradesh",
							postalCode: "487221",
							addressCountry: "IN",
						},
						geo: {
							"@type": "GeoCoordinates",
							latitude: 22.9167,
							longitude: 79.0667,
						},
						areaServed: [
							"Kareli",
							"Narsinghpur",
							"Jabalpur",
							"Pipariya",
							"Hoshangabad",
							"Madhya Pradesh",
						],
						openingHours: "Mo-Su 09:00-21:00",
						sameAs: [
							"https://www.instagram.com/rishi_photography_55?igsh=MXUyaG9tanpzM2lx",
							"https://facebook.com/rishi-photography",
						],
						description:
							"Professional wedding photographer in Kareli (Narsinghpur, MP). Specializing in candid, cinematic, and pre-wedding photography.",
						priceRange: "₹₹₹",
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "5",
							reviewCount: "120",
						},
					}),
				}}></script>
		</html>
	);
}
