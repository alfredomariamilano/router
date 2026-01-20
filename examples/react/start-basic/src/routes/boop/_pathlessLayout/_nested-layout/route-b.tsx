import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boop/_pathlessLayout/_nested-layout/route-b')(
  {
    component: LayoutBComponent,
  },
)

function LayoutBComponent() {
  return <div>I'm B!</div>
}
