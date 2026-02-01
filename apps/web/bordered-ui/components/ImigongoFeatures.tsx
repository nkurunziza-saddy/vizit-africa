import { ImigongoSection } from "./ImigongoSection";
import { ShieldCheck, Leaf, Heart, MonitorCheck } from "lucide-react";
import { ImigongoSectionTitle } from "./ImigongoSectionTitle";
import { PatternDiamond, PatternZigZag } from "./ImigongoPatterns";

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
        <ImigongoSectionTitle
          title={
            <>
              Why Choose <span className="text-imigongo-ochre">Us</span>
            </>
          }
          tooltip={
            <div className="flex flex-col gap-1">
              <h4 className="font-bold uppercase tracking-widest text-imigongo-ochre text-xs">
                Indatwa (The Exemplary)
              </h4>
              <p className="font-light text-xs leading-relaxed opacity-80">
                A seal of excellence and integrity in our service.
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-imigongo-ochre/20 transition-all duration-500 bg-white/50 hover:bg-white"
            >
              <div className="mb-8 relative z-10">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <PatternDiamond className="absolute inset-0 w-full h-full text-imigongo-black/10 group-hover:text-imigongo-ochre transition-colors duration-500 scale-150" />
                  <div className="relative z-10 bg-white w-16 h-16 rotate-45 border border-imigongo-black flex items-center justify-center group-hover:bg-imigongo-black transition-colors duration-500 overflow-hidden shadow-lg">
                    <f.icon
                      className="w-8 h-8 -rotate-45 text-imigongo-black group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              <span className="absolute top-4 right-4 text-4xl font-[family-name:Caveat] text-imigongo-black/10 group-hover:text-imigongo-ochre/40 transition-colors pointer-events-none">
                0{i + 1}
              </span>

              <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-4 text-imigongo-black group-hover:text-imigongo-ochre transition-colors">
                {f.title}
              </h3>

              <div className="w-12 h-px bg-imigongo-black/20 mb-4 group-hover:bg-imigongo-ochre transition-colors" />

              <p className="text-sm font-serif text-imigongo-black/70 leading-relaxed">
                {f.desc}
              </p>

              {/* Vertical ZigZag Divider for Desktop (except last item) */}
              <div className="hidden lg:block absolute right-[-1rem] top-1/2 -translate-y-1/2 h-32 w-4 opacity-10 group-last:hidden pointer-events-none">
                <PatternZigZag className="h-full w-full text-imigongo-black rotate-90" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ImigongoSection>
  );
}
