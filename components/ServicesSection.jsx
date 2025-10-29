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
				"Cinematic pre-wedding shoot at beautiful outdoor locations in Kareli, Narsinghpur & MP.",
			features: [
				"2 locations of your choice",
				"100+ edited images",
				"Highlight reel (1 min)",
				"Drone coverage available",
				"Outfit & pose guidance",
			],
			popular: false,
		},
		{
			name: "Wedding Photography",
			price: "₹59,999 – ₹1,49,999",
			description:
				"Complete wedding day coverage including candid, traditional & cinematic moments.",
			features: [
				"Full-day coverage (up to 12 hrs)",
				"2 photographers + 1 videographer",
				"500–800 edited photos",
				"Premium wedding album",
				"Drone & teaser video (optional)",
			],
			popular: true,
		},
		{
			name: "Post-Wedding Session",
			price: "₹29,999",
			description:
				"Creative post-wedding couple shoot to relive the romance after your big day.",
			features: [
				"Outdoor or studio setup",
				"60+ professionally edited photos",
				"Cinematic teaser video",
				"Creative posing & styling",
			],
			popular: false,
		},
		{
			name: "Baby & Maternity Shoot",
			price: "₹14,999",
			description:
				"Capture the joy of parenthood with artistic baby and maternity portraits.",
			features: [
				"Studio or home session",
				"Props & theme setup",
				"50+ edited photos",
				"Family portraits included",
			],
			popular: false,
		},
		{
			name: "Portfolio & Catalogue Shoot",
			price: "₹19,999",
			description:
				"Professional fashion, model & product portfolio shoots for brands and individuals.",
			features: [
				"Studio or outdoor location",
				"Lighting & styling support",
				"High-end retouching",
				"Outfit & creative direction",
			],
			popular: false,
		},
		{
			name: "Makeup & Bridal Shoot",
			price: "₹9,999",
			description:
				"Showcase your makeup artistry or bridal look with cinematic portrait photography.",
			features: [
				"Studio lighting setup",
				"30+ retouched images",
				"Social-media-ready reels",
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
						From <strong>pre-wedding</strong> to{" "}
						<strong>post-wedding</strong> and{" "}
						<strong>baby shoots</strong>, Rishi Photography offers
						everything you need to capture your special memories
						across <strong>Kareli</strong>,{" "}
						<strong>Narsinghpur</strong> and{" "}
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
						Need a custom package for your event or shoot? We tailor{" "}
						<strong>wedding</strong>, <strong>baby</strong>, and{" "}
						<strong>portfolio</strong> sessions to your vision.
					</p>
					<Button
						onClick={scrollToContact}
						className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg">
						Get a Custom Quote
					</Button>
				</motion.div>

				{/* Hidden SEO Keywords */}
				<p className="hidden">
					Wedding Photography Kareli, Pre-Wedding Shoot Narsinghpur,
					Post-Wedding Photoshoot Madhya Pradesh, Babyshoot Kareli MP,
					Portfolio Photographer Narsinghpur, Catalogue Shoot MP,
					Makeup Shoot Kareli, Rishi Photography Services.
				</p>
			</div>
		</section>
	);
}
