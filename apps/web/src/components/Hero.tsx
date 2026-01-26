import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-24 md:py-32">
 

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Discover <span className="text-primary">Rwanda</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the land of a thousand hills. Find unique stays, premium cars, and expert guides for your journey.
        </p>
        
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg p-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative w-full md:w-[35%] group">
                     <div className="flex items-center gap-3 px-6 h-14 rounded-full bg-secondary/50 border border-transparent group-hover:border-border/50 transition-colors cursor-pointer">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div className="text-left flex-1">
                             <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Where</div>
                             <div className="font-semibold text-sm truncate">Rwanda</div>
                        </div>
                     </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-border/50" />

                <div className="relative w-full md:w-[30%] group">
                    <div className="flex items-center gap-3 px-6 h-14 rounded-full bg-transparent hover:bg-secondary/50 border border-transparent transition-colors cursor-pointer">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div className="text-left flex-1">
                             <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">When</div>
                             <div className="font-semibold text-sm text-foreground/80">Add dates</div>
                        </div>
                     </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-border/50" />

                <div className="relative w-full md:w-[25%] group">
                    <div className="flex items-center gap-3 px-6 h-14 rounded-full bg-transparent hover:bg-secondary/50 border border-transparent transition-colors cursor-pointer">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div className="text-left flex-1">
                             <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Who</div>
                             <div className="font-semibold text-sm text-foreground/80">Add guests</div>
                        </div>
                     </div>
                </div>

                 <div className="w-full md:w-auto p-1">
                    <Link to="/listings" search={{ category: 'all' }}>
                        <Button size="lg" className="w-full md:w-auto rounded-full h-12 px-8 gap-2 shadow-md">
                            <Search className="h-4 w-4" />
                            <span>Explore</span>
                        </Button>
                    </Link>
                 </div>
             </div>
        </div>

         <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
             <span className="hidden md:inline">Popular:</span>
             <Link to="/listings" search={{ category: 'hotel' }} className="hover:text-primary transition-colors cursor-pointer px-3 py-1 rounded-full border border-transparent hover:border-border hover:bg-secondary/30">Hotels</Link>
             <Link to="/listings" search={{ category: 'car' }} className="hover:text-primary transition-colors cursor-pointer px-3 py-1 rounded-full border border-transparent hover:border-border hover:bg-secondary/30">Car Rentals</Link>
             <Link to="/listings" search={{ category: 'tour' }} className="hover:text-primary transition-colors cursor-pointer px-3 py-1 rounded-full border border-transparent hover:border-border hover:bg-secondary/30">Tours</Link>
         </div>
      </div>
    </div>
  );
}
