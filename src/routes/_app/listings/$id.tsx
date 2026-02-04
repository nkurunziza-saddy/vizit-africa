import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  Star,
  MapPin,
  ExternalLink,
  Bed,
  Utensils,
  Wifi,
  Car,
  Waves,
} from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { useListing } from "@/hooks/use-listings";
import { toast } from "sonner";
import { addDays, differenceInDays } from "date-fns";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { AddonSelector } from "@/components/booking/addon-selector";
import type { DateRange } from "react-day-picker";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/_app/listings/$id")({
  component: ListingDetail,
});

function ListingDetail() {
  const { id } = useParams({ from: "/_app/listings/$id" });
  const { data, isLoading: isListingLoading } = useListing(parseInt(id));
  const { addToCart } = useCart();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  const [selectedAddons, setSelectedAddons] = useState<
    { addon: any; quantity: number }[]
  >([]);

  if (isListingLoading || !data) {
    return <ListingSkeleton />;
  }

  const { listing } = data;

  const nights =
    date?.from && date?.to ? differenceInDays(date.to, date.from) : 0;

  const handleBookClick = () => {
    if (!date?.from || !date?.to) {
      toast.error("Please select dates first");
      return;
    }
    addToCart({
      listing,
      image: listing.imageUrl || "https://placehold.co/600x400",
      dateRange: date,
      guests: 1,
      selectedAddons: selectedAddons,
    });
  };

  const amenities = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Utensils, label: "Morning Breakfast" },
    { icon: Wifi, label: "Free Wifi" },
    { icon: Bed, label: "Indoor Gym" },
    { icon: Car, label: "Balcony" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <PageWrapper className="flex-1 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {listing.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>
                {listing.locationId}, {listing.city || "Rwanda"}
              </span>
              <span className="text-primary font-medium cursor-pointer hover:underline ml-2">
                See The location on Map
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            Book Stay <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="md:col-span-1 h-full relative group overflow-hidden rounded-xl">
                <img
                  src={
                    listing.imageUrl ||
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                    alt="Room view"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
                    alt="Amenities"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white/90 border-none hover:bg-white text-black font-medium"
                    >
                      21+ Photos
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-background hover:bg-accent/50 transition-colors"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">
                About this property
              </h2>
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">
                    Spacious Accommodation:
                  </strong>{" "}
                  {listing.description ||
                    "Experience comfort and luxury in our spacious rooms designed for your relaxation."}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">
                    Exceptional Facilities:
                  </strong>{" "}
                  Guests enjoy access to premium amenities including fine
                  dining, wellness centers, and tailored services to make your
                  stay memorable.
                </p>
              </div>
            </div>

            {listing.addons && listing.addons.length > 0 && (
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  Enhance your trip
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.addons.map((addon) => (
                    <AddonSelector
                      key={addon.id}
                      addon={addon}
                      onSelect={(qty) => {
                        setSelectedAddons((prev) => {
                          const existing = prev.findIndex(
                            (p) => p.addon.id === addon.id,
                          );
                          if (qty <= 0)
                            return prev.filter((p) => p.addon.id !== addon.id);
                          if (existing > -1) {
                            const newArr = [...prev];
                            newArr[existing].quantity = qty;
                            return newArr;
                          }
                          return [...prev, { addon, quantity: qty }];
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-primary">
                      {listing.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Northern Province, Musanze
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-primary">
                      ${listing.basePrice}
                    </span>
                    <div className="flex gap-1 text-yellow-400 text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary hover:bg-primary/90">8.5</Badge>
                  <span className="text-xs text-muted-foreground">
                    500 Reviews
                  </span>
                </div>

                <p className="text-xs text-muted-foreground italic mb-4 border-l-2 pl-3 border-primary">
                  "This is one of the best hotels I've been in since I landed in
                  Rwanda"
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
                      alt="User"
                    />
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    Mark Stanley
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label className="text-[10px] font-semibold text-muted-foreground uppercase">
                        Check-in
                      </Label>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start text-xs h-9"
                            />
                          }
                        >
                          {date?.from ? format(date.from, "MMM dd") : "Select"}
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="range"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[10px] font-semibold text-muted-foreground uppercase">
                        Check-out
                      </Label>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start text-xs h-9"
                            />
                          }
                        >
                          {date?.to ? format(date.to, "MMM dd") : "Select"}
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="range"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleBookClick}
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden h-48 relative border shadow-sm group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                alt="Map"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-2 shadow-lg animate-bounce">
                  <MapPin className="h-6 w-6 text-red-500 fill-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

function ListingSkeleton() {
  return (
    <PageWrapper className="py-8">
      <div className="space-y-6">
        <Skeleton className="h-8 w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
          <Skeleton className="h-full rounded-xl" />
          <div className="grid grid-rows-2 gap-4">
            <Skeleton className="h-full rounded-xl" />
            <Skeleton className="h-full rounded-xl" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
