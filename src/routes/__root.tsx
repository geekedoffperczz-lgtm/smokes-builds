import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { StarryBackground } from '@/components/StarryBackground'
import { Navigation } from '@/components/Navigation'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Rivera — Portfolio' },
      { name: 'description', content: 'Full-stack developer & creative technologist building beautiful, performant web experiences.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="sky-bg min-h-screen">
        <StarryBackground />
        <Navigation />
        <div className="relative z-10">
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  )
}
