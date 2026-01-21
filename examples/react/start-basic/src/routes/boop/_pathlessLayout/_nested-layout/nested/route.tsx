import {
  createFileRoute,
  useMatchRoute,
  useSearch,
} from '@tanstack/react-router'

import { z } from 'zod'

const validateSearch = z.object({
  bloop: z.string().optional(),
})

// The route ID has a trailing slash, which is different behaviour than `route.tsx`
export const Route = createFileRoute(
  '/boop/_pathlessLayout/_nested-layout/nested',
)({
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
      // the trailing slash is preserved here as well, which breaks the types
      to: Route.fullPath,
      from: Route.fullPath,
    }),
  )

  console.log('Search Params:', searchParams?.bloop)

  return <div>I'm index!</div>
}
