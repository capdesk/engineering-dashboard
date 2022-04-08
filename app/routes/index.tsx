import { json, useLoaderData } from 'remix'

import Arrow from '~/components/Arrow'
import { Calendar } from '~/components/Calendar'
import Circle from '~/components/Circle'
import Contributions from '~/components/home/Contributions'
import Deployments from '~/components/home/Deployments'
import Languages from '~/components/home/Languages'
import Stats from '~/components/home/Languages'
import Tools from '~/components/home/Toolts'
import Hero from '~/components/layout/Hero'
import HomeSection from '~/components/layout/HomeSection'
import Placeholder from '~/components/Placeholder'
import { Radar } from '~/components/Radar'
import Paragraph from '~/components/typography/Paragraph'

type LanguageData = { percentage: number }
// 7-tuple
type Week = [number, number, number, number, number, number, number]

type Data = {
  commits: number
  contributions: Record<string, Week[]>
  coverage: number
  languages: Record<string, LanguageData>
  pull_requests: number
  releases: string[]
  workflow_runs: number
}

const date = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})
  .formatToParts(new Date())
  .filter((part) => part.type !== 'literal')
  .map((part) => part.value)
  .join('.')

export async function loader() {
  const data = await fetch('https://capdesk-eng-dashboard.s3.eu-west-1.amazonaws.com/data.json').then((res) =>
    res.json()
  )
  return json(data)
}

export default function Index() {
  const { languages, releases, coverage, contributions, pull_requests, commits, workflow_runs } = useLoaderData<Data>()

  return (
    <div>
      <Hero title="Dashboard">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between">
          <Paragraph className="w-full lg:w-1/2">
            Welcome to the home of all things Engineering at Capdesk. Get a real-time overview of key metrics in our
            product environment, plus find out more about our top team, and dive deep into our latest Engineering
            resources.
          </Paragraph>
          <span className="text-2xl text-light text-white font-mono pr-6 self-end lg:self-start">{date}</span>
        </div>
      </Hero>
      <HomeSection title="Language distribution">
        <Languages languages={languages} />
      </HomeSection>
      <HomeSection title="Deployments" light>
        <Deployments releases={releases} />
      </HomeSection>
      <HomeSection title="Contributions">
        <Contributions
          contributions={contributions}
          coverage={coverage}
          pull_requests={pull_requests}
          commits={commits}
          workflow_runs={workflow_runs}
        />
      </HomeSection>
      <HomeSection title="The Team" circleId="hiring-arrow" light>
        <div className="flex flex-row justify-end">
          <div className="w-1/2">
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        </div>
        <Arrow start="hiring-arrow" end="hiring-circle" lineColor="#dddddd" showHead={false} endAnchor="left" />
        <div className="flex flex-col gap-4 py-4 m-auto w-1/2">
          <div className="flex flex-row items-center gap-4" style={{ marginLeft: '-56px' }}>
            <Circle id="hiring-circle" className="ml-3" />
            <h3 className="text-xl">Interested in joining the team?</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <a href="#" className="text-orangeish">
            link here
          </a>
        </div>
      </HomeSection>
      <HomeSection title="The tools we use" circleId="tools">
        <Tools />
      </HomeSection>
    </div>
  )
}

export type { Data }
