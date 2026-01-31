import { Search, Calendar, Users, MapPin } from "lucide-react";
import { PatternZigZag } from "./ImigongoPatterns";

export function ImigongoHero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end pb-20 overflow-hidden bg-imigongo-black">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=2838&auto=format&fit=crop"
          alt="Rwanda Landscape"
          className="w-full h-full object-cover scale-105"
        />
        {/* Heavy Vignette & tint for interaction */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-imigongo-black via-transparent to-black/60" />

        {/* Structural Grid Overlay - The "Window Pane" Effect */}
        <div className="absolute inset-x-4 md:inset-x-12 inset-y-8 border-l border-r border-white/20 pointer-events-none grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4">
          <div className="hidden md:block col-span-1 border-r border-white/10 h-full" />
          <div className="hidden lg:block col-span-1 border-r border-white/5 h-full" />
          <div className="col-span-full lg:col-span-8 h-full" />
          <div className="hidden lg:block col-span-1 border-l border-white/5 h-full" />
          <div className="hidden md:block col-span-1 border-l border-white/10 h-full" />
        </div>
      </div>

      {/* Content - Aligned to Grid */}
      <div className="relative z-10 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 items-end">
        {/* Headline Area */}
        <div className="col-span-1 md:col-span-3 lg:col-span-7 mb-8 lg:mb-0">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-imigongo-ochre" />
            <span className="text-white font-bold uppercase tracking-[0.2em] text-sm">
              Experience Rwanda
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-black text-white uppercase tracking-tighter mb-8">
            Wild <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-imigongo-ochre to-white opacity-90">
              Beauty
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl leading-relaxed">
            A curated collection of the most breathtaking adventures in the Land
            of a Thousand Hills.
          </p>
        </div>

        {/* Structural Search Widget - Taking up remaining columns */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 w-full">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 text-white/80 uppercase text-xs font-bold tracking-widest border-b border-white/10 pb-4">
              <Search className="w-4 h-4 text-imigongo-ochre" />
              Start your journey
            </div>

            <div className="grid gap-4">
              <div className="group relative">
                <label className="text-[10px] font-bold text-imigongo-ochre uppercase tracking-wider mb-1 block">
                  Destination
                </label>
                <div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors cursor-pointer">
                  <span className="text-2xl text-white font-light">Kigali</span>
                  <MapPin className="w-5 h-5 text-white/50" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group relative">
                  <label className="text-[10px] font-bold text-imigongo-ochre uppercase tracking-wider mb-1 block">
                    Date
                  </label>
                  <div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors cursor-pointer">
                    <span className="text-xl text-white font-light">
                      Anytime
                    </span>
                    <Calendar className="w-4 h-4 text-white/50" />
                  </div>
                </div>
                <div className="group relative">
                  <label className="text-[10px] font-bold text-imigongo-ochre uppercase tracking-wider mb-1 block">
                    Guests
                  </label>
                  <div className="flex items-center justify-between border-b border-white/30 pb-2 group-hover:border-white transition-colors cursor-pointer">
                    <span className="text-xl text-white font-light">
                      2 Adults
                    </span>
                    <Users className="w-4 h-4 text-white/50" />
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-4 bg-imigongo-ochre text-white font-black uppercase tracking-widest hover:bg-white hover:text-imigongo-black transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-4 z-10 opacity-30">
        <PatternZigZag className="w-full h-full text-white" />
      </div>
    </div>
  );
}
