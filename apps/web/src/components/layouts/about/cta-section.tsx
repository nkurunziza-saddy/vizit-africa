import { buttonVariants } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function AboutCTASection() {
    return (
        <SectionContainer>
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
                <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-2xl font-bold tracking-tight text-foreground">Want to partner with us?</h4>
                    <p className="text-muted-foreground max-w-md">We welcome local vendors, guides, and partners who want to reach international travelers.</p>
                </div>

                <a
                    href="mailto:hello@vizitafrica.com?subject=Partnership%20Inquiry&body=Hi%20Vizit%20Africa%20team%2C%0A%0AI%20would%20like%20to%20partner%20or%20list%20a%20service.%0A%0ARegards%2C%0A"
                    className={cn(buttonVariants({ variant: "default", size: "lg" }))}
                >
                    Get in touch
                </a>
            </div>
        </SectionContainer>
    );
}
