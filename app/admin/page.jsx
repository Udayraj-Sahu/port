"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { supabase } from "@/lib/supabaseClient";
import { X, UploadCloud, Trash2, Lock } from "lucide-react";

const BUCKET_NAME = "photos";
const FOLDER_NAME = "uploads";
const PASSWORD = "bikyaAdmin123"; // change this!

export default function AdminPage() {
	const [access, setAccess] = useState(false);
	const [password, setPassword] = useState("");
	const [images, setImages] = useState([]);
	const [uploading, setUploading] = useState(false);
	const [category, setCategory] = useState("wedding");
	const [columnCount, setColumnCount] = useState(3);

	// Fetch images from Supabase
	const fetchImages = async () => {
		const { data, error } = await supabase.storage
			.from(BUCKET_NAME)
			.list(FOLDER_NAME);
		if (error) {
			console.error("Error fetching images:", error);
			return;
		}

		const formatted = data.map((img) => {
			const cat =
				img.name.split("_")[0]?.toLowerCase() || "uncategorized";
			const url = `https://kwxzxaebafblbplakxlk.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${FOLDER_NAME}/${img.name}`;
			return { ...img, url, category: cat };
		});

		setImages(formatted);
	};

	const handleUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		setUploading(true);

		const fileName = `${category}_${file.name}`;
		const { error } = await supabase.storage
			.from(BUCKET_NAME)
			.upload(`${FOLDER_NAME}/${fileName}`, file, { upsert: true });

		if (error) alert(error.message);
		else alert("✅ Uploaded successfully!");

		setUploading(false);
		fetchImages();
	};

	const deleteImage = async (name) => {
		if (!confirm("Are you sure you want to delete this image?")) return;
		const { error } = await supabase.storage
			.from(BUCKET_NAME)
			.remove([`${FOLDER_NAME}/${name}`]);
		if (error) alert(error.message);
		else {
			alert("🗑️ Deleted!");
			fetchImages();
		}
	};

	useEffect(() => {
		if (access) fetchImages();
	}, [access]);

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

	// 🔐 Login Screen
	if (!access)
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
					<Lock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
					<h2 className="text-2xl font-semibold mb-3">
						Admin Access
					</h2>
					<p className="text-gray-500 mb-6">
						Enter your admin password to manage gallery
					</p>
					<input
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						onClick={() => {
							if (password === PASSWORD) setAccess(true);
							else alert("❌ Incorrect password");
						}}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
						Login
					</button>
				</motion.div>
			</div>
		);

	// 🖼 Admin Dashboard
	return (
		<section className="min-h-screen bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-2">
						Portfolio Manager
					</h2>
					<p className="text-gray-500">
						Upload, organize, and manage your wedding gallery
					</p>
				</motion.div>

				{/* Upload Form */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto mb-12">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<UploadCloud className="text-blue-600 w-6 h-6" />
							<h3 className="text-lg font-medium">
								Upload New Image
							</h3>
						</div>

						<div className="flex flex-wrap items-center gap-3">
							<select
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
								<option value="wedding">Wedding</option>
								<option value="pre-wedding">Pre-Wedding</option>
								<option value="reception">Reception</option>
								<option value="candid">Candid</option>
								<option value="drone">Drone</option>
								<option value="traditional">Traditional</option>
							</select>

							<label className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-all">
								<UploadCloud className="w-5 h-5" />
								{uploading ? "Uploading..." : "Upload"}
								<input
									type="file"
									onChange={handleUpload}
									disabled={uploading}
									className="hidden"
								/>
							</label>
						</div>
					</div>
				</motion.div>

				{/* Image Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mb-20">
					{images.length === 0 ? (
						<p className="text-center text-gray-400 mt-10">
							No images uploaded yet.
						</p>
					) : (
						<Masonry columnsCount={columnCount} gutter="1rem">
							{images.map((img, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.03 }}
									className="relative overflow-hidden rounded-xl shadow group">
									<img
										src={img.url}
										alt={img.name}
										className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									{/* Overlay delete button */}
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
										<button
											onClick={() =>
												deleteImage(img.name)
											}
											className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
											<Trash2 className="w-4 h-4" />{" "}
											Delete
										</button>
									</div>
								</motion.div>
							))}
						</Masonry>
					)}
				</motion.div>
			</div>
		</section>
	);
}
