import { Button } from "@/components/ui/button";
import { Globe, Hotel, Lock, Rocket } from "lucide-react";

export default function StatsCallout() {
  return (
    <div className="relative">
      {/* Blue Banner Section */}
      <div className="bg-[#2C4A6E] py-20 md:py-28 relative overflow-hidden text-white">
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] max-w-lg h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-8 right-[30%] text-white/20 text-xl">+</div>
        
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <Globe className="h-6 w-6 text-[#2C4A6E]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready To Adventure and travel Africa ?
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Don't miss out your chances start vooking now and get the best offers
              </p>
            </div>
          </div>
          
          <Button className="bg-white text-[#2C4A6E] hover:bg-white/90 rounded-sm font-semibold px-6 border-none">
            Start Booking
          </Button>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="container mx-auto px-4 max-w-5xl -mt-16 md:-mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center justify-center text-center gap-4 border border-border/50">
            <div className="h-16 w-16 bg-[#2C4A6E] rounded-full flex items-center justify-center text-white">
              <Rocket className="h-7 w-7" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2C4A6E]">1k+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Deals done</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center justify-center text-center gap-4 border border-border/50">
             <div className="h-16 w-16 bg-[#2C4A6E] rounded-full flex items-center justify-center text-white">
              <Hotel className="h-7 w-7" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2C4A6E]">500+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Places to stay</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center justify-center text-center gap-4 border border-border/50">
             <div className="h-16 w-16 bg-[#2C4A6E] rounded-full flex items-center justify-center text-white">
              <Lock className="h-7 w-7" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2C4A6E]">100%</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Secure Operation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
