import { Link } from "@remix-run/react";
import React from "react";
import { Button } from "./ui/button";

export const CallToAction = () => {
	return (
		<section className="py-16 bg-primary text-primary-foreground text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8">
					Ready to Experience Serenity?
				</h2>
				<Link to="/shop">
					<Button
						size="lg"
						variant="secondary"
						className="p-6 rounded-full mb-8"
					>
						Explore Our Collection
					</Button>
				</Link>
				<p className="text-xl max-w-2xl mx-auto">
					Join thousands of satisfied customers and bring the magic of Serenity
					by Geoff into your daily cleansing routine.
				</p>
			</div>
		</section>
	);
};
