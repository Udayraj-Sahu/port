"use client";

import { motion } from "framer-motion";
import { Award, Camera, Heart, Users } from "lucide-react";

export function AboutSection() {
	const stats = [
		{ icon: Camera, label: "Weddings Captured", value: "500+" },
		{ icon: Heart, label: "Happy Couples", value: "450+" },
		{ icon: Award, label: "Awards Won", value: "2" },
		{ icon: Users, label: "Team Members", value: "4" },
	];

	return (
		<section
			id="about"
			className="py-20 bg-white"
			aria-label="About Rishi Photography - Wedding Photographer in Kareli Narsinghpur">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* 👇 About Image Section */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative">
						<div className="aspect-square rounded-2xl overflow-hidden">
							<img
								src="/about_pic.png"
								alt="Candid wedding photographer in Kareli, Narsinghpur - Rishi Photography"
								className="w-full h-full object-cover"
								width={1080}
								height={1080}
								loading="lazy"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
							<p className="text-gray-600">Since</p>
							<p className="text-lg font-semibold text-gray-900">
								2018
							</p>
						</div>
					</motion.div>

					{/* 👇 About Content Section */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}>
						<h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
							About Rishi Photography
						</h2>

						{/* Keyword-Optimized Paragraphs */}
						<p className="text-gray-700 mb-4 leading-relaxed">
							Hi! I’m <strong>Rishi</strong>, a professional{" "}
							<strong>
								wedding photographer in Kareli, Narsinghpur
								(Madhya Pradesh)
							</strong>
							. With over 5 years of experience, I’ve captured
							hundreds of wedding stories across Kareli, Jabalpur,
							and surrounding cities — mixing candid emotions,
							cinematic frames, and traditional Indian vibes into
							timeless wedding albums.
						</p>

						<p className="text-gray-700 mb-4 leading-relaxed">
							At <strong>Rishi Photography</strong>, my goal is to
							make every couple’s journey unforgettable — from
							pre-wedding photoshoots to wedding day highlights.
							We focus on natural light, raw emotions, and
							creative storytelling that reflect your personality
							and culture.
						</p>

						<p className="text-gray-700 mb-6 leading-relaxed">
							Whether you’re planning your dream wedding in{" "}
							<strong>Kareli</strong>,{" "}
							<strong>Narsinghpur</strong>, or anywhere in{" "}
							<strong>Madhya Pradesh</strong>, we promise
							professional quality, quick delivery, and
							unforgettable photographs you’ll cherish for life.
						</p>

						{/* Stats Section */}
						<div className="grid grid-cols-2 gap-6 mt-8">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
									<stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
									<p className="text-lg font-semibold text-gray-800">
										{stat.value}
									</p>
									<p className="text-gray-600 text-sm">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>

						{/* Hidden Microdata Keywords (SEO Trick) */}
						<p className="hidden">
							Best Wedding Photographer in Kareli, Wedding
							Photography in Narsinghpur, Pre Wedding Photoshoot
							Kareli, Candid Wedding Photography Madhya Pradesh,
							Rishi Photography Studio Kareli.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
