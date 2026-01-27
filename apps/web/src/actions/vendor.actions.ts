import { DB_KEYS, Vendor, delay } from '../utils/mock-db';

export const getVendors = async (): Promise<Vendor[]> => {
  await delay(600);
  const vendorsStr = localStorage.getItem(DB_KEYS.VENDORS);
  return vendorsStr ? JSON.parse(vendorsStr) : [];
};

export const approveVendor = async (vendorId: number): Promise<void> => {
  await delay(800);
  const vendorsStr = localStorage.getItem(DB_KEYS.VENDORS);
  if (!vendorsStr) return;

  const vendors: Vendor[] = JSON.parse(vendorsStr);
  const updatedVendors = vendors.map(v => 
    v.id === vendorId ? { ...v, is_approved: true, approved_at: new Date().toISOString() } : v
  );

  localStorage.setItem(DB_KEYS.VENDORS, JSON.stringify(updatedVendors));
};
