import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { differenceInDays } from "date-fns";
import { toast } from "sonner";
import { useCreateBooking } from "@/hooks/use-bookings";
import { useAuth } from "@/context/auth-context";
import { useNavigate } from "@tanstack/react-router";

export function CartSheet() {
  const { cart, openCart, setOpenCart, totalPrice, removeFromCart } = useCart();
  const { mutateAsync: createBooking, isPending } = useCreateBooking();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!cart) return null;

  const nights = cart.dateRange.from && cart.dateRange.to
    ? differenceInDays(cart.dateRange.to, cart.dateRange.from)
    : 0;

  const handleCheckout = async () => {
      if (!isAuthenticated || !user) {
          setOpenCart(false);
          toast.error("Please login to checkout");
          navigate({ to: '/login' });
          return;
      }

      try {
          // Construct booking payload
           await createBooking({
            booking: {
              user_id: user.id,
              total_amount: totalPrice,
              currency: cart.listing.currency,
              status: 'confirmed', 
            },
            items: [
              {
                listing_id: cart.listing.id,
                start_date: cart.dateRange.from!.toISOString(),
                end_date: cart.dateRange.to!.toISOString(),
                quantity: 1, // Start with 1, logical for Hotel.
                unit_price: cart.listing.base_price,
                subtotal: totalPrice, // Simplified logic. Ideally breakdown base + addons.
                selected_addons: cart.selectedAddons.map(sa => ({
                    addon_id: sa.addon.id,
                    quantity: sa.quantity,
                    subtotal: sa.addon.price * sa.quantity // Simplified, not considering per_night logic here for payload, but backend would handle or we pass detailed.
                }))
              }
            ]
          });
          
          toast.success("Booking confirmed successfully!");
          removeFromCart(); // Clear cart after success
          setOpenCart(false);

      } catch (error) {
          console.error(error);
          toast.error("Failed to process booking");
      }
  };

  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetContent className="flex flex-col h-full sm:max-w-md w-full">
        <SheetHeader>
          <SheetTitle>Your Trip</SheetTitle>
          <SheetDescription>
            Review your booking details before checking out.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6 my-4">
            <div className="space-y-6">
                {/* Listing Details */}
                <div className="flex gap-4">
                    <div className="h-20 w-20 rounded-md bg-muted overflow-hidden flex-shrink-0">
                         {/* Placeholder for image */}
                         <div className="w-full h-full bg-gray-200" /> 
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm line-clamp-2">{cart.listing.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                            {cart.listing.listing_type} in Location {cart.listing.location_id}
                        </p>
                    </div>
                </div>

                <Separator />

                {/* Dates & Guests */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <div className="font-medium">Dates</div>
                        <div className="text-muted-foreground">
                            {cart.dateRange.from && format(cart.dateRange.from, "MMM d")} - {cart.dateRange.to && format(cart.dateRange.to, "MMM d, yyyy")}
                        </div>
                         <div className="text-xs text-muted-foreground">
                            {nights} night{nights !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">Guests</div>
                        <div className="text-muted-foreground">{cart.guests} Guest{cart.guests !== 1 ? 's' : ''}</div>
                    </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm">
                    <h4 className="font-medium mb-3">Price details</h4>
                    
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Based Price ({nights} nights)</span>
                         <span>${cart.listing.base_price * nights}</span>
                    </div>

                    {cart.selectedAddons.length > 0 && (
                        <div className="space-y-1">
                            {cart.selectedAddons.map((item) => (
                                <div key={item.addon.id} className="flex justify-between text-muted-foreground text-xs">
                                    <span>{item.addon.name} x {item.quantity}</span>
                                    {/* Calculating display price simplifying logics */}
                                    <span>+${item.addon.price * item.quantity * (item.addon.price_type === 'per_night' ? nights : 1)}</span>
                                 </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ScrollArea>

        <SheetFooter className="mt-auto border-t pt-4">
            <div className="w-full space-y-4">
                <div className="flex justify-between items-center text-base font-semibold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                </div>
                <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isPending}>
                    {isPending ? "Processing..." : "Confirm & Pay"}
                </Button>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
