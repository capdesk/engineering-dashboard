import ProgressCircle from '~/components/ProgressCircle'
import Paragraph from '~/components/typography/Paragraph'
import H3 from '~/components/typography/H3'
import { Data } from '~/routes'

const Percentage = ({ index, name, percentage }: { index: number; name: string; percentage: number }) => {
  const fixedPercentage = Number((percentage * 100).toFixed(0))
  const color = index === 0 ? '#1cffc0 ' : '#fff'
  return (
    <div className="flex flex-col items-center gap-4">
      <ProgressCircle key={name} color={color} percentage={fixedPercentage}>
        <p className={`text-5xl text-mono`} style={{ color }}>
          {fixedPercentage}%
        </p>
      </ProgressCircle>
      <p className="text-2xl text-mono w-full text-center">{name}</p>
    </div>
  )
}

const Languages = ({ languages }: Pick<Data, 'languages'>) => {
  const sortedLanguages = Object.entries(languages)
    .sort(([, valueA], [, valueB]) => valueB.percentage - valueA.percentage)
    .slice(0, 5)

  return (
    <div className="flex flex-col xl:p-24 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {sortedLanguages.map(([name, { percentage }], index) => (
          <Percentage key={name} index={index} name={name} percentage={percentage} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <H3>How do we distribute code across languages?</H3>
        <Paragraph className="w-full lg:w-2/3 xl:w-1/2">
          We use quite a large variety of frameworks and languages at Capdesk. You can see our favourite ones here.
          These allow us to iterate fast, whilst maintaining a high level of code quality.
        </Paragraph>
      </div>
    </div>
  )
}

export default Languages
