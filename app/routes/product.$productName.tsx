import { type LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "~/components/ui/button";
import { getProduct } from "~/data/products";
import { Img } from "~/routes/image";
import { CartItem } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
	const product = getProduct(params.productName || "");
	if (!product) {
		throw new Response("Product not found", { status: 404 });
	}
	return json({ product });
};

export default function ProductPage() {
	const { product } = useLoaderData<typeof loader>();
	const [cartItems, setCartItems] = useLocalStorage<Record<string, CartItem>>(
		"cart",
		{},
	);

	const addToCart = () => {
		if (product) {
			const updatedCart = {
				...cartItems,
				[product.id]: {
					id: product.id,
					quantity: (cartItems[product.id]?.quantity || 0) + 1,
				},
			};
			toast("Product added to cart", {
				action: (
					<Link to="/cart">
						<Button>Go to Cart</Button>
					</Link>
				),
			});
			setCartItems(updatedCart);
		}
	};

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8 min-h-svh">
			<Link
				to="/shop"
				className="inline-block mb-4 text-blue-500 hover:text-blue-600 transition-colors"
			>
				&larr; Back to Products
			</Link>
			<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<Img
						src={product.image}
						alt={product.name}
						width={500}
						height={500}
						className="w-full h-auto rounded-lg shadow-lg"
					/>
				</div>
				<div>
					<p className="text-xl mb-4">{product.description}</p>
					<p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
					<Button onClick={addToCart}>Add to Cart</Button>
				</div>
			</div>
		</div>
	);
}
