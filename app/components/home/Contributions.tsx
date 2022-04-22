import { Calendar } from '~/components/Calendar'
import H3 from '~/components/typography/H3'
import { ApiData, Week } from '~/routes'

type PickedProps = 'contributions' | 'coverage' | 'pull_requests' | 'commits' | 'workflow_runs'

const toFixed = (value: number) => value.toFixed(0)

const names: Record<string, string> = {
  pull_requests: 'Merged pull requests',
  commits: 'Commits',
  workflow_runs: 'GithHub Actions ran',
  coverage: 'Code coverage',
}

type ParsedWeek = {
  date: Date
  month: string
  week: Week
}

type ParsedContributions = Array<{
  month: string
  weeks: Array<ParsedWeek>
}>

const formatMonth = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format

const parseWeek = (dateInSeconds: string, week: Week) => {
  const date = new Date(Number(dateInSeconds) * 1000)
  // TODO parse the days here to add the date of each contribution { date, value } for the tooltip
  return {
    date,
    month: formatMonth(date),
    week,
  }
}

const Contributions = ({
  contributions,
  coverage,
  commits,
  workflow_runs,
  pull_requests,
}: Pick<ApiData, PickedProps>) => {
  const values = { coverage: `${toFixed(coverage * 100)}%`, commits, workflow_runs, pull_requests }

  const weeks = Object.entries(contributions).map(([dateInSeconds, week]) => parseWeek(dateInSeconds, week))

  const totalContributions = weeks.reduce((acc, curr) => (acc += curr.week.reduce((acc, curr) => (acc += curr))), 0)

  const weeksByMonth = weeks.reduce<Record<string, Array<ParsedWeek>>>((acc, curr) => {
    acc[curr.month] = acc[curr.month] || []
    acc[curr.month].push(curr)
    return acc
  }, {})

  const parsedContributions: ParsedContributions = Object.entries(weeksByMonth).map(([month, weeks]) => ({
    month,
    weeks,
  }))

  return (
    <div className="flex flex-col xl:p-16 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32">
      <div className="flex flex-col gap-8">
        <H3>{totalContributions} contributions in the last year</H3>
        <div>
          <Calendar contributions={parsedContributions} />
        </div>
        <H3>Key metrics in the last year</H3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.entries(values).map(([key, value]) => (
            <div
              key="key"
              className="bg-dark-200 rounded-sm flex flex-col px-16 py-10 gap-8 items-center w-full m-auto"
              style={{ maxWidth: '250px' }}
            >
              <span className="text-mono text-highlight-on text-5xl">{value}</span>
              <span className="text-xl font-light whitespace-nowrap">{names[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Contributions }
export type { ParsedContributions }
