Here is a **Frontend-Only** solution.

This approach mocks the backend by initializing realistic dummy data directly into the browser's `localStorage`. This allows you to build the entire UI, search, and booking flow without touching a single line of backend code.

### **1. The Mock Database Utility**

Create a file named `src/utils/mockDatabase.js`. This script checks if data exists and, if not, seeds `localStorage` with Hotels, Cars, and Users.

```javascript
// src/utils/mockDatabase.js

const DB_KEYS = {
  LISTINGS: "vizit_listings",
  USERS: "vizit_users",
  BOOKINGS: "vizit_bookings",
};

// 1. DUMMY DATA GENERATORS
const generateListings = () => [
  {
    id: "h-1",
    type: "hotel",
    title: "Kigali Marriott Hotel",
    location: "Kigali, Nyarugenge",
    price: 180,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Luxury hotel with city views, pool, and premium service.",
    amenities: ["Wifi", "Pool", "Gym", "Breakfast"],
    available: true,
  },
  {
    id: "h-2",
    type: "hotel",
    title: "The Retreat",
    location: "Kigali, Kiyovu",
    price: 250,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly boutique hotel offering a serene environment.",
    amenities: ["Wifi", "Spa", "Organic Food"],
    available: true,
  },
  {
    id: "c-1",
    type: "car",
    title: "Toyota RAV4 2022",
    location: "Kigali International Airport",
    price: 60,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    description: "Reliable SUV perfect for city and mild off-road driving.",
    features: ["Automatic", "5 Seats", "AC", "Bluetooth"],
    available: true,
  },
  {
    id: "c-2",
    type: "car",
    title: "Land Cruiser Prado",
    location: "Remera, Kigali",
    price: 120,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    description: "Heavy duty 4x4 for safaris and long country trips.",
    features: ["Manual", "7 Seats", "4x4", "GPS"],
    available: true,
  },
];

const generateUsers = () => [
  {
    id: "u-1",
    name: "Test Tourist",
    email: "tourist@vizit.rw",
    role: "tourist",
    password: "password123", // In real app, never store plain text
  },
  {
    id: "u-2",
    name: "Admin User",
    email: "admin@vizit.rw",
    role: "admin",
    password: "adminpassword",
  },
  {
    id: "u-3",
    name: "Vendor User",
    email: "vendor@vizit.rw",
    role: "vendor",
    password: "vendorpassword",
  },
  {
    id: "u-4",
    name: "Vendor User",
    email: "vendor@vizit.rw",
    role: "vendor",
    password: "vendorpassword",
  },
];

// 2. INITIALIZATION FUNCTION
export const initializeMockDB = () => {
  if (!localStorage.getItem(DB_KEYS.LISTINGS)) {
    console.log("⚡ Seeding LocalStorage with Dummy Data...");
    localStorage.setItem(DB_KEYS.LISTINGS, JSON.stringify(generateListings()));
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(generateUsers()));
    localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify([])); // Start empty
  } else {
    console.log("✅ LocalStorage already seeded.");
  }
};

// 3. HELPER FUNCTIONS (Simulating API Calls)
export const getListings = () => {
  return JSON.parse(localStorage.getItem(DB_KEYS.LISTINGS) || "[]");
};

export const getListingById = (id) => {
  const listings = getListings();
  return listings.find((item) => item.id === id);
};

export const createBooking = (bookingData) => {
  const bookings = JSON.parse(localStorage.getItem(DB_KEYS.BOOKINGS) || "[]");
  const newBooking = {
    ...bookingData,
    id: `b-${Date.now()}`,
    status: "confirmed",
  };
  bookings.push(newBooking);
  localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify(bookings));
  return newBooking;
};
```

### **2. Integration (How to run it)**

In your main entry file (usually `src/main.jsx` or `src/App.jsx`), import and run the initializer **once** before the app mounts.

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeMockDB } from "./utils/mockDatabase"; // Import here

// Initialize DB immediately
initializeMockDB();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### **3. Revised Frontend-Only Task List**

Since you are relying on `localStorage`, the "Data Fetching" tasks now involve reading from this file instead of making `fetch()` or `axios` calls.

#### **Phase 1: Setup & Data Layer**

- **Initialize Mock DB:** Create the `mockDatabase.js` file and ensure it runs on app start.
- **Verify Data:** Check Chrome DevTools > Application > Local Storage to see the JSON data.
- **Create Data Hooks:** Create custom hooks (e.g., `useListings`) that read from `localStorage` and simulate a loading delay (using `setTimeout`) to test UI loading states.

#### **Phase 2: Core Components & Display**

- **Grid Layout:** Build a `ListingGrid` component that maps through the data fetched from `getListings()`.
- **Card Component:** Design the `ListingCard` to display the image, title, price, and "Book Now" button.
- **Detail View:** Build the `/listing/:id` page. Use `getListingById(id)` to find the correct item from `localStorage` based on the URL parameter.

#### **Phase 3: Search & Filter Logic**

- **Filter Logic:** Implement a function that gets all listings and filters them using JavaScript `array.filter()` based on the search inputs (location string match, price ranges).
- **State Management:** Connect the Search Bar inputs to the filter function.

#### **Phase 4: Booking Flow (Mocked)**

- **Booking Form:** On the details page, create a form (Dates, Guests).
- **Submit Action:** When "Confirm" is clicked, call `createBooking()` to save the object into the `vizit_bookings` array in `localStorage`.
- **Success Page:** Redirect the user to a "Success" page that displays a fake ticket using the ID returned from the booking function.

#### **Phase 5: Admin Dashboard (Mocked)**

- **Read Bookings:** Create a table that reads from the `vizit_bookings` key in `localStorage` to show "All Bookings" to the admin.
- **Add Listing:** Create a form that pushes a new object to the `vizit_listings` array in `localStorage` (simulating a vendor adding a hotel).
