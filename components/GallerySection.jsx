"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const BUCKET_NAME = "photos";
const FOLDER_NAME = "uploads";

export function GallerySection() {
	const [images, setImages] = useState([]);
	const [filteredImages, setFilteredImages] = useState([]);
	const [activeTab, setActiveTab] = useState("all");
	const [selectedImage, setSelectedImage] = useState(null);
	const [columnCount, setColumnCount] = useState(3);

	// 🧠 Fetch images from Supabase
	const fetchImages = async () => {
		const { data, error } = await supabase.storage
			.from(BUCKET_NAME)
			.list(FOLDER_NAME);
		if (error) {
			console.error("Error fetching images:", error);
			return;
		}

		const formatted = data.map((img) => {
			const categoryName =
				img.name.split("_")[0]?.toLowerCase() || "uncategorized";
			const publicUrl = `https://kwxzxaebafblbplakxlk.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${FOLDER_NAME}/${img.name}`;
			return {
				url: publicUrl,
				category: categoryName,
				// 👇 Add rich descriptive alt text for SEO & accessibility
				alt: `Candid ${categoryName} wedding photo in Kareli Narsinghpur by Rishi Photography`,
			};
		});

		setImages(formatted);
		setFilteredImages(formatted);
	};

	useEffect(() => {
		fetchImages();
	}, []);

	const handleTabChange = (value) => {
		setActiveTab(value);
		setFilteredImages(
			value === "all"
				? images
				: images.filter((img) => img.category === value)
		);
	};

	// 📱 Responsive columns
	useEffect(() => {
		const updateColumns = () => {
			if (window.innerWidth < 768) setColumnCount(1);
			else if (window.innerWidth < 1024) setColumnCount(2);
			else setColumnCount(3);
		};
		updateColumns();
		window.addEventListener("resize", updateColumns);
		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	return (
		<section
			id="gallery"
			className="py-20 bg-gray-50"
			aria-label="Wedding Photography Gallery - Kareli Narsinghpur">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900">
						Wedding Photography Gallery
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						A showcase of our best wedding, pre-wedding, and candid
						moments captured across Kareli & Narsinghpur, Madhya
						Pradesh.
					</p>
				</motion.div>

				{/* Tabs */}
				<Tabs
					defaultValue="all"
					className="w-full"
					onValueChange={handleTabChange}>
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
						{filteredImages.length > 0 ? (
							<Masonry
								columnsCount={columnCount}
								gutter="0.75rem">
								{filteredImages.map((image, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.05 }}
										className="relative overflow-hidden rounded-lg cursor-pointer group"
										onClick={() =>
											setSelectedImage(image.url)
										}>
										<img
											src={image.url}
											alt={image.alt}
											title={image.alt}
											className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
											loading="lazy"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
											<p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
												View Full Photo
											</p>
										</div>
									</motion.div>
								))}
							</Masonry>
						) : (
							<p className="text-center text-gray-500">
								No images available in this category.
							</p>
						)}
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
						onClick={() => setSelectedImage(null)}
						aria-label="Close full-size image">
						<X className="w-8 h-8" />
					</button>
					<motion.img
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						src={selectedImage}
						alt="Full-screen wedding photo Kareli Narsinghpur"
						className="max-w-full max-h-full object-contain"
						onClick={(e) => e.stopPropagation()}
					/>
				</motion.div>
			)}

			{/* Hidden SEO Keyword Helper */}
			<p className="hidden">
				Wedding Photography in Kareli, Narsinghpur | Pre-Wedding Shoots
				MP | Candid Wedding Photographer Kareli | Rishi Photography
				Gallery Madhya Pradesh
			</p>
		</section>
	);
}
