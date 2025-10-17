import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import "./global.css";
export default function Home() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<HeroSection />
			<GallerySection />
			<AboutSection />
			<ServicesSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
			<Toaster />
		</div>
	);
}
