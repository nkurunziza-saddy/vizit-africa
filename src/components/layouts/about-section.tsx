import { Button } from "@/components/ui/button";
import { Check, Globe, MapPin, Play } from "lucide-react";
import { SectionContainer } from "@/components/ui/section";

export default function AboutSection() {
  return (
    <SectionContainer 
      className="py-20 md:py-32"
      title="About Us"
      description="This is a platform where we get you the best places to stay and rides to make your Experience even better, we make your trip enjoyable and more accurate"
      align="start"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 w-[80%] aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000"
              alt="Rice terraces"
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="absolute top-[40%] -right-4 md:-right-12 z-20 w-[65%] aspect-square rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1000"
              alt="Sunset lake view"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:pl-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <Globe className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground">Trusted Booking</h3>
              <p className="text-sm text-muted-foreground">
                we are here to make secure deals and trusted places to go
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <MapPin className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground">Personalized trips</h3>
              <p className="text-sm text-muted-foreground">
                Make your trip as you want it to be arrange everything
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {[
              "24/7 Hours Support",
              "Quick Response",
              "Best and affordable deals",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border border-primary/30 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-primary/20 hover:border-primary text-primary hover:text-primary hover:bg-primary/5">
              Start Booking
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
