import { Link } from 'remix'
import capdesk from '~/assets/images/capdesk.svg'
import { Button } from '~/components/Button'

const Navbar: React.FC = () => (
  <div className="w-full grid grid-cols-2 lg:grid-cols-3 items-center py-8 px-16 bg-dark-300">
    <div className="flex flex-col flex-grow-0">
      <Link to="/">
        <img height="37" src={capdesk} />
      </Link>
      <p className="lg:hidden font-mono text-2xl">Engineering Dashboard</p>
    </div>
    <p className="hidden lg:inline font-mono text-2xl text-left md:text-center">Engineering Dashboard</p>
    <div className="flex flex-col md:flex-row gap-4 justify-end">
      <Link to="/resources">
        <Button>RESOURCES</Button>
      </Link>
      <Link to="/team">
        <Button inverted>TEAM</Button>
      </Link>
    </div>
  </div>
)

export default Navbar
