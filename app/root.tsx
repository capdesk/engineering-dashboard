import type { MetaFunction } from 'remix'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'

import reset from '~/styles/reset.css'
import fonts from '~/styles/fonts.css'
import tailwind from './tailwind.css'
import Footer from '~/components/layout/Footer'
import Navbar from '~/components/Navbar'

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

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" /> {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
