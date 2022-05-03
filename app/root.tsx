import progress from 'react-circular-progressbar/dist/styles.css'
import { json, MetaFunction, useLoaderData } from 'remix'
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
    { rel: 'icon', type: 'image/png', href: '/favicon.svg' },
  ]
}

const description = "Our live Engineering Dashboard offers a quick sneak peek into Capdesk's engineering world."
const title = 'Capdesk Engineering Dashboard'

export const meta: MetaFunction = () => {
  return {
    title,
    description,
    'og:title': title,
    'og:type': 'article',
    'og:image': 'https://engineering.capdesk.com/img/capdesk_spaceship_social.jpeg',
    'og:url': 'https://engineering.capdesk.com',
    'twitter:card': 'summary_large_image',
    'og:description': description,
    'og:site_name': title,
    'twitter:site': '@capdesk',
  }
}

type LoaderData = {
  env: {
    gtagTrackingId: string | undefined
  }
}

export async function loader() {
  return json({
    env: {
      gtagTrackingId: process.env.GTAG_TRACKING_ID,
    },
  })
}

function Document({
  children,
  title,
  env: { gtagTrackingId },
}: {
  children: React.ReactNode
  title?: string
  env: LoaderData['env']
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" /> {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        {!gtagTrackingId ? null : (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagTrackingId}`} />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtagTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
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
  const { env } = useLoaderData<LoaderData>()

  return (
    <Document env={env}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}
