import { useLocation, useMatch } from 'react-router'
import { Link, LinkProps, useResolvedPath } from 'remix'
import capdesk from '~/assets/images/capdesk.svg'
import { Button } from '~/components/Button'

const useActive = (to: To) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })
  return Boolean(match)
}

const NavLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const isActive = useActive(to)

  return (
    <Link to={to} {...props}>
      <Button active={isActive}>{children}</Button>
    </Link>
  )
}

const Navbar: React.FC = () => (
  <div className="w-full grid grid-cols-2 justify-between items-center py-8 px-7 lg:px-16 bg-dark-300">
    <Link to="/">
      <img height="37" src={capdesk} />
    </Link>

    <div className="flex flex-col md:flex-row gap-4 justify-end items-end">
      <NavLink to="/resources">RESOURCES</NavLink>
      <NavLink to="/team">TEAM</NavLink>
    </div>
  </div>
)

export default Navbar
