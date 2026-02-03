import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000",
    alt: "Photographer in the wild",
    className: "rotate-[-2deg] mt-8",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    alt: "Luxury Resort Pool",
    className: "rotate-[0deg] z-10 scale-105 shadow-2xl",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000",
    alt: "Safari Jeep with Giraffes",
    className: "rotate-[2deg] mt-8",
  },
];

export default function GallerySection() {
  return (
    <SectionContainer title="Our Recent Gallery" align="start" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mb-12">
        {galleryImages.map((image, i) => (
          <div
            key={i}
            className={`relative rounded-3xl overflow-hidden aspect-[3/4] transition-all hover:scale-105 hover:rotate-0 hover:z-20 duration-500 ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full px-8 h-10 border-primary/20 text-foreground hover:bg-muted">
          View More
        </Button>
      </div>
    </SectionContainer>
  );
}
