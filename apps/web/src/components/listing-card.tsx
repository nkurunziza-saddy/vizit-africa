import { Link, useNavigate } from "@tanstack/react-router";
import { Star, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/cart-context";
import { Listing } from "@/utils/mock-db";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { addDays } from "date-fns";

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
  const { addToCart, cart } = useCart();
  const [pendingConfirm, setPendingConfirm] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation();

    // Default booking details
    const defaultDateRange = {
      from: new Date(),
      to: addDays(new Date(), 1)
    };

    const newItem = {
      listing,
      dateRange: defaultDateRange,
      guests: 1,
      selectedAddons: []
    };

    if (!cart) {
      addToCart(newItem);
      toast.success("Added to cart!");
      return;
    }

    if (cart.listing.id === listing.id) {
       toast.info("This item is already in your cart.");
       return;
    }

    // Conflict detection
    if (pendingConfirm) {
        // Confirmed replacement
        addToCart(newItem);
        toast.success("Replaced existing item in cart!");
        setPendingConfirm(false);
    } else {
        // First click - Warn
        toast.warning("You have an item in cart. Click (+) again within 30s to replace it.", {
            duration: 5000,
        });
        setPendingConfirm(true);
        
        // Reset pending state after 30 seconds
        setTimeout(() => {
            setPendingConfirm(false);
        }, 30000);
    }
  };

  return (
    <Link to="/listings/$id" params={{ id }} className="block h-full group">
      <div className="h-full border border-border shadow-sm hover:shadow-md transition-all rounded-lg bg-card text-card-foreground p-3 flex flex-col gap-3.5">
        <div className="px-0">
          <div className="flex justify-between items-start gap-3">
             <h3 className="font-semibold text-sm leading-tight group-hover:underline decoration-1 underline-offset-4">{title}</h3>
             <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 font-normal bg-muted/50 text-muted-foreground border-border/50">
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
            {currency} {price} <span className="text-muted-foreground font-normal text-xs">/ night</span>
          </div>
          <Button 
            size="icon" 
            variant={pendingConfirm ? "destructive" : "secondary"} 
            className="h-8 w-8 rounded-full shrink-0 transition-all hover:bg-primary hover:text-primary-foreground"
            onClick={handleQuickAdd}
            title="Quick Add to Cart"
          >
             {pendingConfirm ? <ShoppingCart className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Link>
  );
}
