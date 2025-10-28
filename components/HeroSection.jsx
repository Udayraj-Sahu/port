"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const heroImages = [
	"/hero_section_2.jpg",
	"/hero_section_1.jpg",
	"/hero_section_3.jpg",
];

export function HeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % heroImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const scrollToGallery = () => {
		const element = document.getElementById("gallery");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="home" className="relative h-screen w-full overflow-hidden">
			{/* Background Slideshow */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 1.5 }}
					className="absolute inset-0">
					<div
						className="w-full h-full bg-cover bg-center"
						style={{
							backgroundImage: `url(${heroImages[currentIndex]})`,
						}}
					/>
					<div className="absolute inset-0 bg-black/40" />
				</motion.div>
			</AnimatePresence>

			{/* Content Overlay */}
			<div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="text-center max-w-4xl">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className="mb-4">
						Rishi Photography
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.8 }}
						className="mb-8 text-white/90 max-w-2xl mx-auto">
						Capturing Love Stories Since 2015
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.1, duration: 0.8 }}
						className="text-white/80">
						Timeless moments, authentic emotions, unforgettable
						memories
					</motion.p>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.button
					onClick={scrollToGallery}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="absolute bottom-10">
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}>
						<ChevronDown className="w-8 h-8 text-white/80" />
					</motion.div>
				</motion.button>
			</div>

			{/* Slideshow Indicators */}
			<div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
				{heroImages.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full transition-all ${
							index === currentIndex
								? "bg-white w-8"
								: "bg-white/50"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
