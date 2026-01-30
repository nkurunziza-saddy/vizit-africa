"use client";

import React from "react";

// Individual tree SVG component
export function Tree({
  className = "",
  size = "medium",
  variant = 1,
}: {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: number;
}) {
  const sizes = {
    small: "w-24 h-32",
    medium: "w-32 h-48",
    large: "w-48 h-64",
  };

  const variants = [
    // Variant 1: Tall pine tree
    `<svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trunk1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#6b4423;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5a2b;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="foliage1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#1b3d2e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d5a3d;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M 30 5 L 5 35 L 15 35 L 10 55 L 20 55 L 12 80 L 28 80 L 28 95 Q 28 100 30 100 Q 32 100 32 95 L 32 80 L 48 80 L 40 55 L 50 55 L 45 35 L 55 35 Z" fill="url(#foliage1)" stroke="#0d2818" strokeWidth="0.5"/>
      <rect x="26" y="85" width="8" height="15" fill="url(#trunk1)" stroke="#5d3a1f" strokeWidth="0.5"/>
    </svg>`,

    // Variant 2: Bushy tree
    `<svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trunk2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#6b4423;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5a2b;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="foliage2" cx="50%" cy="35%">
          <stop offset="0%" style="stop-color:#3d6b4e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1b3d2e;stop-opacity:1" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="35" r="28" fill="url(#foliage2)" stroke="#0d2818" strokeWidth="0.5"/>
      <circle cx="18" cy="25" r="18" fill="url(#foliage2)" stroke="#0d2818" strokeWidth="0.5" opacity="0.8"/>
      <circle cx="42" cy="25" r="18" fill="url(#foliage2)" stroke="#0d2818" strokeWidth="0.5" opacity="0.8"/>
      <rect x="26" y="60" width="8" height="40" fill="url(#trunk2)" stroke="#5d3a1f" strokeWidth="0.5"/>
    </svg>`,

    // Variant 3: Sparse tree
    `<svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trunk3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#6b4423;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5a2b;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="foliage3">
          <stop offset="0%" style="stop-color:#2d5a3d;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a3328;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M 30 10 L 15 30 L 8 30 L 25 50 L 5 50 L 30 75 L 55 50 L 35 50 L 52 30 L 45 30 Z" fill="url(#foliage3)" stroke="#0d2818" strokeWidth="0.5"/>
      <rect x="27" y="75" width="6" height="25" fill="url(#trunk3)" stroke="#5d3a1f" strokeWidth="0.5"/>
    </svg>`,
  ];

  const selectedVariant = variants[(variant - 1) % variants.length];

  return (
    <div
      className={`${sizes[size]} ${className} inline-block`}
      dangerouslySetInnerHTML={{ __html: selectedVariant }}
    />
  );
}

// Forest accent - scattered foliage
export function ForestAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-forest/20 ${className}`}
    >
      <defs>
        <radialGradient id="leafAccent" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#3d6b4e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1b3d2e" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      {/* Scattered leaf shapes */}
      <circle cx="40" cy="60" r="25" fill="url(#leafAccent)" />
      <circle cx="160" cy="40" r="30" fill="url(#leafAccent)" />
      <circle cx="100" cy="150" r="28" fill="url(#leafAccent)" />
      <circle cx="50" cy="170" r="20" fill="url(#leafAccent)" />
      <circle cx="170" cy="140" r="22" fill="url(#leafAccent)" />
    </svg>
  );
}

// Vines decoration
export function Vines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="vineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d5a3d" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1b3d2e" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M 0 20 Q 50 10 100 30 T 200 25 T 300 35 T 400 20"
        stroke="url(#vineGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 0 60 Q 60 50 120 70 T 240 65 T 360 80 T 400 70"
        stroke="url(#vineGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 0 100 Q 70 95 140 110 T 280 105 T 400 115"
        stroke="url(#vineGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

// Scattered background forest elements
export function ScatteredForest({ className = "" }: { className?: string }) {
  const sizes: ("small" | "medium" | "large")[] = ["small", "medium", "large"];
  const trees = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: sizes[Math.floor(Math.random() * 3)],
    variant: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: 0.3 + Math.random() * 0.4,
    delay: i * 0.1,
  }));

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {trees.map((tree) => (
        <div
          key={tree.id}
          className="absolute"
          style={{
            left: tree.left,
            top: tree.top,
            opacity: tree.opacity,
            animation: `float ${4 + Math.random() * 2}s ease-in-out ${tree.delay}s infinite`,
          }}
        >
          <Tree size={tree.size} variant={tree.variant} />
        </div>
      ))}
    </div>
  );
}

// Corner forest decoration
export function ForestCorner({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const positionClasses = {
    "top-left": "top-0 left-0 rotate-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
    "bottom-left": "bottom-0 left-0 -rotate-90",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} opacity-10 w-64 h-64 pointer-events-none ${className}`}
    >
      <Tree size="large" variant={1} className="w-full h-full" />
    </div>
  );
}
