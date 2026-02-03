import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionContainer } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    return (
        <SectionContainer className="py-24 border-none">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-foreground">Contact Us</h1>
                    <p className="text-lg text-muted-foreground">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <Card className="border-border/60 shadow-lg">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>
                            Fill out the form below and our team will get back to you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                            </div>
                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </SectionContainer>
    );
}
