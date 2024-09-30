import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
