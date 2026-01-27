import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
})

function Privacy() {
  return <div className="p-8">Privacy Policy Placeholder</div>
}
