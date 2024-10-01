import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import { Product, products } from "~/data/products";
import { Img } from "~/routes/image";

export const loader: LoaderFunction = async () => {
	return json({ products });
};

const FormSchema = z.object({
	minPrice: z.number().min(0).optional(),
	maxPrice: z.number().min(0).optional(),
	sortBy: z.enum(["name", "price"]),
});

export default function Shop() {
	const { products } = useLoaderData<typeof loader>();
	const [filteredProducts, setFilteredProducts] = useState(products);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			minPrice: undefined,
			maxPrice: undefined,
			sortBy: "price",
		},
	});

	const handleSubmit = (data: z.infer<typeof FormSchema>) => {
		console.log("Form submitted:", data);
		let result = products.filter(
			(product: Product) =>
				(data.minPrice === undefined || product.price >= data.minPrice) &&
				(data.maxPrice === undefined || product.price <= data.maxPrice),
		);

		result.sort((a: Product, b: Product) => {
			if (data.sortBy === "price") return a.price - b.price;
			if (data.sortBy === "name") return a.name.localeCompare(b.name);
			return 0;
		});

		console.log("Filtered products:", result);
		setFilteredProducts(result);
	};

	if (products.length === 0) {
		return (
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-8">Serenity by Geoff - Shop</h1>
				<p>No products found. Please check back later!</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8 flex flex-col gap-4">
			<h1 className="text-3xl font-bold">Shop</h1>
			<Form {...form}>
				<form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
						<FormField
							control={form.control}
							name="minPrice"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Min Price</FormLabel>
									<FormControl>
										<Input
											type="number"
											{...field}
											onChange={(e) => field.onChange(Number(e.target.value))}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="maxPrice"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Max Price</FormLabel>
									<FormControl>
										<Input
											type="number"
											{...field}
											value={field.value === undefined ? "" : field.value}
											onChange={(e) =>
												field.onChange(
													e.target.value ? Number(e.target.value) : undefined,
												)
											}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="sortBy"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Sort By</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select sorting option" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="name">Name</SelectItem>
											<SelectItem value="price">Price</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit">Filter</Button>
				</form>
			</Form>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{filteredProducts.map((product: Product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="group relative bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<Card className="h-full flex flex-col">
							<CardHeader className="p-0">
								<Img
									src={product.image}
									alt={product.name}
									width={300}
									height={300}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
							</CardHeader>
							<CardContent className="flex-grow p-4">
								<CardTitle className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
									{product.name}
								</CardTitle>
								<CardDescription className="text-gray-600 mb-2">
									{product.description}
								</CardDescription>
								<p className="text-xl font-bold">${product.price.toFixed(2)}</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
