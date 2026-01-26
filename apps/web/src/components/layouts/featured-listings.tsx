import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ListingCard, { ListingCardProps } from "../listing-card";

import hotelImage from "@/assets/hotel-listing.jpg";
import bnbImage from "@/assets/bnb-listing.jpg";
import carImage from "@/assets/car-listing.jpg";
import tourImage from "@/assets/tour-gorilla.jpg";

const featuredListings: ListingCardProps[] = [
  {
    id: "1",
    title: "Luxury Safari Lodge",
    location: "Volcanoes National Park",
    price: 350,
    rating: 4.9,
    reviewCount: 128,
    image: hotelImage,
    category: "hotel",
  },
  {
    id: "2",
    title: "Cozy Mountain BnB",
    location: "Musanze",
    price: 85,
    rating: 4.7,
    reviewCount: 64,
    image: bnbImage,
    category: "bnb",
  },
  {
    id: "3",
    title: "Toyota Land Cruiser",
    location: "Kigali",
    price: 120,
    rating: 4.8,
    reviewCount: 92,
    image: carImage,
    category: "car",
  },
  {
    id: "4",
    title: "Gorilla Trekking",
    location: "Volcanoes National Park",
    price: 1500,
    rating: 5.0,
    reviewCount: 256,
    image: tourImage,
    category: "tour",
  },
];

export const FeaturedListings = () => {
  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Featured Experiences</h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Handpicked selections from our verified partners.
            </p>
          </div>
          <Link to="/listings">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredListings.map((listing) => (
             <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
