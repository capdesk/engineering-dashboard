import { json, useLoaderData } from 'remix'
import TodayDate from '~/components/TodayDate'
import Contributions from '~/components/home/Contributions'
import Deployments from '~/components/home/Deployments'
import Languages from '~/components/home/Languages'
import Team from '~/components/home/Team'
import Tools from '~/components/home/Tools'
import Hero from '~/components/layout/Hero'
import HomeSection, { SectionColor } from '~/components/layout/HomeSection'
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
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-2 lg:gap-0 justify-between">
          <Paragraph className="w-full lg:w-1/2">
            Welcome to the home of all things Engineering at Capdesk. Get a real-time overview of key metrics in our
            product environment, plus find out more about our top team, and dive deep into our latest Engineering
            resources.
          </Paragraph>
          <TodayDate />
        </div>
      </Hero>

      <HomeSection title="Language distribution">
        <Languages languages={languages} />
      </HomeSection>

      <HomeSection title="Deployments" color={SectionColor.LIGHT}>
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

      <HomeSection title="The Team" circleId="hiring-arrow" color={SectionColor.LIGHT}>
        <Team />
      </HomeSection>

      <HomeSection title="The tools we use" circleId="tools" color={SectionColor.TOOLS}>
        <Tools />
      </HomeSection>
    </div>
  )
}

export type { Data }
