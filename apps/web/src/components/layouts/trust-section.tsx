import { Shield, CreditCard, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Partners",
    description: "Every listing is vetted by our team.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and secure transactions.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Competitive pricing for all adventures.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Why Vizit Africa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 text-foreground">
                <feature.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div>
                  <h3 className="text-sm font-medium mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
