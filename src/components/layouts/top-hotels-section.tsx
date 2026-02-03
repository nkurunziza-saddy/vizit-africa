import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section";
import { Link } from "@tanstack/react-router";

const hotels = [
  {
    location: "Musanze",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    count: 12,
  },
  {
    location: "Rubavu",
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=1000",
    count: 8,
  },
  {
    location: "Kigali",
    image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?auto=format&fit=crop&q=80&w=1000",
    count: 24,
  },
];

export default function TopHotelsSection() {
  return (
    <SectionContainer
      title="Top Selling Hotels"
      description="The top viewed hotels in top Destinations"
      align="start"
      className="py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {hotels.map((hotel) => (
          <Link
            key={hotel.location}
            to="/listings"
            search={{ location: hotel.location }}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={hotel.image}
              alt={`Hotels in ${hotel.location}`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6 text-white z-10">
              <span className="text-sm font-medium opacity-90 block mb-1">Hotels in</span>
              <h3 className="text-2xl font-bold">{hotel.location}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary/5 px-8 h-10 font-semibold">
          Search for Hotels
        </Button>
      </div>
    </SectionContainer>
  );
}
