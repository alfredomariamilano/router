import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boop/_nested-layout/')(
  {
    component: LayoutAComponent,
  },
)

function LayoutAComponent() {
  return <div>I'm index!</div>
}
