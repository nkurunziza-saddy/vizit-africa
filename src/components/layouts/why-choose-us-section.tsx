import { SectionContainer } from "@/components/ui/section";
import { Headphones, Lock, Wallet } from "lucide-react";

const features = [
  {
    title: "Best prices",
    description:
      "Compare and find the best deals on flights, hotels, apartments, and car rentals.",
    icon: Wallet,
    color: "text-blue-500", // Using explicit colors to match design icons
    bgColor: "bg-blue-50",
  },
  {
    title: "24/7 Support",
    description:
      "Your payment information is encrypted and protected with industry-leading security.",
    icon: Headphones,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Secure Booking",
    description:
      "Our dedicated support team is always available to help with your travel needs.",
    icon: Lock,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

export default function WhyChooseUsSection() {
  return (
    <SectionContainer title="Why Choose Us" align="start" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-border/60 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-card h-full"
          >
            <div className={`h-16 w-16 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}>
              <feature.icon className={`h-8 w-8 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm px-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
