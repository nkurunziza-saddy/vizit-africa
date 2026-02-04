import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin } from "lucide-react";
import { useState } from "react";
import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

export default function HeroBanner() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="relative min-h-[90vh] flex flex-col pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2068"
          alt="African Sunset with Wildlife"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl flex-1 flex flex-col justify-center items-center text-center pb-32">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
          Travel to places, Enjoy your trip, <br /> customize your{" "}
          <span className="text-[#FFD700]">Travelling</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 drop-shadow-md">
          Discover Africa Beyond The Map. Wild beauty, rich culture,
          unforgettable moments. Your journey starts with trusted local
          experiences.
        </p>
        <div>
          <Button
            size="lg"
            className="rounded-full px-8 h-12 gap-2 text-base bg-primary hover:bg-[#1a2c42] text-white border-none"
          >
            Start Booking
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <title>Search</title>
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 -mt-24 mb-12">
        <div className="bg-white dark:bg-card border border-border/50 rounded-xl shadow-xl p-2 md:p-3 flex flex-col md:flex-row gap-0 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="flex-1 px-4 py-3 min-h-[72px] flex flex-col justify-center hover:bg-muted/20 transition-colors rounded-none group">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                  From
                </span>
                <input
                  type="text"
                  placeholder="Type the place"
                  className="w-full bg-transparent border-none p-0 h-auto text-sm font-semibold placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 truncate"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 px-4 py-3 min-h-[72px] flex flex-col justify-center hover:bg-muted/20 transition-colors rounded-none group">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                  To
                </span>
                <input
                  type="text"
                  placeholder="Type the place"
                  className="w-full bg-transparent border-none p-0 h-auto text-sm font-semibold placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 truncate"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[72px] flex flex-col justify-center">
            <Popover>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    className="w-full px-4 py-3 h-full flex items-center gap-3 hover:bg-muted/20 transition-colors rounded-none text-left"
                  />
                }
              >
                <CalendarIcon className="h-5 w-5 text-muted-foreground shrink-0" />
                <div className="flex flex-col w-full overflow-hidden">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                    Depart
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold truncate",
                      !date?.from && "text-muted-foreground/50",
                    )}
                  >
                    {date?.from ? format(date.from, "dd/MM/yy") : "dd/mm/yy"}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 min-h-[72px] flex flex-col justify-center">
            <Popover>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    className="w-full px-4 py-3 h-full flex items-center gap-3 hover:bg-muted/20 transition-colors rounded-none text-left"
                  />
                }
              >
                <CalendarIcon className="h-5 w-5 text-muted-foreground shrink-0" />
                <div className="flex flex-col w-full overflow-hidden">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                    Return
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold truncate",
                      !date?.to && "text-muted-foreground/50",
                    )}
                  >
                    {date?.to ? format(date.to, "dd/MM/yy") : "dd/mm/yy"}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="p-2 flex items-center justify-center">
            <Button
              size="lg"
              className="w-full h-full min-h-[56px] gap-2 text-sm font-semibold shadow-none bg-primary hover:bg-[#1a2c42]"
            >
              Book Flight
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Search</title>
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
