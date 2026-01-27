import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ListingCard, { type ListingCardProps } from "../listing-card";
import { SectionContainer } from "../ui/section";

// Helper to create mock listing for the card
import { Listing } from "@/utils/mock-db";

const featuredListings: (ListingCardProps & { listing: Listing })[] = [
	{
		id: "1",
		title: "Luxury Safari Lodge",
		location: "Volcanoes National Park",
		price: 350,
		rating: 4.9,
		reviewCount: 128,
		image: "", // ListingCard usually handles the default image if empty/mocked inside, but we pass one below
		category: "hotel",
        listing: {
            id: 1,
            title: "Luxury Safari Lodge",
            description: "Experience the ultimate safari luxury.",
            location_id: "Volcanoes National Park",
            base_price: 350,
            currency: "USD",
            rating: 4.9,
            reviews_count: 128,
            image_url: "",
            images: [],
            amenities: ["Wifi", "Pool"],
            listing_type: ["hotel"],
            vendor_id: 1,
            addons: [], 
            availability: []
        }
	},
	{
		id: "2",
		title: "Cozy Mountain BnB",
		location: "Musanze",
		price: 85,
		rating: 4.7,
		reviewCount: 64,
		image: "",
		category: "bnb",
        listing: {
            id: 2,
            title: "Cozy Mountain BnB",
            description: "A cozy retreat in the mountains.",
            location_id: "Musanze",
            base_price: 85,
            currency: "USD",
            rating: 4.7,
            reviews_count: 64,
            image_url: "",
            images: [],
            amenities: ["Kitchen", "Wifi"],
            listing_type: ["bnb"],
            vendor_id: 2,
            addons: [],
            availability: []
        }
	},
	{
		id: "3",
		title: "Toyota Land Cruiser",
		location: "Kigali",
		price: 120,
		rating: 4.8,
		reviewCount: 92,
		image: "",
		category: "car",
        listing: {
            id: 3,
            title: "Toyota Land Cruiser",
            description: "Robust 4x4 for your adventures.",
            location_id: "Kigali",
            base_price: 120,
            currency: "USD",
            rating: 4.8,
            reviews_count: 92,
            image_url: "",
            images: [],
            amenities: ["AC"],
            listing_type: ["car"],
            vendor_id: 3,
            addons: [],
            availability: []
        }
	},
	{
		id: "4",
		title: "Gorilla Trekking",
		location: "Volcanoes National Park",
		price: 1500,
		rating: 5.0,
		reviewCount: 256,
		image: "",
		category: "tour",
        listing: {
            id: 4,
            title: "Gorilla Trekking",
            description: "Once in a lifetime experience.",
            location_id: "Volcanoes National Park",
            base_price: 1500,
            currency: "USD",
            rating: 5.0,
            reviews_count: 256,
            image_url: "",
            images: [],
            amenities: ["Guide"],
            listing_type: ["tour"],
            vendor_id: 4,
            addons: [],
            availability: []
        }
	},
];

export const FeaturedListings = () => {
	const action = (
		<Link
			to="/listings"
			search={{
				category: undefined,
				search: undefined,
				sortBy: undefined,
				priceRange: undefined,
				amenities: undefined,
				from: undefined,
				checkIn: undefined,
				checkOut: undefined,
				guests: undefined,
				page: 1,
			}}
		>
			<Button
				variant="ghost"
				size="sm"
				className="text-muted-foreground hover:text-foreground"
			>
				View All <ArrowRight />
			</Button>
		</Link>
	);

	return (
		<SectionContainer
			title="Featured Experiences"
			description="Handpicked selections from our verified partners."
			align="start"
			action={action}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{featuredListings.map((listing) => (
					<ListingCard key={listing.id} {...listing} />
				))}
			</div>
		</SectionContainer>
	);
};

export default FeaturedListings;
