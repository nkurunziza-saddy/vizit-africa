import { useEffect } from 'react'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { initializeMockDB } from '@/utils/mock-db'
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Header } from '@/components/header'

interface MyRouterContext {
  queryClient: QueryClient
}

function NotFoundPage() {
  return <div>404 Not Found</div>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Vizit Africa',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

import { AuthProvider } from '@/context/auth-context'

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeMockDB()
  }, [])

  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body>
          <Header/>
       
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
         
              TanStackQueryDevtools,
            ]}
          />
          <Scripts />
        </body>
      </html>
    </AuthProvider>
  )
}
