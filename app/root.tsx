import type { MetaFunction } from 'remix'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'

import reset from '~/styles/reset.css'
import fonts from '~/styles/fonts.css'
import tailwind from './tailwind.css'

export function links() {
  return [
    { rel: 'stylesheet', href: reset },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: fonts },
  ]
}

export const meta: MetaFunction = () => {
  return { title: 'Capdesk Engineering' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
