import { Link } from 'remix'
import map from '~/assets/images/map.svg'

const countries = [
  { country: 'Denmark', flag: '🇩🇰', size: 8, x: '50%', y: '35%' },
  { country: 'Canada', flag: '🇨🇦', size: 2, x: '26%', y: '45%' },
  { country: 'Italy', flag: '🇮🇹', size: 1, x: '53%', y: '52%' },
  { country: 'Portugal', flag: '🇵🇹', size: 1, x: '44.5%', y: '52%' },
  { country: 'Spain', flag: '🇪🇸', size: 1, x: '46%', y: '52%' },
  { country: 'United Kingdom', flag: '🇬🇧', size: 2, x: '46%', y: '44%' },
  { country: 'Germany', flag: '🇩🇪', size: 1, x: '54%', y: '44%' },
  { country: 'Romania', flag: '🇷🇴', size: 1, x: '54%', y: '50%' },
  { country: 'Turkey', flag: '🇹🇷', size: 1, x: '57%', y: '51.5%' },
]

const sizes: Record<number, number> = {
  1: 1,
  2: 1.5,
  8: 3,
}

const Country = ({ flag, country, size, x, y }: typeof countries[number]) => {
  return (
    <div
      className={`group aspect-square absolute rounded-full bg-highlight-on hover:bg-white hover:scale-125 animation ease-in-all duration-200 flex justify-center align-items hover:z-50`}
      style={{ left: x, top: y, width: `${sizes[size]}%` }}
    >
      <div className="hidden group-hover:flex flex-col whitespace-nowrap absolute -top-full p-2 gap-2 rounded-sm bg-dark-300 text-sm z-10">
        <span>
          {country} {flag}
        </span>
        <span>
          {size} Capdesker{size > 1 ? 's' : ''}
        </span>
        <Link to="/team" className="text-orangeish hover:underline">
          Meet the team
        </Link>
      </div>
    </div>
  )
}

const Map = () => {
  return (
    <div className="w-full relative">
      {countries.map((props) => (
        <Country key={props.country} {...props} />
      ))}
      <img src={map} />
    </div>
  )
}

export { Map }
