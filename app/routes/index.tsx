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

const Navbar: React.FC = () => (
  <div className="flex flex-row padding-nav items-center justify-between">
    <div className="flex flex-row items-center gap-8 ">
      <img width="250" height="250" src={engineering} />
      <div className="flex flex-col">
        <img width="131" src={capdesk} />
        <h1 className="font-mono text-2xl">
          Engineers
          <br />
          Dashboard
        </h1>
      </div>
    </div>
    <Paragraph />
  </div>
)

const Paragraph: React.FC = () => (
  <div className="font-mono flex flex-col gap-6" style={{ width: '460px' }}>
    <div className="flex flex-row gap-5">
      <Button inverted>NAV 1</Button>
      <Button inverted />
      <Button>NAV 2</Button>
      <Button inverted>NAV 3</Button>
    </div>
    <h2 className="font-sans">Here's a title style in trim</h2>
    <p className="font-sans">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className="text-highlight-on">sed do eiusmod</span>
      &nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    </p>
  </div>
)
const RadarSection: React.FC = () => {
  return (
    <div
      className="flex flex-row justify-center items-center gap-8 padding-large bg-white"
      style={{ height: '600px', padding: '63px 110px' }}
    >
      <Radar />
    </div>
  )
}

const CalendarSection: React.FC = () => {
  return (
    <div
      className="flex flex-row justify-center items-center gap-8 padding-large bg-white"
      style={{ height: '600px', padding: '63px 110px' }}
    >
      <Calendar />
    </div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    ['67.3%', '26.3.2022'],
    ['42.4%', '25.3.2022'],
    ['33.7%', '24.3.2022'],
    ['22.1%', '23.3.2022'],
  ]
  const weights = ['black', 'bold', 'normal', 'thin']
  return (
    <div className="flex flex-row justify-between items-center gap-8 padding-large " style={{ padding: '63px 110px' }}>
      {stats.map(([percentage, date], index) => (
        <div key={date} className="flex flex-col">
          <p className={`text-7xl text-highlight-on font-${weights[index]}`}>{percentage}</p>
          <p>{date}</p>
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
    <div
      className="flex flex-row justify-between items-center gap-8 padding-large bg-white"
      style={{ padding: '63px 110px' }}
    >
      {Object.entries(tools).map(([key, value]) => (
        <img key={key} src={value} />
      ))}
    </div>
  )
}

const Footer: React.FC = () => (
  <div className="flex flex-row items-center gap-8 padding-nav" style={{ height: '172px' }}>
    <img width="84" src={engineeringSmall} />
  </div>
)

export default function Index() {
  return (
    <div>
      <Navbar />
      <Stats />
      <RadarSection />
      <CalendarSection />
      <Tools />
      <Footer />
    </div>
  )
}
