import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Trash2 } from "lucide-react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "Contact Us | Serenity by Geoff" },
		{ name: "description", content: "Get in touch with us" },
	];
};

export default function About() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-prose">
			<h1 className="text-4xl font-bold mb-6">About Our Philosophy</h1>
			<blockquote className="text-xl italic mb-8 pl-4 border-l-4 border-gray-300">
				"I set the rules, and you follow them blindly, okay? And if you have a
				problem with that, then you can talk to our complaint department. It's a
				trashcan."
				<footer className="text-right mt-2">— Michael Scott</footer>
			</blockquote>
			<span className="flex flex-col items-center p-4">
				<Trash2 className="size-20 stroke-secondary" />
			</span>
			<Button asChild>
				<Link to="/">Back to Home</Link>
			</Button>
		</div>
	);
}
