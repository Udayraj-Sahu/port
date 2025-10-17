"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, Send } from "lucide-react";
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
		<section id="contact" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="mb-4">Lets Connect</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Ready to book your date or have questions? Fill out the
						form below or reach out through your preferred method.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Label htmlFor="name">Name *</Label>
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
								<Label htmlFor="phone">Phone</Label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									value={formData.phone}
									onChange={handleChange}
									placeholder="+1 (555) 000-0000"
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
									placeholder="Tell us about your wedding day..."
									rows={5}
								/>
							</div>

							<Button type="submit" className="w-full">
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
							<h3 className="mb-6">Get In Touch</h3>
							<p className="text-gray-600 mb-8">
								We typically respond within 24 hours. For urgent
								inquiries, please call or WhatsApp us directly.
							</p>
						</div>

						{/* Contact Methods */}
						<div className="space-y-6">
							<a
								href="mailto:hello@sarahwilliams.com"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Mail className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="mb-1">Email</p>
									<p className="text-gray-600">
										hello@sarahwilliams.com
									</p>
								</div>
							</a>

							<a
								href="https://wa.me/15550000000"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Phone className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="mb-1">Phone / WhatsApp</p>
									<p className="text-gray-600">
										+1 (555) 000-0000
									</p>
								</div>
							</a>

							<a
								href="https://instagram.com/sarahwilliamsphotography"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
									<Instagram className="w-6 h-6 text-gray-700" />
								</div>
								<div>
									<p className="mb-1">Instagram</p>
									<p className="text-gray-600">
										@sarahwilliamsphotography
									</p>
								</div>
							</a>
						</div>

						{/* Business Hours */}
						<div className="p-6 bg-gray-50 rounded-lg">
							<p className="mb-3">Business Hours</p>
							<div className="space-y-2 text-gray-600">
								<p>Monday - Friday: 9am - 6pm</p>
								<p>Saturday: 10am - 4pm</p>
								<p>Sunday: Closed</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
