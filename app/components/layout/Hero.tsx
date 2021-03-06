import Lottie from 'lottie-react'
import { Link, useLocation } from 'remix'
import engineering from '~/assets/animations/engineering.json'
import Circle from '~/components/Circle'

const Hero: React.FC<{ title: string; hideLine?: boolean; extra?: React.ReactNode }> = ({ children, title, extra }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="px-7 lg:px-14 pt-8 pb-8 md:pb-0">
      <div className="flex flex-row items-center gap-5 pb-2">
        <div className="hidden md:block max-w-[200px] lg:max-w-[250px]">
          <Link to="/">
            <Lottie animationData={engineering} loop autoplay />
          </Link>
        </div>
        <div className="flex flex-col w-full pt-8">
          <h1 className="text-5xl font-mono text-highlight-on font-light">{title}</h1>
          <div className="flex flex-row items-center gap-2">
            <span style={{ minHeight: '3px' }} className="my-5 bg-grey-200 flex-1" />
            <Circle />
          </div>
          <div className="flex flex-col gap-4 font-inter">{children}</div>
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-between">
        <div className={`flex justify-end pl-[95px] lg:pl-[124px] ${isHome ? 'pt-6 h-12' : 'h-12 opacity-0'}`}>
          <span style={{ minWidth: '3px' }} className={`h-full ${isHome ? 'bg-grey-200 h-12' : ''}`} />
        </div>
        {extra}
      </div>
    </div>
  )
}

export default Hero
