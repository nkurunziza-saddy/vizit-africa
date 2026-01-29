import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-4xl mb-4">MURUGO</h3>
            <p className="text-cream/70 max-w-md leading-relaxed mb-6">
              Your home away from home in Rwanda. We connect travelers with
              authentic experiences, comfortable stays, and the warm hospitality
              that makes the Land of a Thousand Hills unforgettable.
            </p>
            <div className="flex flex-col gap-3 text-cream/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>KG 9 Ave, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+250 788 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@murugo.rw</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6 text-gold">
              Our Services
            </h4>
            <ul className="space-y-3 text-cream/70">
              <li>
                <Link
                  href="/listings?type=flights"
                  className="hover:text-cream transition-colors"
                >
                  Flights to Rwanda
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=hotels"
                  className="hover:text-cream transition-colors"
                >
                  Hotels & Lodges
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=bnbs"
                  className="hover:text-cream transition-colors"
                >
                  Local BnBs
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=car-rentals"
                  className="hover:text-cream transition-colors"
                >
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?type=experiences"
                  className="hover:text-cream transition-colors"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-xl mb-6 text-gold">Explore</h4>
            <ul className="space-y-3 text-cream/70">
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-cream transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="hover:text-cream transition-colors"
                >
                  All Listings
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-cream transition-colors">
                  About Rwanda
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cream transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            2026 Murugo Rwanda. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">Made with love for Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
