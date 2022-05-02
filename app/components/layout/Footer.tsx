import { Link, useLocation } from 'remix'
import engineeringSmall from '~/assets/images/engineering-small.svg'
import github from '~/assets/images/github.svg'
import Arrow from '~/components/Arrow'
import Circle from '~/components/Circle'

const copyright = `©${new Date().getFullYear()} Capdesk. All rights reserved`

const Footer: React.FC<{}> = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="px-7 md:px-14 pt-12 pb-8 bg-dark-300 flex flex-col gap-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col items-center sm:w-[139px] lg:w-[250px]">
            {isHome ? (
              <>
                <Circle className="bg-dark-300 hidden sm:block" id="footer" />
                <Arrow start="tools" end="footer" endAnchor="top" />
              </>
            ) : undefined}
            <Link to="/">
              <img width="84" src={engineeringSmall} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between text-right font-inter gap-4">
          <Link className="hover:underline" to="/">
            Dashboard
          </Link>
          <Link className="hover:underline" to="/resources">
            Resources
          </Link>
          <Link className="hover:underline" to="/team">
            Team
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row justify-between text-sm font-inter">
        <p className="text-center">{copyright}</p>
        <a
          className="flex flex-row justify-center sm:justify-end items-center gap-2 sm:gap-2 underline"
          href="https://github.com/capdesk/engineering-dashboard"
        >
          <img src={github} /> View dashboard code
        </a>
      </div>
    </div>
  )
}

export default Footer
