import { Link } from "@tanstack/react-router";
import { Star, Plus, Check, AlertCircle, Heart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { Listing } from "@/utils/mock-db";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { addDays } from "date-fns";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

export interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: "hotel" | "bnb" | "car" | "tour";
  perUnit?: string;
  listing: Listing;
}

export default function ListingCard({
  id,
  title,
  location,
  price,
  currency = "USD",
  rating,
  reviewCount,
  category,
  listing,
}: ListingCardProps) {
  const { addToCart, removeFromCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [pendingConfirm, setPendingConfirm] = useState(false);

  const isSaved = isInWishlist(listing.id);

  // Find if this specific item is in the cart
  const existingCartItem = cart.find((item) => item.listing.id === listing.id);
  const isInCart = !!existingCartItem;

  // Check if there is a category conflict (same type, but different ID)
  const hasSameCategory = cart.some(
    (item) =>
      item.listing.listing_type === listing.listing_type &&
      item.listing.id !== listing.id,
  );

  // Clear pending state if item is removed/added externally
  useEffect(() => {
    if (isInCart !== undefined) {
      setPendingConfirm(false);
    }
  }, [isInCart]);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(listing);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation();

    // 1. Toggle Remove if already in cart
    if (isInCart) {
      removeFromCart(existingCartItem!.id);
      toast.info("Removed from cart");
      return;
    }

    // 2. Category Warning
    if (hasSameCategory && !pendingConfirm) {
      setPendingConfirm(true);
      const typeLabel = listing.listing_type.replace("_", " ");
      toast.info(`You already have a ${typeLabel} in your cart.`, {
        description: "Click again to add this one as well.",
        duration: 5000,
        icon: <AlertCircle className="h-4 w-4 text-blue-500" />,
      });

      // Reset after 30 seconds
      setTimeout(() => {
        setPendingConfirm(false);
      }, 30000);
      return;
    }

    // Default booking details
    const defaultDateRange = {
      from: new Date(),
      to: addDays(new Date(), 1),
    };

    const newItem = {
      listing,
      dateRange: defaultDateRange,
      guests: 1,
      selectedAddons: [],
    };

    addToCart(newItem);
    setPendingConfirm(false);
    toast.success("Added to cart!");
  };

  return (
    <Link
      to="/listings/$id"
      params={{ id }}
      className="block h-full group relative"
    >
      <div className="h-full border border-border shadow-sm hover:shadow-md transition-all rounded-lg bg-card text-card-foreground p-3 flex flex-col gap-3.5">
        <div className="px-0 relative">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute -top-1 -right-1 z-10 hover:bg-transparent h-8 w-8",
              isSaved
                ? "text-red-500 hover:text-red-600"
                : "text-muted-foreground/50 hover:text-red-500",
            )}
            onClick={handleWishlistClick}
          >
            <Heart className={cn("h-5 w-5", isSaved && "fill-current")} />
          </Button>
          <div className="flex justify-between items-start gap-3 pr-6">
            <h3 className="font-semibold text-sm leading-tight group-hover:underline decoration-1 underline-offset-4">
              {title}
            </h3>
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 h-5 font-normal bg-muted/50 text-muted-foreground border-border/50"
            >
              {category}
            </Badge>
          </div>
          <div className="flex items-center text-xs text-muted-foreground gap-1 pt-0.5">
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-1 text-xs mt-1.5">
            <Star className="h-3 w-3 fill-foreground text-foreground" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-sm font-medium">
            {currency} {price}{" "}
            <span className="text-muted-foreground font-normal text-xs">
              / night
            </span>
          </div>
          <Button
            size="icon"
            variant={
              isInCart
                ? "default"
                : pendingConfirm
                  ? "destructive"
                  : "secondary"
            }
            className={`h-8 w-8 rounded-full shrink-0 transition-all hover:bg-primary hover:text-primary-foreground ${isInCart ? "bg-primary text-primary-foreground hover:bg-destructive hover:text-destructive-foreground" : ""}`}
            onClick={handleQuickAdd}
            title={
              isInCart
                ? "Remove from Cart"
                : pendingConfirm
                  ? "Confirm Add"
                  : "Quick Add"
            }
          >
            {isInCart ? (
              <Check className="h-4 w-4" />
            ) : pendingConfirm ? (
              <Plus className="h-4 w-4 animate-in zoom-in" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
