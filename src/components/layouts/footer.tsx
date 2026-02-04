import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="">
              <Logo className="h-12" />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Your Trusted Partner for making your trips ten time more fun and
              enjoyable ,Book now your best ride , hotels , apartments .
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>kesly@vizit.africa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>0780486847 </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>kesly@vizit.africa</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold mb-6 text-[#7EB6FF]">
              Services
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li>
                <Link
                  to="/listings"
                  search={{ category: "flight" }}
                  className="hover:text-white transition-colors"
                >
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  to="/listings"
                  search={{ category: "hotel" }}
                  className="hover:text-white transition-colors"
                >
                  Stays
                </Link>
              </li>
              <li>
                <Link
                  to="/listings"
                  search={{ category: "car" }}
                  className="hover:text-white transition-colors"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/listings"
                  className="hover:text-white transition-colors"
                >
                  Book All
                </Link>
              </li>
            </ul>
          </div>

          {/* Gallery Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#7EB6FF]">
              Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md overflow-hidden bg-white/10"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1500000000000 + i * 100000
                    }?auto=format&fit=crop&w=100&q=80`}
                    alt="Gallery thumbnail"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#7EB6FF]">
              Stay Connected
            </h3>
            <div className="flex gap-2 mb-6">
              <div className="relative flex-1">
                <Input
                  placeholder="Your Email"
                  className="bg-white text-black placeholder:text-muted-foreground border-none h-10 rounded-md pr-10"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 bg-primary hover:bg-[#1a2c42] rounded-sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs text-white/60">Follow US</span>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  to="/"
                  className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  to="/"
                  className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>2026@Copyright by VIZITAFRICA</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">
              Help Center
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              FAQs
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
