import { PureComponent } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'
import { Data } from '~/routes'

const currentMonth = new Date().getMonth()

const formatMonth = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format

type MonthlyRelease = { name: string; month: number; releases: number }

const Deployments = ({ releases }: Pick<Data, 'releases'>) => {
  const monthlyDeployment = releases.reduce<Record<number, MonthlyRelease>>((acc, curr) => {
    const date = new Date(curr)
    const month = new Date(date).getMonth()
    if (!acc[month]) {
      acc[month] = { month, name: formatMonth(date), releases: 0 }
    }
    acc[month].releases++
    return acc
  }, {})

  const data = Object.entries(monthlyDeployment)
    .reduce<Array<MonthlyRelease>>((acc, [month, release]) => {
      acc.push(release)
      return acc
    }, [])
    .sort((a, b) => a.month - b.month)

  const futureMonths = data.slice(currentMonth + 1)
  const pastMonths = data.slice(0, currentMonth + 1)
  const sortedData = [futureMonths, pastMonths].flat()

  return (
    <div className="flex flex-col xl:p-24 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32">
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={sortedData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRelease" x1={0} y1={0} x2={0} y2={1}>
                <stop offset="5%" stopColor="#1CFFC0" stopOpacity={0.9} />
                <stop offset="95%" stopColor="rgba(196, 196, 196, 0" />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.87)" strokeWidth={0} dy={10} />
            <YAxis stroke="rgba(255, 255, 255, 0.87)" strokeWidth={0} dx={-10} />
            <Area
              type="monotone"
              dataKey="releases"
              stroke="#1CFFC0"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorRelease)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col gap-8">
        <H3>An overview of our monthly deployments</H3>
        <Paragraph className="w-full lg:w-2/3 xl:w-1/2">
          At Capdesk, we practice Continuous Integration and Continuous Deployments, which allows our engineers to
          continuously bring value to production. You can see here that we often deploy features or bug fixes multiple
          times a day!
        </Paragraph>
      </div>
    </div>
  )
}

export default Deployments
