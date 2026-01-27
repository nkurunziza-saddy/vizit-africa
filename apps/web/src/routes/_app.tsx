import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/layouts/header";

export const Route = createFileRoute("/_app")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-background font-sans antialiased">
			<Header />
			<Outlet />
		</div>
	);
}
