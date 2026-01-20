import {
  createFileRoute,
  useMatchRoute,
  useSearch,
} from '@tanstack/react-router'

import { z } from 'zod'

const validateSearch = z.object({
  bloop: z.string().optional(),
})

export const Route = createFileRoute('/boop/_pathlessLayout/_nested-layout')({
  validateSearch,
  component: LayoutAComponent,
})

function LayoutAComponent() {
  const matchRoute = useMatchRoute()
  const searchParams = useSearch({
    from: Route.id,
    shouldThrow: false,
  })

  console.log(
    'Nested Layout Match Route:',
    matchRoute({
      to: Route.fullPath,
      from: Route.fullPath,
    }),
  )

  // types are broken, because the useSearch expects a trailing slash in the route ID.
  // using the route ID from the index test (/beep/_pathlessLayout/_nested-layout/) returns the correct types
  console.log('Search Params:', searchParams?.bloop)

  return <div>I'm index!</div>
}
