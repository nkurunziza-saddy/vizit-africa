import { useQuery } from '@tanstack/react-query';
import { getListingById, getListings, searchListings, filterListings, FilterOptions, getLocations } from '@/actions/listing.actions';

export const useListings = (options?: FilterOptions) => {
  return useQuery({
    queryKey: ['listings', options],
    queryFn: () => options ? filterListings(options) : getListings(),
  });
};

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });
};

export const useListing = (id?: number) => {
  return useQuery({
    queryKey: ['listings', id],
    queryFn: () => getListingById(id!),
    enabled: !!id,
  });
};

export const useSearchListings = (query: string) => {
  return useQuery({
    queryKey: ['listings', 'search', query],
    queryFn: () => searchListings(query),
    enabled: !!query,
  });
};
