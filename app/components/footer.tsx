import { Link } from "@remix-run/react";

function Footer() {
	return (
		<footer className="bg-muted text-muted-foreground p-10 text-center">
			<div className=" flex h-full content-stretch justify-between container items-center">
				<div className="basis-1/2 grid grid-cols-1 gap-2">
					<Link to="/about">About</Link>
					<Link to="/contact">Contact Us</Link>
				</div>
				<div>
					<p>&copy; 2024 Serenity by Geoff. All rights reserved.</p>
					<p className="text-xs">A Mostly Geoff Product</p>
				</div>{" "}
			</div>
		</footer>
	);
}

export default Footer;
