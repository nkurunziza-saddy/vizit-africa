import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ListingCard, { type ListingCardProps } from "../listing-card";
import { SectionContainer } from "../ui/section";

const featuredListings: ListingCardProps[] = [
	{
		id: "1",
		title: "Luxury Safari Lodge",
		location: "Volcanoes National Park",
		price: 350,
		rating: 4.9,
		reviewCount: 128,
		image: "",
		category: "hotel",
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
