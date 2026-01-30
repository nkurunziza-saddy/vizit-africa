"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ImmersiveHero } from "@/components/immersive-hero";
import { CircularJourney } from "@/components/circular-journey";
import { HorizontalJourney } from "@/components/horizontal-journey";
import { ForestParallax } from "@/components/forest-parallax";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Lenis or simple scroll handling could be added here for smooth scroll
    // For now, we rely on native scroll + GSAP scrub
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#0A0E0D] min-h-screen text-white overflow-x-hidden selection:bg-[#C85A3A] selection:text-white">
      {/* Global Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-[#1A2420]">
        <div
          className="h-full bg-[#E8B44A] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* 1. The Opening: Immersive Hero */}
      <ImmersiveHero />

      {/* 2. The Context: stats or intro text could go here, but let's flow into the journey */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#E8B44A] uppercase tracking-widest text-sm mb-6">
          Discovery
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
          "One of the clearest and most beautiful stories I've ever seen told by
          a landscape."
        </h2>
        <p className="text-white/60 italic">- National Geographic</p>
      </section>

      {/* 3. The Exploration: Circular Navigation of Regions */}
      <CircularJourney />

      {/* 4. The Depth: Forest Parallax */}
      <ForestParallax />

      {/* 5. The Timeline: Horizontal Journey */}
      <HorizontalJourney />

      {/* 6. The Conclusion: Call to Action */}
      <section className="py-32 bg-gradient-to-b from-[#0A0E0D] to-[#0F1512] text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-10">
          Ready to Begin?
        </h2>
        <button className="bg-[#C85A3A] text-white px-12 py-6 uppercase tracking-widest hover:bg-[#A04A2E] transition-all hover:scale-105 duration-300 shadow-xl">
          Book Your Trip
        </button>
      </section>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:border-[#E8B44A] hover:text-[#E8B44A] z-50 ${
          scrollProgress > 10
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </main>
  );
}
