import { createFileRoute } from "@tanstack/react-router";
import { ImigongoHeader } from "../../bordered-ui/components/ImigongoHeader";
import { ImigongoFooter } from "../../bordered-ui/components/ImigongoFooter";
import { ImigongoLenis } from "../../bordered-ui/components/ImigongoLenis";
import { ImigongoSacredGrid } from "../../bordered-ui/components/ImigongoSacredGrid";
import { ImigongoTexture } from "../../bordered-ui/components/ImigongoTexture";
import { ImigongoStorySection } from "../../bordered-ui/components/ImigongoStorySection";
import { ImigongoFactGrid } from "../../bordered-ui/components/ImigongoFactGrid";
import { PatternZigZag } from "../../bordered-ui/components/ImigongoPatterns";
import { motion, useScroll, useTransform } from "motion/react";
import { ImigongoHorizontalScroll } from "../../bordered-ui/components/ImigongoHorizontalScroll";
import { ImigongoTimeline } from "../../bordered-ui/components/ImigongoTimeline";
import { ImigongoPatternDecoder } from "../../bordered-ui/components/ImigongoPatternDecoder";
import { ImigongoCinematicReveal } from "../../bordered-ui/components/ImigongoCinematicReveal";
import { useRef } from "react";

export const Route = createFileRoute("/imigongo-story")({
  component: RwandaStoryPage,
});

function RwandaStoryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const ghostTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <ImigongoLenis>
      <div
        ref={containerRef}
        className="bg-background min-h-screen flex flex-col relative overflow-hidden"
      >
        <motion.div
          style={{ y: ghostTextY }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-[0.03]"
        >
          <span className="fixed top-[20%] -left-[10%] text-[40vw] font-black text-imigongo-black leading-none whitespace-nowrap">
            RWANDA
          </span>
        </motion.div>

        <ImigongoHeader />
        <ImigongoTexture />
        <ImigongoSacredGrid />

        <main className="grow relative">
          <div className="relative min-h-[110vh] w-full flex flex-col justify-end pb-32 overflow-hidden bg-imigongo-black">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2600&auto=format&fit=crop"
                alt="Rwanda Hills"
                className="w-full h-full object-cover grayscale-40 contrast-125 brightness-50"
              />
              <div className="absolute inset-0 bg-linear-to-t from-imigongo-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-8"
              >
                <span className="text-imigongo-ochre uppercase tracking-[0.5em] text-sm font-bold pl-1">
                  Welcome to
                </span>
              </motion.div>

              <h1 className="text-7xl md:text-[10rem] leading-[0.8] font-black text-white uppercase tracking-tighter mb-8 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    delay: 0.8,
                  }}
                  className="block"
                >
                  The Land
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    delay: 0.9,
                  }}
                  className="block text-white/50"
                >
                  of Thousand
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    delay: 1,
                  }}
                  className="block text-imigongo-ochre"
                >
                  Hills
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="max-w-2xl text-white/80 text-xl font-light leading-relaxed border-l-2 border-white/20 pl-8"
              >
                Rwanda is a country of breathtaking scenery, known for its
                cleanliness, safety, and the remarkable resilience of its
                people.
              </motion.p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
              <span className="text-[10px] uppercase tracking-widest text-white">
                Scroll to Explore
              </span>
              <div className="w-px h-12 bg-white" />
            </div>
          </div>

          <ImigongoFactGrid />

          {/* 1. The Arrival (Timeline) */}
          <ImigongoTimeline />

          {/* 2. Geography Parallax */}
          <ImigongoStorySection
            category="NATURE"
            imageSrc="https://images.unsplash.com/photo-1627916173003-882098b049d5?q=80&w=2600&auto=format&fit=crop"
            title={
              <>
                Geography <br />
                <span className="text-white/50">& Nature</span>
              </>
            }
            description={
              <>
                <p className="text-2xl font-light leading-relaxed text-white/90">
                  From the volcanic peaks of the Virungas to the shores of Lake
                  Kivu.
                </p>
                <div className="text-lg text-white/60 leading-relaxed grid gap-4">
                  <p>
                    The altitude ranges from 950m to the 4,507m peak of Mount
                    Karisimbi. This topography creates a temperate tropical
                    highland climate, with the famous gorillas roaming free in
                    the Volcanoes National Park.
                  </p>
                  <p>
                    Akagera National Park offers a savannah teeming with the Big
                    Five, while Nyungwe Forest protects ancient chimpanzee
                    populations.
                  </p>
                </div>
              </>
            }
            note="Visit in June-Sept for trekking"
          />

          {/* 3. The Gorilla Encounter (High Drama) */}
          <ImigongoCinematicReveal />

          {/* 4. Horizontal Scroll Adventure */}
          <ImigongoHorizontalScroll />

          {/* 5. Pattern Decoder */}
          <ImigongoPatternDecoder />

          {/* People & Culture Section */}
          <ImigongoStorySection
            category="CULTURE"
            reversed
            imageSrc="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=2600&auto=format&fit=crop"
            title={
              <>
                People <br />
                <span className="text-imigongo-ochre">& Spirit</span>
              </>
            }
            description={
              <>
                <p className="text-2xl font-light leading-relaxed text-white/90">
                  "Ndi Umunyarwanda" — I am Rwandan.
                </p>
                <div className="text-lg text-white/60 leading-relaxed grid gap-4">
                  <p>
                    Rwanda draws on its culture to solve modern challenges.{" "}
                    <strong>Umuganda</strong> brings communities together every
                    month to clean neighborhoods, making Rwanda one of the
                    cleanest nations on earth.
                  </p>
                  <p>
                    From the warrior dance of <strong>Intore</strong> to the
                    geometric <strong>Imigongo</strong> art made from nature
                    itself, tradition is the foundation of the future.
                  </p>
                </div>
              </>
            }
            note="Median Age: 22.7 years"
          />

          <ImigongoStorySection
            category="RESILIENCE"
            imageSrc="https://images.unsplash.com/photo-1605649988226-7248386a6352?q=80&w=2600&auto=format&fit=crop"
            title={
              <>
                History <br />
                <span className="text-white/50">& Hope</span>
              </>
            }
            description={
              <>
                <p className="text-2xl font-light leading-relaxed text-white/90">
                  Unity, Work, Patriotism.
                </p>
                <div className="text-lg text-white/60 leading-relaxed grid gap-4">
                  <p>
                    Following the tragedy of the 1994 Genocide against the
                    Tutsi, Rwanda has risen with a focus on unity and
                    reconciliation. The Kigali Genocide Memorial stands as a
                    testament to the past and a promise for the future.
                  </p>
                  <p>
                    Today, Rwanda is a beacon of development, gender equality,
                    and innovation in Africa.
                  </p>
                </div>
              </>
            }
          />

          <div className="bg-white py-32 border-t border-imigongo-black text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <PatternZigZag className="w-full h-full text-imigongo-black scale-150 rotate-12" />
            </div>

            <div className="relative z-10 container mx-auto">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                Experience it <br />
                <span className="text-imigongo-ochre">Yourself</span>
              </h2>
              <p className="max-w-xl mx-auto text-xl text-imigongo-black/70 mb-12 font-serif">
                The land of a thousand hills is waiting for your story.
              </p>
              <button
                type="button"
                className="px-16 py-6 bg-imigongo-black text-white font-bold uppercase tracking-[0.2em] hover:bg-imigongo-ochre transition-all duration-300 transform hover:scale-105"
              >
                Book Your Expedition
              </button>
            </div>
          </div>
        </main>

        <ImigongoFooter />
      </div>
    </ImigongoLenis>
  );
}
