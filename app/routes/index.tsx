import engineering from '~/assets/images/engineering.svg'
import capdesk from '~/assets/images/capdesk.svg'
import engineeringSmall from '~/assets/images/engineering-small.svg'
import github from '~/assets/images/github.png'
import heroku from '~/assets/images/heroku.png'
import launchdarkly from '~/assets/images/launchdarkly.png'
import datadog from '~/assets/images/datadog.png'
import plus from '~/assets/images/plus.svg'
import plusInverted from '~/assets/images/plus-inverted.svg'

import { Calendar } from '~/components/Calendar'
import { Radar } from '~/components/Radar'

const Button: React.FC<{ inverted?: boolean }> = ({ children, inverted }) => {
  return (
    <div className={`button row ${inverted && 'button--inverted'}`}>
      <img src={inverted ? plusInverted : plus} />
      {children && <span style={{ paddingLeft: '11px' }}>{children}</span>}
    </div>
  )
}

const Navbar: React.FC = () => (
  <div className="row padding-nav align-center space-between">
    <div className="row align-center gap-large ">
      <img width="250" height="250" src={engineering} />
      <div className="column">
        <img width="131" src={capdesk} />
        <h1>
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
  <div className="column gap-medium" style={{ width: '460px' }}>
    <div className="row gap-small">
      <Button inverted>NAV 1</Button>
      <Button inverted />
      <Button>NAV 2</Button>
      <Button inverted>NAV 3</Button>
    </div>
    <h2 className="sans-serif">Here's a title style in trim</h2>
    <p className="sans-serif">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className="font-highlight">sed do eiusmod</span>
      &nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    </p>
  </div>
)
const RadarSection: React.FC = () => {
  return (
    <div
      className="row justify-center align-center gap-large padding-large bg-white"
      style={{ height: '600px', padding: '63px 110px' }}
    >
      <Radar />
    </div>
  )
}

const CalendarSection: React.FC = () => {
  return (
    <div
      className="row justify-center align-center gap-large padding-large bg-white"
      style={{ height: '600px', padding: '63px 110px' }}
    >
      <Calendar />
    </div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    ['67.3%', '26.3.2022'],
    ['42.4%', '26.3.2022'],
    ['33.7%', '26.3.2022'],
    ['22.1%', '26.3.2022'],
  ]
  const weights = ['bolder', 'bold', 'normal', 'light']
  return (
    <div className="row space-between align-center gap-large padding-large " style={{ padding: '63px 110px' }}>
      {stats.map(([percentage, date], index) => (
        <div className="column">
          <p className={`font-xxl font-highlight font-${weights[index]}`}>{percentage}</p>
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
    <div className="row space-between align-center gap-large padding-large bg-white" style={{ padding: '63px 110px' }}>
      {Object.entries(tools).map(([key, value]) => (
        <img key={key} src={value} />
      ))}
    </div>
  )
}

const Footer: React.FC = () => (
  <div className="row align-center gap-large padding-nav" style={{ height: '172px' }}>
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
