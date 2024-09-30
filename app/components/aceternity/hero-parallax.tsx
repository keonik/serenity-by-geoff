"use client";
import { Link } from "@remix-run/react";
import {
	type MotionValue,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import React from "react";
import { Img } from "~/routes/image";

export const HeroParallax = ({
	products,
	title,
	description,
	parentProduct,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
	parentProduct?: string;
	title?: string;
	description?: string;
}) => {
	// duplicate products till length is 15
	const duplicatedProducts = Array(15).fill(products).flat();
	const firstRow = duplicatedProducts.slice(0, 5);
	const secondRow = duplicatedProducts.slice(5, 10);
	const thirdRow = duplicatedProducts.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig,
	);
	return (
		<div
			ref={ref}
			className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<HeroTextOverlayHeader
				title={title}
				description={description}
				parentProduct={parentProduct}
			/>
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const HeroTextOverlayHeader = ({
	title,
	description,
	parentProduct,
}: {
	title?: string;
	description?: string;
	parentProduct?: string;
}) => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
			<h1 className="text-2xl md:text-7xl font-bold dark:text-white">
				{title || (
					<>
						The Ultimate <br /> development studio
					</>
				)}
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
				{description ||
					"We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products."}
			</p>
			{parentProduct && (
				<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
					{parentProduct}
				</p>
			)}
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-96 w-[30rem] relative flex-shrink-0"
		>
			<Link to={product.link} className="block group-hover/product:shadow-2xl ">
				<Img
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
					alt={product.title}
				/>
			</Link>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
