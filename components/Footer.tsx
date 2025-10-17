import { Camera, Heart, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Camera className="w-6 h-6" />
							<span>Sarah Williams</span>
						</div>
						<p className="text-gray-400">
							Capturing love stories with passion and artistry
							since 2015.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="mb-4">Quick Links</h4>
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
									href="#contact"
									className="hover:text-white transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Social */}
					<div>
						<h4 className="mb-4">Follow Us</h4>
						<div className="flex gap-4">
							<a
								href="https://instagram.com/sarahwilliamsphotography"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="https://facebook.com/sarahwilliamsphotography"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="mailto:hello@sarahwilliams.com"
								className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
					<p>
						© 2025 Sarah Williams Photography. All rights reserved.
					</p>
					<p className="flex items-center gap-2">
						Made with{" "}
						<Heart className="w-4 h-4 fill-red-500 text-red-500" />{" "}
						for couples in love
					</p>
				</div>
			</div>
		</footer>
	);
}
