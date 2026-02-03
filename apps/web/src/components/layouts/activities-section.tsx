import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Hotel, Plane } from "lucide-react";

export default function ActivitiesSection() {
  return (
    <SectionContainer title="Activities" align="start" className="py-20">
      <Tabs defaultValue="flight" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-transparent gap-8 p-0 h-auto">
            <TabsTrigger
              value="flight"
              className="flex flex-col items-center gap-2 p-4 min-w-[120px] h-28 rounded-md border border-border data-[state=active]:bg-[#2C4A6E] data-[state=active]:text-white data-[state=active]:border-[#2C4A6E] transition-all bg-white"
            >
              <Plane className="size-12 text-primary" />
              <span className="text-xs font-medium mt-auto">Flight Booking</span>
            </TabsTrigger>
            <TabsTrigger
              value="stay"
              className="flex flex-col items-center gap-2 p-4 min-w-[120px] h-28 rounded-md border border-border data-[state=active]:bg-[#2C4A6E] data-[state=active]:text-white data-[state=active]:border-[#2C4A6E] transition-all bg-white"
            >
              <Hotel className="size-12 text-primary" />
              <span className="text-xs font-medium mt-auto">Stay Booking</span>
            </TabsTrigger>
            <TabsTrigger
              value="car"
              className="flex flex-col items-center gap-2 p-4 min-w-[120px] h-28 rounded-md border border-border data-[state=active]:bg-[#2C4A6E] data-[state=active]:text-white data-[state=active]:border-[#2C4A6E] transition-all bg-white"
            >
              <Car className="size-12 text-primary" />
              <span className="text-xs font-medium mt-auto">Car Rental</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="flight" className="mt-0">
          <div className="bg-[#2C4A6E] rounded-xl overflow-hidden shadow-lg min-h-[400px] grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000"
                alt="Airplane in flight"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Flight Booking</h3>
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                We provide online plane ticketing, to go to Africa Especially Rwanda and Start enjoying your trip
              </p>
              <div>
                <Button className="bg-white text-[#2C4A6E] hover:bg-white/90 rounded-md font-semibold px-6">
                  Book Flight
                  <span className="ml-2 text-xl leading-none">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="stay" className="mt-0">
          <div className="bg-[#2C4A6E] rounded-xl overflow-hidden shadow-lg min-h-[400px] grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Hotel"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Booking</h3>
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                Find the best places to stay at the best prices. Luxury hotels, cozy bnbs, and more.
              </p>
              <div>
                <Button className="bg-white text-[#2C4A6E] hover:bg-white/90 rounded-md font-semibold px-6">
                  Book Stay
                  <span className="ml-2 text-xl leading-none">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="car" className="mt-0">
           <div className="bg-[#2C4A6E] rounded-xl overflow-hidden shadow-lg min-h-[400px] grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000"
                alt="Safari Car"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Car Rental</h3>
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                Rent reliable vehicles for your safari adventures. 4x4s, vans, and city cars available.
              </p>
              <div>
                <Button className="bg-white text-[#2C4A6E] hover:bg-white/90 rounded-md font-semibold px-6">
                  Rent Car
                  <span className="ml-2 text-xl leading-none">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
}
