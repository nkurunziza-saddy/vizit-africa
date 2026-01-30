// Curated Unsplash images for Rwanda tourism
// All images are high-quality, relevant to Rwanda/forest/travel themes

export const unsplashImages = {
  // Hero - Dramatic mountain/forest landscape
  hero: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",

  // Regions - Card Deck
  virunga:
    "https://images.unsplash.com/photo-1535083783855-76462b2f9ce8?w=800&q=80", // Mountain gorilla habitat
  nyungwe:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", // Rainforest canopy
  lakeKivu:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Lake/mountains
  kigali:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", // Modern African city

  // Horizontal Journey Scenes
  deepForest:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", // Misty forest path
  bamboo:
    "https://images.unsplash.com/photo-1596324608967-d436251b0e3e?w=1200&q=80", // Bamboo forest
  mountainVista:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", // Mountain peaks
  lakeside:
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80", // Lake sunset

  // Featured Listings (generic beautiful travel images)
  lodge:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  safari:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
  resort:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
  camp: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&q=80",

  // Final CTA
  finalCta:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80", // Dramatic landscape
};

// Helper to get image with fallback
export function getImage(
  key: keyof typeof unsplashImages,
  fallback?: string,
): string {
  return unsplashImages[key] || fallback || unsplashImages.hero;
}
