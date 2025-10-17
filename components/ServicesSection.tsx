'use client'
import { motion } from "motion/react";
import { Check } from "lucide-react";
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
			name: "Essential",
			price: "$1,499",
			description: "Perfect for intimate ceremonies",
			features: [
				"6 hours of coverage",
				"300+ edited photos",
				"Online gallery",
				"Print release",
				"Second photographer",
			],
			popular: false,
		},
		{
			name: "Premium",
			price: "$2,499",
			description: "Most popular for full-day weddings",
			features: [
				"10 hours of coverage",
				"500+ edited photos",
				"Online gallery",
				"Print release",
				"Second photographer",
				"Engagement session",
				"20-page wedding album",
			],
			popular: true,
		},
		{
			name: "Luxury",
			price: "$3,999",
			description: "Complete wedding documentation",
			features: [
				"12 hours of coverage",
				"800+ edited photos",
				"Online gallery",
				"Print release",
				"Two photographers",
				"Engagement session",
				"40-page premium album",
				"Drone coverage",
				"Custom USB drive",
			],
			popular: false,
		},
	];

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="services" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="mb-4">Packages & Services</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Choose a package that fits your needs. All packages
						include professional editing and high-resolution digital
						images.
					</p>
				</motion.div>

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
										? "border-gray-900 shadow-xl"
										: ""
								}`}>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-gray-900 text-white px-4 py-1 rounded-full">
											Most Popular
										</span>
									</div>
								)}
								<CardHeader>
									<CardTitle>{pkg.name}</CardTitle>
									<CardDescription>
										{pkg.description}
									</CardDescription>
									<div className="mt-4">
										<span className="text-gray-900">
											{pkg.price}
										</span>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{pkg.features.map((feature, i) => (
											<li
												key={i}
												className="flex items-start gap-2">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<span className="text-gray-600">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Button
										className="w-full"
										variant={
											pkg.popular ? "default" : "outline"
										}
										onClick={scrollToContact}>
										Get Started
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center">
					<p className="text-gray-600">
						Need something custom? Lets chat about creating a
						package tailored to your needs.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
