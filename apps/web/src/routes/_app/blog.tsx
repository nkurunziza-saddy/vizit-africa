import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/layouts/footer'
import { BlogHeroSection } from '@/components/layouts/blog/hero-section'
import { BlogContentSection } from '@/components/layouts/blog/content-section'

export const Route = createFileRoute('/_app/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHeroSection />
      <BlogContentSection />
      <Footer />
    </div>
  )
}
