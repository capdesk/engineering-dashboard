import { Link } from 'remix'
import capdesk from '~/assets/images/capdesk.svg'
import { Button } from '~/components/Button'

const Navbar: React.FC = () => (
  <div className="flex flex-row py-8 px-16 items-center justify-between bg-dark-300">
    <Link to="/">
      <img height="37" src={capdesk} />
    </Link>
    <p className="font-mono text-2xl">Engineers Dashboard</p>
    <div className="flex flex-row gap-4 w1/3">
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
