'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { listings, serviceTypeLabels } from '@/lib/data';
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  Clock,
  Check,
  Heart,
  Share2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = listings.find((l) => l.id === params.id);
  const heroRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const gallerRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery image parallax
      gsap.to('.gallery-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: gallerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // Details fade in
      gsap.from('.detail-section', {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        scrollTrigger: {
          trigger: detailsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Amenities
      gsap.from('.amenity-item', {
        x: -40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (!listing) {
    return (
      <main className="bg-background min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-4xl text-foreground mb-6">
            Listing Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            We couldn't find the listing you're looking for.
          </p>
          <Link href="/listings">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm">
              Back to Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedListings = listings
    .filter((l) => l.type === listing.type && l.id !== listing.id)
    .slice(0, 3);

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Gallery Section */}
      <section ref={gallerRef} className="pt-32 pb-0 overflow-hidden relative h-[600px]">
        <div className="gallery-image absolute inset-0 z-0">
          <Image
            src={listing.images[0] || "/placeholder.svg"}
            alt={listing.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </div>

        {/* Back Button */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6">
          <Link href="/listings">
            <Button
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 rounded-sm bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="relative z-10 h-full flex items-end max-w-7xl mx-auto px-6 pb-12">
          <div className="w-full">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <Badge className="bg-secondary text-primary-foreground rounded-sm text-sm mb-4">
                  {serviceTypeLabels[listing.type]}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 rounded-sm bg-transparent"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 rounded-sm bg-transparent"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-background mb-4 leading-tight">
              {listing.title}
            </h1>
            <div className="flex items-center gap-6 text-background text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {listing.location}
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {listing.rating}
                <span className="opacity-80">({listing.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={detailsRef} className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Quick Info */}
            <div className="detail-section grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-card border border-border rounded-sm p-6 text-center">
                <div className="text-2xl font-display text-primary mb-2">
                  ${listing.price}
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {listing.duration ? `Per ${listing.duration}` : 'Per Night'}
                </p>
              </Card>
              {listing.capacity && (
                <Card className="bg-card border border-border rounded-sm p-6 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-medium">
                    {listing.capacity} guests
                  </p>
                </Card>
              )}
              {listing.checkIn && (
                <Card className="bg-card border border-border rounded-sm p-6 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-medium">
                    Check-in: {listing.checkIn}
                  </p>
                </Card>
              )}
              {listing.checkOut && (
                <Card className="bg-card border border-border rounded-sm p-6 text-center">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-medium">
                    Check-out: {listing.checkOut}
                  </p>
                </Card>
              )}
            </div>

            {/* Description */}
            <div className="detail-section">
              <h2 className="font-display text-3xl text-foreground mb-6">
                About This Experience
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Amenities */}
            {listing.amenities.length > 0 && (
              <div ref={amenitiesRef} className="detail-section">
                <h2 className="font-display text-3xl text-foreground mb-8">
                  What's Included
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {listing.amenities.map((amenity) => (
                    <div key={amenity} className="amenity-item flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {listing.images.length > 1 && (
              <div className="detail-section">
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {listing.images.map((image, idx) => (
                    <div key={idx} className="relative aspect-square rounded-sm overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${listing.title} image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Booking Card */}
              <Card className="bg-card border border-border rounded-sm p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-muted-foreground font-semibold mb-2">
                      TOTAL PRICE
                    </div>
                    <div className="font-display text-3xl text-primary">
                      ${listing.price}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {listing.duration ? `per ${listing.duration}` : 'per night'}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">1 {listing.duration || 'night'}</span>
                      <span className="font-semibold text-foreground">
                        ${listing.price}
                      </span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between text-base font-semibold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">${listing.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm py-6 font-semibold uppercase tracking-wide">
                    Book Now
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-muted rounded-sm py-6 font-semibold uppercase tracking-wide bg-transparent"
                  >
                    Contact Host
                  </Button>
                </div>
              </Card>

              {/* Host Info */}
              <Card className="bg-card border border-border rounded-sm p-6">
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Host Information
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Vizit Africa Team</p>
                    <p className="text-xs text-muted-foreground">Verified Host</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated to providing exceptional experiences and authentic Rwanda
                  hospitality to every traveler.
                </p>
              </Card>

              {/* Rating */}
              <Card className="bg-card border border-border rounded-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-display text-2xl text-foreground">
                    {listing.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({listing.reviews} reviews)
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Cleanliness</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 5 ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 5 ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Value</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Listings */}
      {relatedListings.length > 0 && (
        <section className="py-16 px-6 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl text-foreground mb-12">
              Similar Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedListings.map((related) => (
                <Link
                  key={related.id}
                  href={`/listings/${related.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden border border-border rounded-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-2 font-semibold line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm font-semibold text-foreground">
                            {related.rating}
                          </span>
                        </div>
                        <span className="font-serif text-primary font-semibold">
                          ${related.price}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
