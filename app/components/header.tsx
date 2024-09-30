import { Link } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

export function Header() {
	return (
		<header className="bg-background text-foreground border-b">
			<nav className="container mx-auto flex justify-between items-center p-4">
				<Link
					to="/"
					className="text-xl font-bold flex items-center gap-2 group"
				>
					<Logo className="size-14 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12 group-hover:shadow-2xl shadow-primary" />
					<span className="hidden sm:inline">Serenity by Geoff</span>
				</Link>
				<div className="flex items-center gap-4">
					<Link to="/shop" className="hover:underline">
						Shop
					</Link>
					<Link to="/cart" className="relative">
						<ShoppingCart className="h-6 w-6" />
						<span className="sr-only">Shopping Cart</span>
						{/* You can add a cart item count here if needed */}
						<span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs px-2 py-1">
							0
						</span>
					</Link>
					<ModeToggle />
				</div>
			</nav>
		</header>
	);
}
