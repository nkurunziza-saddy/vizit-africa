import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  listingsCount: number;
  image: string;
  href: string;
  search?: Record<string, unknown>;
}

export const DestinationCard = ({ name, listingsCount, image, href, search }: DestinationCardProps) => {
  return (
    <Link to={href} search={search} className="block h-full">
      <Card className="h-full overflow-hidden hover:bg-muted/50 transition-colors py-0">
        <div className="aspect-[4/3] w-full relative bg-muted">
           <img
             src={image}
             alt={name}
             className="w-full h-full object-cover"
             loading="lazy"
           />
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{name}</h3>
              <div className="flex items-center gap-1 text-sm opacity-90">
                 <MapPin className="h-3 w-3" />
                 {listingsCount} listings
              </div>
           </div>
        </div>
      </Card>
    </Link>
  );
};

export default DestinationCard;
