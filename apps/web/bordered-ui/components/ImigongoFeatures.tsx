import { ImigongoGrid } from "./ImigongoGrid";
import { ShieldCheck, Leaf, Heart, MonitorCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Guides",
    desc: "Every guide is vetted for expertise and authenticity.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    desc: "Adventures that respect and preserve our natural heritage.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "Direct support to local artisans and communities.",
  },
  {
    icon: MonitorCheck,
    title: "Easy Booking",
    desc: "Seamless digital experience for ancient traditions.",
  },
];

export function ImigongoFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-imigongo-black mb-4">
          Why Choose Us
        </h2>
        <div className="mx-auto w-24 h-1 bg-imigongo-ochre/20" />
      </div>

      <ImigongoGrid
        cols={4}
        className="border-t border-b border-imigongo-black/10"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 flex flex-col items-center text-center group hover:bg-imigongo-black/5 transition-colors"
          >
            <div className="relative mb-6 p-4">
              {/* Diamond Frame for Icon */}
              <div className="absolute inset-0 border border-imigongo-ochre rotate-45 scale-75 group-hover:bg-imigongo-ochre group-hover:scale-90 transition-all duration-500" />
              <f.icon className="w-8 h-8 text-imigongo-black relative z-10 group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-imigongo-black mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {f.desc}
            </p>
          </div>
        ))}
      </ImigongoGrid>
    </div>
  );
}
