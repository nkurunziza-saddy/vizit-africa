import { createFileRoute } from "@tanstack/react-router";
import { StorySection } from "@/components/landing/story-section";
import { Timeline } from "@/components/landing/timeline";

export const Route = createFileRoute("/_app/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background min-h-screen relative">
      <StorySection
        imageSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
        category="Origins"
        title={
          <>
            Born from <span className="text-primary">Earth</span>
          </>
        }
        note="Every pattern tells a story. Every journey leaves a mark."
        description={
          <>
            <p className="text-lg font-light leading-relaxed text-white/80">
              Imigongo is more than just art; it is a language of resilience.
              Originating from the royal court of Kibungo, this traditional art
              form uses cow dung and ash to create geometric spiral and diamond
              patterns that speak to the rhythm of life in Rwanda.
            </p>
            <p className="text-lg font-light leading-relaxed text-white/80">
              At Vizit Africa, we embody this spirit. We believe that true
              luxury lies in the raw, authentic connection to the land and its
              people. Our journeys are designed to reveal the hidden geometries
              of culture, connecting you to the heart of the continent.
            </p>
          </>
        }
      />

      <Timeline />

      <StorySection
        reversed
        imageSrc="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
        category="Vision"
        title={
          <>
            Beyond <span className="text-primary">Tourism</span>
          </>
        }
        description={
          <>
            <p className="text-lg font-light leading-relaxed text-white/80">
              We are moving beyond the passive observation of tourism. We invite
              you to participate. To learn the craft, to taste the soil, to
              dance to the beat of the Iningiri.
            </p>
            <p className="text-lg font-light leading-relaxed text-white/80">
              Our vision is a connected Africa, where borders blur and culture
              flows freely. Join us as we map the future of travel, one pattern
              at a time.
            </p>
          </>
        }
      />
    </div>
  );
}
