import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/layouts/page-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <PageWrapper>
      <div className="py-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </PageWrapper>
  )
}
