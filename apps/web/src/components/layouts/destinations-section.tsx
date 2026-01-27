import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const DestinationsSection = () => {
  const destinations = [
    { name: "Kigali", count: 156, href: "/listings", search: { search: "kigali" } },
    { name: "Lake Kivu", count: 89, href: "/listings", search: { search: "kivu" } },
    { name: "Volcanoes National Park", count: 45, href: "/listings", search: { search: "volcanoes" } },
  ];

  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Destinations</h2>
              <p className="text-muted-foreground text-sm max-w-xl">
                 Explore Rwanda's most sought-after locations.
              </p>
            </div>
                         <Link to="/listings" search={{ category: undefined, search: undefined }}>               <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  View map <ArrowRight className="h-4 w-4" />
               </span>
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {destinations.map((destination) => (
             <Link key={destination.name} to={destination.href} search={destination.search} className="group block focus:outline-none">
               <div className="p-3 rounded-lg hover:shadow-md transition-all border border-border bg-card hover:border-primary/50">
                  <h3 className="font-medium text-base mb-0.5 group-hover:underline decoration-1 underline-offset-4">{destination.name}</h3>
                  <p className="text-xs text-muted-foreground">{destination.count} Listings</p>
               </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
