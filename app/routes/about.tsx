import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "About Us | My Remix App" },
		{ name: "description", content: "Learn more about our company" },
	];
};

export default function About() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-prose">
			<h1 className="text-4xl font-bold mb-6">About This Site</h1>
			<p className="text-xl mb-6">
				I made this site as a birthday gift for a friend. It was a blast.
			</p>
			<p className="text-xl mb-6">
				Special shout out to all the folks who wanted to contribute content.
			</p>
			<p className="text-xl mb-8">Cheers Geoff! Happy Birthday!</p>
			<Button asChild>
				<Link to="/">Back to Home</Link>
			</Button>
		</div>
	);
}
