import { LoaderFunction, json } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Product, products } from "~/data/products";
import { Img } from "~/routes/image";
import { Cart } from "~/types";
import { loader } from "./shop";

export default function CartPage() {
  const [cartItems, setCartItems] = useLocalStorage<Cart>("cart", {});
  // get the product values
  const products = useFetcher<typeof loader>();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  //   const removeFromCart = (itemId: string) => {
  //     const updatedCart = { ...cartItems };
  //     delete updatedCart[itemId];
  //     setCartItems(updatedCart);
  //   };

  const totalPrice = Object.values(cartItems).reduce((sum, item) => {
    const product = products.data?.find((p: Product) => p.id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8 min-h-svh">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/shop" className="text-blue-500 hover:underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {Object.keys(cartItems).map((item) => (
              <li key={item}>
                {
                  products.data?.find((product: Product) => product.id === item)
                    ?.name
                }
                {
                  products.data?.find((product: Product) => product.id === item)
                    ?.price
                }
              </li>
              //   <li
              //     key={item.id}
              //     className="flex items-center justify-between border-b pb-4"
              //   >
              //     <div className="flex items-center">
              //       <Img
              //         src={item.image}
              //         alt={item.name}
              //         className="w-16 h-16 object-cover mr-4"
              //       />
              //       <div>
              //         <h2 className="text-lg font-semibold">{item.name}</h2>
              //         <p className="text-gray-600">${item.price.toFixed(2)}</p>
              //       </div>
              //     </div>
              //     <button
              //       onClick={() => removeFromCart(item.id)}
              //       className="text-red-500 hover:text-red-700"
              //     >
              //       Remove
              //     </button>
              //   </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
