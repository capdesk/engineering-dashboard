import { ParsedContributions } from '~/routes/index'

enum DayColor {
  SMALL = 'bg-tealish-400',
  MEDIUM = 'bg-tealish-300',
  LARGE = 'bg-tealish-200',
  XLARGE = 'bg-tealish-100',
}

enum DayThreshold {
  SMALL = 0,
  MEDIUM = 8,
  LARGE = 16,
  XLARGE = 24,
}

const Day: React.FC<{ value: number }> = ({ value }) => {
  // TODO these thresholds are arbitrary. Could calculate them dynamically somehow
  let color = DayColor.SMALL
  if (value >= DayThreshold.XLARGE) {
    color = DayColor.XLARGE
  } else if (value >= DayThreshold.LARGE) {
    color = DayColor.LARGE
  } else if (value >= DayThreshold.MEDIUM) {
    color = DayColor.MEDIUM
  }
  return <div className={`${color} w-5 h-5 m-1 rounded-sm`} />
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
    <div className="mt-4 flex flex-row items-center md:justify-end">
      <div>Less</div>
      <Day value={DayThreshold.SMALL} />
      <Day value={DayThreshold.MEDIUM} />
      <Day value={DayThreshold.LARGE} />
      <Day value={DayThreshold.XLARGE} />
      <div>More</div>
    </div>
  </div>
)

export { Calendar }
