import Circle from '~/components/Circle'

enum SectionColor {
  LIGHT = 'bg-dark-200',
  DARK = 'bg-dark-300',
  TOOLS = 'bg-dark-400',
}

const HomeSection: React.FC<{ color?: SectionColor; title: string; circleId?: string }> = ({
  color = SectionColor.DARK,
  title,
  children,
  circleId,
}) => {
  return (
    <div className={`px-14 ${color}`}>
      <div className="flex flex-row">
        <div className="flex justify-end" style={{ width: '125px', paddingLeft: '124px' }}>
          <span style={{ minWidth: '3px' }} className="h-full bg-grey-200 border-grey-200" />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-start gap-7 py-16" style={{ marginLeft: '-10px' }}>
            <Circle id={circleId} className={color} />
            <div className="w-full">
              <h2 className="text-4xl font-mono font-light">{title}</h2>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection
export { SectionColor }
