import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionContainer } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function BlogContentSection() {
    return (
        <SectionContainer>
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
                <div className="space-y-12">
                    {/* Featured Story */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b pb-2">Featured Story</h2>
                        <Card className="overflow-hidden border-border/60 shadow-md">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src="/images/destination-kivu.jpg"
                                    alt="Rwanda tourism recovery"
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                />
                            </div>

                            <CardHeader>
                                <div className="text-sm font-medium text-primary mb-2">Editor's Pick</div>
                                <CardTitle className="text-2xl md:text-3xl">How Rwanda’s Tourism Sector Is Rebounding</CardTitle>
                                <CardDescription className="text-base">
                                    Despite global setbacks from Covid-19, Rwanda’s hospitality industry is showing signs of strong recovery.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    The resilience of Rwanda's tourism sector is evident in the increasing number of international arrivals and the launch of new luxury eco-lodges. Government initiatives and a focus on sustainable tourism have played a pivotal role...
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link to="/news/rwanda-tourism-recovery" className={cn(buttonVariants({ variant: "default" }))}>
                                    Read Full Story
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Latest Articles */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground border-b pb-2">Latest Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="flex flex-col h-full border-border/60 shadow-sm hover:shadow-md transition-all">
                                <div className="aspect-4/3 w-full overflow-hidden rounded-t-lg">
                                    <img
                                        src="/images/Kigali Rwanda.jpeg"
                                        alt="Kigali nightlife"
                                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">Why Rwanda Should Be Your Next Travel Destination</CardTitle>
                                    <CardDescription>
                                        From vibrant city life to serene nature escapes.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grow">
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        Rwanda offers a unique blend of experiences, from the bustling streets of Kigali to the tranquil waters of Lake Kivu.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link to="/news/visit-rwanda" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "p-0 h-auto hover:bg-transparent hover:text-primary")}>
                                        Read more &rarr;
                                    </Link>
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col h-full border-border/60 shadow-sm hover:shadow-md transition-all">
                                <div className="aspect-4/3 w-full overflow-hidden rounded-t-lg">
                                    <img
                                        src="/images/destination-volcanoes.jpg"
                                        alt="Gorilla trekking"
                                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">Gorilla Trekking in Volcanoes National Park</CardTitle>
                                    <CardDescription>
                                        A once-in-a-lifetime adventure.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grow">
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        Encountering mountain gorillas in their natural habitat is a profound wildlife experience that awaits in the misty mountains.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link to="/news/gorilla-trekking-rwanda" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "p-0 h-auto hover:bg-transparent hover:text-primary")}>
                                        Read more &rarr;
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Search</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Search articles..."
                                    className="w-full"
                                />
                                <Button size="icon" variant="secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Search</title><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/60 shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Trending Topics</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ul className="divide-y divide-border/50">
                                {[
                                    { title: "Rwanda’s Tourism Rebound", link: "/news/rwanda-tourism-recovery", date: "Jan 24, 2026" },
                                    { title: "Why Visit Rwanda", link: "/news/visit-rwanda", date: "Jan 20, 2026" },
                                    { title: "Gorilla Trekking Guide", link: "/news/gorilla-trekking-rwanda", date: "Jan 15, 2026" }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link to={item.link} className="block px-6 py-4 hover:bg-muted/30 transition-colors group">
                                            <span className="block text-sm font-medium group-hover:text-primary transition-colors">{item.title}</span>
                                            <span className="text-xs text-muted-foreground mt-1 block">{item.date}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-border/60 shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {["Adventure", "Ecotourism", "Sea Travel", "Hosted Tour", "City Trips", "Escorted Tour"].map((cat) => (
                                    <Button key={cat} variant="outline" size="xs" className="hover:border-primary hover:text-primary transition-colors">
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </SectionContainer>
    );
}
