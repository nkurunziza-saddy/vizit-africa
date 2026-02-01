import { createFileRoute } from "@tanstack/react-router";
import { ImigongoCard } from "../../bordered-ui/components/ImigongoCard";
import { ImigongoFooter } from "../../bordered-ui/components/ImigongoFooter";
import { ImigongoGrid } from "../../bordered-ui/components/ImigongoGrid";
import { ImigongoHeader } from "../../bordered-ui/components/ImigongoHeader";
import { ImigongoHero } from "../../bordered-ui/components/ImigongoHero";
import { ImigongoSection } from "../../bordered-ui/components/ImigongoSection";
import { ImigongoFeatures } from "../../bordered-ui/components/ImigongoFeatures";
import { ImigongoServices } from "../../bordered-ui/components/ImigongoServices";
import { ImigongoAffiliations } from "../../bordered-ui/components/ImigongoAffiliations";
import { ImigongoFAQ } from "../../bordered-ui/components/ImigongoFAQ";
import { ImigongoCuratorNote } from "../../bordered-ui/components/ImigongoCuratorNote";
import { ImigongoTexture } from "../../bordered-ui/components/ImigongoTexture";
import { ImigongoSacredGrid } from "../../bordered-ui/components/ImigongoSacredGrid";
import { ImigongoParallaxSection } from "../../bordered-ui/components/ImigongoParallaxSection";
import { ImigongoReveal } from "../../bordered-ui/components/ImigongoReveal";
import { ImigongoLenis } from "../../bordered-ui/components/ImigongoLenis";

export const Route = createFileRoute("/imigongo")({
  component: ImigongoPage,
});

function ImigongoPage() {
  return (
    <ImigongoLenis>
      <div className="bg-background min-h-screen flex flex-col">
        <ImigongoHeader />
        <ImigongoTexture />
        <ImigongoSacredGrid />
        <main className="grow relative">
          <ImigongoHero />
          <ImigongoAffiliations />
          <ImigongoFeatures />
          <ImigongoServices />

          <ImigongoSection title="Popular Experiences">
            <ImigongoGrid cols={3}>
              <ImigongoReveal delay={0.1}>
                <ImigongoCard
                  title="Kigali Street Art Walk"
                  price="$45"
                  imageSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
                  rating={4.9}
                  reviews={86}
                  duration="3h"
                  location="Nyamirambo"
                >
                  Discover the vibrant murals and hidden galleries of Kigali's
                  most colorful neighborhood with a local artist.
                </ImigongoCard>
              </ImigongoReveal>

              <ImigongoReveal delay={0.2}>
                <ImigongoCard
                  title="Volcanoes National Park Trek"
                  price="$1500"
                  imageSrc="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop"
                  rating={5.0}
                  reviews={204}
                  duration="2d"
                  location="Musanze"
                >
                  A once-in-a-lifetime encounter with the majestic mountain
                  gorillas in their natural habitat.
                </ImigongoCard>
              </ImigongoReveal>

              <ImigongoCuratorNote
                note="Limited permits available daily"
                className="top-[30%] left-[33%] -translate-x-[60%]"
                arrowDirection="right"
              />

              <ImigongoCard
                title="Lake Kivu Kayak Adventure"
                price="$60"
                imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                rating={4.7}
                reviews={42}
                duration="4h"
                location="Gisenyi"
              >
                Paddle through the serene waters of Lake Kivu and watch the
                sunset over the singing fishermen.
              </ImigongoCard>

              <ImigongoCard
                title="Akagera Game Drive"
                price="$120"
                imageSrc="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
                rating={4.8}
                reviews={115}
                duration="1d"
                location="Akagera"
              >
                Spot the Big Five in Rwanda's only savannah park with
                experienced guides.
              </ImigongoCard>

              <ImigongoCard
                title="Cultural Village Visit"
                price="$35"
                imageSrc="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=2070&auto=format&fit=crop"
                rating={4.6}
                reviews={55}
                duration="5h"
                location="Musanze"
              >
                Experience traditional Rwandan life, dance, and archery at the
                Iby'Iwacu Cultural Village.
              </ImigongoCard>

              <ImigongoCard
                title="Coffee Plantation Tour"
                price="$25"
                imageSrc="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                rating={4.9}
                reviews={92}
                duration="3h"
                location="Huye"
              >
                Trace the journey of the coffee bean from the crop to the cup in
                the heart of Rwanda's coffee region.
              </ImigongoCard>
            </ImigongoGrid>
          </ImigongoSection>

          <ImigongoParallaxSection />
          <ImigongoFAQ />
        </main>
        <ImigongoFooter />
      </div>
    </ImigongoLenis>
  );
}
