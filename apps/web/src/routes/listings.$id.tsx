import { createFileRoute, Link, useParams, useRouter } from '@tanstack/react-router'
import {
  Star,
  MapPin,
  ArrowLeft,
  CalendarIcon,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from '@/components/layouts/page-wrapper';
import { useListing } from '@/hooks/use-listings';
import { useAuth } from '@/context/auth-context';
import { useCreateBooking } from '@/hooks/use-bookings';
import { useState } from 'react';
import { DateRange } from "react-day-picker";
import { addDays, format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

export const Route = createFileRoute('/listings/$id')({
  component: ListingDetail,
})

function ListingDetail() {
  const { id } = useParams({ from: '/listings/$id' });
  const router = useRouter();
  const { data, isLoading: isListingLoading } = useListing(parseInt(id));
  const { user, isAuthenticated } = useAuth();
  const { mutateAsync: createBooking, isPending: isBookingLoading } = useCreateBooking();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  if (isListingLoading || !data) {
     return (
        <PageWrapper>
           <div className="h-96 flex items-center justify-center">Loading...</div>
        </PageWrapper>
     )
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
            search={{ category: undefined, search: undefined }}
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
                         <div className="grid gap-2">
                            <Popover>
                              <PopoverTrigger className={cn(
                                    "w-full justify-start text-left font-normal flex items-center px-3 py-2 rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
                                    !date && "text-muted-foreground"
                                  )}>
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date?.from ? (
                                    date.to ? (
                                      <>
                                        {format(date.from, "LLL dd, y")} -{" "}
                                        {format(date.to, "LLL dd, y")}
                                      </>
                                    ) : (
                                      format(date.from, "LLL dd, y")
                                    )
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
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
                         </div>
                         
                         <Button 
                            className="w-full" 
                            size="lg" 
                            onClick={handleReserve}
                            disabled={isBookingLoading}
                         >
                            {isBookingLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Reserve
                         </Button>
                         <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <span>You won't be charged yet</span>
                         </div>
                         
                         {date?.from && date?.to && (
                            <div className="pt-4 border-t border-border/50 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="underline">${listing.base_price} x {differenceInDays(date.to, date.from)} nights</span>
                                    <span>${listing.base_price * differenceInDays(date.to, date.from)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="underline">Service fee</span>
                                    <span>$0</span>
                                </div>
                                <div className="flex justify-between font-semibold pt-2 border-t border-border/50">
                                    <span>Total</span>
                                    <span>${listing.base_price * differenceInDays(date.to, date.from)}</span>
                                </div>
                            </div>
                         )}
                     </CardContent>
                  </Card>
                </div>
             </div>
          </div>
      </PageWrapper>
    </div>
  );
};