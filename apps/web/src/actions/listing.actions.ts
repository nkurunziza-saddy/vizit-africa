import { DB_KEYS, Listing, ListingMedia, Location, delay } from '../utils/mock-db';

export const getListings = async (): Promise<Listing[]> => {
  await delay(500); // Simulate network latency
  const listingsStr = localStorage.getItem(DB_KEYS.LISTINGS);
  return listingsStr ? JSON.parse(listingsStr) : [];
};

export const getLocations = async (): Promise<Location[]> => {
  const locationsStr = localStorage.getItem(DB_KEYS.LOCATIONS);
  return locationsStr ? JSON.parse(locationsStr) : [];
};

export const getListingById = async (id: number): Promise<{ listing: Listing; media: ListingMedia[] } | null> => {
  await delay(300);
  const listingsStr = localStorage.getItem(DB_KEYS.LISTINGS);
  const mediaStr = localStorage.getItem(DB_KEYS.LISTING_MEDIA);
  
  if (!listingsStr) return null;

  const listings: Listing[] = JSON.parse(listingsStr);
  const fullMedia: ListingMedia[] = mediaStr ? JSON.parse(mediaStr) : [];

  const listing = listings.find((l) => l.id === id);
  if (!listing) return null;

  const media = fullMedia.filter((m) => m.listing_id === id).sort((a, b) => a.sort_order - b.sort_order);

  return { listing, media };
};

export const searchListings = async (query: string): Promise<Listing[]> => {
  return filterListings({ search: query });
};

export interface FilterOptions {
  category?: string;
  search?: string;
  priceRange?: [number, number];
  minRating?: number;
}

export const filterListings = async (options: FilterOptions): Promise<Listing[]> => {
  await delay(400);
  let listings = await getListings();
  const locations = await getLocations();

  if (options.category && options.category !== 'all') {
    listings = listings.filter(l => l.listing_type.includes(options.category === 'hotel' ? 'hotel' : options.category!));
  }

  if (options.search) {
    const lowerQuery = options.search.toLowerCase();
    
    // Find matching location IDs
    const matchingLocations = locations.filter(loc => 
        loc.name.toLowerCase().includes(lowerQuery) || 
        loc.country.toLowerCase().includes(lowerQuery)
    ).map(loc => loc.id);

    listings = listings.filter(l => 
      l.title.toLowerCase().includes(lowerQuery) || 
      l.description.toLowerCase().includes(lowerQuery) ||
      matchingLocations.includes(l.location_id)
    );
  }

  if (options.priceRange) {
    const [min, max] = options.priceRange;
    listings = listings.filter(l => l.base_price >= min && l.base_price <= max);
  }
  
  return listings;
};
