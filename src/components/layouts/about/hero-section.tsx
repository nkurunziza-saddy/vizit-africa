import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function IconTicket() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 012-2h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 17a2 2 0 01-2 2h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 600 400" className="w-full max-w-md" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect rx="16" width="100%" height="100%" fill="url(#g)" opacity="0.08" />
      <g transform="translate(40,40)">
        <circle cx="90" cy="80" r="36" fill="#fff" opacity="0.9" />
        <rect x="160" y="40" width="180" height="110" rx="12" fill="#fff" opacity="0.95" />
        <rect x="170" y="56" width="120" height="18" rx="6" fill="#06b6d4" />
        <rect x="170" y="86" width="140" height="10" rx="6" fill="#94a3b8" />
        <rect x="170" y="104" width="80" height="10" rx="6" fill="#c7d2fe" />
      </g>
    </svg>
  )
}

export function AboutHeroSection() {
    return (
        <section className="py-24 border-b border-border/40 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                                Vizit Africa — Travel, Simplified
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground text-pretty">
                                A unified, trusted marketplace for travelers and local vendors. Search, book, and pay for accommodation, transport, and guides in one secure flow — with a single digital ticket for your entire trip.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/search"
                                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
                            >
                                <IconTicket />
                                <span>Start Your Search</span>
                            </a>
                            <a
                                href="mailto:hello@vizitafrica.com?subject=Partnership%20Inquiry&body=Hi%20Vizit%20Africa%20team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20..."
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                            >
                                Become a Vendor
                            </a>
                        </div>

                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                            <div className="space-y-1">
                                <dt className="font-medium text-foreground">One Search</dt>
                                <dd className="text-muted-foreground">Everything in a single place.</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="font-medium text-foreground">One Payment</dt>
                                <dd className="text-muted-foreground">Secure Stripe-powered checkout.</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="font-medium text-foreground">One Ticket</dt>
                                <dd className="text-muted-foreground">PDF + QR for the whole trip.</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="rounded-xl bg-linear-to-br from-card to-muted p-6 shadow-md border border-border/50 max-w-md w-full">
                            <HeroIllustration />
                            <p className="mt-6 text-sm text-muted-foreground text-center mx-auto">
                                Consolidated itineraries, verified vendors, and simplified payments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
