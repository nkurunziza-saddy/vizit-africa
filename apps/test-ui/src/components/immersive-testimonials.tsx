"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

interface ImmersiveTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function ImmersiveTestimonials({
  testimonials,
  className = "",
}: ImmersiveTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing triggers
    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    const ctx = gsap.context(() => {
      // Entrance animation
      const entranceTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => setIsVisible(true),
      });
      triggersRef.current.push(entranceTrigger);

      // Progress through testimonials on scroll
      const progressTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * testimonials.length),
            testimonials.length - 1,
          );
          if (newIndex !== activeIndex) {
            transitionToTestimonial(newIndex);
          }
        },
      });
      triggersRef.current.push(progressTrigger);
    }, containerRef);

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, [testimonials.length, activeIndex]);

  const transitionToTestimonial = (newIndex: number) => {
    const timeline = gsap.timeline();

    // Animate out current
    if (quoteRef.current) {
      timeline.to(quoteRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }

    if (imageRef.current) {
      timeline.to(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "<",
      );
    }

    // Update index
    timeline.call(() => setActiveIndex(newIndex));

    // Animate in new
    if (quoteRef.current) {
      timeline.fromTo(
        quoteRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    }

    if (imageRef.current) {
      timeline.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "<",
      );
    }
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen py-32 bg-[#0A0E0D] overflow-hidden ${className}`}
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeIndex % 2 === 0 ? "rgba(200, 90, 58, 0.1)" : "rgba(232, 180, 74, 0.1)"} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeIndex % 2 === 0 ? "rgba(232, 180, 74, 0.08)" : "rgba(200, 90, 58, 0.08)"} 0%, transparent 70%)`,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#E8B44A] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Stories of Transformation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Voices From The <span className="italic">Journey</span>
          </h2>
        </div>

        {/* Main testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote side */}
          <div ref={quoteRef} className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-8 -left-4 text-[120px] text-[#E8B44A]/10 font-serif leading-none select-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial?.rating
                      ? "fill-[#E8B44A] text-[#E8B44A]"
                      : "text-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-8">
                {currentTestimonial?.text}
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#E8B44A]/30">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">
                  {currentTestimonial?.name}
                </p>
                <p className="text-white/50 text-sm">
                  {currentTestimonial?.location}
                </p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={currentTestimonial?.image}
                alt={currentTestimonial?.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E0D]/60 via-transparent to-transparent" />

              {/* Decorative frame */}
              <div className="absolute inset-4 border border-white/10 rounded-xl pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-[#1A2420] border border-white/10 rounded-full">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#E8B44A]" />
                <span className="text-white text-sm font-medium">
                  Verified Traveler
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => transitionToTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-12 bg-[#E8B44A]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <span className="text-white/30 font-mono text-sm">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
