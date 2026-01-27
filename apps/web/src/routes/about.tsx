import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { PageWrapper } from "@/components/layouts/page-wrapper"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})

type TeamMember = {
  name: string
  role: string
  bio?: string
  imageUrl?: string
  linkedin?: string
  github?: string
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

function IconTicket() {
  return (
    <svg
      className="w-12 h-12 text-indigo-600"
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

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <section className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                Vizit Africa — Travel, Simplified
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                A unified, trusted marketplace for travelers and local vendors. Search, book, and pay for accommodation, transport, and guides in one secure flow — with a single digital ticket for your entire trip.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/search"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md shadow"
                >
                  <IconTicket />
                  <span>Start Your Search</span>
                </a>
                {/* Default "Get in touch" uses a mailto link (change the email to your real contact) */}
                <a
                  href="mailto:hello@vizitafrica.com?subject=Partnership%20Inquiry&body=Hi%20Vizit%20Africa%20team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20..."
                  className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-md"
                >
                  Become a Vendor
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-gray-900">One Search</dt>
                  <dd className="text-gray-600">Everything in a single place.</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">One Payment</dt>
                  <dd className="text-gray-600">Secure Stripe-powered checkout.</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">One Ticket</dt>
                  <dd className="text-gray-600">PDF + QR for the whole trip.</dd>
                </div>
              </dl>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-md">
                <HeroIllustration />
                <p className="mt-3 text-sm text-gray-500 max-w-xs">
                  Consolidated itineraries, verified vendors, and simplified payments — designed for both travelers and local businesses.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Problem</h2>
              <p className="mt-3 text-gray-700">
                Travel planning is fragmented: tourists juggle multiple platforms for transport, accommodation, and tours. This causes trust issues, payment friction for international customers,
                and operational complexity for vendors.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                <li>Lack of trusted verification for independent stays and guides.</li>
                <li>Payment difficulties when transacting across borders.</li>
                <li>Disjointed itineraries and multiple confirmations to manage.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Our Solution</h2>
              <p className="mt-3 text-gray-700">
                Vizit Africa centralizes services into a single marketplace with vendor verification, real-time booking, secure international payments, and a consolidated digital ticket that customers trust and vendors can rely on.
              </p>
              <p className="mt-3 text-gray-700">
                Built for scale using proven technologies so the platform remains secure, auditable, and extensible as we add features like an interactive trip planner and real-time chat.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Unified Search</h4>
                <p className="mt-2 text-sm text-gray-600">Filter by destination, date, price, and category across Hotels, BNBs, Cars, and Tours.</p>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Real-time Booking</h4>
                <p className="mt-2 text-sm text-gray-600">Availability checks to prevent double-bookings and keep vendor inventory accurate.</p>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Secure Payments</h4>
                <p className="mt-2 text-sm text-gray-600">Stripe integration with multi-currency support and PCI-compliant flows.</p>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Digital Tickets</h4>
                <p className="mt-2 text-sm text-gray-600">Automated PDF + QR tickets for the whole itinerary after successful payment.</p>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Admin Dashboard</h4>
                <p className="mt-2 text-sm text-gray-600">Approve vendors, manage pricing, and moderate listings.</p>
              </article>
              <article className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Vendor Tools</h4>
                <p className="mt-2 text-sm text-gray-600">Inventory management for hotels, BNBs, car rentals and guides.</p>
              </article>
            </div>
          </section>

          <section className="mt-16">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">Meet the Team</h3>
              <p className="text-sm text-gray-600">Small, distributed, and focused on building safe travel experiences.</p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100">
                    <img
                      src={m.imageUrl}
                      alt={`${m.name} — ${m.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="mt-4 font-medium text-gray-900">{m.name}</h4>
                  <p className="text-sm text-indigo-600">{m.role}</p>
                  {m.bio && <p className="mt-2 text-sm text-gray-600">{m.bio}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-indigo-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Want to partner with us or list your service?</h4>
              <p className="mt-1 text-sm text-gray-700">We welcome local vendors, guides, and partners who want to reach international travelers.</p>
            </div>

            <div className="mt-4 sm:mt-0">
              {/* Mailto is the default action; change the email to your real contact address */}
              <a
                href="mailto:hello@vizitafrica.com?subject=Partnership%20Inquiry&body=Hi%20Vizit%20Africa%20team%2C%0A%0AI%20would%20like%20to%20partner%20or%20list%20a%20service.%0A%0ARegards%2C%0A"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md"
              >
                Get in touch
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  )
}