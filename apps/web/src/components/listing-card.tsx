import { Link } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
}: ListingCardProps) {
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
        <div className="">
          <div className="text-sm font-medium">
            {currency} {price} <span className="text-muted-foreground font-normal text-xs">/ night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
