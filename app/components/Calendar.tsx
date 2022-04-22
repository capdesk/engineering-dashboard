import React, { useState } from 'react'
import { ParsedContributions } from '~/routes/index'
import { Tooltip } from '~/components/Tooltip'

enum DayColor {
  SMALL = 'bg-cal-s',
  MEDIUM = 'bg-cal-m',
  LARGE = 'bg-cal-l',
  XLARGE = 'bg-cal-xl',
}

enum DayThreshold {
  SMALL = 0,
  MEDIUM = 8,
  LARGE = 16,
  XLARGE = 24,
}

const Day: React.FC<{ value: number; date?: string; enableTooltip?: boolean }> = ({
  date,
  value,
  enableTooltip = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  // TODO these thresholds are arbitrary. Could calculate them dynamically somehow
  let color = DayColor.SMALL
  if (value >= DayThreshold.XLARGE) {
    color = DayColor.XLARGE
  } else if (value >= DayThreshold.LARGE) {
    color = DayColor.LARGE
  } else if (value >= DayThreshold.MEDIUM) {
    color = DayColor.MEDIUM
  }

  return (
    <div className="relative">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className={`${color} w-5 h-5 m-1 rounded-sm`}
      />
      {isHovered && enableTooltip && (
        <Tooltip>
          {value} contribution{value !== 1 && 's'} on {date}
        </Tooltip>
      )}
    </div>
  )
}

const Calendar: React.FC<{ contributions: ParsedContributions }> = ({ contributions }) => (
  <div className="flex flex-row w-full justify-center">
    <div className="flex flex-col w-fit">
      <div className="flex flex-row flex-wrap">
        {contributions.map((parsedContribution, index) => (
          <div key={index} className="flex flex-col">
            <div className="mt-4">{parsedContribution.month}</div>
            <div className="flex flex-row">
              {parsedContribution.weeks.map((week, index) => (
                <div key={index} className="flex flex-col">
                  {week.week.map((day, index) => (
                    <Day key={index} date={day.date} value={day.value} enableTooltip />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row items-center justify-end">
        <div>Less</div>
        <Day value={DayThreshold.SMALL} />
        <Day value={DayThreshold.MEDIUM} />
        <Day value={DayThreshold.LARGE} />
        <Day value={DayThreshold.XLARGE} />
        <div>More</div>
      </div>
    </div>
  </div>
)

export { Calendar }
