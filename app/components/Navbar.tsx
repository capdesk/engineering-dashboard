import { Link } from 'remix'
import capdesk from '~/assets/images/capdesk.svg'
import { Button } from '~/components/Button'

const Navbar: React.FC = () => (
  <div className="w-full grid grid-cols-2 justify-between items-center py-8 px-7 lg:px-16 bg-dark-300">
    <Link to="/">
      <img height="37" src={capdesk} />
    </Link>

    <div className="flex flex-col md:flex-row gap-4 justify-end items-end">
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
