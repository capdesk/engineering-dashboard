import H3 from '~/components/typography/H3'
import { Data } from '~/routes'

type PickedProps = 'contributions' | 'coverage' | 'pull_requests' | 'commits' | 'workflow_runs'

const toFixed = (value: number) => value.toFixed(0)

const names: Record<string, string> = {
  pull_requests: 'Merged pull requests',
  commits: 'Commits',
  workflow_runs: 'GithHub Actions ran',
  coverage: 'Code coverage',
}

const Contributions = ({ contributions, coverage, commits, workflow_runs, pull_requests }: Pick<Data, PickedProps>) => {
  const values = { coverage: `${toFixed(coverage * 100)}%`, commits, workflow_runs, pull_requests }
  return (
    <div className="flex flex-col xl:p-16 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32">
      <div className="flex flex-col gap-8">
        <H3>Key metrics in the last year</H3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(values).map(([key, value]) => (
            <div
              key="key"
              className="bg-dark-200 rounded-sm flex flex-col px-16 py-10 gap-8 items-center w-full m-auto"
              style={{ maxWidth: '250px' }}
            >
              <span className="text-mono text-highlight-on text-5xl">{value}</span>
              <span className="text-xl text-light whitespace-nowrap">{names[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contributions
