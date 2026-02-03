import React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "@/components/layouts/footer"
import { AboutHeroSection } from "@/components/layouts/about/hero-section"
import { AboutMissionSection } from "@/components/layouts/about/mission-section"
import { AboutFeaturesSection } from "@/components/layouts/about/features-section"
import { AboutTeamSection } from "@/components/layouts/about/team-section"
import { AboutCTASection } from "@/components/layouts/about/cta-section"

export const Route = createFileRoute("/_app/about")({
  component: AboutPage,
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutFeaturesSection />
      <AboutTeamSection />
      <AboutCTASection />
      <Footer />
    </div>
  )
}
