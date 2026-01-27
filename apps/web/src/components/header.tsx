"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { navLinks } from "@/lib/nav-links";
import { useAuth } from "@/context/auth-context";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
	const scrolled = useScroll(10);
	const { user, logout, isAuthenticated } = useAuth();

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
				{
					"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<Link to="/" className="rounded-md p-2 hover:bg-accent">
					<Logo className="h-4.5" />
				</Link>
				<div className="hidden items-center gap-1 md:flex">
					{navLinks.map((link, i) => (
						<Link
							className={buttonVariants({ variant: "ghost" })}
							to={link.href}
							key={i}
						>
							{link.label}
						</Link>
					))}
					
					{isAuthenticated && user ? (
						<DropdownMenu>
							<DropdownMenuTrigger className="outline-none">
								<Button variant="ghost" className="relative h-8 w-8 rounded-full">
									<Avatar className="h-8 w-8">
										<AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} alt={user.full_name} />
										<AvatarFallback>{user.full_name.charAt(0)}</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56" align="end">
								<DropdownMenuLabel className="font-normal">
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">{user.full_name}</p>
										<p className="text-xs leading-none text-muted-foreground">{user.email}</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								{user.role === 'admin' && <DropdownMenuItem>Admin Dashboard</DropdownMenuItem>}
								{user.role === 'vendor' && <DropdownMenuItem>Vendor Dashboard</DropdownMenuItem>}
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<>
							<Link to="/login">
								<Button variant="outline">Sign In</Button>
							</Link>
							<Link to="/login">
								<Button>Get Started</Button>
							</Link>
						</>
					)}
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
