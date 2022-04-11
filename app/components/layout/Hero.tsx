import { useLocation } from 'remix'
import engineering from '~/assets/images/engineering_lg.gif'
import Circle from '~/components/Circle'

const Hero: React.FC<{ title: string; hideLine?: boolean; extra?: React.ReactNode }> = ({ children, title, extra }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="px-14 pt-8">
      <div className="flex flex-row items-center gap-5 pb-2">
        <img src={engineering} width="250" />
        <div className="flex flex-col w-full">
          <h1 className="text-5xl font-mono text-highlight-on font-light">{title}</h1>
          <div className="flex flex-row items-center gap-2">
            <span className="my-5 border-b-2 divide-gray-200 flex-1" />
            <Circle />
          </div>
          <div className="flex flex-col gap-4 font-inter">{children}</div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-end" style={{ width: '125px', paddingLeft: '125px' }}>
          <span className={`border-2 h-full ${!isHome && 'border-transparent'}`} />
        </div>
        {extra}
      </div>
    </div>
  )
}

export default Hero
