import { Camera, Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
	return (
		<footer
			className="bg-gray-900 text-white py-12"
			aria-label="Rishi Photography Footer - Wedding Photographer Kareli Narsinghpur">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					{/* 🏢 Brand & Local Info */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Camera className="w-6 h-6" aria-hidden="true" />
							<span className="text-lg font-semibold">
								Rishi Photography
							</span>
						</div>
						<p className="text-gray-400 mb-4">
							Capturing love stories with passion and artistry
							across <strong>Kareli</strong>,{" "}
							<strong>Narsinghpur</strong> &{" "}
							<strong>Madhya Pradesh</strong> since 2018.
						</p>

						{/* Local contact details (NAP consistency) */}
						<div className="text-gray-400 text-sm space-y-1">
							<p className="flex items-center gap-2">
								<MapPin className="w-4 h-4" />
								Main Road, Kareli, Narsinghpur, MP 487221
							</p>
							<p className="flex items-center gap-2">
								<Phone className="w-4 h-4" />
								<a
									href="tel:+919977879238"
									className="hover:text-white transition-colors">
									+91 99778 79238
								</a>
							</p>
							<p className="flex items-center gap-2">
								<Mail className="w-4 h-4" />
								<a
									href="mailto:rishiphotography@gmail.com"
									className="hover:text-white transition-colors">
									rishiphotography@gmail.com
								</a>
							</p>
						</div>
					</div>

					{/* 🔗 Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a
									href="#gallery"
									className="hover:text-white transition-colors">
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="hover:text-white transition-colors">
									About
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-white transition-colors">
									Services
								</a>
							</li>
							<li>
								<a
									href="#testimonials"
									className="hover:text-white transition-colors">
									Testimonials
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-white transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* 🌐 Social Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Follow Us
						</h4>
						<div className="flex gap-4">
							<a
								href="https://www.instagram.com/rishi_photography_55"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
								aria-label="Instagram - Rishi Photography">
								<Instagram className="w-5 h-5" />
							</a>

							<a
								href="mailto:rishiphotography@gmail.com"
								className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
								aria-label="Email - Rishi Photography">
								<Mail className="w-5 h-5" />
							</a>
						</div>
						<p className="text-gray-400 mt-6 text-sm leading-relaxed">
							📍 Serving couples in <strong>Kareli</strong>,{" "}
							<strong>Narsinghpur</strong>, and across{" "}
							<strong>Madhya Pradesh</strong> with cinematic,
							candid, and traditional wedding photography.
						</p>
					</div>
				</div>

				{/* 💖 Bottom Bar */}
				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
					<p>
						© {new Date().getFullYear()}{" "}
						<strong>Rishi Photography</strong>. All rights reserved.
					</p>
					<p className="flex items-center gap-2">
						Made with{" "}
						<Heart className="w-4 h-4 fill-red-500 text-red-500" />{" "}
						for couples in love 💍
					</p>
				</div>
			</div>
		</footer>
	);
}
