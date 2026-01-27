import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getVendors, approveVendor } from '@/actions/vendor.actions';

export const useVendors = () => {
  return useQuery({
    queryKey: ['vendors'],
    queryFn: getVendors,
  });
};

export const useApproveVendor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (vendorId: number) => approveVendor(vendorId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vendors'] });
    },
  });
};
