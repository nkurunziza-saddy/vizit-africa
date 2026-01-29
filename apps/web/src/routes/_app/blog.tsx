import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/layouts/page-wrapper'
import { Input } from '@/components/ui/input'
import { Footer } from '@/components/layouts/footer'

export const Route = createFileRoute('/_app/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <PageWrapper>
      {/* Hero Banner */}
      <div
        className="w-full h-64 bg-cover bg-center mb-12 rounded-lg"
        style={{ backgroundImage: 'url(/images/blog-hero.jpg)' }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Explore Africa Through Stories
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_280px] gap-12 max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Featured Article */}
          <article className="space-y-4">
            <img
              src="/images/destination-kivu.jpg"
              alt="Rwanda tourism recovery"
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold">
              How Rwanda’s Tourism Sector Is Rebounding
            </h2>
            <p className="text-muted-foreground">
              Despite global setbacks from Covid-19, Rwanda’s hospitality industry is showing signs of strong recovery.
            </p>
            <a
              href="/news/rwanda-tourism-recovery"
              className="text-blue-600 hover:underline"
            >
              Read more
            </a>
          </article>

          {/* Additional Articles */}
          <div className="grid md:grid-cols-2 gap-8">
            <article className="space-y-4">
              <img
                src="/images/Kigali Rwanda.jpeg"
                alt="Kigali nightlife"
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">
                Why Rwanda Should Be Your Next Travel Destination
              </h3>
              <p className="text-muted-foreground">
                From vibrant city life to serene nature escapes, Rwanda offers a unique blend of experiences.
              </p>
              <a
                href="/news/visit-rwanda"
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
            </article>

            <article className="space-y-4">
              <img
                src="/images/destination-volcanoes.jpg"
                alt="Gorilla trekking"
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold">
                Gorilla Trekking in Volcanoes National Park
              </h3>
              <p className="text-muted-foreground">
                A once-in-a-lifetime adventure awaits in the misty mountains of northern Rwanda.
              </p>
              <a
                href="/news/gorilla-trekking-rwanda"
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
            </article>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 md:w-[280px]">
          {/* Search */}
          <div>
            <Input
              placeholder="Search..."
              className="rounded-md border border-gray-300 px-3 py-2 text-sm w-full"
            />
          </div>

          {/* Recent News */}
          <div>
            <h4 className="text-base font-semibold mb-2">Recent News</h4>
            <ul className="space-y-1 text-sm text-blue-600">
              <li>
                <a
                  href="/news/rwanda-tourism-recovery"
                  className="hover:underline"
                >
                  Rwanda’s Tourism Sector Is Rebounding
                </a>
              </li>
              <li>
                <a href="/news/visit-rwanda" className="hover:underline">
                  Why Visit Rwanda
                </a>
              </li>
              <li>
                <a
                  href="/news/gorilla-trekking-rwanda"
                  className="hover:underline"
                >
                  Gorilla Trekking in Volcanoes
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-semibold mb-2">Categories</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Adventure Travel</li>
              <li>Ecotourism</li>
              <li>Sea Travel</li>
              <li>Hosted Tour</li>
              <li>City Trips</li>
              <li>Escorted Tour</li>
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </PageWrapper>
  )
}
