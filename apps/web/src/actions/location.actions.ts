import { DB_KEYS, delay, Location } from '../utils/mock-db';

export const getLocations = async (): Promise<Location[]> => {
  await delay(300);
  const locationsStr = localStorage.getItem(DB_KEYS.LOCATIONS);
  return locationsStr ? JSON.parse(locationsStr) : [];
};
