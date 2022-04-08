import progress from 'react-circular-progressbar/dist/styles.css'
import type { MetaFunction } from 'remix'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import Footer from '~/components/layout/Footer'
import Navbar from '~/components/Navbar'
import fonts from '~/styles/fonts.css'
import reset from '~/styles/reset.css'
import tailwind from './tailwind.css'

export function links() {
  return [
    { rel: 'stylesheet', href: reset },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: fonts },
    { rel: 'stylesheet', href: progress },
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
        <meta
          name="description"
          content="Our live Engineering Dashboard offers a quick sneak peek into Capdesk's engineering world."
        ></meta>
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
    <Document title="Capdesk Engineering Dashboard">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
