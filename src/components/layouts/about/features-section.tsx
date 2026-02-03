import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section";

export function AboutFeaturesSection() {
    return (
        <SectionContainer title="Key Features" description="What makes us different" align="center">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Unified Search", desc: "Filter by destination, date, price, and category across Hotels, BNBs, Cars, and Tours." },
                    { title: "Real-time Booking", desc: "Availability checks to prevent double-bookings and keep vendor inventory accurate." },
                    { title: "Secure Payments", desc: "Stripe integration with multi-currency support and PCI-compliant flows." },
                    { title: "Digital Tickets", desc: "Automated PDF + QR tickets for the whole itinerary after successful payment." },
                    { title: "Admin Dashboard", desc: "Approve vendors, manage pricing, and moderate listings." },
                    { title: "Vendor Tools", desc: "Inventory management for hotels, BNBs, car rentals and guides." }
                ].map((feature, i) => (
                    <Card key={i} className="border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionContainer>
    );
}
