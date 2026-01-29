export type ServiceType =
  | "flights"
  | "hotels"
  | "bnbs"
  | "car-rentals"
  | "experiences";

export interface Listing {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  type: ServiceType;
  price: number;
  currency: string;
  location: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  amenities: string[];
  featured: boolean;
  duration?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

export const serviceTypeLabels: Record<ServiceType, string> = {
  flights: "Flights",
  hotels: "Hotels",
  bnbs: "BnBs",
  "car-rentals": "Car Rentals",
  experiences: "Experiences",
};

export const listings: Listing[] = [
  {
    id: "1",
    title: "Virunga View Lodge",
    description:
      "Nestled in the hills overlooking Volcanoes National Park, Virunga View Lodge offers an intimate connection with Rwanda's natural beauty. Wake up to misty mountain views and the calls of exotic birds. Our lodge combines traditional Rwandan architecture with modern comforts, creating a sanctuary where you can rest after your gorilla trekking adventures. Each room features handcrafted furniture, local artwork, and panoramic windows framing the volcanic peaks.",
    shortDescription:
      "Luxury lodge with stunning views of the Virunga volcanoes",
    type: "hotels",
    price: 350,
    currency: "USD",
    location: "Musanze, Northern Province",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 128,
    amenities: [
      "Mountain View",
      "Restaurant",
      "Spa",
      "Guided Tours",
      "WiFi",
      "Fireplace",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Lake Kivu Retreat BnB",
    description:
      "Experience authentic Rwandan hospitality at our family-run BnB on the shores of Lake Kivu. Our home has been welcoming travelers for three generations, offering a genuine glimpse into local life. Enjoy home-cooked meals featuring fresh fish from the lake and vegetables from our garden. Relax on our terrace as the sun sets over the water, painting the sky in shades of gold and crimson.",
    shortDescription: "Charming family-run guesthouse on Lake Kivu shores",
    type: "bnbs",
    price: 85,
    currency: "USD",
    location: "Gisenyi, Western Province",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 89,
    amenities: ["Lake View", "Home Cooking", "Garden", "Boat Tours", "WiFi"],
    featured: true,
  },
  {
    id: "3",
    title: "Gorilla Trekking Experience",
    description:
      "Embark on a life-changing journey into the misty forests of Volcanoes National Park to encounter the majestic mountain gorillas. Led by expert guides, you'll trek through bamboo forests and volcanic terrain until you find one of the habituated gorilla families. Spend a magical hour observing these gentle giants in their natural habitat - watching them play, feed, and interact. This is more than a tour; it's a profound connection with nature that will stay with you forever.",
    shortDescription: "Once-in-a-lifetime encounter with mountain gorillas",
    type: "experiences",
    price: 1500,
    currency: "USD",
    location: "Volcanoes National Park",
    image:
      "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    ],
    rating: 5.0,
    reviews: 312,
    amenities: [
      "Expert Guide",
      "Permits Included",
      "Transportation",
      "Lunch",
      "Walking Sticks",
    ],
    featured: true,
    duration: "Full Day",
  },
  {
    id: "4",
    title: "4x4 Land Cruiser Rental",
    description:
      "Explore Rwanda at your own pace with our reliable 4x4 Land Cruiser. Perfect for navigating both city streets and rural trails, these vehicles are equipped with everything you need for a comfortable journey. Optional driver-guide available for those who want local expertise and storytelling along the way.",
    shortDescription:
      "Reliable 4x4 vehicle for exploring Rwanda's diverse terrain",
    type: "car-rentals",
    price: 120,
    currency: "USD",
    location: "Kigali (pickup/dropoff)",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 67,
    amenities: [
      "GPS Navigation",
      "Insurance",
      "Roof Rack",
      "Cooler Box",
      "24/7 Support",
    ],
    featured: false,
    duration: "Per Day",
  },
  {
    id: "5",
    title: "Kigali to Rwanda - Direct Flight",
    description:
      "Begin your Rwandan adventure with a comfortable direct flight to Kigali International Airport. RwandAir offers excellent service with warm hospitality that gives you a taste of the welcome awaiting you in the Land of a Thousand Hills.",
    shortDescription: "Direct flights to Kigali from major international hubs",
    type: "flights",
    price: 850,
    currency: "USD",
    location: "Kigali International Airport",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    ],
    rating: 4.5,
    reviews: 234,
    amenities: [
      "In-flight Meals",
      "Entertainment",
      "Baggage Included",
      "Comfortable Seating",
    ],
    featured: false,
  },
  {
    id: "6",
    title: "Nyungwe Forest Canopy Walk",
    description:
      "Walk among the treetops on East Africa's only canopy walkway, suspended 50 meters above the forest floor. The Nyungwe Forest is one of Africa's oldest rainforests, home to 13 primate species and over 300 bird species. Feel the mist on your face as you traverse this engineering marvel, surrounded by ancient trees and the symphony of the forest.",
    shortDescription: "Thrilling walkway suspended above ancient rainforest",
    type: "experiences",
    price: 60,
    currency: "USD",
    location: "Nyungwe National Park",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 156,
    amenities: [
      "Guide Included",
      "Safety Harness",
      "Bird Watching",
      "Photography Allowed",
    ],
    featured: true,
    duration: "3 Hours",
  },
  {
    id: "7",
    title: "The Retreat by Heaven",
    description:
      "An urban oasis in the heart of Kigali, The Retreat offers boutique luxury with a distinctly Rwandan character. Each suite is individually designed with local materials and contemporary art. The rooftop restaurant serves farm-to-table cuisine while offering panoramic city views. Perfect as a base for exploring Kigali's cultural attractions.",
    shortDescription: "Boutique urban retreat in the heart of Kigali",
    type: "hotels",
    price: 220,
    currency: "USD",
    location: "Kigali, Kigali Province",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 98,
    amenities: [
      "Rooftop Restaurant",
      "Pool",
      "Spa",
      "City Tours",
      "Airport Transfer",
      "WiFi",
    ],
    featured: false,
  },
  {
    id: "8",
    title: "Coffee Farm Homestay",
    description:
      "Live with a local coffee farming family and learn the art of growing, harvesting, and processing some of the world's finest arabica beans. Wake to the aroma of freshly roasted coffee and spend your days learning traditional techniques passed down through generations. This immersive experience includes all meals and coffee tastings.",
    shortDescription: "Immersive stay with a coffee farming family",
    type: "bnbs",
    price: 65,
    currency: "USD",
    location: "Huye, Southern Province",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 45,
    amenities: [
      "All Meals",
      "Coffee Tours",
      "Cultural Activities",
      "Garden",
      "Local Guide",
    ],
    featured: true,
  },
  {
    id: "9",
    title: "Safari Minivan Rental",
    description:
      "Comfortable 7-seater minivan ideal for families or small groups. Features pop-up roof for wildlife viewing and photography. Comes equipped with all necessary safari gear.",
    shortDescription: "Family-friendly safari vehicle with viewing roof",
    type: "car-rentals",
    price: 95,
    currency: "USD",
    location: "Kigali (pickup/dropoff)",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    ],
    rating: 4.4,
    reviews: 52,
    amenities: ["Pop-up Roof", "7 Seats", "AC", "USB Charging", "Insurance"],
    featured: false,
    duration: "Per Day",
  },
  {
    id: "10",
    title: "Cultural Village Experience",
    description:
      "Step back in time at the Iby'Iwacu Cultural Village, where former poachers have become guardians of Rwandan heritage. Experience traditional dancing, try your hand at archery, visit a replica royal palace, and learn about ancient customs. This transformative experience supports conservation and community development.",
    shortDescription: "Authentic Rwandan cultural immersion",
    type: "experiences",
    price: 40,
    currency: "USD",
    location: "Kinigi, Northern Province",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 89,
    amenities: [
      "Traditional Dance",
      "Local Lunch",
      "Handicrafts",
      "Storytelling",
    ],
    featured: false,
    duration: "Half Day",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Virunga Mountains at Sunrise",
    location: "Volcanoes National Park",
    image:
      "https://www.discoverafrica.com/wp-content/uploads/wetu/14988/sinamatella_-_rwanda_-_virunga_-_20180914_-_630.jpg",
    category: "Mountains",
  },
  {
    id: "g2",
    title: "Mountain Gorilla Family",
    location: "Volcanoes National Park",
    image:
      "https://res.cloudinary.com/take-memories/images/f_auto,dpr_auto,q_auto,w_2000,c_fill,h_1200/gm/hbb8oblj5tozmimydbaz/rwanda-sehenswurdigkeiten",
    category: "Wildlife",
  },
  {
    id: "g3",
    title: "Lake Kivu Serenity",
    location: "Western Province",
    image:
      "https://www.travelandleisure.com/thmb/eDZBsNz7hzqvVNTsthL7TcAP-k4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-virunga-mountains-rwanda-ALISTRWANDA0123-049a3b1c218e4358a90015bd09fff7be.jpg",
    category: "Lakes",
  },
  {
    id: "g4",
    title: "Terraced Hillsides",
    location: "Northern Province",
    image:
      "https://yellowzebrasafaris.com/media/42201/farmland2-volcanoes-national-park-rwanda-yellow-zebra-safaris.jpg?width=2048&height=1024&format=jpg&v=1da5e0fda1ceca0",
    category: "Landscapes",
  },
  {
    id: "g5",
    title: "Nyungwe Rainforest",
    location: "Nyungwe National Park",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    category: "Forests",
  },
  {
    id: "g6",
    title: "Traditional Village Life",
    location: "Rural Rwanda",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80",
    category: "Culture",
  },
  {
    id: "g7",
    title: "Virunga Volcanic Peaks",
    location: "Volcanoes National Park",
    image:
      "https://drinkteatravel.com/wp-content/uploads/Africa-Rwanda-Volcanoes-kwitizina-03311.jpg",
    category: "Mountains",
  },
  {
    id: "g8",
    title: "Rolling Green Hills",
    location: "Southern Province",
    image:
      "https://afrodiscovery.com/wp-content/uploads/2024/06/beautiful-rural-landscape-with-agricultures-terraces-rwanda-800x533.jpg",
    category: "Landscapes",
  },
  {
    id: "g9",
    title: "Kigali City Skyline",
    location: "Kigali",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
    category: "Cities",
  },
  {
    id: "g10",
    title: "Golden Hour over the Hills",
    location: "Musanze",
    image:
      "https://media.istockphoto.com/id/1254053927/photo/landscape-of-the-virunga-mountains-in-rwanda.jpg?s=612x612&w=0&k=20&c=YEFagi2Y1ulPHJckKBeEBdOyMrDW3eLwDHjsCZSGgGo=",
    category: "Landscapes",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "Murugo made our dream trip to Rwanda a reality. From the moment we landed to our incredible gorilla encounter, everything was perfect. The family-run BnB they recommended felt like staying with relatives we never knew we had.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "t2",
    name: "James & Lisa Chen",
    location: "Toronto, Canada",
    text: "We've traveled extensively, but Rwanda was unlike anywhere else. The warmth of the people, the stunning landscapes, and the once-in-a-lifetime experience of meeting the gorillas - Murugo orchestrated it all beautifully.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "t3",
    name: "Emmanuel Okonkwo",
    location: "Lagos, Nigeria",
    text: "As a fellow African, I was moved by Rwanda's transformation and beauty. Murugo connected me with experiences that went beyond tourism - I left feeling like I'd found another home on our continent.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];
