"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Camera } from "lucide-react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// ✅ Scroll listener guarded for SSR
	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// ✅ ScrollToSection guarded for SSR
	const scrollToSection = (id) => {
		if (typeof document !== "undefined") {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				setIsMobileMenuOpen(false);
			}
		}
	};

	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "gallery", label: "Gallery" },
		{ id: "about", label: "About" },
		{ id: "services", label: "Services" },
		{ id: "testimonials", label: "Testimonials" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-sm shadow-md"
					: "bg-transparent"
			}`}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<motion.button
						onClick={() => scrollToSection("home")}
						className="flex items-center gap-2 group"
						whileHover={{ scale: 1.05 }}>
						<Camera
							className={`w-6 h-6 ${
								isScrolled ? "text-gray-900" : "text-white"
							}`}
						/>
						<span
							className={`${
								isScrolled ? "text-gray-900" : "text-white"
							}`}>
							Sarah Williams
						</span>
					</motion.button>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`transition-colors hover:opacity-70 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={`md:hidden ${
							isScrolled ? "text-gray-900" : "text-white"
						}`}>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white border-t">
						<div className="flex flex-col py-4">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">
									{item.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
}
