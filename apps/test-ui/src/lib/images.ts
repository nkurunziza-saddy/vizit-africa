// Curated Unsplash images for Rwanda tourism
// All images are high-quality, relevant to Rwanda/forest/travel themes

export const unsplashImages = {
  // Hero - Dramatic mountain/forest landscape
  hero: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000",

  // Regions - Card Deck
  virunga:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", // Gorilla/Primate
  nyungwe:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800", // Forest
  lakeKivu:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800", // Lake (Generic beautiful beach/lake)
  kigali:
    "https://images.unsplash.com/photo-1550961806-03f6f212727e?q=80&w=800", // City

  // Horizontal Journey Scenes
  deepForest:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200", // Forest path
  bamboo:
    "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=1200", // Bamboo-like forest
  mountainVista:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200", // Mountains
  lakeside:
    "https://images.unsplash.com/photo-1499363536502-87642509e31b?q=80&w=1200", // Lake evening

  // Featured Listings (generic beautiful travel images)
  lodge:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
  safari:
    "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=600",
  resort:
    "https://images.unsplash.com/photo-1571896349842-812e88e34e59?q=80&w=600",
  camp: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600",

  // Final CTA
  finalCta:
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000",
};

// Helper to get image with fallback
export function getImage(
  key: keyof typeof unsplashImages,
  fallback?: string,
): string {
  return unsplashImages[key] || fallback || unsplashImages.hero;
}
