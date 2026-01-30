"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LeafCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  variant?: "oak" | "maple" | "fern" | "simple";
  color?: string;
  className?: string;
}

const leafPaths = {
  oak: "M50 5 C30 15 15 30 10 50 C5 70 15 85 30 90 C40 93 45 95 50 98 C55 95 60 93 70 90 C85 85 95 70 90 50 C85 30 70 15 50 5 Z",
  maple:
    "M50 5 L45 25 L30 20 L35 35 L15 35 L30 50 L15 65 L35 65 L30 80 L45 75 L50 95 L55 75 L70 80 L65 65 L85 65 L70 50 L85 35 L65 35 L70 20 L55 25 Z",
  fern: "M50 95 Q45 80 40 70 Q35 60 30 50 Q25 40 20 30 Q25 35 30 40 Q35 45 40 50 Q45 55 50 60 Q55 55 60 50 Q65 45 70 40 Q75 35 80 30 Q75 40 70 50 Q65 60 60 70 Q55 80 50 95 M50 60 Q48 50 46 40 Q44 30 42 20 Q46 28 50 35 Q54 28 58 20 Q56 30 54 40 Q52 50 50 60",
  simple:
    "M50 10 C35 20 25 35 25 55 C25 75 40 85 50 95 C60 85 75 75 75 55 C75 35 65 20 50 10 Z",
};

export function LeafCard({
  title,
  description,
  image,
  href,
  variant = "simple",
  color = "bg-forest",
  className = "",
}: LeafCardProps) {
  const path = leafPaths[variant];

  return (
    <Link href={href} className={`group block ${className}`}>
      <div className="relative w-full max-w-sm mx-auto">
        <div
          className="relative overflow-hidden transition-transform duration-500 group-hover:scale-105"
          style={{
            clipPath: `path('${path}')`,
            aspectRatio: "1/1.2",
          }}
        >
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${color}`}
            style={{
              clipPath: `path('${path}')`,
              padding: "4px",
              background: "transparent",
              border: `3px solid currentColor`,
            }}
          />
        </div>

        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 ${color} opacity-60`}
        />
      </div>
    </Link>
  );
}

interface BranchWithLeavesProps {
  cards: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
    variant?: "oak" | "maple" | "fern" | "simple";
  }>;
  className?: string;
}

export function BranchWithLeaves({
  cards,
  className = "",
}: BranchWithLeavesProps) {
  return (
    <div className={`relative py-20 ${className}`}>
      {/* Branch SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50 Q300 20 600 50 T1200 50"
          fill="none"
          stroke="#6b4423"
          strokeWidth="4"
        />
        {/* Small branches */}
        <path d="M200 42 L220 20" stroke="#6b4423" strokeWidth="2" />
        <path d="M400 58 L420 80" stroke="#6b4423" strokeWidth="2" />
        <path d="M600 50 L620 25" stroke="#6b4423" strokeWidth="2" />
        <path d="M800 45 L820 70" stroke="#6b4423" strokeWidth="2" />
        <path d="M1000 52 L1020 30" stroke="#6b4423" strokeWidth="2" />
      </svg>

      {/* Cards hanging from branch */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-16 px-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative"
            style={{
              transformOrigin: "top center",
              animation: `sway ${3 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {/* Vine connector */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-forest/40" />

            <LeafCard
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href}
              variant={card.variant || "simple"}
            />
          </div>
        ))}
      </div>

      {/* CSS for swaying animation */}
      <style jsx>{`
        @keyframes sway {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
}
