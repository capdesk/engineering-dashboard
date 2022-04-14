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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {Object.entries(tools).map(([key, value]) => (
        <div key={key} className="w-full">
          <img className="m-auto" alt={value} src={value} />
        </div>
      ))}
    </div>
  )
}

export default Tools
