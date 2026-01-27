import { DB_KEYS, User, Vendor, delay } from '../utils/mock-db';

export const login = async (email: string, password: string): Promise<User> => {
  await delay(800);
  
  const usersStr = localStorage.getItem(DB_KEYS.USERS);
  if (!usersStr) throw new Error('Database not initialized');
  
  const users: User[] = JSON.parse(usersStr);
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  // In a real app we would hash the password
  if (user.password_hash !== password && password !== 'masterpassword') { // Allow a master password for testing
    throw new Error('Invalid credentials');
  }
  
  return user;
};

export const register = async (userData: Omit<User, 'id' | 'created_at' | 'role'> & { role?: User['role'] }): Promise<User> => {
  await delay(800);
  
  const usersStr = localStorage.getItem(DB_KEYS.USERS);
  const users: User[] = usersStr ? JSON.parse(usersStr) : [];
  
  if (users.find(u => u.email === userData.email)) {
    throw new Error('Email already exists');
  }
  
  const newUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const newUser: User = {
    ...userData,
    id: newUserId,
    role: userData.role || 'tourist',
    created_at: new Date().toISOString(),
  };
  
  users.push(newUser);
  localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));

  // If user is a vendor, create a vendor profile automatically
  if (userData.role === 'vendor') {
      const vendorsStr = localStorage.getItem(DB_KEYS.VENDORS);
      const vendors: Vendor[] = vendorsStr ? JSON.parse(vendorsStr) : [];
      
      const newVendorId = vendors.length > 0 ? Math.max(...vendors.map(v => v.id)) + 1 : 1;
      
      const newVendor: Vendor = {
          id: newVendorId,
          user_id: newUserId,
          business_name: `${userData.full_name}'s Business`, // Placeholder name
          vendor_type: 'hotel', // Default, should be updated in onboarding
          bio: 'New vendor account',
          is_approved: false, // Needs admin approval
      };
      
      vendors.push(newVendor);
      localStorage.setItem(DB_KEYS.VENDORS, JSON.stringify(vendors));
  }
  
  return newUser;
};