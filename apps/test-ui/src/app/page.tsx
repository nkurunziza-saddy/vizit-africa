"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { listings, testimonials } from "@/lib/data";
import { unsplashImages } from "@/lib/images";
import { ArrowRight, Star, MapPin, Heart, Compass } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-overlay", { scale: 1.3, duration: 1.8 })
        .from(
          ".hero-title-word",
          { y: 200, opacity: 0, rotateX: -90, stagger: 0.15, duration: 1.2 },
          0.3,
        )
        .from(".hero-subtitle", { y: 60, opacity: 0, duration: 1 }, 1)
        .from(".hero-cta", { scale: 0.8, opacity: 0, duration: 0.9 }, 1.3);

      gsap.to(".hero-image", {
        yPercent: 50,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".scroll-pulse", {
        scale: 1.2,
        opacity: 0.4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#0A0E0D] min-h-screen overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#1A2420] z-[100]">
        <div
          className="h-full bg-gradient-to-r from-[#C85A3A] via-[#E8B44A] to-[#C85A3A] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="hero-image absolute inset-0 z-0">
          <Image
            src={unsplashImages.hero}
            alt="Rwanda Mountains"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Compass className="w-4 h-4 text-[#E8B44A]" />
            <span className="text-white/90 text-xs font-medium tracking-[0.2em] uppercase">
              A Journey Awaits
            </span>
          </div>

          <h1 className="mb-6 leading-[0.9]">
            <div className="overflow-hidden mb-1">
              <span className="hero-title-word inline-block font-serif text-[clamp(2.5rem,10vw,8rem)] font-bold text-white tracking-tight">
                Rwanda
              </span>
            </div>
            <div className="overflow-hidden mb-1">
              <span className="hero-title-word inline-block font-serif text-[clamp(2.5rem,10vw,8rem)] font-bold text-white tracking-tight">
                Calls
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-word inline-block font-serif text-[clamp(2.5rem,10vw,8rem)] font-bold text-[#E8B44A] tracking-tight italic">
                You Home
              </span>
            </div>
          </h1>

          <p className="hero-subtitle font-light text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where ancient forests whisper stories, mountain gorillas walk among
            mist, and every sunset paints the sky in colors you've only dreamed
            of.
          </p>

          <div className="hero-cta">
            <Link href="/listings">
              <Button
                size="lg"
                className="group bg-[#C85A3A] hover:bg-[#A04A2E] text-white font-medium rounded-none px-10 py-6 uppercase tracking-[0.15em] text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Begin Your Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0A0E0D] via-[#0F1512] to-[#0A0E0D]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8B44A] to-transparent mx-auto mb-6" />

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6">
            Land of a{" "}
            <span className="text-[#E8B44A] italic">Thousand Hills</span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            A place where nature commands reverence, endangered giants roam
            free, and the spirit of Ubuntu pulses through every interaction.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { number: "400+", label: "Gorillas" },
              { number: "13", label: "Volcanoes" },
              { number: "~13M", label: "People" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 md:p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#E8B44A] mb-1">
                  {stat.number}
                </p>
                <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <RegionsSection />

      {/* Journey Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0A0E0D] to-[#0F1512]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8B44A] to-transparent mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
              The <span className="text-[#E8B44A] italic">Journey</span>
            </h2>
            <p className="text-white/50 text-sm">
              From forest floor to mountain peak
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { title: "Ancient Depths", image: unsplashImages.deepForest },
              { title: "Bamboo Forests", image: unsplashImages.bamboo },
              { title: "Mountain Peaks", image: unsplashImages.mountainVista },
              { title: "Lake Shores", image: unsplashImages.lakeside },
            ].map((scene, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden bg-[#1A2420] cursor-pointer"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#E8B44A]/20 border border-[#E8B44A]/40 flex items-center justify-center">
                  <span className="text-[#E8B44A] text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-serif text-base md:text-lg font-bold text-white">
                    {scene.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E8B44A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 md:py-28 px-6 bg-[#0F1512]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8B44A] to-transparent mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
              Curated <span className="text-[#E8B44A] italic">Experiences</span>
            </h2>
            <p className="text-white/50 text-sm">
              Hand-selected by local hosts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {listings
              .filter((l) => l.featured)
              .slice(0, 4)
              .map((listing) => (
                <Link
                  key={listing.id}
                  href={`/listings/${listing.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1A2420]">
                    <Image
                      src={listing.image || unsplashImages.lodge}
                      alt={listing.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <Badge className="bg-[#C85A3A] text-white text-[10px] font-bold border-0 px-2 py-0.5">
                        {listing.type.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <h3 className="font-serif text-base font-bold text-white mb-1 line-clamp-1">
                        {listing.title}
                      </h3>
                      <div className="flex items-center gap-1 text-white/60 text-xs mb-2">
                        <MapPin className="w-3 h-3" />
                        <span className="line-clamp-1">{listing.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#E8B44A] text-[#E8B44A]" />
                        <span className="text-white text-xs font-medium">
                          {listing.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/listings">
              <Button
                variant="outline"
                className="group border-white/20 text-white hover:border-[#E8B44A] hover:bg-[#E8B44A]/10 rounded-none px-8 py-5 uppercase tracking-[0.15em] text-xs"
              >
                View All
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#0F1512] to-[#0A0E0D]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8B44A] to-transparent mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Stories of{" "}
              <span className="text-[#E8B44A] italic">Transformation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-white/5 border border-white/10 hover:border-[#E8B44A]/30 transition-colors"
              >
                <div className="text-4xl text-[#E8B44A]/20 font-serif mb-4">
                  "
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#E8B44A] text-[#E8B44A]"
                    />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={unsplashImages.finalCta}
            alt="Rwanda sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Heart className="w-10 h-10 text-[#E8B44A] mx-auto mb-6" />

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            Your Story
            <br />
            <span className="text-[#E8B44A] italic">Begins Now</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
            The mountains are calling. The forests are waiting. Rwanda's people
            are ready to welcome you as family.
          </p>

          <Link href="/listings">
            <Button
              size="lg"
              className="group bg-[#C85A3A] hover:bg-[#A04A2E] text-white font-medium rounded-none px-12 py-6 uppercase tracking-[0.15em] text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Regions Section with pinned scroll
function RegionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const regions = [
    {
      id: "virunga",
      title: "Virunga Mountains",
      subtitle: "Where Giants Roam",
      description:
        "Trek through mist-shrouded forests to meet mountain gorillas in their natural sanctuary.",
      image: unsplashImages.virunga,
      color: "#2D5A3D",
      accent: "#4ADE80",
    },
    {
      id: "nyungwe",
      title: "Nyungwe Forest",
      subtitle: "Ancient Rainforest",
      description:
        "Walk among canopies older than civilization. Cross suspended bridges high above the forest floor.",
      image: unsplashImages.nyungwe,
      color: "#3D7A4F",
      accent: "#86EFAC",
    },
    {
      id: "kivu",
      title: "Lake Kivu",
      subtitle: "Waters of Peace",
      description:
        "Volcanic beaches meet crystal waters. Watch fishing boats dance on waves turned gold by sunset.",
      image: unsplashImages.lakeKivu,
      color: "#2A5C7A",
      accent: "#60A5FA",
    },
    {
      id: "kigali",
      title: "Kigali",
      subtitle: "Rwanda's Heart",
      description:
        "A city that rose from ashes to become a beacon of hope. World-class dining and modern African energy.",
      image: unsplashImages.kigali,
      color: "#C85A3A",
      accent: "#FDBA74",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    const ctx = gsap.context(() => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${regions.length * 100}vh`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: (progress) => {
            const snapPoints = regions.map((_, i) => i / (regions.length - 1));
            return snapPoints.reduce((prev, curr) =>
              Math.abs(curr - progress) < Math.abs(prev - progress)
                ? curr
                : prev,
            );
          },
          duration: { min: 0.2, max: 0.4 },
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * (regions.length - 1) + 0.5),
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
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-[#0A0E0D] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {regions.map((region, index) => (
          <div
            key={region.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <Image
              src={region.image}
              alt={region.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${region.color}E6 0%, ${region.color}99 40%, transparent 100%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-6xl mx-auto">
        <div className="max-w-lg">
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
              <div
                className="w-12 h-0.5 mb-4"
                style={{ backgroundColor: region.accent }}
              />
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium mb-2"
                style={{ color: region.accent }}
              >
                {region.subtitle}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {region.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
                {region.description}
              </p>
              <Link href={`/listings?region=${region.id}`}>
                <Button
                  size="sm"
                  className="group bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-none px-6 py-4 uppercase tracking-[0.15em] text-xs transition-all"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {regions.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-[#E8B44A]" : "w-1 bg-white/30"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 text-white/40 font-mono text-xs">
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(regions.length).padStart(2, "0")}
      </div>
    </section>
  );
}
