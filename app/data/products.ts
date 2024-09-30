import fs from "node:fs";
import path from "node:path";

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
}

function getProductsFromDirectory(): Product[] {
	const productsDirectory = path.join(process.cwd(), "public", "products");
	const fileNames = fs.readdirSync(productsDirectory);

	return fileNames
		.filter((fileName) => fileName.endsWith(".webp"))
		.map((fileName) => {
			const id = fileName.replace(/\.(png|jpg|jpeg|webp)$/, "");
			const name = id
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			return {
				id,
				name,
				description: `Experience the refreshing scent of ${name}.`,
				price: 9.99 + Math.random() * 5, // Random price between 9.99 and 14.99
				image: `/products/${fileName}`,
			};
		});
}

export const products: Product[] = getProductsFromDirectory();

export function getProduct(id: string): Product | undefined {
	return products.find((product) => product.id === id);
}
