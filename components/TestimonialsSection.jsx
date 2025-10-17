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
			name: "Emily & James",
			date: "June 2024",
			rating: 5,
			text: "Sarah captured our wedding day perfectly! She made us feel so comfortable and the photos are absolutely stunning. Every moment was documented beautifully - from getting ready to our first dance. We couldn't be happier!",
			image: "https://images.unsplash.com/photo-1606217239566-1c893c2e110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwNTU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Priya & Rahul",
			date: "March 2024",
			rating: 5,
			text: "Working with Sarah was an absolute dream! She understood our cultural traditions and captured both the vibrant traditional ceremonies and intimate moments with such artistry. The photos tell our story perfectly.",
			image: "https://images.unsplash.com/photo-1586934280706-262a90ddd743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYwNjgwMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Michael & Lisa",
			date: "September 2023",
			rating: 5,
			text: "We couldn't have asked for a better photographer! Sarah's attention to detail is incredible - she captured moments we didn't even know happened. Her creativity and professionalism exceeded all our expectations.",
			image: "https://images.unsplash.com/photo-1631225893179-4d6e349189c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzYwNjgwMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			name: "Sophie & David",
			date: "November 2023",
			rating: 5,
			text: "Sarah is not just a photographer, she's an artist! Our engagement and wedding photos are magazine-worthy. She has an eye for finding the perfect light and angles. Highly recommend!",
			image: "https://images.unsplash.com/photo-1728022615324-78dbe04cac43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjB3ZWRkaW5nJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3NjA2ODAwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
																src="https://picsum.photos/200/300"
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
