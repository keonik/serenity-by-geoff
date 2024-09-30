import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Img } from "~/routes/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function SoapProcess() {
	return (
		<div className="container mx-auto px-4">
			<div className="flex flex-col md:flex-row items-center">
				<motion.div
					className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold mb-4">Behind the Process</h2>
					<p className="text-lg mb-4">
						At Serenity by Geoff, every bar of soap is a labor of love,
						handcrafted with the same care and attention to detail that Geoff
						applies to his famous chili recipe (minus the floor spills).
					</p>
					<p className="text-lg mb-4">
						Using only the finest ingredients, Geoff pours his heart and soul
						into each soap bar. The process involves careful measuring, mixing,
						and a fair amount of "that's what she said" jokes.
					</p>
					<p className="text-lg">
						From selecting the perfect scent combinations to hand-pouring the
						soap molds, every step is performed with precision and a touch of
						Dunder Mifflin magic. The result? Soaps that bring the essence of
						The Office right into your bathroom.
					</p>
				</motion.div>
				<motion.div
					className="md:w-1/2"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<Carousel
						className="w-full mx-auto"
						plugins={[Autoplay({ delay: 3000 })]}
					>
						<CarouselContent>
							{[
								"/process/equipment-basics.webp",
								"/process/ingredients.webp",
								"/process/one-bowl.webp",
								"/process/pre-blend.webp",
								"/process/mid-blend.webp",
								"/process/heat-check.webp",
								"/process/first-pour.webp",
								"/process/top-off.webp",
								"/process/now-we-wait.webp",
								"/process/counselors.webp",
							].map((src) => (
								<CarouselItem key={src}>
									<div className="p-1">
										<div className="aspect-square relative overflow-hidden rounded-lg">
											<Img
												src={src}
												alt={`Geoff's process`}
												className="object-cover w-full h-full"
											/>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</motion.div>
			</div>
		</div>
	);
}
