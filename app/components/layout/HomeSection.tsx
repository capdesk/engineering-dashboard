import Circle from '~/components/Circle'

enum SectionColor {
  LIGHT = 'bg-dark-200',
  DARK = 'bg-dark-300',
  TOOLS = 'bg-dark-400',
}

const HomeSection: React.FC<{ color?: SectionColor; title: string; circleId?: string; smallTitle?: boolean }> = ({
  color = SectionColor.DARK,
  title,
  children,
  circleId,
  smallTitle,
}) => {
  return (
    <div className={`px-7 lg:px-14 ${color}`}>
      <div className="flex flex-row">
        <div className="hidden md:flex justify-end pl-[95px] lg:pl-[124px]">
          <span style={{ minWidth: '3px' }} className="h-full bg-grey-200 border-grey-200" />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-start gap-7 py-12 sm:py-16 md:-ml-2.5">
            <Circle id={circleId} className={`${color} hidden md:block`} />
            <div className="w-full">
              <h2 className={`${smallTitle ? 'text-3xl' : 'text-4xl'} font-mono font-light`}>{title}</h2>
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
