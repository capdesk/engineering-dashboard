import datadog from '~/assets/images/datadog.png'
import github from '~/assets/images/github.png'
import heroku from '~/assets/images/heroku.png'
import launchdarkly from '~/assets/images/launchdarkly.png'
import Arrow from '~/components/Arrow'
import { Calendar } from '~/components/Calendar'
import Circle from '~/components/Circle'
import Hero from '~/components/layout/Hero'
import HomeSection from '~/components/layout/HomeSection'
import { Radar } from '~/components/Radar'

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
      <Hero title="Main title goes here" extra={<Stats />}>
        <span className="text-mono text-xl">12.02.2022</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Hero>
      <HomeSection title="first section">
        <Placeholder />
      </HomeSection>
      <HomeSection title="second section" light>
        <Placeholder />
      </HomeSection>
      <HomeSection title="third section">
        <Placeholder />
      </HomeSection>
      <HomeSection title="Contribution" light>
        <RadarSection />
      </HomeSection>
      <HomeSection title="The Team" circleId="hiring-arrow">
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
      <HomeSection title="The tools we use" light circleId="tools">
        <Tools />
      </HomeSection>
    </div>
  )
}
