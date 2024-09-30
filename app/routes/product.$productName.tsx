import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getProduct } from "~/data/products";
import { Img } from "~/routes/image";

export const loader: LoaderFunction = async ({ params }) => {
  const product = getProduct(params.productName || "");
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return json({ product });
};

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
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
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
