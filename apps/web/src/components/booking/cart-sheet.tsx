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
import { useAuth } from "@/context/auth-context";
import { useNavigate } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";

export function CartSheet() {
  const { cart, openCart, setOpenCart, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCheckout = () => {
      setOpenCart(false);
      if (isAuthenticated) {
          navigate({ to: '/checkout' });
      } else {
          toast.info("Please login to continue checkout");
          navigate({ to: '/login', search: { redirect: '/checkout' } });
      }
  };

  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetContent className="flex flex-col h-full sm:max-w-md w-full">
        <SheetHeader>
          <SheetTitle>Your Trip</SheetTitle>
          <SheetDescription>
            {cart.length > 0 
                ? `You have ${cart.length} item${cart.length === 1 ? '' : 's'} in your cart.` 
                : "Your cart is empty."}
          </SheetDescription>
        </SheetHeader>

        {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
                <p>Start exploring to add your next adventure!</p>
                <Button variant="outline" onClick={() => setOpenCart(false)}>
                    Browse Listings
                </Button>
            </div>
        ) : (
            <ScrollArea className="flex-1 -mx-6 px-6 my-4">
                <div className="space-y-8 overflow-x-auto px-1 pb-2">
                    {cart.map((item) => {
                         const nights = item.dateRange.from && item.dateRange.to
                            ? differenceInDays(item.dateRange.to, item.dateRange.from)
                            : 0;
                        const itemTotal = (() => {
                            if (nights < 1) return 0;
                            const base = item.listing.base_price * nights;
                            const addons = item.selectedAddons.reduce((acc, curr) => {
                                 const multiplier = curr.addon.price_type === 'per_night' ? nights : 1;
                                 return acc + (curr.addon.price * curr.quantity * multiplier);
                            }, 0);
                            return base + addons;
                        })();

                        return (
                            <div key={item.id} className="space-y-4">
                                <div className="flex gap-4 relative">
                                    <div className="h-20 w-20 rounded-md bg-muted overflow-hidden flex-shrink-0">
                                         {/* Placeholder for image */}
                                         <div className="w-full h-full bg-gray-200" /> 
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-semibold text-sm line-clamp-2 pr-6">{item.listing.title}</h4>
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                className="h-6 w-6 text-muted-foreground hover:text-destructive absolute top-0 right-0"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {item.listing.listing_type} in Location {item.listing.location_id}
                                        </p>
                                        <div className="text-xs text-muted-foreground mt-1">
                                            {item.dateRange.from && format(item.dateRange.from, "MMM d")} - {item.dateRange.to && format(item.dateRange.to, "MMM d, yyyy")}
                                             <span className="ml-2">• {nights} nights</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item Breakdown */}
                                <div className="bg-muted/30 p-3 rounded-md text-xs space-y-1">
                                     <div className="flex justify-between">
                                        <span>Base ({nights} nights)</span>
                                        <span>${item.listing.base_price * nights}</span>
                                     </div>
                                     {item.selectedAddons.map((addonItem) => (
                                         <div key={addonItem.addon.id} className="flex justify-between text-muted-foreground">
                                             <span>+ {addonItem.addon.name} (x{addonItem.quantity})</span>
                                             <span>${addonItem.addon.price * addonItem.quantity * (addonItem.addon.price_type === 'per_night' ? nights : 1)}</span>
                                         </div>
                                     ))}
                                     <Separator className="my-2"/>
                                     <div className="flex justify-between font-medium">
                                         <span>Subtotal</span>
                                         <span>${itemTotal}</span>
                                     </div>
                                </div>
                                <Separator />
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>
        )}

        {cart.length > 0 && (
            <SheetFooter className="mt-auto border-t pt-4">
                <div className="w-full space-y-3">
                    <div className="flex justify-between items-center text-base font-semibold">
                        <span>Total Estimate</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Button className="w-full" size="lg" onClick={handleCheckout}>
                            Proceed to Checkout
                        </Button>
                        <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={() => {
                                setOpenCart(false);
                                navigate({ to: '/cart' });
                            }}
                        >
                            View & Edit Cart
                        </Button>
                    </div>
                </div>
            </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
