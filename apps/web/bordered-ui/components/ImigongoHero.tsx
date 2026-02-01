import { Search, Calendar, Users, MapPin } from "lucide-react";
import { PatternZigZag, PatternVerticalDiamond } from "./ImigongoPatterns";
import { motion } from "motion/react";

export function ImigongoHero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end pb-20 overflow-hidden bg-imigongo-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1688647668631-f925f5431fcd?q=80&w=2600&auto=format&fit=crop"
          alt="African Cultural Heritage"
          className="w-full h-full object-cover grayscale-20 contrast-125 brightness-50"
        />
        <div className="absolute inset-0 bg-imigongo-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-imigongo-black via-transparent to-black/30" />

        <div className="absolute top-0 right-12 bottom-0 w-32 opacity-20 pointer-events-none hidden lg:block">
          <PatternVerticalDiamond className="w-full h-full text-white/10" />
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 items-end">
        <div className="col-span-1 md:col-span-3 lg:col-span-7 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <span className="text-[10px] font-mono text-imigongo-ochre border border-imigongo-ochre/50 bg-black/50 backdrop-blur-sm px-3 py-1 uppercase tracking-widest">
              Discover Rwanda
            </span>
            <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs">
              Beyond the Ordinary
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] font-black text-white uppercase tracking-tighter mb-8 overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: 0.4,
              }}
              className="block"
            >
              Raw
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: 0.5,
              }}
              className="block text-imigongo-ochre"
            >
              Nature
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 font-light max-w-xl leading-relaxed pl-6 border-l-2 border-imigongo-ochre"
          >
            Curated expeditions into the heart of the Land of a Thousand Hills.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="col-span-1 md:col-span-4 lg:col-span-5 w-full"
        >
          <div className="bg-white border-2 border-white p-0 shadow-2xl shadow-black/50 relative">
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-imigongo-ochre -z-10" />

            <div className="flex items-center justify-between p-6 border-b border-imigongo-black/10 bg-white">
              <div className="flex items-center gap-3 text-imigongo-black uppercase text-[10px] font-black tracking-widest">
                <Search className="w-3 h-3 text-imigongo-ochre" />
                Expedition Finder
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-imigongo-black/20 rounded-full" />
                <div className="w-1 h-1 bg-imigongo-black/20 rounded-full" />
                <div className="w-1 h-1 bg-imigongo-ochre rounded-full" />
              </div>
            </div>

            <div className="grid gap-px bg-imigongo-black/10 border-b border-imigongo-black/10">
              <div className="group relative bg-white hover:bg-imigongo-black/5 transition-colors p-6 cursor-pointer">
                <label className="text-[10px] text-imigongo-black/60 uppercase tracking-widest mb-1 block font-medium">
                  Where to?
                </label>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-imigongo-black font-serif italic tracking-wide">
                    Kigali
                  </span>
                  <MapPin className="w-5 h-5 text-imigongo-black/30 group-hover:text-imigongo-ochre transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-imigongo-black/10">
                <div className="group relative bg-white hover:bg-imigongo-black/5 transition-colors p-6 cursor-pointer">
                  <label className="text-[10px] text-imigongo-black/60 uppercase tracking-widest mb-1 block font-medium">
                    When?
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-imigongo-black font-serif italic">
                      Anytime
                    </span>
                    <Calendar className="w-4 h-4 text-imigongo-black/30 group-hover:text-imigongo-ochre transition-colors" />
                  </div>
                </div>
                <div className="group relative bg-white hover:bg-imigongo-black/5 transition-colors p-6 cursor-pointer">
                  <label className="text-[10px] text-imigongo-black/60 uppercase tracking-widest mb-1 block font-medium">
                    Who?
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-imigongo-black font-bold tracking-tight">
                      2 Adults
                    </span>
                    <Users className="w-4 h-4 text-imigongo-black/30 group-hover:text-imigongo-ochre transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <button className="group w-full py-6 bg-imigongo-black text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-imigongo-ochre transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Begin Search
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 z-10 opacity-50 mix-blend-overlay">
        <PatternZigZag className="w-full h-full text-white" />
      </div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
