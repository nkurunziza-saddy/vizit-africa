import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/layouts/footer'
import { ContactSection } from '@/components/layouts/contact/contact-section'

export const Route = createFileRoute('/_app/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
      <Footer />
    </div>
  )
}