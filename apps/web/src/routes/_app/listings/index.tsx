import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, Filter, X, MapPin, Sparkles } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/landing/section-title";

import ListingCard from "@/components/listing-card";
import { useListings } from "@/hooks/use-listings";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  priceRange: z.array(z.number()).optional(),
  amenities: z.array(z.string()).optional(),
  from: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.number().optional(),
  page: z.number().optional(),
});

export const Route = createFileRoute("/_app/listings/")({
  component: Listings,
  validateSearch: (search) => searchSchema.parse(search),
});

const categories = [
  { value: "all", label: "All", icon: Sparkles },
  { value: "hotel", label: "Hotels", icon: MapPin },
  { value: "bnb", label: "BnBs", icon: MapPin },
  { value: "car", label: "Car Rentals", icon: MapPin },
  { value: "tour", label: "Tours", icon: MapPin },
];

const priceRanges = [
  { label: "Budget", range: [0, 100] },
  { label: "Mid-range", range: [100, 300] },
  { label: "Luxury", range: [300, 1000] },
];

interface FilterContentProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

// Filter Content Component
const FilterContent = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setCategory,
  priceRange,
  setPriceRange,
  clearFilters,
  hasActiveFilters,
}: FilterContentProps) => (
  <div className="space-y-8">
    <div className="space-y-3">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
        Search
      </h3>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          placeholder="SEARCH DESTINATIONS..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-9 bg-white border-border focus-visible:ring-1 focus-visible:ring-primary rounded shadow-none text-xs placeholder:text-[10px] placeholder:uppercase tracking-wide"
        />
      </div>
    </div>

    <div className="space-y-3">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
        Categories
      </h3>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={cn(
              "flex items-center justify-between w-full text-left group transition-colors",
              selectedCategory === cat.value
                ? "text-primary"
                : "text-foreground hover:text-primary",
            )}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              {cat.label}
            </span>
            <div
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                selectedCategory === cat.value
                  ? "bg-primary"
                  : "bg-border group-hover:bg-primary/50",
              )}
            />
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-3">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
        Budget
      </h3>
      <div className="flex flex-col gap-2">
        {priceRanges.map((preset) => (
          <button
            type="button"
            key={preset.label}
            onClick={() => setPriceRange(preset.range)}
            className={cn(
              "flex items-center justify-between w-full text-left group transition-colors",
              priceRange[0] === preset.range[0] &&
                priceRange[1] === preset.range[1]
                ? "text-primary"
                : "text-foreground hover:text-primary",
            )}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              {preset.label}
            </span>
            <div
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                priceRange[0] === preset.range[0] &&
                  priceRange[1] === preset.range[1]
                  ? "bg-primary"
                  : "bg-border group-hover:bg-primary/50",
              )}
            />
          </button>
        ))}
      </div>
    </div>

    <div className="space-y-3">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
        Price Range
      </h3>
      <div className="pt-2 pb-2">
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as number[])}
          className="mb-4"
        />
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold text-foreground bg-muted px-2 py-1 rounded">
            ${priceRange[0]}
          </div>
          <div className="h-px w-4 bg-border" />
          <div className="text-[10px] font-bold text-foreground bg-muted px-2 py-1 rounded">
            ${priceRange[1]}+
          </div>
        </div>
      </div>
    </div>

    {hasActiveFilters && (
      <Button
        variant="outline"
        className="w-full gap-2 h-8 rounded border-border text-foreground hover:bg-foreground hover:text-white uppercase tracking-widest text-[10px] font-bold mt-4"
        onClick={clearFilters}
      >
        <X className="h-3 w-3" />
        Clear All Filters
      </Button>
    )}
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

  const hasActiveFilters =
    selectedCategory !== "all" ||
    localSearchQuery !== "" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 1000;

  const clearFilters = () => {
    setLocalSearchQuery("");
    navigate({
      search: (prev) => ({
        ...prev,
        page: 1,
      }),
    });
  };

  const { data: listings, isLoading } = useListings();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start pt-4">
            <aside className="hidden lg:block w-64 flex-none sticky top-24">
              <div className="bg-white p-5 border border-border space-y-6 rounded-sm">
                <Skeleton className="h-5 w-20" />
                <div className="space-y-3">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-9 w-full" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-3 w-20" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-7 w-16" />
                    <Skeleton className="h-7 w-20" />
                    <Skeleton className="h-7 w-24" />
                    <Skeleton className="h-7 w-14" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-full" />
                  <div className="flex justify-between">
                    <Skeleton className="h-7 w-16" />
                    <Skeleton className="h-7 w-16" />
                  </div>
                </div>
              </div>
            </aside>
            <main className="flex-1 w-full space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-9 w-32" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  const activeSearchQuery = (searchParams.search || "").toLowerCase();

  const filteredListings =
    listings?.filter((listing) => {
      const matchesCategory =
        selectedCategory === "all" ||
        listing.listingType.includes(
          selectedCategory === "hotel" ? "hotel" : selectedCategory,
        );

      const matchesSearch =
        listing.title.toLowerCase().includes(activeSearchQuery) ||
        "location".toLowerCase().includes(activeSearchQuery);

      const matchesPrice =
        listing.basePrice >= priceRange[0] &&
        listing.basePrice <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    }) || [];

  const ITEMS_PER_PAGE = 12; // Increased for larger grid
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);

  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start pt-4">
          <aside className="hidden lg:block w-64 flex-none sticky top-24">
            <div className="bg-white p-5 border border-border rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-3">
                <h2 className="text-sm font-black uppercase tracking-tighter text-foreground">
                  Filters
                </h2>
                {hasActiveFilters && (
                  <Badge
                    variant="secondary"
                    className="text-[9px] uppercase tracking-widest rounded bg-primary text-white hover:bg-primary/90"
                  >
                    Active
                  </Badge>
                )}
              </div>
              <FilterContent
                searchQuery={localSearchQuery}
                setSearchQuery={setLocalSearchQuery}
                selectedCategory={selectedCategory}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRangeParam}
                clearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          <main className="flex-1 w-full space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-6">
              <div className="w-full">
                <SectionTitle
                  title="Explore Our Vendors"
                  align="left"
                  className="mb-1"
                />
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                  {filteredListings.length}{" "}
                  {filteredListings.length === 1 ? "result" : "results"} found
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="lg:hidden flex-1 sm:flex-initial">
                  <Sheet>
                    <SheetTrigger
                      render={
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto gap-2 relative rounded h-9 uppercase tracking-widest text-[10px] font-bold border-border"
                        />
                      }
                    >
                      <Filter className="h-3.5 w-3.5" />
                      Filters
                      {hasActiveFilters && (
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      )}
                    </SheetTrigger>
                    <SheetContent
                      side="left"
                      className="w-full sm:w-[320px] p-0"
                    >
                      <SheetHeader className="p-5 pb-4 border-b">
                        <SheetTitle className="text-left text-lg font-black uppercase tracking-tighter flex items-center justify-between">
                          <span>Filters</span>
                          {hasActiveFilters && (
                            <Badge
                              variant="secondary"
                              className="text-[9px] uppercase tracking-widest rounded bg-primary text-white"
                            >
                              Active
                            </Badge>
                          )}
                        </SheetTitle>
                      </SheetHeader>
                      <div className="p-5 overflow-y-auto max-h-[calc(100vh-5rem)]">
                        <FilterContent
                          searchQuery={localSearchQuery}
                          setSearchQuery={setLocalSearchQuery}
                          selectedCategory={selectedCategory}
                          setCategory={setCategory}
                          priceRange={priceRange}
                          setPriceRange={setPriceRangeParam}
                          clearFilters={clearFilters}
                          hasActiveFilters={hasActiveFilters}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Sort */}
                <Select>
                  <SelectTrigger className="w-full sm:w-[140px] h-9 rounded border-border uppercase tracking-widest text-[10px] font-bold shadow-none">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent className="rounded border-border min-w-[140px]">
                    <SelectItem
                      value="popular"
                      className="uppercase tracking-wider text-[10px] font-medium"
                    >
                      Popular
                    </SelectItem>
                    <SelectItem
                      value="newest"
                      className="uppercase tracking-wider text-[10px] font-medium"
                    >
                      Newest
                    </SelectItem>
                    <SelectItem
                      value="price_low"
                      className="uppercase tracking-wider text-[10px] font-medium"
                    >
                      Price: Low
                    </SelectItem>
                    <SelectItem
                      value="price_high"
                      className="uppercase tracking-wider text-[10px] font-medium"
                    >
                      Price: High
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== "all" && (
                  <Badge
                    variant="secondary"
                    className="gap-1.5 pl-2.5 pr-1.5 py-1 cursor-pointer hover:bg-muted rounded bg-white border border-border text-foreground uppercase tracking-widest text-[9px]"
                    onClick={() => setCategory("all")}
                  >
                    {
                      categories.find((c) => c.value === selectedCategory)
                        ?.label
                    }
                    <X className="h-3 w-3" />
                  </Badge>
                )}
                {localSearchQuery && (
                  <Badge
                    variant="secondary"
                    className="gap-1.5 pl-2.5 pr-1.5 py-1 cursor-pointer hover:bg-muted rounded bg-white border border-border text-foreground uppercase tracking-widest text-[9px]"
                    onClick={() => setLocalSearchQuery("")}
                  >
                    "{localSearchQuery}"
                    <X className="h-3 w-3" />
                  </Badge>
                )}
                {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
                  <Badge
                    variant="secondary"
                    className="gap-1.5 pl-2.5 pr-1.5 py-1 cursor-pointer hover:bg-muted rounded bg-white border border-border text-foreground uppercase tracking-widest text-[9px]"
                    onClick={() => setPriceRangeParam([0, 1000])}
                  >
                    ${priceRange[0]} - ${priceRange[1]}
                    <X className="h-3 w-3" />
                  </Badge>
                )}
              </div>
            )}

            {/* Listings Grid */}
            {paginatedListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    id={listing.id.toString()}
                    title={listing.title}
                    location={`Location ${listing.locationId}`}
                    price={listing.basePrice}
                    rating={4.8}
                    reviewCount={12}
                    image={
                      listing.imageUrl ||
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    }
                    category={
                      listing.listingType.includes("hotel")
                        ? "hotel"
                        : listing.listingType.includes("car")
                          ? "car"
                          : "tour"
                    }
                    listing={listing}
                  />
                ))}
              </div>
            ) : (
              <Empty className="py-24 border-2 border-dashed border-border/50 rounded-sm">
                <EmptyHeader>
                  <EmptyMedia
                    variant="icon"
                    className="bg-muted text-muted-foreground"
                  >
                    <Search className="h-8 w-8" />
                  </EmptyMedia>
                  <EmptyTitle className="text-foreground font-bold uppercase tracking-tighter text-lg mt-4">
                    No results found
                  </EmptyTitle>
                  <EmptyDescription className="font-serif">
                    Try adjusting your filters or search terms
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button
                    variant="default"
                    className="rounded h-9 uppercase tracking-widest font-bold bg-foreground hover:bg-primary text-xs"
                    onClick={clearFilters}
                  >
                    Clear all filters
                  </Button>
                </EmptyContent>
              </Empty>
            )}

            {/* Pagination */}
            {filteredListings.length > ITEMS_PER_PAGE && (
              <div className="flex justify-center pt-8 border-t border-border">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            navigate({
                              search: (prev) => ({
                                ...prev,
                                page: Math.max(1, currentPage - 1),
                              }),
                            });
                          }
                        }}
                        className={cn(
                          "cursor-pointer rounded h-8 px-3 text-xs uppercase tracking-wider font-bold",
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "hover:bg-muted",
                        )}
                        aria-disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let p: number;
                      if (totalPages <= 5) {
                        p = i + 1;
                      } else if (currentPage <= 3) {
                        p = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        p = totalPages - 4 + i;
                      } else {
                        p = currentPage - 2 + i;
                      }
                      return (
                        <PaginationItem key={p}>
                          <PaginationLink
                            isActive={currentPage === p}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate({
                                search: (prev) => ({ ...prev, page: p }),
                              });
                            }}
                            className={cn(
                              "cursor-pointer rounded h-8 w-8 text-xs font-bold",
                              currentPage === p
                                ? "bg-foreground text-white hover:bg-foreground"
                                : "hover:bg-muted",
                            )}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    <PaginationItem>
                      <PaginationNext
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) {
                            navigate({
                              search: (prev) => ({
                                ...prev,
                                page: Math.min(totalPages, currentPage + 1),
                              }),
                            });
                          }
                        }}
                        className={cn(
                          "cursor-pointer rounded h-8 px-3 text-xs uppercase tracking-wider font-bold",
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : "hover:bg-muted",
                        )}
                        aria-disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
