import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useLoaderData,
	useRouteError,
} from "@remix-run/react";
import clsx from "clsx";

import "./tailwind.css";
import {
	PreventFlashOnWrongTheme,
	ThemeProvider,
	useTheme,
} from "remix-themes";
import Footer from "./components/footer";
import { Header } from "./components/header";
import { buttonVariants } from "./components/ui/button";
import { cn } from "./lib/utils";
import { themeSessionResolver } from "./sessions.server";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	return {
		theme: getTheme(),
	};
}
// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
	const data = useLoaderData<typeof loader>();
	return (
		<ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
			<App />
		</ThemeProvider>
	);
}

export function App() {
	const data = useLoaderData<typeof loader>();
	const [theme] = useTheme();
	return (
		<html lang="en" className={clsx(theme)}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
				<Links />
			</head>
			<body className="">
				<div className="min-h-screen flex flex-col">
					<main className="flex-grow">
						<Header />
						<Outlet />
					</main>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	return (
		<html lang="en">
			<head>
				<title>Oops!</title>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
					<h1 className="text-6xl font-bold text-foreground mb-4">
						{isRouteErrorResponse(error)
							? `${error.status} ${error.statusText}`
							: error instanceof Error
								? error.message
								: "Unknown Error"}
					</h1>
					<p className="text-2xl text-foreground mb-8">Oops! Page not found</p>
					<p className="text-lg text-foreground mb-8">
						The page you are looking for might have been removed, had its name
						changed, or is temporarily unavailable.
					</p>
					<Link to="/" className={cn(buttonVariants({ size: "lg" }))}>
						Go back home
					</Link>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
