import { PatternZigZag } from "./ImigongoPatterns";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Custom Itineraries",
    image:
      "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop",
    desc: "Tailor-made journeys designed around your interests, pace, and passions.",
  },
  {
    title: "Corporate Retreats",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
    desc: "Inspiring off-site experiences for teams, blending work with wilderness.",
  },
  {
    title: "Photography Tours",
    image:
      "https://images.unsplash.com/photo-1547619292-240402b5ae5d?q=80&w=1974&auto=format&fit=crop",
    desc: "Guided by professional photographers to capture Rwanda's golden hour.",
  },
];

export function ImigongoServices() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-2 border-imigongo-black pb-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-imigongo-black max-w-xl">
            Curated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-imigongo-ochre to-imigongo-black">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-sm text-right mt-4 md:mt-0">
            Beyond standard tours. We craft experiences.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative h-64 md:h-48 w-full border border-imigongo-black/10 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image Strip */}
              <div className="absolute inset-0 md:static md:w-1/3 h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-imigongo-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between p-8 bg-white/90 md:bg-white group-hover:bg-imigongo-black/5 transition-colors">
                <div>
                  <h3 className="text-2xl font-black uppercase text-imigongo-black mb-2 flex items-center gap-4">
                    {service.title}
                    <PatternZigZag className="w-12 h-4 text-imigongo-ochre opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>

                <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-imigongo-black text-xs font-bold uppercase tracking-widest group-hover:bg-imigongo-black group-hover:text-white transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
