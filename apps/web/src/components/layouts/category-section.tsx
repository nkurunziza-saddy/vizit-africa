import { Link } from "@tanstack/react-router";
import { Building2, Home, Car, Compass } from "lucide-react";

const categories = [
  {
    name: "Hotels",
    description: "Premium stays",
    icon: Building2,
    href: "/listings",
    search: { category: "hotel" }
  },
  {
    name: "BnBs",
    description: "Local homestays",
    icon: Home,
    href: "/listings",
    search: { category: "bnb" }
  },
  {
    name: "Transport",
    description: "Safari vehicles",
    icon: Car,
    href: "/listings",
    search: { category: "car" }
  },
  {
    name: "Tours",
    description: "Guided experiences",
    icon: Compass,
    href: "/listings",
    search: { category: "tour" }
  },
];

export const CategorySection = () => {
  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.name} to={category.href} search={category.search} className="group block focus:outline-none">
              <div className="flex flex-col items-start p-4 hover:bg-muted/30 rounded-lg transition-colors border border-transparent hover:border-border/50">
                 <div className="mb-3 text-foreground group-hover:text-primary transition-colors">
                    <category.icon className="h-5 w-5" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
