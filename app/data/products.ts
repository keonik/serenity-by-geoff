import fs from "node:fs";
import path from "node:path";

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
}

export const STATIC_PRODUCTS: Record<string, Product> = {
	"romeos-rodeo": {
		id: "1",
		name: "Romeo's Rodeo",
		price: 6.99,
		description: "Hints of hay and a little bit of sass.",
		image: "/products/romeos-rodeo.webp",
	},
	"now-we-wait": {
		id: "2",
		name: "Now we Wait",
		description: "This one is a little bit of a mystery.",
		image: "/products/now-we-wait.webp",
		price: 8.99,
	},
	"bar-wood": {
		id: "3",
		name: "Whiskey",
		description: "My safe word is whiskey.",
		image: "/products/bar-wood.webp",
		price: 9.99,
	},
};

function getProductsFromDirectory(): Product[] {
	const productsDirectory = path.join(process.cwd(), "public", "products");
	const fileNames = fs.readdirSync(productsDirectory);

	return fileNames
		.filter((fileName) => fileName.endsWith(".webp"))
		.map((fileName) => {
			const id = fileName.replace(/\.(png|jpg|jpeg|webp)$/, "");
			let name = id
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
			const existingProduct = STATIC_PRODUCTS[id];
			return (
				existingProduct ?? {
					id,
					name,
					description: `Experience the refreshing scent of ${name}.`,
					price: 9.99 + Math.random() * 5, // Random price between 9.99 and 14.99
					image: `/products/${fileName}`,
				}
			);
		});
}

export const products: Product[] = getProductsFromDirectory();

export function getProduct(id: string): Product | undefined {
	return products.find((product) => product.id === id);
}
