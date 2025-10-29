"use client";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export function TestimonialsSection() {
	const testimonials = [
		{
			name: "Deep & Shruti",
			date: "June 2024",
			rating: 5,
			text: "Rishi captured our wedding in Kareli beautifully. Every candid moment was shot perfectly, and the pre-wedding photoshoot near Narsinghpur turned out magical. We still can’t stop looking at our album!",
			image: "/hero_section_2.jpg",
			location: "Kareli, Madhya Pradesh",
		},
		{
			name: "Priya & Rahul",
			date: "March 2024",
			rating: 5,
			text: "From our engagement to our wedding in Narsinghpur, Rishi Photography made every frame look cinematic. Her understanding of cultural moments and lighting is exceptional!",
			image: "/hero_section_1.jpg",
			location: "Narsinghpur, Madhya Pradesh",
		},
		{
			name: "Prashan & Nidhi",
			date: "September 2023",
			rating: 5,
			text: "We were amazed by Rishi’s professionalism and creative approach. She captured the energy of our wedding in Kareli with perfection — from rituals to emotions, everything feels alive in the photos!",
			image: "/hero_section_3.jpg",
			location: "Kareli, MP",
		},
		{
			name: "Vishal & Neha",
			date: "November 2023",
			rating: 5,
			text: "Rishi is truly the best wedding photographer in Narsinghpur! Her drone shots and candid frames turned our simple wedding into something straight out of a movie. Highly recommend her!",
			image: "/hero_section_1.jpg",
			location: "Narsinghpur, MP",
		},
	];

	return (
		<section
			id="testimonials"
			className="py-20 bg-gray-50"
			aria-label="Client Testimonials - Wedding Photographer Kareli Narsinghpur">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900">
						What Couples Say About Rishi Photography
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Read real stories from happy couples across{" "}
						<strong>Kareli</strong> and{" "}
						<strong>Narsinghpur, Madhya Pradesh</strong> who trusted
						us to capture their once-in-a-lifetime memories.
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<Carousel
						opts={{ align: "start", loop: true }}
						className="w-full">
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index}>
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}>
										<Card className="border-0 shadow-lg">
											<CardContent className="p-8">
												<div className="grid md:grid-cols-3 gap-6 items-center">
													{/* Image */}
													<div className="md:col-span-1">
														<div className="aspect-square rounded-lg overflow-hidden">
															<img
																src={
																	testimonial.image
																}
																alt={`Wedding photo of ${testimonial.name} in ${testimonial.location}`}
																className="w-full h-full object-cover"
																loading="lazy"
															/>
														</div>
													</div>

													{/* Content */}
													<div className="md:col-span-2">
														<Quote className="w-10 h-10 text-gray-300 mb-4" />
														<p className="text-gray-700 mb-6 italic leading-relaxed">
															{testimonial.text}
														</p>

														{/* Rating */}
														<div className="flex items-center gap-1 mb-2">
															{Array.from({
																length: testimonial.rating,
															}).map((_, i) => (
																<Star
																	key={i}
																	className="w-4 h-4 fill-yellow-400 text-yellow-400"
																	aria-label="5-star rating"
																/>
															))}
														</div>

														{/* Client Info */}
														<p className="font-semibold text-gray-900">
															{testimonial.name}
														</p>
														<p className="text-gray-500 text-sm">
															{
																testimonial.location
															}{" "}
															• {testimonial.date}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious aria-label="Previous testimonial" />
						<CarouselNext aria-label="Next testimonial" />
					</Carousel>
				</div>

				{/* Local Trust Statement */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center">
					<p className="text-gray-700 max-w-3xl mx-auto">
						Over <strong>500+ weddings captured</strong> across{" "}
						<strong>Kareli</strong>, <strong>Narsinghpur</strong>,
						and <strong>Madhya Pradesh</strong>. Trusted by couples
						for candid, cinematic, and traditional photography that
						turns moments into memories.
					</p>
				</motion.div>

				{/* Hidden SEO Keywords */}
				<p className="hidden">
					Wedding Photographer Kareli Reviews, Narsinghpur Wedding
					Photography Testimonials, Rishi Photography Client Feedback,
					Best Wedding Photographer in Madhya Pradesh, Pre Wedding
					Photography Reviews Kareli.
				</p>
			</div>
		</section>
	);
}
