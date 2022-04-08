import datadog from '~/assets/images/datadog.png'
import github from '~/assets/images/github.png'
import heroku from '~/assets/images/heroku.png'
import launchdarkly from '~/assets/images/launchdarkly.png'

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
        <div key={key}>
          <img alt={value} src={value} />
        </div>
      ))}
    </div>
  )
}

export default Tools
