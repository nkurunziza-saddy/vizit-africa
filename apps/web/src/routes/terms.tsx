import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: Terms,
})

function Terms() {
  return <div className="p-8">Terms of Service Placeholder</div>
}
