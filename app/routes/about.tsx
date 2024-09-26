import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | My Remix App" },
    { name: "description", content: "Learn more about our company" },
  ];
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-xl mb-6">
        We are a passionate team dedicated to creating amazing experiences for
        our users.
      </p>
      <p className="text-xl mb-8">
        Our mission is to innovate and inspire through technology and design.
      </p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
