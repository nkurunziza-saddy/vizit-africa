"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";
import { MobileNav } from "./mobile-nav";

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
				"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="rounded-md p-2 hover:bg-accent">
					<Logo className="h-4.5" />
				</div>
				<div className="hidden items-center gap-1 md:flex">
					{navLinks.map((link, i) => (
						<a
							className={buttonVariants({ variant: "ghost" })}
							href={link.href}
							key={i}
						>
							{link.label}
						</a>
					))}
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
