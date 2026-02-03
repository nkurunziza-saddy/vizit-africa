import { createFileRoute } from "@tanstack/react-router";
import HeroBanner from "@/components/layouts/hero-banner";
import AboutSection from "@/components/layouts/about-section";
import GallerySection from "@/components/layouts/gallery-section";
import StatsCallout from "@/components/layouts/stats-callout";
import TopHotelsSection from "@/components/layouts/top-hotels-section";
import CategoriesCarousel from "@/components/layouts/categories-carousel";
import ActivitiesSection from "@/components/layouts/activities-section";
import WhyChooseUsSection from "@/components/layouts/why-choose-us-section";
import TestimonialsSection from "@/components/layouts/testimonials-section";
import SupportBanner from "@/components/layouts/support-banner";
import { Footer } from "@/components/layouts/footer";

export const Route = createFileRoute("/_app/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HeroBanner />
      <AboutSection />
      <GallerySection />
      <StatsCallout />
      <TopHotelsSection />
      <CategoriesCarousel />
      <ActivitiesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <SupportBanner />
      <Footer />
    </div>
  );
}
