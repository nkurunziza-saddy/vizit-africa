import { Card, CardContent } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section";

type TeamMember = {
    name: string
    role: string
    bio?: string
    imageUrl?: string
}

const TEAM: TeamMember[] = [
    {
        name: "Unknown",
        role: "Project Sponsor",
        bio: "Primary project sponsor and strategic lead.",
        imageUrl: "https://avatars.dicebear.com/api/identicon/unknown-1.svg",
    },
    {
        name: "Unknown",
        role: "Engineering",
        bio: "Backend & API engineering.",
        imageUrl: "https://avatars.dicebear.com/api/identicon/unknown-2.svg",
    },
    {
        name: "Unknown",
        role: "Design",
        bio: "Design systems and user experience.",
        imageUrl: "https://avatars.dicebear.com/api/identicon/unknown-3.svg",
    },
    {
        name: "Unknown",
        role: "Operations",
        bio: "Vendor onboarding & community partnerships.",
        imageUrl: "https://avatars.dicebear.com/api/identicon/unknown-4.svg",
    },
]

export function AboutTeamSection() {
    return (
        <SectionContainer title="Meet the Team" description="Small, distributed, and focused on building safe travel experiences." align="center">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {TEAM.map((m, i) => (
                    <Card key={i} className="text-center group overflow-hidden border-none shadow-none bg-transparent">
                        <CardContent className="p-0 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-muted mb-6 ring-4 ring-background shadow-lg transition-transform group-hover:scale-105">
                                <img
                                    src={m.imageUrl}
                                    alt={`${m.name} — ${m.role}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-semibold text-lg text-foreground">{m.name}</h4>
                            <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
                            {m.bio && <p className="text-sm text-muted-foreground">{m.bio}</p>}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionContainer>
    );
}
