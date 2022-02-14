import engineering from '~/assets/images/engineering.svg'
import capdesk from '~/assets/images/capdesk.svg'
import engineeringSmall from '~/assets/images/engineering-small.svg'
import github from '~/assets/images/github.png'
import heroku from '~/assets/images/heroku.png'
import launchdarkly from '~/assets/images/launchdarkly.png'
import datadog from '~/assets/images/datadog.png'

import { Calendar } from '~/components/Calendar'
import { Radar } from '~/components/Radar'
import { Button } from '~/components/Button'
import Xarrow from 'react-xarrows'

const Navbar: React.FC = () => (
  <div className="flex flex-row py-8 px-16 items-center justify-between bg-dark-300">
    <img height="37" src={capdesk} />
    <p className="font-mono text-2xl">Engineers Dashboard</p>
    <div className="flex flex-row gap-4 w1/3">
      <Button>RESOURCES</Button>
      <Button inverted>TEAM</Button>
    </div>
  </div>
)

const Circle: React.FC<{ id?: string; className?: string }> = ({ id, className }) => (
  <div id={id} className={`block py-2 ${className} z-10`}>
    <div className={`w-4 h-4 border-2 border-highlight-on rounded-full ${className}`} />
  </div>
)

const Main: React.FC = () => (
  <div className="px-14 pt-8">
    <div className="flex flex-row items-center gap-5 pb-2">
      <img src={engineering} width="250" />
      <div className="flex flex-col">
        <h1 className="text-5xl font-mono text-highlight-on text-light">Main title goes here</h1>
        <div className="flex flex-row items-center gap-2">
          <span className="my-4 border-b-2 divide-gray-200 flex-1" />
          <Circle />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-mono text-xl">12.02.2022</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between">
      <div className="flex justify-end" style={{ width: '125px', paddingLeft: '125px' }}>
        <span className="border-2 h-full" />
      </div>
      <Stats />
    </div>
  </div>
)

const Section: React.FC<{ light?: boolean; title: string; circleId?: string }> = ({
  light,
  title,
  children,
  circleId,
}) => {
  const bg = light ? 'bg-dark-200' : 'bg-dark-300'
  return (
    <div className={`px-14 ${bg}`}>
      <div className="flex flex-row">
        <div className="flex justify-end" style={{ width: '125px', paddingLeft: '125px' }}>
          <span className="border-2 h-full" />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-start gap-7 py-6" style={{ marginLeft: '-10px' }}>
            <Circle id={circleId} className={bg} />
            <div className="w-full">
              <h2 className="text-4xl font-mono text-highlight-on text-light">{title}</h2>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RadarSection: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 bg-white py-16 px-28" style={{ height: '600px' }}>
      <Radar />
    </div>
  )
}

const CalendarSection: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 bg-white py-16 px-28" style={{ height: '600px' }}>
      <Calendar />
    </div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    ['75%', '26.3.2022'],
    ['12%', '25.3.2022'],
    ['6%', '24.3.2022'],
    ['26%', '23.3.2022'],
  ]
  const weights = ['bold', 'normal', 'normal', 'normal']
  const colors = ['highlight-on ', 'white', 'white', 'text-white']
  return (
    <div className="flex flex-row justify-between items-center gap-32 py-16">
      {stats.map(([percentage, date], index) => (
        <div
          key={date}
          className={`flex flex-col items-center justify-center border-4 text-${colors[index]} border-current rounded-full`}
          style={{ width: '150px', height: '150px' }}
        >
          <p className={`text-5xl text-mono font-${weights[index]}`}>{percentage}</p>
        </div>
      ))}
    </div>
  )
}

const Tools: React.FC = () => {
  const tools = {
    github,
    heroku,
    datadog,
    launchdarkly,
  }
  return (
    <div className="flex flex-row justify-evenly items-center py-16 w-full">
      {Object.entries(tools).map(([key, value]) => (
        <div>
          <img key={key} src={value} />
        </div>
      ))}
    </div>
  )
}

const Footer: React.FC = () => (
  <div className="px-14 py-12 bg-dark-300">
    <div className="flex flex-col">
      <div className="flex flex-col justify-end items-center" style={{ width: '250px', marginLeft: '-2px' }}>
        <Circle className="bg-dark-300" id="footer" />
        <Xarrow
          start="tools" //can be react ref
          end="footer" //or an id
          lineColor="#dddddd"
          showHead={false}
          endAnchor="top"
        />
        <img width="84" src={engineeringSmall} />
      </div>
    </div>
  </div>
)

export default function Index() {
  const Placeholder = () => (
    <>
      <div className="flex flex-col gap-8 py-4">
        <h3 className="text-xl">Loremm ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <a href="#" className="text-orangeish">
          link here
        </a>
      </div>
    </>
  )
  return (
    <div>
      <Navbar />
      <Main />
      <Section title="first section">
        <Placeholder />
      </Section>
      <Section title="second section" light>
        <Placeholder />
      </Section>
      <Section title="third section">
        <Placeholder />
      </Section>
      <Section title="Contribution" light>
        <RadarSection />
      </Section>
      <Section title="The Team" circleId="hiring-arrow">
        <div className="flex flex-row justify-end">
          <div className="w-1/2">
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </div>
        </div>
        <Xarrow
          start="hiring-arrow" //can be react ref
          end="hiring-circle" //or an id
          lineColor="#dddddd"
          showHead={false}
          endAnchor="left"
        />
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
      </Section>
      <Section title="The tools we use" light circleId="tools">
        <Tools />
      </Section>
      <Footer />
    </div>
  )
}
