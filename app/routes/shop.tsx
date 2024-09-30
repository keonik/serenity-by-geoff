import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import { Img } from "~/routes/image";

export default function Shop() {
	//   if (products.length === 0) {
	//     return (
	//       <div className="container mx-auto px-4 py-8">
	//         <h1 className="text-3xl font-bold mb-8">Serenity by Geoff - Shop</h1>
	//         <p>No products found. Please check back later!</p>
	//       </div>
	//     );
	//   }

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Serenity by Geoff - Shop</h1>
			{/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{products.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<div className="aspect-w-1 aspect-h-1">
							<Img
								src={product.image}
								alt={product.name}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="p-4">
							<h2 className="text-sm font-semibold mb-1 truncate">
								{product.name}
							</h2>
							<p className="text-lg font-bold">${product.price.toFixed(2)}</p>
						</div>
						<div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
							<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
							<p className="text-sm">{product.description}</p>
						</div>
					</Link>
				))}
			</div> */}
		</div>
	);
}
