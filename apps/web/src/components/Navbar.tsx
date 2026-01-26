import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stays", href: "/listings", search: { category: "hotel" } },
  { name: "Transport", href: "/listings", search: { category: "car" } },
  { name: "Tours", href: "/listings", search: { category: "tour" } },
];

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "RWF", symbol: "FRw", name: "Rwandan Franc" },
  { code: "GBP", symbol: "£", name: "British Pound" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Vizit Africa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                search={link.search}
                activeProps={{ className: "text-primary font-semibold" }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="sm" className="gap-1"/>}>
                   <Globe className="h-4 w-4" />
                   {currency.code}
                   <ChevronDown className="h-3 w-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {currencies.map((curr) => (
                  <DropdownMenuItem key={curr.code} onClick={() => setCurrency(curr)}>
                    {curr.symbol} {curr.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="default" size="sm">Sign In</Button>
          </div>

          <button
          type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
           {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                search={link.search}
                className="block text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <div className="pt-2">
                <Button className="w-full">Sign In</Button>
             </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
