import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { Search, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import ListingCard from '@/components/listing-card';
import { PageWrapper } from '@/components/layouts/page-wrapper';
import { useListings, useLocations } from '@/hooks/use-listings';
import { useDebounce } from "@/hooks/use-debounce";

export const Route = createFileRoute('/listings/')({
  component: Listings,
  validateSearch: (search: Record<string, unknown>) => ({
    category: search.category as string | undefined,
    search: search.search as string | undefined,
  }),
})

const categories = [
  { value: "all", label: "All Categories" },
  { value: "hotel", label: "Hotels" },
  { value: "bnb", label: "BnBs" },
  { value: "car", label: "Car Rentals" },
  { value: "tour", label: "Tours" },
];

function Listings(){
  const searchParams = useSearch({ from: '/listings/' });
  
  // Local state for UI controls
  const [searchQuery, setSearchQuery] = useState(searchParams.search || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.category || "all");
  const [priceRange, setPriceRange] = useState([10, 500]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Debounce search query to avoid too many fetches
  const debouncedSearch = useDebounce(searchQuery, 500);
  const debouncedPrice = useDebounce(priceRange, 500);

  // Fetch data using the hook with filters
  const { data: listings, isLoading } = useListings({
    category: selectedCategory,
    search: debouncedSearch,
    priceRange: [debouncedPrice[0], debouncedPrice[1]]
  });
  
  const { data: locations } = useLocations();

  const getLocationName = (id: number) => {
      const loc = locations?.find(l => l.id === id);
      return loc ? `${loc.name}, ${loc.country}` : `Location ${id}`;
  };

  const ITEMS_PER_PAGE = 9;
  const filteredListings = listings || [];
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
  
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, debouncedSearch, debouncedPrice]);


  return (
    <div className="min-h-screen bg-background">
      <PageWrapper>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
       
            <aside className="w-full lg:w-64 flex-none space-y-8 sticky top-24">
               <div>
                  <h3 className="font-semibold mb-4">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 h-9"
                    />
                  </div>
               </div>

               <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                     {categories.map((cat) => (
                        <button
                        type='button'
                           key={cat.value}
                           onClick={() => setSelectedCategory(cat.value)}
                           className={`block text-sm w-full text-left px-2 py-1.5 rounded-md transition-colors ${selectedCategory === cat.value ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}
                        >
                           {cat.label}
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                 <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="px-2 space-y-4">
                     <Slider
                        defaultValue={[10, 500]}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={(val: number | readonly number[]) => setPriceRange(val as number[])}
                     />
                     <div className="flex justify-between text-xs text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                     </div>
                  </div>
               </div>

               <div>
                 <h3 className="font-semibold mb-4">Rating</h3>
                 <div className="space-y-2">
                    {[5, 4, 3].map((star) => (
                      <div key={star} className="flex items-center gap-2 text-sm text-muted-foreground">
                         <input type="checkbox" className="rounded border-gray-300" />
                         <span className="flex items-center gap-1">
                           {[...Array(star)].map((_, i) => <span key={i} className="text-yellow-400">
                            <StarIcon className='size-4'/>
                           </span>)}
                           <span className="text-xs">& Up</span>
                         </span>
                      </div>
                    ))}
                 </div>
               </div>
               
               <Button variant="outline" className="w-full text-xs h-8" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setPriceRange([10, 500]); }}>
                   Clear Filters
               </Button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full pt-6">
              <div className="mb-6 flex justify-between items-end">
                 <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1">Explore Listings</h1>
                    <p className="text-muted-foreground text-sm">
                       {isLoading ? "Loading..." : `Showing ${paginatedListings.length} of ${filteredListings.length} results`}
                    </p>
                 </div>
                 {/* Sort Option (minimal) */}
                 <Select>
                    <SelectTrigger className="w-[140px] h-8 text-xs">
                       <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                       <SelectItem value="popular">Most Popular</SelectItem>
                       <SelectItem value="newest">Newest</SelectItem>
                       <SelectItem value="price_low">Price: Low to High</SelectItem>
                    </SelectContent>
                 </Select>
              </div>

              {isLoading ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" />
                    ))}
                 </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {paginatedListings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        id={listing.id.toString()}
                        title={listing.title}
                        location={getLocationName(listing.location_id)}
                        price={listing.base_price}
                        rating={4.8} // Mock
                        reviewCount={12} // Mock
                        image={"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"}
                        category={listing.listing_type.includes('hotel') ? 'hotel' : 'bnb'}
                    />
                    ))}
                </div>
              )}
              
              {!isLoading && filteredListings.length === 0 && (
               <div className="py-12 text-center text-muted-foreground bg-muted/10 rounded-lg border border-dashed">
                  <p>No listings found matching your criteria.</p>
                  <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>Clear filters</Button>
               </div>
              )}
            
            {/* Pagination */}
            {!isLoading && filteredListings.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let p = i + 1;
                      return (
                        <Button
                          key={p}
                          variant={currentPage === p ? "default" : "ghost"}
                          size="sm"
                          className="w-8 h-8 p-0"
                          onClick={() => setCurrentPage(p)}
                        >
                          {p}
                        </Button>
                      )
                  })}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
            </main>
          </div>
      </PageWrapper>
 
    </div>
  );
};
