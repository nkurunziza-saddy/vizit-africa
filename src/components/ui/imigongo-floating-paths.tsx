export function ImigongoFloatingPaths() {
  // We will create two static "Edge" patterns.
  // One for Top/Left, One for Bottom/Right depending on position or just a general texture.

  // Authentic Imigongo is often "Zig-Zag" or "Diamond" rows.
  // We'll draw 3 rows of geometric patterns at the top and bottom edges.

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full opacity-20"
        fill="none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <title>Imigongo Edge Patterns</title>

        {/* Top Edge Pattern - Rows of Triangles/ZigZags */}
        <path
          d="M0 0 L5 5 L10 0 L15 5 L20 0 L25 5 L30 0 L35 5 L40 0 L45 5 L50 0 L55 5 L60 0 L65 5 L70 0 L75 5 L80 0 L85 5 L90 0 L95 5 L100 0"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white"
        />
        <path
          d="M0 5 L5 10 L10 5 L15 10 L20 5 L25 10 L30 5 L35 10 L40 5 L45 10 L50 5 L55 10 L60 5 L65 10 L70 5 L75 10 L80 5 L85 10 L90 5 L95 10 L100 5"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-imigongo-ochre"
        />
        <path
          d="M0 10 L5 15 L10 10 L15 15 L20 10 L25 15 L30 10 L35 15 L40 10 L45 15 L50 10 L55 15 L60 10 L65 15 L70 10 L75 15 L80 10 L85 15 L90 10 L95 15 L100 10"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white"
        />

        {/* Bottom Edge Pattern - Inverted */}
        <path
          d="M0 100 L5 95 L10 100 L15 95 L20 100 L25 95 L30 100 L35 95 L40 100 L45 95 L50 100 L55 95 L60 100 L65 95 L70 100 L75 95 L80 100 L85 95 L90 100 L95 95 L100 100"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white"
        />
        <path
          d="M0 95 L5 90 L10 95 L15 90 L20 95 L25 90 L30 95 L35 90 L40 95 L45 90 L50 95 L55 90 L60 95 L65 90 L70 95 L75 90 L80 95 L85 90 L90 95 L95 90 L100 95"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-imigongo-ochre"
        />
        <path
          d="M0 90 L5 85 L10 90 L15 85 L20 90 L25 85 L30 90 L35 85 L40 90 L45 85 L50 90 L55 85 L60 90 L65 85 L70 90 L75 85 L80 90 L85 85 L90 90 L95 85 L100 90"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white"
        />
      </svg>

      {/* Central Static Motif (Optional - Large Diamond) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rotate-45 flex items-center justify-center">
        <div className="w-80 h-80 border border-imigongo-ochre/10" />
      </div>
    </div>
  );
}
