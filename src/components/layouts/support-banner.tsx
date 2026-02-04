import { Play } from "lucide-react";

export default function SupportBanner() {
  return (
    <div className="relative h-[500px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2000"
        alt="Mountain lake sunset"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left: Text Content */}
        <div className="text-white max-w-lg mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Need Any Support ?
          </h2>
          <p className="text-white/90 text-xl font-medium mb-8">
            Reach Out to US
          </p>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-white fill-white ml-1" />
            </div>
            <span className="font-semibold text-lg border-b border-transparent group-hover:border-white transition-colors">
              View How Our Website Works
            </span>
          </div>
        </div>

        {/* Right: Polaroid Images */}
        <div className="relative flex items-center justify-center md:justify-end w-full md:w-1/2 h-full">
          {/* Image 1 - Giraffe */}
          <div className="absolute top-1/4 left-0 md:left-20 bg-white p-3 pb-8 shadow-2xl rotate-[-12deg] w-48 md:w-64 z-10 transition-transform hover:rotate-0 hover:z-30 duration-500">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=500"
              alt="Giraffe Safaris"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Image 2 - Resort */}
          <div className="absolute top-1/3 right-4 md:right-10 bg-white p-3 pb-8 shadow-2xl rotate-[6deg] w-48 md:w-64 z-20 transition-transform hover:rotate-0 hover:z-30 duration-500">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=500"
              alt="Luxury Resort"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
