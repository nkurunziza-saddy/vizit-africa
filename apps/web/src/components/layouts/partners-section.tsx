import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { SectionContainer } from "@/components/ui/section";

const logos = [
	{
		name: "Vercel",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvvt1ykgzouy.svg",
	},
	{
		name: "Supabase",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pb2jkefwv169wja3xzkq.svg",
	},
	{
		name: "Nvidia",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/c446umfu4d27ihf4i8q5.svg",
	},
	{
		name: "OpenAI",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/i6yv4t8d4z3257o9r5g2.svg",
	},
	{
		name: "Google",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/h617bd22tq12r4g6g23.svg",
	},
	{
		name: "Mistral",
		src: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/f7123d14-3615-4630-9755-b5e2u7h6f5g4.svg",
	},
];

export const PartnersSection = () => {
	return (
		<SectionContainer title="Affiliated Partners">
			<div className="relative border-y bg-linear-to-r from-secondary via-transparent to-secondary py-6">
				<InfiniteSlider gap={42} speed={60} speedOnHover={20}>
					{logos.map((logo) => (
						<img
							src={logo.src}
							className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
							alt={logo.name}
							loading="lazy"
							key={`logo-${logo.name}`}
							width="auto"
							height="auto"
						/>
					))}
				</InfiniteSlider>

				<ProgressiveBlur
					blurIntensity={1}
					className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
					direction="left"
				/>
				<ProgressiveBlur
					blurIntensity={1}
					className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
					direction="right"
				/>
			</div>
		</SectionContainer>
	);
};

export default PartnersSection;
