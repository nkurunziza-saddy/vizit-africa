import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section";

export function AboutMissionSection() {
    return (
        <SectionContainer>
            <div className="grid gap-8 md:grid-cols-2">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Problem</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-4">
                        <p>
                            Travel planning is fragmented: tourists juggle multiple platforms for transport, accommodation, and tours. This causes trust issues, payment friction for international customers,
                            and operational complexity for vendors.
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Lack of trusted verification for independent stays and guides.</li>
                            <li>Payment difficulties when transacting across borders.</li>
                            <li>Disjointed itineraries and multiple confirmations to manage.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Our Solution</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-4">
                        <p>
                            Vizit Africa centralizes services into a single marketplace with vendor verification, real-time booking, secure international payments, and a consolidated digital ticket that customers trust and vendors can rely on.
                        </p>
                        <p>
                            Built for scale using proven technologies so the platform remains secure, auditable, and extensible as we add features like an interactive trip planner and real-time chat.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </SectionContainer>
    );
}
