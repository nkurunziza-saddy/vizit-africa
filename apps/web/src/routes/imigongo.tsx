import { createFileRoute } from "@tanstack/react-router";
import { ImigongoCard } from "../../bordered-ui/components/ImigongoCard";
import { ImigongoFooter } from "../../bordered-ui/components/ImigongoFooter";
import { ImigongoGrid } from "../../bordered-ui/components/ImigongoGrid";
import { ImigongoHeader } from "../../bordered-ui/components/ImigongoHeader";
import { ImigongoHero } from "../../bordered-ui/components/ImigongoHero";
import { ImigongoSection } from "../../bordered-ui/components/ImigongoSection";
import { PatternZigZag } from "../../bordered-ui/components/ImigongoPatterns";

import { ImigongoFeatures } from "../../bordered-ui/components/ImigongoFeatures";
import { ImigongoServices } from "../../bordered-ui/components/ImigongoServices";
import { ImigongoAffiliations } from "../../bordered-ui/components/ImigongoAffiliations";
import { ImigongoFAQ } from "../../bordered-ui/components/ImigongoFAQ";

export const Route = createFileRoute("/imigongo")({
	component: ImigongoPage,
});

function ImigongoPage() {
	return (
		<div className="bg-background min-h-screen flex flex-col">
			<ImigongoHeader />
			<main className="flex-grow">
				<ImigongoHero />
				<ImigongoAffiliations />
				<ImigongoFeatures />
				<ImigongoServices />

				<ImigongoSection title="Popular Experiences">
					<ImigongoGrid cols={3}>
						<ImigongoCard
							title="Kigali Street Art Walk"
							price="$45"
							imageSrc="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
							rating={4.9}
							reviews={86}
							duration="3h"
							location="Nyamirambo"
						>
							Discover the vibrant murals and hidden galleries of Kigali's most
							colorful neighborhood with a local artist.
						</ImigongoCard>

						<ImigongoCard
							title="Volcanoes National Park Trek"
							price="$1500"
							imageSrc="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop"
							rating={5.0}
							reviews={204}
							duration="2d"
							location="Musanze"
						>
							A once-in-a-lifetime encounter with the majestic mountain gorillas
							in their natural habitat.
						</ImigongoCard>

						<ImigongoCard
							title="Lake Kivu Kayak Adventure"
							price="$60"
							imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
							rating={4.7}
							reviews={42}
							duration="4h"
							location="Gisenyi"
						>
							Paddle through the serene waters of Lake Kivu and watch the sunset
							over the singing fishermen.
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
							Spot the Big Five in Rwanda's only savannah park with experienced
							guides.
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

				<div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
					{/* Left Col: Image Art */}
					<div className="relative h-[60vh] md:h-auto bg-imigongo-black overflow-hidden group">
						<img
							src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop"
							alt="Imigongo Art Process"
							className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-[3s] ease-in-out"
						/>
						<div className="absolute inset-0 bg-imigongo-ochre/20 mix-blend-multiply" />

						{/* Structural Overlay Text */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<span className="text-[20vw] font-black text-white/10 leading-none tracking-tighter mix-blend-overlay">
								ART
							</span>
						</div>
					</div>

					{/* Right Col: Story Text */}
					<div className="bg-imigongo-black text-white flex flex-col justify-center p-12 md:p-24 lg:p-32 border-l-4 border-imigongo-ochre">
						<div className="mb-12">
							<PatternZigZag className="w-64 h-8 text-imigongo-ochre mb-8 -ml-2" />
							<h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
								The <br />
								<span className="text-imigongo-ochre">Earth</span> <br />
								Speaks
							</h2>
						</div>

						<div className="space-y-8 max-w-xl">
							<p className="text-2xl font-light leading-relaxed text-white/90">
								Originating from the walls of the royal huts in Kibungo,
								Imigongo is more than decoration—it is architecture.
							</p>
							<p className="text-lg text-white/60 leading-relaxed">
								Created using cow dung and natural pigments, the geometric
								ridges created zigzags, spirals, and diamonds that represented
								the topography of the Rwandan hills and the rhythm of everyday
								life. Today, we bring this structural beauty to your travel
								experience.
							</p>
						</div>

						<div className="mt-16">
							<button
								type="button"
								className="px-12 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-[0.2em] hover:bg-imigongo-ochre hover:border-imigongo-ochre transition-all"
							>
								Read the full story
							</button>
						</div>
					</div>
				</div>
				<ImigongoFAQ />
			</main>
			<ImigongoFooter />
		</div>
	);
}
