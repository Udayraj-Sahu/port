"use client";

import { motion } from "framer-motion"; // ✅ correct import
import { Award, Camera, Heart, Users } from "lucide-react";


export function AboutSection() {
	const stats = [
		{ icon: Camera, label: "Weddings Captured", value: "500+" },
		{ icon: Heart, label: "Happy Couples", value: "450+" },
		{ icon: Award, label: "Awards Won", value: "15" },
		{ icon: Users, label: "Team Members", value: "8" },
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative">
						<div className="aspect-square rounded-2xl overflow-hidden">
							<img
								src="https://picsum.photos/200/300"
								alt="Sarah Williams - Wedding Photographer"
								className="w-full h-full object-cover"
								width={1080}
								height={1080}
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
							<p className="text-gray-600">Since</p>
							<p>2015</p>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}>
						<h2 className="mb-6">About Sarah</h2>
						<p className="text-gray-600 mb-4">
							Hi! I&apos;m Sarah, a passionate wedding
							photographer based in California with over 9 years
							of experience capturing love stories. My style
							blends candid moments with artistic portraits,
							creating timeless images that you&apos;ll treasure
							forever.
						</p>
						<p className="text-gray-600 mb-6">
							I believe every wedding tells a unique story. My
							approach is to document the authentic emotions, the
							little details, and the grand moments with equal
							care, ensuring nothing is missed from your special
							day.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 gap-6 mt-8">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="text-center p-4 bg-gray-50 rounded-lg">
									<stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-700" />
									<p className="mb-1">{stat.value}</p>
									<p className="text-gray-600">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
