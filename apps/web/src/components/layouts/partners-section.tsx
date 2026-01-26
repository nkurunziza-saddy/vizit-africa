import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  {
    name: "Vercel",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvvt1ykgzouy.svg",
  },
  {
    name: "Supabase",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pb2jkefwv169wja3xzkq.svg",
  },
  {
    name: "Nvidia",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/c446umfu4d27ihf4i8q5.svg",
  },
  {
    name: "OpenAI",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/i6yv4t8d4z3257o9r5g2.svg",
  },
  {
    name: "Google",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/h617bd22tq12r4g6g23.svg",
  },
  {
    name: "Mistral",
    src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/f7123d14-3615-4630-9755-b5e2u7h6f5g4.svg",
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-12 border-b border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl mb-6">
             <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center">Trusted by industry leaders</p>
        </div>
      <div className="relative w-full max-w-7xl mx-auto">
        <InfiniteSlider gap={24} duration={30} durationOnHover={75}>
          {logos.map((logo) => (
            <div key={logo.name} className="h-12 w-32 flex items-center justify-center opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          direction="left"
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          direction="right"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
