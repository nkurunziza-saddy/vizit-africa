"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  listings,
  serviceTypeLabels,
  type ServiceType,
  type Listing,
} from "@/lib/data";
import {
  Search,
  Star,
  MapPin,
  SlidersHorizontal,
  X,
  Grid3X3,
  List,
} from "lucide-react";

function ListingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ServiceType | "all">("all");
  const [sortBy, setSortBy] = useState<
    "featured" | "price-low" | "price-high" | "rating"
  >("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Read initial filter from URL
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam && typeParam in serviceTypeLabels) {
      setSelectedType(typeParam as ServiceType);
    }
  }, [searchParams]);

  // Animate listings on load
  useEffect(() => {
    gsap.from(".listing-card", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [selectedType, sortBy, searchQuery]);

  const filteredListings = useMemo(() => {
    let result = [...listings];

    // Filter by type
    if (selectedType !== "all") {
      result = result.filter((listing) => listing.type === selectedType);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (listing) =>
          listing.title.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query) ||
          listing.location.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedType, searchQuery, sortBy]);

  const handleTypeChange = (value: string | null) => {
    if (!value) return;
    setSelectedType(value as ServiceType | "all");
    if (value === "all") {
      router.push("/listings");
    } else {
      router.push(`/listings?type=${value}`);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSortBy("featured");
    router.push("/listings");
  };

  const hasActiveFilters =
    selectedType !== "all" || searchQuery || sortBy !== "featured";

  return (
    <main className="bg-cream min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-forest">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            Discover Rwanda
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream mb-6">
            Explore Our Services
          </h1>
          <p className="text-cream/70 text-xl max-w-2xl">
            From flights and accommodations to unforgettable experiences, find
            everything you need for your Rwandan adventure.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-cream border-b border-forest/10 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-none border-forest/20"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full md:w-auto">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" />
                  <Input
                    placeholder="Search destinations, experiences..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-none border-forest/20 bg-white"
                  />
                </div>

                {/* Type Filter */}
                <Select value={selectedType} onValueChange={handleTypeChange}>
                  <SelectTrigger className="w-full sm:w-[180px] rounded-none border-forest/20 bg-white">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="all">All Types</SelectItem>
                    {Object.entries(serviceTypeLabels).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select
                  value={sortBy}
                  onValueChange={(v) => setSortBy(v as typeof sortBy)}
                >
                  <SelectTrigger className="w-full sm:w-[180px] rounded-none border-forest/20 bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="hidden md:flex items-center gap-4">
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-forest/60 hover:text-forest"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-forest/60 text-sm">
              {filteredListings.length}{" "}
              {filteredListings.length === 1 ? "result" : "results"} found
            </p>
            {hasActiveFilters && (
              <Button
                variant="link"
                onClick={clearFilters}
                className="text-terracotta md:hidden p-0 h-auto"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredListings.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-forest/60 text-xl mb-4">
                No listings found matching your criteria
              </p>
              <Button
                onClick={clearFilters}
                className="bg-terracotta hover:bg-terracotta-light text-cream rounded-none"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ListingCard({
  listing,
  viewMode,
}: {
  listing: Listing;
  viewMode: "grid" | "list";
}) {
  if (viewMode === "list") {
    return (
      <Link href={`/listings/${listing.id}`} className="listing-card group">
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-none">
          <div className="flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <Badge className="absolute top-4 left-4 bg-forest text-cream rounded-none">
                {serviceTypeLabels[listing.type]}
              </Badge>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center gap-1 text-sm text-forest/60 mb-2">
                <MapPin className="w-3 h-3" />
                {listing.location}
              </div>
              <h3 className="font-display text-2xl text-forest group-hover:text-terracotta transition-colors mb-2">
                {listing.title}
              </h3>
              <p className="text-forest/60 mb-4 line-clamp-2">
                {listing.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.amenities.slice(0, 4).map((amenity) => (
                  <Badge
                    key={amenity}
                    variant="outline"
                    className="rounded-none text-xs"
                  >
                    {amenity}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-medium text-forest">
                    {listing.rating}
                  </span>
                  <span className="text-sm text-forest/50">
                    ({listing.reviews} reviews)
                  </span>
                </div>
                <span className="font-display text-2xl text-terracotta">
                  ${listing.price}
                  <span className="text-sm text-forest/50">
                    {listing.duration ? `/${listing.duration}` : "/night"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/listings/${listing.id}`} className="listing-card group">
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-none h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <Badge className="absolute top-4 left-4 bg-forest text-cream rounded-none">
            {serviceTypeLabels[listing.type]}
          </Badge>
          {listing.featured && (
            <Badge className="absolute top-4 right-4 bg-gold text-forest rounded-none">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1 text-sm text-forest/60 mb-2">
            <MapPin className="w-3 h-3" />
            {listing.location}
          </div>
          <h3 className="font-display text-xl text-forest group-hover:text-terracotta transition-colors mb-2">
            {listing.title}
          </h3>
          <p className="text-forest/60 text-sm mb-4 line-clamp-2">
            {listing.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-medium text-forest">
                {listing.rating}
              </span>
              <span className="text-sm text-forest/50">
                ({listing.reviews})
              </span>
            </div>
            <span className="font-display text-lg text-terracotta">
              ${listing.price}
              <span className="text-sm text-forest/50">
                {listing.duration ? `/${listing.duration}` : "/night"}
              </span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <ListingsContent />
    </Suspense>
  );
}
