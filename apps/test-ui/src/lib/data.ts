export type ServiceType =
  | "flights"
  | "hotels"
  | "bnbs"
  | "car-rentals"
  | "experiences";

export const serviceTypeLabels: Record<ServiceType, string> = {
  flights: "Flights",
  hotels: "Hotels & Lodges",
  bnbs: "BnBs",
  "car-rentals": "Car Rentals",
  experiences: "Experiences",
};

export interface Listing {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  type: ServiceType;
  location: string;
  image: string;
  images: string[];
  price: number;
  duration?: string;
  rating: number;
  reviews: number;
  featured: boolean;
  amenities: string[];
  capacity?: number;
  checkIn?: string;
  checkOut?: string;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Brussels to Kigali Direct Flight",
    shortDescription: "Non-stop flight with RwandAir, premium comfort class",
    description:
      "Experience the comfort of RwandAir direct flights from Brussels to Kigali. Premium seating, gourmet meals, and friendly service.",
    type: "flights",
    location: "Brussels to Kigali",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1122a8?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552820728-8ac41f1122a8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45e003008e2e?w=800&h=600&fit=crop",
    ],
    price: 1200,
    rating: 4.8,
    reviews: 342,
    featured: true,
    amenities: ["WiFi", "Meals Included", "Premium Seats", "Luggage Included"],
  },
  {
    id: "2",
    title: "Serena Hotel Kigali",
    shortDescription: "Luxury 5-star hotel in the heart of Kigali city center",
    description:
      "Experience luxury at its finest at the Serena Hotel Kigali. Stunning city views, world-class amenities, and impeccable service.",
    type: "hotels",
    location: "Kigali City Center",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-812e88e34e59?w=800&h=600&fit=crop",
    ],
    price: 450,
    duration: "night",
    rating: 4.9,
    reviews: 1203,
    featured: true,
    capacity: 2,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    amenities: [
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "WiFi",
      "Fitness Center",
      "Concierge",
    ],
  },
  {
    id: "3",
    title: "Cozy BnB in Kigali",
    shortDescription: "Authentic local experience with modern comfort",
    description:
      "Stay with a local Rwandan family in this charming BnB. Experience authentic Rwandan hospitality, homemade breakfast, and personal recommendations.",
    type: "bnbs",
    location: "Kigali Nyarutarama",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    price: 85,
    duration: "night",
    rating: 4.7,
    reviews: 567,
    featured: true,
    capacity: 2,
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    amenities: [
      "Kitchen",
      "WiFi",
      "Garden",
      "Breakfast Included",
      "Local Tours",
    ],
  },
  {
    id: "4",
    title: "Premium Car Rental - Toyota RAV4",
    shortDescription: "Explore Rwanda at your own pace with modern SUV",
    description:
      "Rent a brand new Toyota RAV4 with insurance included. Perfect for exploring Rwanda's diverse landscapes safely and comfortably.",
    type: "car-rentals",
    location: "Kigali Airport & City",
    image:
      "https://images.unsplash.com/photo-1552519507-da3a142c6e3d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3a142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566023967268-2500eb3ce18f?w=800&h=600&fit=crop",
    ],
    price: 75,
    duration: "day",
    rating: 4.6,
    reviews: 421,
    featured: true,
    amenities: [
      "Insurance Included",
      "GPS",
      "WiFi Hotspot",
      "24/7 Support",
      "Free Delivery",
    ],
  },
  {
    id: "5",
    title: "Volcanoes National Park Trek",
    shortDescription: "Guided gorilla trekking experience in misty mountains",
    description:
      "Encounter majestic mountain gorillas in their natural habitat. An unforgettable wildlife experience with expert guides in Volcanoes National Park.",
    type: "experiences",
    location: "Volcanoes National Park",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    ],
    price: 1500,
    duration: "per person",
    rating: 5.0,
    reviews: 89,
    featured: true,
    amenities: [
      "Expert Guide",
      "Park Entry",
      "Transport",
      "Breakfast",
      "Photography",
    ],
  },
  {
    id: "6",
    title: "Nyungwe Forest Canopy Walk",
    shortDescription: "Suspended bridge walk through ancient rainforest",
    description:
      "Experience Rwanda's largest tropical forest from a unique perspective. Walk suspended 50 meters above the forest floor on the Nyungwe Canopy Walk.",
    type: "experiences",
    location: "Nyungwe Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502675135487-4ee971583033?w=800&h=600&fit=crop",
    ],
    price: 45,
    duration: "per person",
    rating: 4.8,
    reviews: 234,
    featured: false,
    amenities: [
      "Guide Included",
      "Safety Equipment",
      "Forest Map",
      "Photography Time",
    ],
  },
  {
    id: "7",
    title: "Lake Kivu Resort",
    shortDescription: "Beachfront paradise with water sports activities",
    description:
      "Relax on pristine white sand beaches along Lake Kivu. Enjoy water sports, sunset views, and fresh fish at this serene lakeside resort.",
    type: "hotels",
    location: "Lake Kivu",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520763974129-78900e2a1ff0?w=800&h=600&fit=crop",
    ],
    price: 280,
    duration: "night",
    rating: 4.7,
    reviews: 612,
    featured: false,
    capacity: 2,
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    amenities: [
      "Beach Access",
      "Water Sports",
      "Restaurant",
      "Bar",
      "WiFi",
      "Boat Tours",
    ],
  },
  {
    id: "8",
    title: "Paris to Kigali via Brussels",
    shortDescription: "Convenient connection flight with premium service",
    description:
      "Travel from Paris to Kigali with a smooth connection in Brussels. Enjoy flexibility and competitive pricing on European-African routes.",
    type: "flights",
    location: "Paris to Kigali",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    ],
    price: 980,
    rating: 4.5,
    reviews: 198,
    featured: false,
    amenities: ["Meals", "Baggage", "Seat Selection", "Connecting Flight"],
  },
];

export const galleryImages = [
  {
    id: "1",
    title: "Volcanoes at Sunrise",
    image:
      "https://res.cloudinary.com/take-memories/images/f_auto,dpr_auto,q_auto,w_2000,c_fill,h_1200/gm/hbb8oblj5tozmimydbaz/rwanda-sehenswurdigkeiten",
    category: "mountains",
    description: "Misty volcanic peaks during golden hour",
  },
  {
    id: "2",
    title: "Mountain Gorilla",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop",
    category: "wildlife",
    description: "Majestic gorilla in natural habitat",
  },
  {
    id: "3",
    title: "Lake Kivu Sunset",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
    category: "landscapes",
    description: "Golden reflections on pristine waters",
  },
  {
    id: "4",
    title: "Kigali City",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop",
    category: "cities",
    description: "Modern Kigali skyline at dusk",
  },
  {
    id: "5",
    title: "Nyungwe Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    category: "nature",
    description: "Lush rainforest canopy",
  },
  {
    id: "6",
    title: "Tea Plantations",
    image:
      "https://images.unsplash.com/photo-1466059810696-85e62f9eaa78?w=1200&h=800&fit=crop",
    category: "landscapes",
    description: "Rolling green tea fields",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "United States",
    text: "Vizit Africa made booking my Rwanda trip effortless. The experience of seeing mountain gorillas was life-changing, and every detail was perfectly arranged.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Michel Dupont",
    location: "France",
    text: "La plateforme est magnifique et le service client parle français! J'ai voyagé avec ma famille et tout s'est déroulé sans problème.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Amara Patel",
    location: "United Kingdom",
    text: "I was nervous about traveling to a new country alone, but Vizit Africa's support team made me feel safe and welcomed throughout my journey.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];
