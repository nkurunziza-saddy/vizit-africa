import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useWishlist } from "@/context/wishlist-context";
import { Button } from "@/components/ui/button";

import { SectionTitle } from "@/components/landing/section-title";
import ListingCard from "@/components/listing-card";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/_app/saved")({
  component: SavedPage,
});

function SavedPage() {
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Empty className="min-h-[60vh] border-2 border-dashed border-muted rounded">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Heart className="h-6 w-6" />
              </EmptyMedia>
              <EmptyTitle className="text-xl uppercase font-bold tracking-tight">
                Your wishlist is empty
              </EmptyTitle>
              <EmptyDescription>
                Save places you'd like to visit to track them here.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                size="lg"
                className="rounded uppercase tracking-widest font-bold"
                onClick={() =>
                  navigate({
                    to: "/listings",
                    search: (prev: any) => ({ ...prev, page: 1 }),
                  })
                }
              >
                Browse Listings
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <SectionTitle
            title="Saved Trips"
            subtitle="Your Wishlist"
            className="mb-8"
          />
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Places you've bookmarked for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id.toString()}
              title={listing.title}
              location={`Location ${listing.locationId}`}
              price={listing.basePrice}
              rating={4.8}
              reviewCount={12}
              image={
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              }
              category={
                listing.listingType.includes("hotel")
                  ? "hotel"
                  : listing.listingType.includes("car")
                    ? "car"
                    : "tour"
              }
              listing={listing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
