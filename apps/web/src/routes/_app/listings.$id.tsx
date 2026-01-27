import { createFileRoute, Link, useParams, useRouter } from '@tanstack/react-router'
import {
  Star,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from '@/components/layouts/page-wrapper';
import { useListing } from '@/hooks/use-listings';
import { toast } from 'sonner';
import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';
import { useCreateBooking } from '@/hooks/use-bookings';
import { useAuth } from '@/context/auth-context';
import type { DateRange } from 'react-day-picker';

export const Route = createFileRoute('/_app/listings/$id')({
  component: ListingDetail,
})

function ListingDetail() {
  const { id } = useParams({ from: '/_app/listings/$id' });
  const router = useRouter();
  const { data, isLoading: isListingLoading } = useListing(parseInt(id));
    const { user, isAuthenticated } = useAuth();
  const { mutateAsync: createBooking, isPending: isBookingLoading } = useCreateBooking();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  if (isListingLoading || !data) {
     return <div>Loading...</div>
  }

  const { listing } = data;
  
  const handleReserve = async () => {
    if (!isAuthenticated || !user) {
      toast.error("Please login to book a listing");
      router.navigate({ to: '/login' });
      return;
    }

    if (!date?.from || !date?.to) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    const nights = differenceInDays(date.to, date.from);
    if (nights < 1) {
        toast.error("Minimum stay is 1 night");
        return;
    }

    const totalAmount = nights * listing.base_price;

    try {
      await createBooking({
        booking: {
          user_id: user.id,
          total_amount: totalAmount,
          currency: listing.currency,
          status: 'confirmed', // Auto-confirm for mock
        },
        items: [
          {
            listing_id: listing.id,
            start_date: date.from.toISOString(),
            end_date: date.to.toISOString(),
            quantity: 1,
            unit_price: listing.base_price,
            subtotal: totalAmount,
          }
        ]
      });

      toast.success("Booking confirmed! Check your email for the ticket.");
      // In a real app, we might redirect to a success page or bookings list
      // router.navigate({ to: '/bookings' }); 
    } catch (error) {
      toast.error("Failed to create booking");
      console.error(error);
    }
  };




  return (
    <div className="min-h-screen bg-background flex flex-col">

      <PageWrapper className="flex-1">
          <Link
            to="/listings"
            search={{ category: undefined, search: undefined, sortBy: undefined, priceRange: undefined, amenities: undefined, from: undefined, checkIn: undefined, checkOut: undefined, guests: undefined, page: undefined }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-3 w-3" /> {listing.location_id}
                            </span>
                            <span>•</span>
                             <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-foreground text-foreground" />
                                <span className="font-semibold text-foreground">4.8</span>
                                <span>(12)</span>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{listing.title}</h1>
                    </div>
                </div>

                <div className="w-full h-px bg-border/50" />
                
                <div className="prose prose-gray prose-sm max-w-none">
                    <h3 className="text-lg font-semibold float-none mb-2 tracking-tight text-foreground">About</h3>
                    <p className="text-muted-foreground leading-bg">{listing.description}</p>
                </div>

                <div className="w-full h-px bg-border/50" />

                <div>
                   <h3 className="text-lg font-semibold mb-4 tracking-tight text-foreground">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Wifi", "Parking", "Pool", "Kitchen", "Air conditioning"].map((item) => (
                             <Badge key={item} variant="outline" className="px-2.5 py-1 text-xs font-normal border-border/50 text-muted-foreground">
                                {item}
                             </Badge>
                        ))}
                    </div>
                </div>
             </div>

             <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <Card className="shadow-none border border-border/50 bg-transparent">
                     <CardHeader className="pb-4 pt-6 px-6">
                         <CardTitle className="flex justify-between items-baseline">
                            <span className="text-xl font-bold">${listing.base_price} <span className="text-sm font-normal text-muted-foreground">/ night</span></span>
                         </CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-4 px-6 pb-6">
                         <div className="grid grid-cols-2 gap-2">
                            <Popover>
                                <PopoverTrigger>
                                    <div className="border border-border/50 rounded p-2 hover:border-border transition-colors cursor-pointer flex-1 cursor-pointer">
                                        <div className="text-[10px] uppercase font-medium text-muted-foreground mb-1">Check-in</div>
                                        <div className="text-sm">
                                            {date?.from ? format(date.from, "PPP") : "Select date"}
                                        </div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        defaultMonth={date?.from}
                                        selected={date}
                                        onSelect={setDate}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                            <Popover>
                                <PopoverTrigger>
                                    <div className="border border-border/50 rounded p-2 hover:border-border transition-colors cursor-pointer flex-1 cursor-pointer">
                                        <div className="text-[10px] uppercase font-medium text-muted-foreground mb-1">Check-out</div>
                                        <div className="text-sm">
                                            {date?.to ? format(date.to, "PPP") : "Select date"}
                                        </div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        defaultMonth={date?.to}
                                        selected={date}
                                        onSelect={setDate}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                         </div>
                         
                         <Button className="w-full" size="lg" onClick={handleReserve} disabled={isBookingLoading}>Reserve</Button>
                         <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <span>You won't be charged yet</span>
                         </div>
                     </CardContent>
                  </Card>
                </div>
             </div>
          </div>
      </PageWrapper>

 
    </div>
  );
};
