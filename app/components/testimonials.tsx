import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";

import { useInView } from "react-intersection-observer";
// import avatarImage1 from "@/images/avatars/avatar-1.jpg";
// import avatarImage2 from "@/images/avatars/avatar-2.jpg";
// import avatarImage3 from "@/images/avatars/avatar-3.jpg";
// import avatarImage4 from "@/images/avatars/avatar-4.jpg";
// import avatarImage5 from "@/images/avatars/avatar-5.jpg";
// import avatarImage6 from "@/images/avatars/avatar-6.jpg";
// import avatarImage7 from "@/images/avatars/avatar-7.jpg";
// import avatarImage8 from "@/images/avatars/avatar-8.jpg";
// import avatarImage9 from "@/images/avatars/avatar-9.png";
// import avatarImage10 from "@/images/avatars/avatar-10.png";
import { cn } from "~/lib/utils";

const testimonials = [
	[
		{
			content:
				"Serenity by Geoff is cleaning up the competition. You remember last week when we had that oil spill in the parking lot? Guess whose soap they used to wash their hands after?",
			author: {
				name: "Jan Levinson",
				role: "Manager",
				image: "https://i.redd.it/t02zcg9wcz8b1.jpg",
			},
		},
		{
			content:
				"These funny smelling dog treats my dad keeps making don’t taste that great. Weird after taste",
			author: {
				name: "Pudge",
				role: "Quality Assurance - Taste Tester",
				image: "/people/healer.webp",
			},
		},
		{
			content: "Cool cool, cool cool cool cool cool cool cool cool.",
			author: {
				name: "Abed Nadir",
				role: "Student",
				image:
					"https://static.wikia.nocookie.net/community-sitcom/images/4/4f/Square_Community_Season_Six_Abed.jpg",
			},
		},
	],
	[
		{
			content: "Thank God they got it all cleaned up.",
			author: {
				name: "Kevin Malone",
				role: "Accountant",
				image: "https://www.cs.oswego.edu/~jstooks/kevin_malone_hair.jpg",
			},
		},

		{
			content:
				"Are you seriously trying to get us to invest in your husband's soap business?",
			author: {
				name: "Jim Halpert",
				role: "Paper Salesman",
				image:
					"https://static.wikia.nocookie.net/sillyman0108/images/a/a7/Jim.jpeg",
			},
		},
		{
			content:
				"Geoff your soaps are amazing. Reach out so we can get you on...Troy and Abed in the morning!",
			author: {
				name: "Troy Barnes",
				role: "Student",
				image:
					"https://pyxis.nymag.com/v1/imgs/e8e/230/d977bdd832499ce70b1fa4f93fed7016e3-24-community-troy.rsquare.w400.jpg",
			},
		},
	],
	[
		{
			content: "Oh, they cleaned it up?",
			author: {
				name: "Jan Levinson",
				role: "Manager",
				image: "https://i.redd.it/t02zcg9wcz8b1.jpg",
			},
		},
		{
			content: "Thought about it... I'm in",
			author: {
				name: "Andy Bernard",
				role: "Unsuccessful Paper Salesman",
				image:
					"https://pbs.twimg.com/profile_images/69252531/andy-bernard_400x400.jpg",
			},
		},
		{
			content:
				"I use Geoff's soap right before a stunt. With it I feel 2 legit. Without it I feel un-legit. Therefore I must quit.",
			author: {
				name: "Rod Kimble",
				role: "Stuntman Extraordinaire",
				image:
					"https://cdn.costumewall.com/wp-content/uploads/2019/10/Hot-Rod-Kimble-Cosplay-Costume.jpg",
			},
		},
	],
];

export function Testimonials() {
	return (
		<section
			id="testimonials"
			aria-label="What our customers are saying"
			className=""
		>
			<div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}>
				<h1 className="text-4xl font-bold text-center mb-16">
					What our customers are saying
				</h1>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 lg:mt-20 lg:max-w-none lg:grid-cols-3">
						{testimonials.map((column, columnIndex) => (
							<li key={columnIndex}>
								<ul className="flex flex-col gap-y-4">
									{column.map((testimonial, testimonialIndex) => (
										<li key={testimonialIndex}>
											<AnimatedTestimonialCard
												testimonial={testimonial}
												testimonialIndex={testimonialIndex}
											/>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function AnimatedTestimonialCard({
	testimonial,
	testimonialIndex,
}: {
	testimonial: (typeof testimonials)[number][number];
	testimonialIndex: number;
}) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={inView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.5, delay: testimonialIndex * 0.1 }}
		>
			<Card className="shadow-lg">
				<CardHeader>
					<p className="text-lg">{testimonial.content}</p>
				</CardHeader>
				<CardContent>
					<div className="relative mt-6 flex items-center gap-3 text-secondary-foreground">
						<div className="overflow-hidden rounded-full bg-background">
							<img
								className="h-12 w-12"
								src={testimonial.author.image}
								alt=""
								width={50}
								height={50}
							/>
						</div>
						<div>
							<div className="font-display text-base">
								{testimonial.author.name}
							</div>
							<div className="mt-1 text-sm">{testimonial.author.role}</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
