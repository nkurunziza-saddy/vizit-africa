import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, StarIcon, Filter } from "lucide-react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ListingCard from "@/components/listing-card";
import { PageWrapper } from "@/components/layouts/page-wrapper";
import { useListings } from "@/hooks/use-listings";
import { useDebounce } from "@/hooks/use-debounce";

export const Route = createFileRoute("/_app/listings/")({
  component: Listings,
  validateSearch: (search: Record<string, unknown>) => ({
    category: search.category as string | undefined,
    search: search.search as string | undefined,
    sortBy: search.sortBy as string | undefined,
    priceRange: search.priceRange as number[] | undefined,
    amenities: search.amenities as string[] | undefined,
    from: search.from as string | undefined,
    checkIn: search.checkIn as string | undefined,
    checkOut: search.checkOut as string | undefined,
    guests: search.guests as number | undefined,
    page: search.page as number | undefined,
  }),
});

const categories = [
  { value: "all", label: "All Categories" },
  { value: "hotel", label: "Hotels" },
  { value: "bnb", label: "BnBs" },
  { value: "car", label: "Car Rentals" },
  { value: "tour", label: "Tours" },
];

interface FilterContentProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
}

const FilterContent = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setCategory,
  priceRange,
  setPriceRange,
  clearFilters,
}: FilterContentProps) => (
  <div className="space-y-8">
    <div>
      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
        Search
      </h3>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Where to?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-10 shadow-sm"
        />
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
        Categories
      </h3>
      <div className="grid grid-cols-1 gap-1">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`flex items-center text-sm w-full text-left px-3 py-2 rounded-lg transition-all ${selectedCategory === cat.value ? "bg-primary text-primary-foreground font-medium shadow-md" : "text-muted-foreground hover:bg-muted"}`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
        Price Range
      </h3>
      <div className="px-2">
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as number[])}
          className="mb-4"
        />
        <div className="flex justify-between text-xs font-medium text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
        Rating
      </h3>
      <div className="space-y-3">
        {[5, 4, 3].map((star) => (
          <label
            key={star}
            className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer group"
          >
            <input
              type="checkbox"
              className="rounded-sm border-muted-foreground/30 text-primary focus:ring-primary"
            />
            <span className="flex items-center gap-1 group-hover:text-foreground transition-colors">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`size-3.5 ${i < star ? "fill-yellow-400 text-yellow-400" : "text-muted/30"}`}
                />
              ))}
              <span className="text-xs ml-1">& Up</span>
            </span>
          </label>
        ))}
      </div>
    </div>

    <Button
      variant="outline"
      className="w-full text-sm font-medium"
      onClick={clearFilters}
    >
      Reset All Filters
    </Button>
  </div>
);

function Listings() {
  const searchParams = useSearch({ from: "/_app/listings/" });
  const navigate = Route.useNavigate();

  const [localSearchQuery, setLocalSearchQuery] = useState(
    searchParams.search || "",
  );
  const debouncedSearchQuery = useDebounce(localSearchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery !== (searchParams.search || "")) {
      navigate({
        search: (prev) => ({
          ...prev,
          search: debouncedSearchQuery || undefined,
          page: 1,
        }),
      });
    }
  }, [debouncedSearchQuery, searchParams.search, navigate]);

  const selectedCategory = searchParams.category || "all";
  const priceRange = searchParams.priceRange || [0, 1000];
  const currentPage = searchParams.page || 1;

  const setCategory = (category: string) => {
    navigate({
      search: (prev) => ({ ...prev, category: category, page: 1 }),
    });
  };

  const setPriceRangeParam = (range: number[]) => {
    navigate({
      search: (prev) => ({ ...prev, priceRange: range, page: 1 }),
    });
  };

  const clearFilters = () => {
    setLocalSearchQuery("");
    navigate({
      search: (prev) => ({
        ...prev,
        category: undefined,
        search: undefined,
        priceRange: undefined,
        page: 1,
      }),
    });
  };

  const { data: listings, isLoading } = useListings();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const activeSearchQuery = (searchParams.search || "").toLowerCase();

  const filteredListings =
    listings?.filter((listing) => {
      const matchesCategory =
        selectedCategory === "all" ||
        listing.listing_type.includes(
          selectedCategory === "hotel" ? "hotel" : selectedCategory,
        );

      const matchesSearch =
        listing.title.toLowerCase().includes(activeSearchQuery) ||
        "location".toLowerCase().includes(activeSearchQuery);

      const matchesPrice =
        listing.base_price >= priceRange[0] &&
        listing.base_price <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    }) || [];

  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);

  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageWrapper>
        <div className="flex flex-col lg:flex-row gap-10 items-start pt-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-none space-y-8 sticky top-24">
            <FilterContent
              searchQuery={localSearchQuery}
              setSearchQuery={setLocalSearchQuery}
              selectedCategory={selectedCategory}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRangeParam}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="space-y-1">
                <h1 className="text-4xl font-extrabold tracking-tight">
                  Explore Rwanda
                </h1>
                <p className="text-muted-foreground">
                  Found {filteredListings.length} stays and experiences
                </p>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                {/* Mobile Filter Trigger */}
                <div className="lg:hidden flex-1">
                  <Sheet>
                    <SheetTrigger>
                      <Button
                        variant="outline"
                        className="w-full gap-2 font-semibold"
                      >
                        <Filter className="h-4 w-4" /> Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="left"
                      className="w-[300px] sm:w-[350px]"
                    >
                      <SheetHeader className="mb-6">
                        <SheetTitle className="text-left text-2xl font-bold">
                          Filters
                        </SheetTitle>
                      </SheetHeader>
                      <FilterContent
                        searchQuery={localSearchQuery}
                        setSearchQuery={setLocalSearchQuery}
                        selectedCategory={selectedCategory}
                        setCategory={setCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRangeParam}
                        clearFilters={clearFilters}
                      />
                    </SheetContent>
                  </Sheet>
                </div>

                <Select>
                  <SelectTrigger className="w-full md:w-[180px] h-10 font-medium">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price_low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price_high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  id={listing.id.toString()}
                  title={listing.title}
                  location={`Location ${listing.location_id}`}
                  price={listing.base_price}
                  rating={4.8}
                  reviewCount={12}
                  image={
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  }
                  category={
                    listing.listing_type.includes("hotel")
                      ? "hotel"
                      : listing.listing_type.includes("car")
                        ? "car"
                        : "tour"
                  }
                  listing={listing}
                />
              ))}
            </div>
            {filteredListings.length === 0 && (
              <div className="py-24 text-center space-y-4 bg-muted/10 rounded-2xl border-2 border-dashed border-muted/50">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold">No results found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms.
                  </p>
                </div>
                <Button
                  variant="link"
                  className="text-primary font-bold"
                  onClick={clearFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredListings.length > ITEMS_PER_PAGE && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigate({
                      search: (prev) => ({
                        ...prev,
                        page: Math.max(1, currentPage - 1),
                      }),
                    })
                  }
                  disabled={currentPage === 1}
                  className="rounded-full px-4"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => {
                    const p = i + 1;
                    return (
                      <Button
                        key={p}
                        variant={currentPage === p ? "default" : "ghost"}
                        size="sm"
                        className={`w-10 h-10 rounded-full font-bold ${currentPage === p ? "shadow-md" : ""}`}
                        onClick={() =>
                          navigate({ search: (prev) => ({ ...prev, page: p }) })
                        }
                      >
                        {p}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigate({
                      search: (prev) => ({
                        ...prev,
                        page: Math.min(totalPages, currentPage + 1),
                      }),
                    })
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-full px-4"
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
}
