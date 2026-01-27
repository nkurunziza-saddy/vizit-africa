import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero';
import CategorySection from '@/components/layouts/category-section';
import FeaturedListings from '@/components/layouts/featured-listings';
import DestinationsSection from '@/components/layouts/destinations-section';
import TrustSection from '@/components/layouts/trust-section';
import NewsletterSection from '@/components/layouts/newsletter-section';
import { StickyFooter } from '@/components/footer';
import { LogoCloud as PartnersSection } from '@/components/partners-section';
import TestimonialsSection from '@/components/layouts/testimonials-section';
import { FaqsSection } from '@/components/faqs-section';

export const Route = createFileRoute('/')({ 
  component: IndexPage 
})

function IndexPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PartnersSection />
      <CategorySection />
      <FeaturedListings />
      <DestinationsSection />
      <TrustSection />
      <TestimonialsSection />
      <FaqsSection />
      <NewsletterSection />
      <StickyFooter />
    </div>
  );
};

