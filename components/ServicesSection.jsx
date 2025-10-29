"use client";
import { motion } from "motion/react";
import { Check, Camera } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function ServicesSection() {
	const packages = [
		{
			name: "Pre-Wedding Shoot",
			price: "₹24,999",
			description:
				"Cinematic pre-wedding shoot at scenic outdoor locations in Kareli, Narsinghpur & across Madhya Pradesh.",
			features: [
				"2 chosen outdoor locations",
				"100+ edited photos",
				"Highlight reel (1 min)",
				"Drone coverage (optional)",
				"Outfit & pose guidance",
			],
			popular: false,
		},
		{
			name: "Wedding Photography",
			price: "₹59,999 – ₹1,49,999",
			description:
				"Full-day cinematic wedding coverage with candid and traditional moments beautifully captured.",
			features: [
				"Up to 12 hours of coverage",
				"2 photographers + 1 videographer",
				"500–800 high-quality photos",
				"Premium wedding album",
				"Drone & teaser video",
			],
			popular: true,
		},
		{
			name: "Post-Wedding Session",
			price: "₹29,999",
			description:
				"Creative couple shoot to relive your wedding memories with cinematic poses and storytelling.",
			features: [
				"Outdoor or studio setup",
				"60+ professionally edited photos",
				"Cinematic short video",
				"Creative posing & styling",
			],
			popular: false,
		},
		{
			name: "Baby & Maternity Shoot",
			price: "₹14,999",
			description:
				"Capture parenthood and newborn joy with soft, candid photography and elegant themes.",
			features: [
				"Studio or home session",
				"Props & theme setup",
				"50+ edited photos",
				"Family portraits included",
			],
			popular: false,
		},
		{
			name: "Birthday Shoot",
			price: "₹12,999",
			description:
				"Fun-filled birthday shoot capturing smiles, laughter, and joyful memories for all ages.",
			features: [
				"Themed decorations setup",
				"Candid + group photography",
				"50–70 edited photos",
				"Mini highlight video (optional)",
				"Baby/family portraits",
			],
			popular: false,
		},
		{
			name: "Portfolio & Catalogue Shoot",
			price: "₹19,999",
			description:
				"Professional model, product, and brand photography with fashion-oriented direction.",
			features: [
				"Studio or outdoor location",
				"Lighting & creative styling",
				"High-end retouching",
				"Outfit & pose direction",
			],
			popular: false,
		},
		{
			name: "Makeup & Bridal Shoot",
			price: "₹9,999",
			description:
				"Showcase your makeup artistry or bridal beauty with cinematic portraits & close-ups.",
			features: [
				"Studio lighting setup",
				"30+ retouched images",
				"Reel-ready short video",
			],
			popular: false,
		},
	];

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="services"
			className="py-20 bg-white"
			aria-label="Photography Services Kareli Narsinghpur">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
						<Camera className="w-6 h-6 text-blue-600" />
						Our Photography Services in Kareli & Narsinghpur
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						From <strong>weddings</strong> to{" "}
						<strong>babyshoots</strong> and{" "}
						<strong>birthday celebrations</strong>, Rishi
						Photography delivers premium, cinematic experiences
						across <strong>Kareli</strong>,{" "}
						<strong>Narsinghpur</strong>, and{" "}
						<strong>Madhya Pradesh</strong>.
					</p>
				</motion.div>

				{/* Service Cards */}
				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{packages.map((pkg, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}>
							<Card
								className={`relative h-full ${
									pkg.popular
										? "border-blue-600 shadow-xl"
										: ""
								}`}>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
											Most Popular
										</span>
									</div>
								)}

								<CardHeader>
									<CardTitle className="text-2xl font-semibold text-gray-900">
										{pkg.name}
									</CardTitle>
									<CardDescription className="text-gray-500 mt-2">
										{pkg.description}
									</CardDescription>
									<div className="mt-4 text-2xl font-bold text-blue-600">
										{pkg.price}
									</div>
								</CardHeader>

								<CardContent>
									<ul className="space-y-3">
										{pkg.features.map((feature, i) => (
											<li
												key={i}
												className="flex items-start gap-2">
												<Check className="w-5 h-5 text-green-600 mt-0.5" />
												<span className="text-gray-700">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</CardContent>

								<CardFooter>
									<Button
										className="w-full mt-4"
										variant={
											pkg.popular ? "default" : "outline"
										}
										onClick={scrollToContact}
										aria-label={`Book ${pkg.name} in Kareli`}>
										Book Now
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center">
					<p className="text-gray-700 mb-4">
						Looking for a personalized experience? We design custom
						packages for <strong>weddings</strong>,{" "}
						<strong>babyshoots</strong>,{" "}
						<strong>birthday shoots</strong>, and{" "}
						<strong>portfolio sessions</strong>.
					</p>
					<Button
						onClick={scrollToContact}
						className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg">
						Get a Custom Quote
					</Button>
				</motion.div>

				{/* Hidden SEO Keywords */}
				<p className="hidden">
					Wedding Photographer Kareli, Birthday Shoot Narsinghpur, Pre
					Wedding Photoshoot Madhya Pradesh, Babyshoot Kareli MP,
					Portfolio Photographer MP, Catalogue Shoot Narsinghpur,
					Makeup Shoot Kareli, Rishi Photography Services.
				</p>
			</div>
		</section>
	);
}
