"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		date: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Thank you! We'll get back to you within 24 hours.");
		setFormData({ name: "", email: "", phone: "", date: "", message: "" });
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section
			id="contact"
			className="py-20 bg-white"
			aria-label="Contact Rishi Photography - Kareli Narsinghpur Madhya Pradesh">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900">
						Contact Rishi Photography
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Book your <strong>wedding photoshoot in Kareli</strong>{" "}
						or <strong>Narsinghpur</strong> today. Fill out the form
						below or reach us directly via phone or WhatsApp. We
						respond within 24 hours.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}>
						<form
							onSubmit={handleSubmit}
							className="space-y-6"
							aria-label="Contact form">
							<div>
								<Label htmlFor="name">Full Name *</Label>
								<Input
									id="name"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									placeholder="Your full name"
								/>
							</div>

							<div>
								<Label htmlFor="email">Email *</Label>
								<Input
									id="email"
									name="email"
									type="email"
									required
									value={formData.email}
									onChange={handleChange}
									placeholder="your@email.com"
								/>
							</div>

							<div>
								<Label htmlFor="phone">
									Phone / WhatsApp *
								</Label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									required
									value={formData.phone}
									onChange={handleChange}
									placeholder="+91 9977879238"
								/>
							</div>

							<div>
								<Label htmlFor="date">Wedding Date</Label>
								<Input
									id="date"
									name="date"
									type="date"
									value={formData.date}
									onChange={handleChange}
								/>
							</div>

							<div>
								<Label htmlFor="message">Message *</Label>
								<Textarea
									id="message"
									name="message"
									required
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell us about your wedding or shoot details..."
									rows={5}
								/>
							</div>

							<Button
								type="submit"
								className="w-full bg-blue-600 text-white hover:bg-blue-700"
								aria-label="Send your wedding photography inquiry">
								<Send className="w-4 h-4 mr-2" />
								Send Message
							</Button>
						</form>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8">
						<div>
							<h3 className="text-2xl font-semibold mb-6 text-gray-900">
								Get In Touch
							</h3>
							<p className="text-gray-600 mb-8">
								Reach out to <strong>Rishi Photography</strong>{" "}
								in <strong>Kareli</strong> for pre-wedding,
								candid, or cinematic wedding photography. We’re
								available Monday to Saturday for bookings and
								consultations.
							</p>
						</div>

						{/* Contact Methods */}
						<div className="space-y-6">
							<a
								href="mailto:rishi-photography@gmail.com"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Mail className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="font-medium mb-1 text-gray-800">
										Email
									</p>
									<p className="text-gray-600">
										rishi-photography@gmail.com
									</p>
								</div>
							</a>

							<a
								href="https://wa.me/919977879238"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Phone className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="font-medium mb-1 text-gray-800">
										Phone / WhatsApp
									</p>
									<p className="text-gray-600">
										+91 99778 79238
									</p>
								</div>
							</a>

							<a
								href="https://www.instagram.com/rishi_photography_55"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Instagram className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="font-medium mb-1 text-gray-800">
										Instagram
									</p>
									<p className="text-gray-600">
										@rishi_photography_55
									</p>
								</div>
							</a>

							<div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
									<MapPin className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="font-medium mb-1 text-gray-800">
										Studio Address
									</p>
									<p className="text-gray-600">
										Main Road, Kareli, Narsinghpur, Madhya
										Pradesh 487221
									</p>
								</div>
							</div>
						</div>

						{/* Business Hours */}
						<div className="p-6 bg-gray-50 rounded-lg">
							<p className="font-semibold mb-3 text-gray-800">
								Business Hours
							</p>
							<div className="space-y-2 text-gray-600">
								<p>Monday - Saturday: 9:00 AM – 7:00 PM</p>
								<p>Sunday: Closed (For Booked Shoots Only)</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Hidden SEO Keywords */}
				<p className="hidden">
					Contact Rishi Photography Kareli, Narsinghpur Wedding
					Photographer Contact, Pre Wedding Photographer Madhya
					Pradesh WhatsApp, Wedding Studio Address Kareli MP, Rishi
					Photography Booking Form.
				</p>
			</div>
		</section>
	);
}
