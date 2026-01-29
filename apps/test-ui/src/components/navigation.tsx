"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Explore" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl md:text-3xl text-forest font-semibold tracking-wide">
            MURUGO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-forest/80 hover:text-terracotta transition-colors font-medium tracking-wide uppercase text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Button
            render={<Link href="/listings" />}
            className="bg-forest hover:bg-forest-light text-cream rounded-none px-6 py-5 uppercase tracking-wider text-xs font-medium"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="text-forest" />
            }
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream w-full max-w-sm">
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-3xl text-forest hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                render={<Link href={"/listings"} />}
                className="bg-forest hover:bg-forest-light text-cream rounded-none px-6 py-6 uppercase tracking-wider text-sm font-medium mt-4"
              >
                <Link href="/listings">Book Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
