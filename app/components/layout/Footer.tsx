import { Link, useLocation } from 'remix'
import engineeringSmall from '~/assets/images/engineering-small.svg'
import Arrow from '~/components/Arrow'
import Circle from '~/components/Circle'
import github from '~/assets/images/github.svg'

const copyright = `©${new Date().getFullYear()} Capdesk. All rights reserved`

const Footer: React.FC<{}> = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="px-14 pt-12 pb-8 bg-dark-300 flex flex-col gap-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col items-center" style={{ width: '250px', marginLeft: '-2px' }}>
            {isHome ? (
              <>
                <Circle className="bg-dark-300" id="footer" />
                <Arrow start="tools" end="footer" endAnchor="top" />
              </>
            ) : undefined}
            <Link to="/">
              <img width="84" src={engineeringSmall} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between text-right mr-32">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/team">
            Team
          </Link>
          <Link className="hover:underline" to="/resources">
            Resources
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between ml-20 mr-32 text-sm">
        <p>{copyright}</p>
        <a
          className="flex flex-row items-center gap-2 hover:underline"
          href="https://github.com/capdesk/engineering-dashboard"
        >
          <img src={github} /> View dashboard code
        </a>
      </div>
    </div>
  )
}

export default Footer
