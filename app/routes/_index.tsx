import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeroParallax } from "~/components/aceternity/hero-parallax";
import { CallToAction } from "~/components/call-to-action";
import { HoverCardGif } from "~/components/hover-card-gif";
import { Testimonials } from "~/components/testimonials";
import { Button } from "~/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "~/components/ui/carousel";
import { products } from "~/data/products";
import { Img } from "~/routes/image";

export const meta: MetaFunction = () => {
	return [
		{ title: "Serenity by Geoff | Scent- Soaps" },
		{
			name: "description",
			content:
				"Experience the freshness of serenity with Geoff's handcrafted soaps. Inspired by 'that's what she said' moments.",
		},
	];
};

export const loader = () => {
	const finalProducts = products.map((product) => ({
		title: product.name,
		link: `/product/${product.id}`,
		thumbnail: product.image,
	}));
	return json(finalProducts);
};

export default function Index() {
	const products = useLoaderData<typeof loader>();

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroParallax
				products={products}
				description="Soaps for those who feel dead inside. You lather it, you buy it"
				parentProduct="Mostly Geoff incorporated"
				title="Serenity by Geoff"
			/>
			{/* Features Section */}
			<section className="py-16 bg-muted">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Why Choose Serenity by Geoff?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								image: "/process/ingredients.webp",
								title: "100% Natural-ish Ingredients",
								description:
									"Last week we put liquid paper on a bee and it... died.",
							},
							{
								image: "/process/geoff-desk.webp",
								title: "Handcrafted by Geoff",
								description:
									"Each bar is carefully crafted while binge-watching The Office.",
							},
							{
								image: "/people/counselors.webp",
								title: "Community Driven",
								description:
									"Welcome to the community! If you need any fertilizer, we've got a lot of it. About 80 tons of it. You folks are gonna love this soap. Everyone in the organization recycles.",
							},
						].map((feature, index) => (
							<AnimatedFeatureCard
								key={feature.title}
								{...feature}
								index={index}
							/>
						))}
					</div>
				</div>
			</section>
			{/* Behind the Process Section */}
			<section className="py-16 bg-background"></section>
			{/* Testimonials Section */}
			<section
				className="py-16 bg-background overflow-hidden"
				aria-label="testimonials"
			>
				<Testimonials />
			</section>
			{/* CTA Section */}
			<CallToAction />
		</div>
	);
}

function AnimatedFeatureCard({
	image,
	title,
	description,
	index,
	hoverBackgroundUrl = "https://media.giphy.com/media/FIyOndr9jvel8vTHLH/giphy.gif?cid=790b7611jqa1ywk5e9hqs6mvcpeczy5i7r78zmi3curj2vec&ep=v1_gifs_search&rid=giphy.gif&ct=g",
}: {
	image: string;
	title: string;
	description: string;
	index: number;
	hoverBackgroundUrl?: string;
}) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, delay: index * 0.3 }}
			className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
		>
			<HoverCardGif
				title={title}
				description={description}
				backgroundUrl={image}
				hoverBackgroundUrl={hoverBackgroundUrl}
			/>
		</motion.div>
	);
}
