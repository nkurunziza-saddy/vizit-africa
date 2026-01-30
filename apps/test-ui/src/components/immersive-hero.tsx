"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { unsplashImages } from "@/lib/images";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use class selectors for more robust targeting
      const heroText = ".hero-text-container";
      const heroImage = ".hero-image-container";
      const heroOverlay = ".hero-overlay";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Slightly shorter to feel more responsive
          pin: true,
          scrub: 1,
        },
      });

      // Animation Order:
      // 1. Text scales up drastically and fades out (zoom through)
      // 2. Image scales down (or up) to fill screen - let's go with expanding width/height

      tl.to(
        heroText,
        {
          scale: 10, // Massive scale to fly through
          opacity: 0,
          filter: "blur(20px)",
          ease: "power2.in",
          duration: 1,
        },
        0,
      )
        .to(
          heroImage,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            ease: "power2.inOut",
            duration: 1,
          },
          0,
        )
        .to(
          heroOverlay,
          {
            opacity: 0,
            duration: 0.5,
          },
          0.1,
        );

      // Hero Entry Animation
      const entryTl = gsap.timeline({ delay: 0.5 });
      entryTl
        .from(".hero-char", {
          y: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".hero-sub",
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          "-=0.5",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0A0E0D] flex items-center justify-center"
    >
      {/* Background/Portal Image */}
      <div
        ref={imageRef}
        className="hero-image-container absolute z-0 w-[40vw] h-[60vh] rounded-2xl overflow-hidden shadow-2xl origin-center"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src={unsplashImages.hero}
          alt="Rwanda Landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay that fades out */}
        <div
          ref={overlayRef}
          className="hero-overlay absolute inset-0 bg-black/40 z-10"
        />
      </div>

      {/* Hero Content */}
      <div
        ref={textRef}
        className="hero-text-container relative z-20 text-center px-4 mix-blend-difference text-white"
      >
        <p className="hero-sub text-[#E8B44A] tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-medium">
          The Heart of Africa
        </p>
        <h1 className="font-serif text-[clamp(4rem,15vw,12rem)] leading-[0.8] font-bold tracking-tighter mb-8 overflow-hidden">
          {"RWANDA".split("").map((char, i) => (
            <span key={i} className="hero-char inline-block">
              {char}
            </span>
          ))}
        </h1>
        <div className="hero-sub flex flex-col items-center gap-4">
          <p className="text-white/80 max-w-md mx-auto text-lg font-light leading-relaxed">
            A journey that begins with a single step into the extraordinary.
          </p>
          <div className="mt-8 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-50"></div>
    </section>
  );
}
