const partners = [
  "RDB",
  "Mastercard Foundation",
  "Conservation Int",
  "Visit Rwanda",
  "NatGeo",
];

export function ImigongoAffiliations() {
  return (
    <div className="border-t border-b border-imigongo-black py-16 bg-imigongo-ochre text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-70 mb-8">
          Trusted Partners & Affiliations
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-80 grayscale mix-blend-screen">
          {/* Text placeholders for logos - in production these would be SVG/Images */}
          {partners.map((p) => (
            <span
              key={p}
              className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:opacity-100 transition-opacity cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
