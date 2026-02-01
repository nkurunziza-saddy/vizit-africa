import { ImigongoSection } from "./ImigongoSection";
import { ShieldCheck, Leaf, Heart, MonitorCheck } from "lucide-react";
import { PatternZigZag } from "./ImigongoPatterns";

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
    <ImigongoSection className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f5f1] opacity-50" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-6 text-center mb-24">
          <div className="flex items-center gap-4 justify-center">
            <PatternZigZag className="w-12 h-6 text-imigongo-ochre shrink-0" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-imigongo-black">
              Why Choose Us
            </h2>
            <PatternZigZag className="w-12 h-6 text-imigongo-ochre shrink-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center relative"
            >
              <span className="absolute -top-6 -left-2 text-[5rem] font-[family-name:Caveat] text-imigongo-ochre/20 group-hover:text-imigongo-ochre/40 transition-colors rotate-[-10deg] leading-none z-0">
                0{i + 1}
              </span>
              <div className="mb-6 relative z-10">
                <div className="w-20 h-20 border-[3px] border-imigongo-black/10 group-hover:border-imigongo-ochre bg-[#f8f5f1] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 rounded-sm">
                  <f.icon
                    className="w-8 h-8 text-imigongo-black group-hover:text-imigongo-ochre transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold uppercase tracking-[0.2em] mb-4 text-imigongo-black border-b-2 border-transparent group-hover:border-imigongo-ochre pb-1 transition-all">
                {f.title}
              </h3>

              <p className="text-sm font-serif text-imigongo-black/70 leading-relaxed max-w-xs">
                {f.desc}
              </p>

              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-px bg-imigongo-black/10 lg:group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </ImigongoSection>
  );
}
