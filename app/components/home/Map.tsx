import { Link } from 'remix'
import map from '~/assets/images/map.svg'
import { perCountry } from '~/assets/team'

const countries = [
  { code: 'dk', country: 'Denmark', flag: '🇩🇰', x: '49%', y: '39%' },
  { code: 'ca', country: 'Canada', flag: '🇨🇦', x: '26%', y: '45%' },
  { code: 'it', country: 'Italy', flag: '🇮🇹', x: '50%', y: '50%' },
  { code: 'pt', country: 'Portugal', flag: '🇵🇹', x: '44%', y: '51.5%' },
  { code: 'es', country: 'Spain', flag: '🇪🇸', x: '46%', y: '52%' },
  { code: 'uk', country: 'United Kingdom', flag: '🇬🇧', x: '46%', y: '44%' },
  { code: 'de', country: 'Germany', flag: '🇩🇪', x: '51%', y: '44%' },
  { code: 'ro', country: 'Romania', flag: '🇷🇴', x: '54%', y: '49%' },
  { code: 'tr', country: 'Turkey', flag: '🇹🇷', x: '55%', y: '52%' },
  { code: 'br', country: 'Brazil', flag: '🇧🇷', x: '36%', y: '74%' },
]

const sizes: Record<number, number> = {
  1: 1,
  2: 1.5,
  3: 1.75,
  4: 2,
  5: 2.25,
  6: 2.5,
  7: 2.75,
  8: 3,
}

const Country = ({ flag, country, x, y, code }: typeof countries[number]) => {
  const size = perCountry.get(code) ?? 0
  return (
    <div
      className={`group aspect-square absolute rounded-full bg-highlight-on hover:bg-white hover:scale-125 animation ease-in-all duration-200 flex justify-center align-items hover:z-50 font-light text-xl`}
      style={{ left: x, top: y, width: `${sizes[size]}%` }}
    >
      <div className="hidden group-hover:flex flex-col whitespace-nowrap absolute -top-full p-2 gap-2 rounded-sm bg-dark-300 text-sm z-10">
        <span>
          {country} {flag}
        </span>
        <span>
          {size} Capdesker{size > 1 ? 's' : ''}
        </span>
        <Link to="/team" className="text-highlight-on hover:underline">
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
