import { ParsedContributions } from '~/components/home/Contributions'

enum DayColor {
  ZERO = 'bg-dark-200',
  SMALL = 'bg-teal-900',
  MEDIUM = 'bg-teal-700',
  LARGE = 'bg-teal-500',
  XLARGE = 'bg-teal-300',
}

const Day: React.FC<{ value: number }> = ({ value }) => {
  // TODO these thresholds are arbitrary. Could calculate them dynamically somehow
  let color = DayColor.ZERO
  if (value >= 30) {
    color = DayColor.XLARGE
  } else if (value >= 20) {
    color = DayColor.LARGE
  } else if (value >= 10) {
    color = DayColor.MEDIUM
  } else if (value >= 1) {
    color = DayColor.SMALL
  }
  return <div className={`${color} w-5 h-5 m-1`} />
}

// TODO tooltip on hover
// TODO legend

const Calendar: React.FC<{ contributions: ParsedContributions }> = ({ contributions }) => (
  <div className="flex flex-row flex-wrap justify-center">
    {contributions.map((parsedContribution) => (
      <div className="flex flex-col">
        <div className="mt-4">{parsedContribution.month}</div>
        <div className="flex flex-row">
          {parsedContribution.weeks.map((week) => (
            <div className="flex flex-col">
              {week.week.map((day) => (
                <Day value={day} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export { Calendar }
