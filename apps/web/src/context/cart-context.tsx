import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Listing, Addon } from '@/utils/mock-db';
import { DateRange } from 'react-day-picker';
import { differenceInDays } from 'date-fns';

export type CartItem = {
  listing: Listing;
  dateRange: DateRange;
  guests: number;
  selectedAddons: {
    addon: Addon;
    quantity: number;
  }[];
};

interface CartContextType {
  cart: CartItem | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: () => void;
  updateGuests: (count: number) => void;
  updateAddon: (addon: Addon, quantity: number) => void;
  totalPrice: number;
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem | null>(null);
  const [openCart, setOpenCart] = useState(false);

  // Load from local storage on mount (optional, for persistence)
  useEffect(() => {
     const storedCart = localStorage.getItem('vizit_cart');
     if (storedCart) {
         try {
             // We need to parse dates back to Date objects
             const parsed = JSON.parse(storedCart);
             if (parsed && parsed.dateRange && parsed.listing) {
                 parsed.dateRange.from = new Date(parsed.dateRange.from);
                 parsed.dateRange.to = new Date(parsed.dateRange.to);
                 setCart(parsed);
             } else {
                 console.warn("Invalid cart data found in localStorage, clearing.");
                 localStorage.removeItem('vizit_cart');
             }
         } catch (e) {
             console.error("Failed to restore cart", e);
         }
     }
  }, []);

  // Save to local storage on change
  useEffect(() => {
      if (cart) {
          localStorage.setItem('vizit_cart', JSON.stringify(cart));
      } else {
          localStorage.removeItem('vizit_cart');
      }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(item);
    setOpenCart(true);
  };

  const removeFromCart = () => {
    setCart(null);
    setOpenCart(false);
  };

  const updateGuests = (count: number) => {
    if (!cart) return;
    setCart({ ...cart, guests: count });
  };

  const updateAddon = (addon: Addon, quantity: number) => {
      if (!cart) return;
      
      const currentAddons = [...cart.selectedAddons];
      const existingIndexer = currentAddons.findIndex(a => a.addon.id === addon.id);

      if (quantity <= 0) {
          if (existingIndexer > -1) {
              currentAddons.splice(existingIndexer, 1);
          }
      } else {
          if (existingIndexer > -1) {
              currentAddons[existingIndexer].quantity = quantity;
          } else {
              currentAddons.push({ addon, quantity });
          }
      }
      
      setCart({ ...cart, selectedAddons: currentAddons });
  };

  const totalPrice = cart ? (() => {
      const nights = cart.dateRange.from && cart.dateRange.to 
          ? differenceInDays(cart.dateRange.to, cart.dateRange.from) 
          : 0;
      
      if (nights < 1) return 0;

      const baseTotal = (cart.listing?.base_price || 0) * nights;
      // NOTE: ListingCard says "/ night", so base_price * nights is correct. 
      // What about guests? Usually rooms have base price. Tours might be per person.
      // For this MVP let's assume Hotel style: Price is per room/night.
      
      let addonsTotal = 0;
      cart.selectedAddons.forEach(item => {
          let itemCost = 0;
          if (item.addon.price_type === 'per_person') {
              itemCost = item.addon.price * cart.guests * item.quantity; // Quantity usually 1 for boolean addons, but if it allows multiple...
              // Actually "quantity" in selectedAddons might be better as just "selected" boolean if mapped to person?
              // Let's assume quantity is "count of this addon".
              // If price is per person, we might just multiply by guests?
              // Or maybe quantity IS the number of people taking it?
              // Let's stick to: Price * Quantity. If per_person, user should select quantity = guests.
              // BUT for UX, if per_person, we usually auto-calc.
              // Let's simplify:
              // If per_person: price * quantity (quantity must be set by user, maybe defaulted to 1) 
              // Wait, if it is "Breakfast (Per Person)", quantity 2 means 2 people.
              itemCost = item.addon.price * item.quantity;
          } else if (item.addon.price_type === 'per_night') {
              itemCost = item.addon.price * nights * item.quantity;
          } else { // per_stay
              itemCost = item.addon.price * item.quantity;
          }
          addonsTotal += itemCost;
      });

      return baseTotal + addonsTotal;
  })() : 0;


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateGuests, updateAddon, totalPrice, openCart, setOpenCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
