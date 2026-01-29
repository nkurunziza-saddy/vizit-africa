"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { listings, testimonials, serviceTypeLabels } from "@/lib/data";
import {
  ArrowRight,
  Star,
  MapPin,
  Plane,
  Hotel,
  Home,
  Car,
  Mountain,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = {
  flights: Plane,
  hotels: Hotel,
  bnbs: Home,
  "car-rentals": Car,
  experiences: Mountain,
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".scroll-indicator", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      // Parallax effect on hero image
      gsap.to(".hero-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Intro section animations
      gsap.from(".intro-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".intro-coordinates", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Story section parallax
      gsap.from(".story-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-paragraph", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Services section
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Featured listings
      gsap.from(".featured-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Testimonials
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const featuredListings = listings.filter((l) => l.featured).slice(0, 4);

  return (
    <main className="bg-cream min-h-screen overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div className="hero-image absolute inset-0 z-0">
          <Image
            src="https://www.discoverafrica.com/wp-content/uploads/wetu/14988/sinamatella_-_rwanda_-_virunga_-_20180914_-_630.jpg"
            alt="Rwanda Virunga Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-cream" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="hero-subtitle text-cream/90 uppercase tracking-[0.3em] text-sm mb-6">
            Welcome to
          </p>
          <h1 className="hero-title font-display text-6xl md:text-8xl lg:text-9xl text-cream mb-6 leading-none">
            MURUGO
          </h1>
          <p className="hero-subtitle font-display text-xl md:text-2xl text-gold italic mb-8">
            Your Home in the Land of a Thousand Hills
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={<Link href="/listings" />}
              size="lg"
              className="bg-terracotta hover:bg-terracotta-light text-cream rounded-none px-8 py-6 uppercase tracking-wider"
            >
              Begin Your Journey
            </Button>
            <Button
              render={<Link href="/gallery" />}
              size="lg"
              variant="outline"
              className="border-cream text-cream hover:bg-cream/10 rounded-none px-8 py-6 uppercase tracking-wider"
            >
              Explore Rwanda
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70">
          <span className="text-xs uppercase tracking-widest">
            Scroll to discover
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/70 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="intro-text font-display text-3xl md:text-4xl lg:text-5xl text-forest/80 leading-relaxed mb-12">
            There is a place in the heart of Africa where mist-shrouded
            mountains meet the sky, where ancient forests whisper secrets, and
            where the warmth of its people feels like coming home.
          </h2>
          <div className="intro-coordinates flex justify-center items-center gap-8 text-forest/50 font-mono text-sm">
            <span>1.9403 S</span>
            <div className="w-16 h-px bg-forest/20" />
            <span>29.8739 E</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="story-title font-display text-4xl md:text-5xl lg:text-6xl text-forest leading-tight mb-8">
              Here, travelers become family, and every journey tells a story.
            </h2>
          </div>
          <div className="space-y-6 text-forest/70 text-lg leading-relaxed">
            <p className="story-paragraph">
              Rwanda is more than a destination. It is a land transformed, a
              nation that has risen with grace and determination to become one
              of Africa&apos;s most inspiring success stories.
            </p>
            <p className="story-paragraph">
              From the gentle giants of the Virunga mountains to the tranquil
              shores of Lake Kivu, from the vibrant streets of Kigali to the
              ancient rainforests of Nyungwe, every corner of this remarkable
              country offers wonder.
            </p>
            <p className="story-paragraph">
              At Murugo, we believe travel should feel like coming home. We
              connect you with local hosts, authentic experiences, and the
              genuine hospitality that Rwandans are known for. Whether
              you&apos;re seeking adventure or tranquility, we&apos;ll help you
              find your place in the land of a thousand hills.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 px-6 bg-forest">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              Everything You Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {(
              Object.entries(serviceTypeLabels) as [
                keyof typeof serviceIcons,
                string,
              ][]
            ).map(([type, label]) => {
              const Icon = serviceIcons[type];
              return (
                <Link
                  key={type}
                  href={`/listings?type=${type}`}
                  className="service-card group"
                >
                  <Card className="bg-cream/5 border-cream/10 hover:bg-cream/10 transition-all duration-300 p-8 text-center rounded-none h-full">
                    <Icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-xl text-cream mb-2">
                      {label}
                    </h3>
                    <p className="text-cream/60 text-sm">
                      {type === "flights" && "Fly to Rwanda"}
                      {type === "hotels" && "Luxury stays"}
                      {type === "bnbs" && "Local homes"}
                      {type === "car-rentals" && "Explore freely"}
                      {type === "experiences" && "Unforgettable moments"}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section ref={featuredRef} className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-terracotta uppercase tracking-[0.2em] text-sm mb-4">
                Handpicked for You
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-forest">
                Featured Experiences
              </h2>
            </div>
            <Button
              render={
                <Link href="/listings" className="flex items-center gap-2" />
              }
              variant="ghost"
              className="text-forest hover:text-terracotta group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                className="featured-card group"
              >
                <Card className="overflow-hidden border-0 shadow-none bg-transparent">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-forest text-cream rounded-none">
                      {serviceTypeLabels[listing.type]}
                    </Badge>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-sm text-forest/60 mb-2">
                      <MapPin className="w-3 h-3" />
                      {listing.location}
                    </div>
                    <h3 className="font-display text-xl text-forest group-hover:text-terracotta transition-colors mb-2">
                      {listing.title}
                    </h3>
                    <p className="text-forest/60 text-sm mb-3 line-clamp-2">
                      {listing.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span className="text-sm font-medium text-forest">
                          {listing.rating}
                        </span>
                        <span className="text-sm text-forest/50">
                          ({listing.reviews})
                        </span>
                      </div>
                      <span className="font-display text-lg text-terracotta">
                        ${listing.price}
                        <span className="text-sm text-forest/50">
                          {listing.duration ? `/${listing.duration}` : "/night"}
                        </span>
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} className="py-24 px-6 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-terracotta uppercase tracking-[0.2em] text-sm mb-4">
              Stories from Our Guests
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-forest">
              Travelers Who Found Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="testimonial-card bg-cream p-8 border-0 shadow-lg rounded-none"
              >
                <p className="text-forest/70 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display text-forest font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-forest/50 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/take-memories/images/f_auto,dpr_auto,q_auto,w_2000,c_fill,h_1200/gm/hbb8oblj5tozmimydbaz/rwanda-sehenswurdigkeiten"
            alt="Rwanda Gorilla"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-6">
            Ready to Find Your Home in Rwanda?
          </h2>
          <p className="text-cream/80 text-xl mb-10 max-w-2xl mx-auto">
            Let us help you plan an unforgettable journey to the heart of
            Africa. Your adventure in the land of a thousand hills awaits.
          </p>
          <Button
            render={<Link href="/listings" />}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-forest rounded-none px-10 py-7 uppercase tracking-wider text-base font-medium"
          >
            Start Planning
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
