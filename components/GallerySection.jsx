"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { X } from "lucide-react";

const galleryImages = [
	{
		url: "https://images.unsplash.com/photo-1631225893179-4d6e349189c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzYwNjgwMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "wedding",
		alt: "Wedding ceremony",
	},
	{
		url: "https://images.unsplash.com/photo-1606217239566-1c893c2e110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "wedding",
		alt: "Bride and groom portrait",
	},
	{
		url: "https://images.unsplash.com/photo-1728022615324-78dbe04cac43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjB3ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NjA2ODAwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "pre-wedding",
		alt: "Pre-wedding photoshoot",
	},
	{
		url: "https://images.unsplash.com/photo-1758810411514-1cffb1420a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwNjgwMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "reception",
		alt: "Wedding reception",
	},
	{
		url: "https://images.unsplash.com/photo-1735052713346-269849580904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FuZGlkJTIwbW9tZW50fGVufDF8fHx8MTc2MDY4MDA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "candid",
		alt: "Candid wedding moment",
	},
	{
		url: "https://images.unsplash.com/photo-1631225866082-8150132a7473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBkZXRhaWx8ZW58MXx8fHwxNzYwNjgwMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "wedding",
		alt: "Wedding rings detail",
	},
	{
		url: "https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZGFuY2V8ZW58MXx8fHwxNzYwNjIwMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "reception",
		alt: "First dance",
	},
	{
		url: "https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzYwNjgwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "wedding",
		alt: "Wedding bouquet",
	},
	{
		url: "https://images.unsplash.com/photo-1548302040-5305e4853dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwa2lzcyUyMG1vbWVudHxlbnwxfHx8fDE3NjA2ODAwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "candid",
		alt: "Wedding kiss",
	},
	{
		url: "https://images.unsplash.com/photo-1560494667-2fd47f82c9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NjA2ODAwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "reception",
		alt: "Wedding decoration",
	},
	{
		url: "https://images.unsplash.com/photo-1586934280706-262a90ddd743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYwNjgwMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "traditional",
		alt: "Traditional wedding",
	},
	{
		url: "https://images.unsplash.com/photo-1672289444692-2bd3b48c5178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdldHRpbmclMjByZWFkeXxlbnwxfHx8fDE3NjA2ODAwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "candid",
		alt: "Bride getting ready",
	},
	{
		url: "https://images.unsplash.com/photo-1597256817041-0c75c0633658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB3ZWRkaW5nJTIwdmVudWV8ZW58MXx8fHwxNzYwNjgwMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "drone",
		alt: "Aerial wedding venue",
	},
	{
		url: "https://images.unsplash.com/photo-1633978591673-490488764c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZ3JvdXAlMjBwaG90b3xlbnwxfHx8fDE3NjA2NTMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "wedding",
		alt: "Wedding group photo",
	},
	{
		url: "https://images.unsplash.com/photo-1578730169862-749bbdc763a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2MDYzMjQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		category: "drone",
		alt: "Outdoor wedding venue",
	},
];

export function GallerySection() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [activeTab, setActiveTab] = useState("all");

	const filteredImages =
		activeTab === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === activeTab);

	return (
		<section id="gallery" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="mb-4">Portfolio</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						A collection of our finest moments captured through the
						lens
					</p>
				</motion.div>

				<Tabs
					defaultValue="all"
					className="w-full"
					onValueChange={setActiveTab}>
					<TabsList className="w-full max-w-3xl mx-auto mb-12 grid grid-cols-3 md:grid-cols-6">
						<TabsTrigger value="all">All</TabsTrigger>
						<TabsTrigger value="wedding">Wedding</TabsTrigger>
						<TabsTrigger value="pre-wedding">
							Pre-Wedding
						</TabsTrigger>
						<TabsTrigger value="reception">Reception</TabsTrigger>
						<TabsTrigger value="candid">Candid</TabsTrigger>
						<TabsTrigger value="traditional">
							Traditional
						</TabsTrigger>
					</TabsList>

					<TabsContent value={activeTab} className="mt-0">
						<Masonry
							columnsCount={
								window.innerWidth < 768
									? 1
									: window.innerWidth < 1024
									? 2
									: 3
							}
							gutter="1rem">
							{filteredImages.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.05 }}
									className="relative overflow-hidden rounded-lg cursor-pointer group"
									onClick={() => setSelectedImage(image.url)}>
									<img
										src={image.url}
										alt={image.alt}
										className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
										<p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											View
										</p>
									</div>
								</motion.div>
							))}
						</Masonry>
					</TabsContent>
				</Tabs>
			</div>

			{/* Lightbox */}
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
					onClick={() => setSelectedImage(null)}>
					<button
						className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
						onClick={() => setSelectedImage(null)}>
						<X className="w-8 h-8" />
					</button>
					<motion.img
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						src={selectedImage}
						alt="Full screen"
						className="max-w-full max-h-full object-contain"
						onClick={(e) => e.stopPropagation()}
					/>
				</motion.div>
			)}
		</section>
	);
}
