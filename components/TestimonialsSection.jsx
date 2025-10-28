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
import Image from "next/image";

export function TestimonialsSection() {
	const testimonials = [
		{
			name: "Deep & Shruti",
			date: "June 2024",
			rating: 5,
			text: "Rishi captured our wedding day perfectly! She made us feel so comfortable and the photos are absolutely stunning. Every moment was documented beautifully - from getting ready to our first dance. We couldn't be happier!",
			image: "/hero_section_2.jpg",
		},
		{
			name: "Priya & Rahul",
			date: "March 2024",
			rating: 5,
			text: "Working with Rishi was an absolute dream! She understood our cultural traditions and captured both the vibrant traditional ceremonies and intimate moments with such artistry. The photos tell our story perfectly.",
			image: "/hero_section_1.jpg",
		},
		{
			name: "Prashan & Nidhi",
			date: "September 2023",
			rating: 5,
			text: "We couldn't have asked for a better photographer! Rishi's attention to detail is incredible - she captured moments we didn't even know happened. Her creativity and professionalism exceeded all our expectations.",
			image: "/hero_section_3.jpg",
		},
		{
			name: "Vishal & Neha",
			date: "November 2023",
			rating: 5,
			text: "Rishi is not just a photographer, she's an artist! Our engagement and wedding photos are magazine-worthy. She has an eye for finding the perfect light and angles. Highly recommend!",
			image: "/hero_section_1.jpg",
		},
	];

	return (
		<section id="testimonials" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12">
					<h2 className="mb-4">What Couples Say</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Dont just take our word for it - hear from the couples
						weve had the honor to work with
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
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
																alt="imgae"
																className="w-full h-full object-cover"
															/>
														</div>
													</div>

													{/* Content */}
													<div className="md:col-span-2">
														<Quote className="w-10 h-10 text-gray-300 mb-4" />
														<p className="text-gray-700 mb-6 italic">
															{testimonial.text}
														</p>
														<div className="flex items-center gap-1 mb-2">
															{[
																...Array(
																	testimonial.rating
																),
															].map((_, i) => (
																<Star
																	key={i}
																	className="w-4 h-4 fill-yellow-400 text-yellow-400"
																/>
															))}
														</div>
														<p className="mb-1">
															{testimonial.name}
														</p>
														<p className="text-gray-500">
															{testimonial.date}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
