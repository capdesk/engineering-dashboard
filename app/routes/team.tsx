import Hero from '~/components/layout/Hero'
import Section from '~/components/layout/Section'
import members from '~/assets/team'
import { json, useLoaderData } from 'remix'
import TodayDate from '~/components/TodayDate'
import Paragraph from '~/components/typography/Paragraph'

const Block: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div>
      <p className="text-highlight-on font-mono">{title}</p>
      <span className="font-inter">{children}</span>
    </div>
  )
}

const Member: React.FC<Member> = ({ image, name, location, fun_facts: { work, other } }) => {
  return (
    <div className="max-w-[390px] mx-auto">
      <img className="m-auto md:m-0" width="390" src={`/img/team/${image}`} />
      <div className="flex flex-col gap-2 pt-6 text-xl leading-7 font-light">
        <p className="text-2xl font-mono">{name}</p>

        <Block title="Location">{location}</Block>
        <Block title="About me">{work}</Block>
        <Block title="Fun fact">{other}</Block>
      </div>
    </div>
  )
}

const Squad = ({ members }: { members: Member[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16">
    {members.map((member) => (
      <Member key={member.name} {...member} />
    ))}
  </div>
)

type Team = 'tx' | 'hardcore' | 'coreros' | 'head_of'

type MemberAttributes = {
  name: string
  location: string
  team: Team
  fun_facts: {
    work: string
    other: string
  }
}

type Member = { image: string } & MemberAttributes

function memberFromModule({
  filename,
  attributes: { name, location, team, fun_facts },
}: {
  filename: string
  attributes: MemberAttributes
}): Member {
  return {
    image: filename.replace(/\.mdx?$/, '.jpg'),
    name,
    location,
    team,
    fun_facts,
  }
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json(members.map(memberFromModule))
}

type Squads = Record<Team, Member[]>

export default function Team() {
  const members = useLoaderData<Member[]>()

  const squads = members.reduce<Squads>(
    (acc, curr) => {
      const { team } = curr
      if (!acc[team]) {
        acc[team] = []
      }
      acc[team].push(curr)
      return acc
    },
    { head_of: [], hardcore: [], coreros: [], tx: [] }
  )
  return (
    <div>
      <Hero title="Team">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between">
          <Paragraph className="w-full lg:w-1/2">
            Say hello to our dream team of engineers, product managers, product designers and more. These guys make
            Capdesk run like clockwork, whilst adding in new features and constantly iterating. Plus, having some fun
            along the way...
          </Paragraph>
          <TodayDate />
        </div>
      </Hero>
      <Section title="Heads">
        <Squad members={squads.head_of} />
      </Section>
      <Section title="HardCore" light>
        <Squad members={squads.hardcore} />
      </Section>
      <Section title="Los Coreros">
        <Squad members={squads.coreros} />
      </Section>
      <Section title="Secondaries" light>
        <Squad members={squads.tx} />
      </Section>
    </div>
  )
}
