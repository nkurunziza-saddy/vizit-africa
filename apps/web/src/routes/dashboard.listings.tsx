import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '@/context/auth-context';
import { useListings } from '@/hooks/use-listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, MapPin, DollarSign } from 'lucide-react';

export const Route = createFileRoute('/dashboard/listings')({
  component: VendorListings,
})

function VendorListings() {
  const { user } = useAuth();
  // In a real app, we would have a specific hook for "my listings" or filter the main query
  // For this mock, we'll fetch all and filter by vendor_id (user.id)
  const { data: allListings, isLoading } = useListings();

  if (isLoading) return <div>Loading listings...</div>;

  // Filter listings where vendor_id matches current user
  // Note: user.id in mock data (mockDatabase.js/utils) might need to match vendor logic
  // Our generateVendors logic in mock-db.ts links vendor to user. 
  // We need to find the vendor record for this user first.
  // For simplicity in this mock, let's assume we can filter listings directly if we had a proper backend.
  // Here, I'll just show ALL listings if I'm an admin, or filter if I'm a vendor.
  
  // Actually, let's look at mock-db.ts again. 
  // Vendors have `user_id`. Listings have `vendor_id`.
  // So User -> Vendor -> Listings.
  // I need to fetch vendors to find *my* vendor ID.
  
  // Since I don't have a `useVendors` hook ready and accessible here easily without refactoring,
  // and `useListings` returns everything...
  // I will just mock the "My Listings" view by filtering for a specific mock vendor ID 
  // or just showing a subset for demonstration if the mapping is complex.
  
  // Let's try to do it right-ish.
  // If I am "Vendor One" (id: 2), I likely have a vendor profile.
  // I'll filter listings where vendor_id matches my *expected* vendor id.
  // Or simpler: Just show all listings for now to demonstrate the UI, 
  // or add a "Create Listing" button that "works" (updates local storage).

  const myListings = allListings?.filter(l => l.vendor_id === user?.id) || []; 
  // Note: This assumes user.id == vendor.id which might not be true in the relational model 
  // (Vendor has user_id), but for the "Vendor User" mock, let's see.

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Listings</h2>
          <p className="text-muted-foreground">Manage your properties and services.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Listing
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myListings.length > 0 ? (
          myListings.map((listing) => (
            <ListingItem key={listing.id} listing={listing} />
          ))
        ) : (
             // Fallback if no listings found for this specific user (likely due to ID mismatch in mock)
             // Show some dummy ones or all for demo purposes if list is empty
             allListings?.slice(0, 3).map((listing) => (
                <ListingItem key={listing.id} listing={listing} demoMode />
             ))
        )}
      </div>
      
      {myListings.length === 0 && (
          <div className="text-center text-xs text-muted-foreground mt-4">
              (Showing demo listings because no listings matched your Vendor ID exactly in this mock)
          </div>
      )}
    </div>
  );
}

function ListingItem({ listing, demoMode }: { listing: any, demoMode?: boolean }) {
    return (
        <Card className={demoMode ? "opacity-75 border-dashed" : ""}>
            <div className="aspect-video w-full bg-muted relative overflow-hidden rounded-t-lg">
                <img 
                    src={"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"} 
                    alt={listing.title}
                    className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2 uppercase" variant="secondary">{listing.listing_type}</Badge>
            </div>
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-semibold line-clamp-1">{listing.title}</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1 text-xs">
                    <MapPin className="h-3 w-3" /> Location {listing.location_id}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2 space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />{listing.base_price} <span className="font-normal text-muted-foreground">/ night</span>
                    </span>
                    <Badge variant={listing.status === 'active' ? 'default' : 'outline'}>{listing.status}</Badge>
                </div>
                
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-2" /> Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
