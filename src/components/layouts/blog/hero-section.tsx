import { SectionContainer } from "@/components/ui/section";

export function BlogHeroSection() {
    return (
        <SectionContainer className="py-0 border-none pb-0">
            <div
                className="w-full h-96 bg-cover bg-center rounded-2xl relative overflow-hidden flex items-end"
                style={{ backgroundImage: 'url(/images/blog-hero.jpg)' }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 p-8 md:p-12 w-full max-w-4xl">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
                        Explore Africa Through Stories
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl drop-shadow-sm">
                        Discover hidden gems, travel tips, and cultural insights from across the continent.
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
}
