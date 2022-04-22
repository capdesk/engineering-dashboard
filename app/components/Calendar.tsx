import { ParsedContributions } from '~/components/home/Contributions'

enum DayColor {
  SMALL = 'bg-tealish-400',
  MEDIUM = 'bg-tealish-300',
  LARGE = 'bg-tealish-200',
  XLARGE = 'bg-tealish-100',
}

const Day: React.FC<{ value: number }> = ({ value }) => {
  // TODO these thresholds are arbitrary. Could calculate them dynamically somehow
  let color = DayColor.SMALL
  if (value >= 24) {
    color = DayColor.XLARGE
  } else if (value >= 16) {
    color = DayColor.LARGE
  } else if (value >= 8) {
    color = DayColor.MEDIUM
  }
  return <div className={`${color} w-5 h-5 m-1`} />
}

// TODO tooltip on hover

const Calendar: React.FC<{ contributions: ParsedContributions }> = ({ contributions }) => (
  <div className="flex flex-col justify-center w-fit">
    <div className="flex flex-row flex-wrap">
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
    <div className="mt-4 flex flex-row md:justify-end">
      <div>Less</div>
      <Day value={8} />
      <Day value={16} />
      <Day value={0} />
      <Day value={24} />
      <div>More</div>
    </div>
  </div>
)

export { Calendar }
