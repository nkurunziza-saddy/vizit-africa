"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface Region {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  accent: string;
}

interface OrbitalRegionsProps {
  regions: Region[];
  className?: string;
}

export function OrbitalRegions({
  regions,
  className = "",
}: OrbitalRegionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing triggers
    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    const ctx = gsap.context(() => {
      // Create scroll-triggered section with snap
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${regions.length * 100}%`,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: (progress) => {
            const snapPoints = regions.map((_, i) => i / regions.length);
            const closest = snapPoints.reduce((prev, curr) =>
              Math.abs(curr - progress) < Math.abs(prev - progress)
                ? curr
                : prev,
            );
            return closest;
          },
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * regions.length),
            regions.length - 1,
          );
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        },
      });

      triggersRef.current.push(scrollTrigger);
    }, containerRef);

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, [regions.length, activeIndex]);

  return (
    <section
      ref={containerRef}
      className={`relative h-screen bg-[#0A0E0D] overflow-hidden ${className}`}
    >
      {/* Background gradient that shifts with active region */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${regions[activeIndex]?.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 z-50 text-center px-4">
        <p className="text-[#E8B44A] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Explore The Regions
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white">
          Orbital <span className="text-[#E8B44A] italic">Journey</span>
        </h2>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-4">
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C85A3A] to-[#E8B44A] transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / regions.length) * 100}%` }}
          />
        </div>
        <span className="text-white/60 font-mono text-sm">
          {String(activeIndex + 1).padStart(2, "0")}/
          {String(regions.length).padStart(2, "0")}
        </span>
      </div>

      {/* Main content area */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
            {regions.map((region, index) => (
              <div
                key={region.id}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: `scale(${activeIndex === index ? 1 : 1.1})`,
                }}
              >
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0D]/60 via-transparent to-transparent" />
              </div>
            ))}

            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none" />

            {/* Region number badge */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0A0E0D]/80 border border-[#E8B44A]/30 flex items-center justify-center backdrop-blur-sm">
              <span className="text-[#E8B44A] font-bold text-lg">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative order-1 lg:order-2 text-center lg:text-left">
            {/* Center compass decoration */}
            <div className="hidden lg:flex absolute -top-20 right-0 w-24 h-24 rounded-full bg-[#0A0E0D] border border-[#E8B44A]/20 items-center justify-center opacity-50">
              <Compass className="w-10 h-10 text-[#E8B44A]/50" />
            </div>

            {regions.map((region, index) => (
              <div
                key={region.id}
                className="transition-all duration-500"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: `translateY(${activeIndex === index ? 0 : 20}px)`,
                  display: activeIndex === index ? "block" : "none",
                }}
              >
                {/* Accent line */}
                <div
                  className="w-16 h-1 mb-6 mx-auto lg:mx-0"
                  style={{ backgroundColor: region.accent }}
                />

                {/* Subtitle */}
                <p
                  className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
                  style={{ color: region.accent }}
                >
                  {region.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {region.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                  {region.description}
                </p>

                {/* CTA */}
                <Link href={`/listings?region=${region.id}`}>
                  <Button
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-none px-8 py-6 uppercase tracking-[0.2em] text-sm transition-all duration-500"
                    style={{
                      borderColor: `${region.accent}40`,
                    }}
                  >
                    Explore Region
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-50 px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          {regions.map((region, index) => (
            <button
              key={region.id}
              onClick={() => {
                // Scroll to this region
                const container = containerRef.current;
                if (container) {
                  const st = ScrollTrigger.getAll().find(
                    (t) => t.trigger === container,
                  );
                  if (st) {
                    const targetScroll =
                      st.start + (st.end - st.start) * (index / regions.length);
                    window.scrollTo({
                      top: targetScroll,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-12 bg-[#E8B44A]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to ${region.title}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-6">
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Scroll to explore regions
          </span>
        </div>
      </div>
    </section>
  );
}
