import engineering from '~/assets/engineering.svg'
import capdesk from '~/assets/capdesk.svg'
import engineeringSmall from '~/assets/engineering-small.svg'
import github from '~/assets/github.png'
import heroku from '~/assets/heroku.png'
import launchdarkly from '~/assets/launchdarkly.png'
import datadog from '~/assets/datadog.png'
import plus from '~/assets/plus.svg'
import plusInverted from '~/assets/plus-inverted.svg'
import {Radar} from '@nivo/radar'
import {Calendar} from '@nivo/calendar'

const Button: React.FC<{inverted?: boolean}> = ({children, inverted}) => {
  return (
    <div className={`button row ${inverted && 'button--inverted'}`}>
      <img src={inverted ? plusInverted : plus} />
      {children && <span style={{paddingLeft: '11px'}}>{children}</span>}
    </div>
  )
}

const Navbar: React.FC = () => (
  <div className="row padding-nav align-center space-between">
    <div className="row align-center gap-large ">
      <img width="250" height="250" src={engineering} />
      <div className="column">
        <img width="131" src={capdesk} />
        <h1>
          Engineers
          <br />
          Dashboard
        </h1>
      </div>
    </div>
    <Paragraph />
  </div>
)

const Paragraph: React.FC = () => (
  <div className="column gap-medium" style={{width: '460px'}}>
    <div className="row gap-small">
      <Button inverted>NAV 1</Button>
      <Button inverted />
      <Button>NAV 2</Button>
      <Button inverted>NAV 3</Button>
    </div>
    <h2 className="sans-serif">Here's a title style in trim</h2>
    <p className="sans-serif">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{' '}
      <span className="font-highlight">sed do eiusmod</span>
      &nbsp;tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    </p>
  </div>
)
const RadarSection: React.FC = () => {
  const data = [
    {
      taste: 'Commits',
      capdesk: 30,
    },
    {
      taste: 'Code Reviews',
      capdesk: 50,
    },
    {
      taste: 'Issues',
      capdesk: 2,
    },
    {
      taste: 'Pull Request',
      capdesk: 48,
    },
  ]
  return (
    <div
      className="row justify-center align-center gap-large padding-large bg-white"
      style={{height: '600px', padding: '63px 110px'}}
    >
      <Radar
        height={500}
        width={800}
        data={data}
        keys={['capdesk']}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{top: 70, right: 80, bottom: 40, left: 80}}
        borderColor={{from: 'color'}}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{theme: 'background'}}
        dotBorderWidth={2}
        colors={{scheme: 'nivo'}}
        blendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  )
}

const CalendarSection: React.FC = () => {
  const data = [
    {
      value: 230,
      day: '2018-01-02',
    },
    {
      value: 18,
      day: '2018-03-18',
    },
    {
      value: 8,
      day: '2017-10-22',
    },
    {
      value: 339,
      day: '2015-11-25',
    },
    {
      value: 24,
      day: '2017-12-26',
    },
    {
      value: 309,
      day: '2015-07-19',
    },
    {
      value: 390,
      day: '2018-06-30',
    },
    {
      value: 356,
      day: '2016-04-27',
    },
    {
      value: 366,
      day: '2018-04-14',
    },
    {
      value: 187,
      day: '2017-12-06',
    },
    {
      value: 304,
      day: '2016-05-09',
    },
    {
      value: 358,
      day: '2016-08-11',
    },
    {
      value: 389,
      day: '2015-05-25',
    },
    {
      value: 247,
      day: '2016-07-03',
    },
    {
      value: 152,
      day: '2016-09-01',
    },
    {
      value: 95,
      day: '2018-03-28',
    },
    {
      value: 221,
      day: '2017-12-08',
    },
    {
      value: 396,
      day: '2015-11-08',
    },
    {
      value: 168,
      day: '2017-12-25',
    },
    {
      value: 278,
      day: '2018-03-03',
    },
    {
      value: 342,
      day: '2016-07-25',
    },
    {
      value: 265,
      day: '2017-05-03',
    },
    {
      value: 286,
      day: '2016-06-17',
    },
    {
      value: 287,
      day: '2017-10-31',
    },
    {
      value: 126,
      day: '2017-02-15',
    },
    {
      value: 178,
      day: '2015-10-19',
    },
    {
      value: 348,
      day: '2015-11-14',
    },
    {
      value: 317,
      day: '2015-09-28',
    },
    {
      value: 373,
      day: '2016-10-16',
    },
    {
      value: 334,
      day: '2015-12-05',
    },
    {
      value: 211,
      day: '2016-04-23',
    },
    {
      value: 71,
      day: '2016-05-26',
    },
    {
      value: 307,
      day: '2016-08-29',
    },
    {
      value: 277,
      day: '2016-07-30',
    },
    {
      value: 9,
      day: '2017-06-05',
    },
    {
      value: 351,
      day: '2015-05-19',
    },
    {
      value: 232,
      day: '2017-08-15',
    },
    {
      value: 124,
      day: '2015-09-10',
    },
    {
      value: 373,
      day: '2016-05-07',
    },
    {
      value: 119,
      day: '2016-08-30',
    },
    {
      value: 186,
      day: '2015-10-16',
    },
    {
      value: 245,
      day: '2016-08-04',
    },
    {
      value: 247,
      day: '2017-04-20',
    },
    {
      value: 166,
      day: '2016-08-13',
    },
    {
      value: 395,
      day: '2015-04-01',
    },
    {
      value: 378,
      day: '2015-05-24',
    },
    {
      value: 372,
      day: '2015-06-20',
    },
    {
      value: 97,
      day: '2017-10-18',
    },
    {
      value: 185,
      day: '2016-05-13',
    },
    {
      value: 232,
      day: '2017-01-17',
    },
    {
      value: 257,
      day: '2016-02-19',
    },
    {
      value: 380,
      day: '2018-04-11',
    },
    {
      value: 289,
      day: '2016-10-11',
    },
    {
      value: 30,
      day: '2015-06-19',
    },
    {
      value: 151,
      day: '2017-07-03',
    },
    {
      value: 153,
      day: '2017-12-21',
    },
    {
      value: 231,
      day: '2015-06-15',
    },
    {
      value: 366,
      day: '2018-04-08',
    },
    {
      value: 206,
      day: '2016-02-21',
    },
    {
      value: 268,
      day: '2017-05-31',
    },
    {
      value: 224,
      day: '2016-04-30',
    },
    {
      value: 69,
      day: '2016-11-27',
    },
    {
      value: 152,
      day: '2015-12-08',
    },
    {
      value: 246,
      day: '2016-03-20',
    },
    {
      value: 196,
      day: '2016-06-08',
    },
    {
      value: 137,
      day: '2016-03-27',
    },
    {
      value: 144,
      day: '2017-05-23',
    },
    {
      value: 312,
      day: '2018-08-09',
    },
    {
      value: 17,
      day: '2017-11-19',
    },
    {
      value: 309,
      day: '2016-03-22',
    },
    {
      value: 19,
      day: '2016-09-09',
    },
    {
      value: 256,
      day: '2015-07-03',
    },
    {
      value: 216,
      day: '2016-04-07',
    },
    {
      value: 234,
      day: '2015-04-02',
    },
    {
      value: 286,
      day: '2016-02-17',
    },
    {
      value: 251,
      day: '2017-10-10',
    },
    {
      value: 286,
      day: '2015-04-29',
    },
    {
      value: 38,
      day: '2017-11-04',
    },
    {
      value: 174,
      day: '2015-10-12',
    },
    {
      value: 166,
      day: '2017-01-23',
    },
    {
      value: 386,
      day: '2017-05-29',
    },
    {
      value: 112,
      day: '2015-06-12',
    },
    {
      value: 248,
      day: '2017-09-06',
    },
    {
      value: 23,
      day: '2018-08-05',
    },
    {
      value: 82,
      day: '2018-05-25',
    },
    {
      value: 252,
      day: '2017-02-03',
    },
    {
      value: 224,
      day: '2017-11-12',
    },
    {
      value: 109,
      day: '2017-06-15',
    },
    {
      value: 198,
      day: '2016-07-17',
    },
    {
      value: 77,
      day: '2018-02-21',
    },
    {
      value: 196,
      day: '2018-03-24',
    },
    {
      value: 250,
      day: '2015-10-31',
    },
    {
      value: 188,
      day: '2017-10-28',
    },
    {
      value: 42,
      day: '2015-07-31',
    },
    {
      value: 124,
      day: '2016-11-16',
    },
    {
      value: 215,
      day: '2015-06-21',
    },
    {
      value: 102,
      day: '2015-04-11',
    },
    {
      value: 91,
      day: '2017-04-14',
    },
    {
      value: 356,
      day: '2017-11-24',
    },
    {
      value: 98,
      day: '2018-01-16',
    },
    {
      value: 273,
      day: '2017-05-06',
    },
    {
      value: 301,
      day: '2017-11-28',
    },
    {
      value: 2,
      day: '2016-11-03',
    },
    {
      value: 260,
      day: '2015-10-14',
    },
    {
      value: 397,
      day: '2016-11-12',
    },
    {
      value: 129,
      day: '2015-05-03',
    },
    {
      value: 79,
      day: '2016-05-27',
    },
    {
      value: 23,
      day: '2016-06-26',
    },
    {
      value: 368,
      day: '2017-06-10',
    },
    {
      value: 395,
      day: '2017-08-27',
    },
    {
      value: 322,
      day: '2015-06-24',
    },
    {
      value: 289,
      day: '2015-12-20',
    },
    {
      value: 327,
      day: '2017-06-17',
    },
    {
      value: 233,
      day: '2015-07-30',
    },
    {
      value: 328,
      day: '2016-12-19',
    },
    {
      value: 127,
      day: '2015-04-27',
    },
    {
      value: 132,
      day: '2017-08-13',
    },
    {
      value: 266,
      day: '2018-03-07',
    },
    {
      value: 234,
      day: '2015-09-16',
    },
    {
      value: 300,
      day: '2016-09-29',
    },
    {
      value: 266,
      day: '2018-05-31',
    },
    {
      value: 87,
      day: '2016-01-13',
    },
    {
      value: 81,
      day: '2017-11-22',
    },
    {
      value: 173,
      day: '2017-07-14',
    },
    {
      value: 117,
      day: '2017-06-16',
    },
    {
      value: 104,
      day: '2016-11-29',
    },
    {
      value: 258,
      day: '2017-03-10',
    },
    {
      value: 361,
      day: '2018-05-19',
    },
    {
      value: 273,
      day: '2017-04-17',
    },
    {
      value: 132,
      day: '2016-06-20',
    },
    {
      value: 323,
      day: '2017-07-04',
    },
    {
      value: 293,
      day: '2016-05-23',
    },
    {
      value: 242,
      day: '2017-02-01',
    },
    {
      value: 296,
      day: '2016-05-08',
    },
    {
      value: 147,
      day: '2017-07-31',
    },
    {
      value: 192,
      day: '2018-06-09',
    },
    {
      value: 381,
      day: '2018-06-27',
    },
    {
      value: 365,
      day: '2017-06-30',
    },
    {
      value: 344,
      day: '2017-03-05',
    },
    {
      value: 304,
      day: '2016-03-19',
    },
    {
      value: 250,
      day: '2016-12-18',
    },
    {
      value: 293,
      day: '2015-05-27',
    },
    {
      value: 11,
      day: '2017-09-16',
    },
    {
      value: 339,
      day: '2017-12-16',
    },
    {
      value: 336,
      day: '2016-10-14',
    },
    {
      value: 128,
      day: '2015-06-16',
    },
    {
      value: 269,
      day: '2018-05-03',
    },
    {
      value: 243,
      day: '2017-09-01',
    },
    {
      value: 178,
      day: '2017-02-08',
    },
    {
      value: 242,
      day: '2017-04-01',
    },
    {
      value: 280,
      day: '2017-12-11',
    },
    {
      value: 84,
      day: '2016-05-03',
    },
    {
      value: 331,
      day: '2018-07-23',
    },
    {
      value: 52,
      day: '2018-01-25',
    },
    {
      value: 88,
      day: '2016-04-12',
    },
    {
      value: 338,
      day: '2017-04-24',
    },
    {
      value: 16,
      day: '2015-04-15',
    },
    {
      value: 205,
      day: '2015-07-10',
    },
    {
      value: 191,
      day: '2018-03-15',
    },
    {
      value: 367,
      day: '2017-05-22',
    },
    {
      value: 139,
      day: '2016-01-14',
    },
    {
      value: 68,
      day: '2017-12-13',
    },
    {
      value: 210,
      day: '2015-10-15',
    },
    {
      value: 64,
      day: '2017-07-13',
    },
    {
      value: 270,
      day: '2018-05-10',
    },
    {
      value: 313,
      day: '2017-05-07',
    },
    {
      value: 39,
      day: '2015-07-11',
    },
    {
      value: 13,
      day: '2018-03-01',
    },
    {
      value: 385,
      day: '2017-03-02',
    },
    {
      value: 308,
      day: '2017-06-11',
    },
    {
      value: 143,
      day: '2017-01-21',
    },
    {
      value: 212,
      day: '2018-08-01',
    },
    {
      value: 368,
      day: '2015-09-30',
    },
    {
      value: 293,
      day: '2016-07-11',
    },
    {
      value: 343,
      day: '2018-03-08',
    },
    {
      value: 59,
      day: '2017-06-14',
    },
    {
      value: 378,
      day: '2016-09-03',
    },
    {
      value: 149,
      day: '2015-06-03',
    },
    {
      value: 47,
      day: '2015-09-03',
    },
    {
      value: 40,
      day: '2016-02-12',
    },
    {
      value: 68,
      day: '2017-01-07',
    },
    {
      value: 28,
      day: '2016-08-05',
    },
    {
      value: 343,
      day: '2017-12-09',
    },
    {
      value: 286,
      day: '2016-07-01',
    },
    {
      value: 146,
      day: '2017-12-07',
    },
    {
      value: 17,
      day: '2017-07-20',
    },
    {
      value: 37,
      day: '2016-06-24',
    },
    {
      value: 115,
      day: '2018-01-26',
    },
    {
      value: 157,
      day: '2015-10-05',
    },
    {
      value: 112,
      day: '2016-12-28',
    },
    {
      value: 224,
      day: '2015-07-23',
    },
    {
      value: 288,
      day: '2016-07-06',
    },
    {
      value: 160,
      day: '2015-06-01',
    },
    {
      value: 370,
      day: '2017-12-05',
    },
    {
      value: 371,
      day: '2016-06-03',
    },
    {
      value: 36,
      day: '2017-12-24',
    },
    {
      value: 19,
      day: '2017-08-09',
    },
    {
      value: 104,
      day: '2017-03-24',
    },
    {
      value: 329,
      day: '2018-04-06',
    },
    {
      value: 175,
      day: '2016-07-07',
    },
    {
      value: 17,
      day: '2017-01-26',
    },
    {
      value: 131,
      day: '2017-01-29',
    },
    {
      value: 241,
      day: '2016-10-21',
    },
    {
      value: 79,
      day: '2016-09-05',
    },
    {
      value: 278,
      day: '2016-11-08',
    },
    {
      value: 198,
      day: '2015-08-05',
    },
    {
      value: 87,
      day: '2015-04-10',
    },
    {
      value: 275,
      day: '2017-08-06',
    },
    {
      value: 42,
      day: '2017-12-12',
    },
    {
      value: 274,
      day: '2016-03-30',
    },
    {
      value: 358,
      day: '2016-09-23',
    },
    {
      value: 49,
      day: '2018-08-04',
    },
    {
      value: 221,
      day: '2017-07-01',
    },
    {
      value: 19,
      day: '2017-08-03',
    },
    {
      value: 110,
      day: '2018-07-06',
    },
    {
      value: 92,
      day: '2017-02-20',
    },
    {
      value: 76,
      day: '2018-01-14',
    },
    {
      value: 97,
      day: '2016-03-31',
    },
    {
      value: 355,
      day: '2017-09-17',
    },
    {
      value: 119,
      day: '2015-08-21',
    },
    {
      value: 279,
      day: '2016-01-07',
    },
    {
      value: 219,
      day: '2015-08-20',
    },
    {
      value: 3,
      day: '2018-06-20',
    },
    {
      value: 49,
      day: '2015-04-20',
    },
    {
      value: 111,
      day: '2018-05-22',
    },
    {
      value: 232,
      day: '2015-08-23',
    },
    {
      value: 394,
      day: '2018-01-04',
    },
    {
      value: 288,
      day: '2017-04-25',
    },
    {
      value: 380,
      day: '2015-09-27',
    },
    {
      value: 22,
      day: '2018-05-15',
    },
    {
      value: 223,
      day: '2016-04-24',
    },
    {
      value: 111,
      day: '2017-10-24',
    },
    {
      value: 66,
      day: '2018-06-25',
    },
    {
      value: 282,
      day: '2017-11-05',
    },
    {
      value: 165,
      day: '2017-08-18',
    },
    {
      value: 2,
      day: '2017-08-19',
    },
    {
      value: 320,
      day: '2018-07-11',
    },
    {
      value: 61,
      day: '2016-03-04',
    },
    {
      value: 179,
      day: '2015-08-22',
    },
    {
      value: 353,
      day: '2016-04-18',
    },
    {
      value: 88,
      day: '2015-08-13',
    },
    {
      value: 92,
      day: '2016-10-26',
    },
    {
      value: 34,
      day: '2015-04-23',
    },
    {
      value: 91,
      day: '2017-05-24',
    },
    {
      value: 251,
      day: '2018-06-18',
    },
    {
      value: 45,
      day: '2016-02-18',
    },
    {
      value: 350,
      day: '2017-05-27',
    },
    {
      value: 291,
      day: '2017-02-07',
    },
    {
      value: 158,
      day: '2017-03-08',
    },
    {
      value: 72,
      day: '2016-07-23',
    },
    {
      value: 134,
      day: '2016-12-05',
    },
    {
      value: 324,
      day: '2015-04-19',
    },
    {
      value: 210,
      day: '2016-04-14',
    },
    {
      value: 90,
      day: '2015-12-27',
    },
    {
      value: 30,
      day: '2017-01-12',
    },
    {
      value: 386,
      day: '2017-07-08',
    },
    {
      value: 5,
      day: '2017-01-06',
    },
    {
      value: 302,
      day: '2016-07-22',
    },
    {
      value: 61,
      day: '2016-12-01',
    },
    {
      value: 119,
      day: '2017-07-18',
    },
    {
      value: 90,
      day: '2016-08-07',
    },
    {
      value: 21,
      day: '2018-07-18',
    },
    {
      value: 280,
      day: '2016-05-18',
    },
    {
      value: 385,
      day: '2015-06-10',
    },
    {
      value: 188,
      day: '2015-09-12',
    },
    {
      value: 383,
      day: '2017-12-15',
    },
    {
      value: 143,
      day: '2018-02-27',
    },
    {
      value: 81,
      day: '2015-04-07',
    },
    {
      value: 91,
      day: '2017-05-15',
    },
    {
      value: 375,
      day: '2016-09-02',
    },
    {
      value: 359,
      day: '2017-05-26',
    },
    {
      value: 348,
      day: '2017-04-03',
    },
    {
      value: 332,
      day: '2017-03-17',
    },
    {
      value: 78,
      day: '2018-05-02',
    },
    {
      value: 143,
      day: '2016-05-16',
    },
    {
      value: 259,
      day: '2018-05-21',
    },
    {
      value: 55,
      day: '2016-09-19',
    },
    {
      value: 361,
      day: '2016-05-31',
    },
    {
      value: 278,
      day: '2018-01-24',
    },
    {
      value: 191,
      day: '2017-12-17',
    },
    {
      value: 326,
      day: '2017-05-28',
    },
    {
      value: 271,
      day: '2015-07-07',
    },
    {
      value: 86,
      day: '2016-05-15',
    },
    {
      value: 317,
      day: '2016-08-23',
    },
    {
      value: 264,
      day: '2016-03-15',
    },
    {
      value: 190,
      day: '2016-03-25',
    },
    {
      value: 162,
      day: '2016-08-19',
    },
    {
      value: 310,
      day: '2017-12-04',
    },
    {
      value: 304,
      day: '2018-02-22',
    },
    {
      value: 315,
      day: '2015-08-17',
    },
    {
      value: 382,
      day: '2017-01-22',
    },
    {
      value: 159,
      day: '2017-06-24',
    },
    {
      value: 221,
      day: '2016-07-02',
    },
    {
      value: 31,
      day: '2015-10-26',
    },
    {
      value: 109,
      day: '2016-12-07',
    },
    {
      value: 230,
      day: '2015-08-26',
    },
    {
      value: 114,
      day: '2017-11-10',
    },
    {
      value: 170,
      day: '2018-02-01',
    },
    {
      value: 4,
      day: '2016-10-18',
    },
    {
      value: 281,
      day: '2018-07-19',
    },
    {
      value: 359,
      day: '2015-06-27',
    },
    {
      value: 320,
      day: '2016-03-10',
    },
    {
      value: 241,
      day: '2017-11-16',
    },
    {
      value: 325,
      day: '2015-11-26',
    },
    {
      value: 154,
      day: '2016-09-20',
    },
    {
      value: 171,
      day: '2017-08-17',
    },
    {
      value: 76,
      day: '2015-11-15',
    },
    {
      value: 308,
      day: '2015-08-28',
    },
    {
      value: 37,
      day: '2016-09-12',
    },
    {
      value: 95,
      day: '2016-02-05',
    },
    {
      value: 223,
      day: '2016-01-16',
    },
    {
      value: 360,
      day: '2015-08-10',
    },
    {
      value: 226,
      day: '2015-06-30',
    },
    {
      value: 142,
      day: '2015-05-18',
    },
    {
      value: 155,
      day: '2015-04-03',
    },
    {
      value: 344,
      day: '2015-11-07',
    },
    {
      value: 138,
      day: '2018-04-15',
    },
    {
      value: 164,
      day: '2017-11-09',
    },
    {
      value: 16,
      day: '2016-11-13',
    },
    {
      value: 280,
      day: '2018-03-21',
    },
    {
      value: 346,
      day: '2016-10-29',
    },
    {
      value: 196,
      day: '2016-11-21',
    },
    {
      value: 289,
      day: '2016-08-22',
    },
    {
      value: 31,
      day: '2016-07-21',
    },
    {
      value: 296,
      day: '2016-05-28',
    },
    {
      value: 231,
      day: '2017-04-22',
    },
    {
      value: 18,
      day: '2016-08-03',
    },
    {
      value: 83,
      day: '2016-05-12',
    },
    {
      value: 311,
      day: '2018-05-06',
    },
    {
      value: 43,
      day: '2017-02-13',
    },
    {
      value: 334,
      day: '2018-02-11',
    },
    {
      value: 236,
      day: '2017-09-28',
    },
    {
      value: 67,
      day: '2015-09-02',
    },
    {
      value: 374,
      day: '2018-06-22',
    },
    {
      value: 11,
      day: '2018-01-05',
    },
    {
      value: 69,
      day: '2015-11-06',
    },
    {
      value: 237,
      day: '2017-12-22',
    },
    {
      value: 130,
      day: '2015-05-13',
    },
    {
      value: 290,
      day: '2015-09-18',
    },
    {
      value: 94,
      day: '2018-07-07',
    },
    {
      value: 113,
      day: '2015-11-27',
    },
    {
      value: 358,
      day: '2016-07-27',
    },
    {
      value: 375,
      day: '2017-02-05',
    },
    {
      value: 191,
      day: '2017-09-11',
    },
    {
      value: 29,
      day: '2018-06-17',
    },
    {
      value: 275,
      day: '2016-01-20',
    },
    {
      value: 219,
      day: '2018-05-20',
    },
    {
      value: 8,
      day: '2015-11-30',
    },
    {
      value: 255,
      day: '2017-05-11',
    },
    {
      value: 377,
      day: '2017-03-07',
    },
    {
      value: 40,
      day: '2016-04-16',
    },
    {
      value: 340,
      day: '2016-12-26',
    },
    {
      value: 149,
      day: '2018-08-06',
    },
    {
      value: 26,
      day: '2017-11-01',
    },
    {
      value: 17,
      day: '2015-10-17',
    },
    {
      value: 253,
      day: '2016-10-27',
    },
    {
      value: 252,
      day: '2018-01-29',
    },
    {
      value: 121,
      day: '2017-10-01',
    },
    {
      value: 207,
      day: '2015-12-31',
    },
    {
      value: 279,
      day: '2018-07-25',
    },
    {
      value: 46,
      day: '2015-08-08',
    },
    {
      value: 374,
      day: '2018-04-24',
    },
    {
      value: 196,
      day: '2017-10-05',
    },
    {
      value: 369,
      day: '2016-06-09',
    },
    {
      value: 343,
      day: '2016-10-13',
    },
    {
      value: 9,
      day: '2016-06-25',
    },
    {
      value: 342,
      day: '2018-06-23',
    },
    {
      value: 387,
      day: '2017-02-21',
    },
    {
      value: 38,
      day: '2016-11-28',
    },
    {
      value: 22,
      day: '2017-12-27',
    },
    {
      value: 31,
      day: '2018-03-13',
    },
    {
      value: 64,
      day: '2016-12-27',
    },
    {
      value: 307,
      day: '2016-12-23',
    },
    {
      value: 234,
      day: '2017-03-18',
    },
    {
      value: 353,
      day: '2018-03-11',
    },
    {
      value: 120,
      day: '2015-07-15',
    },
    {
      value: 348,
      day: '2016-06-02',
    },
    {
      value: 139,
      day: '2016-10-22',
    },
    {
      value: 56,
      day: '2016-05-29',
    },
    {
      value: 299,
      day: '2015-11-01',
    },
    {
      value: 104,
      day: '2017-11-11',
    },
    {
      value: 183,
      day: '2015-12-24',
    },
    {
      value: 201,
      day: '2017-01-10',
    },
    {
      value: 364,
      day: '2015-10-13',
    },
    {
      value: 231,
      day: '2017-09-24',
    },
    {
      value: 214,
      day: '2018-05-16',
    },
    {
      value: 119,
      day: '2015-05-23',
    },
    {
      value: 126,
      day: '2015-06-13',
    },
    {
      value: 27,
      day: '2017-03-09',
    },
    {
      value: 230,
      day: '2015-05-05',
    },
    {
      value: 327,
      day: '2017-05-18',
    },
    {
      value: 161,
      day: '2015-09-26',
    },
    {
      value: 191,
      day: '2016-10-25',
    },
    {
      value: 248,
      day: '2016-06-30',
    },
    {
      value: 347,
      day: '2016-01-28',
    },
    {
      value: 340,
      day: '2018-05-04',
    },
    {
      value: 265,
      day: '2015-04-13',
    },
    {
      value: 272,
      day: '2017-08-08',
    },
    {
      value: 374,
      day: '2017-08-10',
    },
    {
      value: 173,
      day: '2017-02-14',
    },
    {
      value: 335,
      day: '2017-11-14',
    },
    {
      value: 329,
      day: '2016-05-10',
    },
    {
      value: 214,
      day: '2015-08-09',
    },
    {
      value: 278,
      day: '2017-01-20',
    },
    {
      value: 284,
      day: '2017-11-15',
    },
    {
      value: 303,
      day: '2016-04-21',
    },
    {
      value: 59,
      day: '2017-09-22',
    },
    {
      value: 39,
      day: '2017-10-13',
    },
    {
      value: 53,
      day: '2016-08-21',
    },
    {
      value: 12,
      day: '2015-09-13',
    },
    {
      value: 260,
      day: '2015-05-30',
    },
    {
      value: 276,
      day: '2018-05-11',
    },
    {
      value: 326,
      day: '2016-07-28',
    },
    {
      value: 147,
      day: '2015-10-09',
    },
    {
      value: 27,
      day: '2016-04-06',
    },
    {
      value: 60,
      day: '2016-07-31',
    },
    {
      value: 366,
      day: '2017-01-11',
    },
    {
      value: 27,
      day: '2015-09-25',
    },
    {
      value: 71,
      day: '2018-07-17',
    },
    {
      value: 213,
      day: '2017-02-16',
    },
    {
      value: 363,
      day: '2017-06-21',
    },
    {
      value: 312,
      day: '2018-04-20',
    },
    {
      value: 289,
      day: '2018-04-17',
    },
    {
      value: 381,
      day: '2015-10-02',
    },
    {
      value: 140,
      day: '2017-05-10',
    },
    {
      value: 17,
      day: '2017-01-24',
    },
    {
      value: 58,
      day: '2017-11-17',
    },
    {
      value: 200,
      day: '2018-04-04',
    },
    {
      value: 159,
      day: '2018-06-05',
    },
    {
      value: 226,
      day: '2017-11-03',
    },
    {
      value: 390,
      day: '2015-06-23',
    },
    {
      value: 8,
      day: '2016-06-07',
    },
    {
      value: 201,
      day: '2016-04-15',
    },
    {
      value: 4,
      day: '2017-04-27',
    },
    {
      value: 24,
      day: '2015-11-28',
    },
    {
      value: 236,
      day: '2016-02-13',
    },
    {
      value: 193,
      day: '2016-01-04',
    },
    {
      value: 189,
      day: '2015-05-01',
    },
    {
      value: 103,
      day: '2015-11-20',
    },
    {
      value: 43,
      day: '2018-04-21',
    },
    {
      value: 9,
      day: '2018-07-26',
    },
    {
      value: 394,
      day: '2015-04-16',
    },
    {
      value: 399,
      day: '2016-10-09',
    },
    {
      value: 81,
      day: '2018-04-05',
    },
    {
      value: 38,
      day: '2018-08-11',
    },
    {
      value: 194,
      day: '2016-10-05',
    },
    {
      value: 317,
      day: '2017-03-26',
    },
    {
      value: 73,
      day: '2018-03-04',
    },
    {
      value: 376,
      day: '2018-04-16',
    },
    {
      value: 347,
      day: '2016-06-11',
    },
    {
      value: 185,
      day: '2017-08-11',
    },
    {
      value: 388,
      day: '2015-06-04',
    },
    {
      value: 129,
      day: '2017-10-04',
    },
    {
      value: 27,
      day: '2017-03-31',
    },
    {
      value: 295,
      day: '2018-04-01',
    },
    {
      value: 145,
      day: '2015-11-11',
    },
    {
      value: 379,
      day: '2016-02-14',
    },
    {
      value: 277,
      day: '2016-09-14',
    },
    {
      value: 304,
      day: '2016-03-24',
    },
    {
      value: 183,
      day: '2016-05-11',
    },
    {
      value: 74,
      day: '2018-04-19',
    },
    {
      value: 115,
      day: '2016-05-30',
    },
    {
      value: 20,
      day: '2015-04-12',
    },
    {
      value: 162,
      day: '2016-06-01',
    },
    {
      value: 201,
      day: '2016-09-17',
    },
    {
      value: 54,
      day: '2017-01-03',
    },
    {
      value: 76,
      day: '2016-07-10',
    },
    {
      value: 166,
      day: '2017-11-18',
    },
    {
      value: 41,
      day: '2015-06-06',
    },
    {
      value: 372,
      day: '2018-01-30',
    },
    {
      value: 286,
      day: '2016-12-09',
    },
    {
      value: 286,
      day: '2017-12-31',
    },
    {
      value: 201,
      day: '2018-01-19',
    },
    {
      value: 165,
      day: '2016-09-25',
    },
    {
      value: 147,
      day: '2017-07-17',
    },
    {
      value: 175,
      day: '2018-06-07',
    },
    {
      value: 144,
      day: '2017-08-25',
    },
    {
      value: 241,
      day: '2016-06-16',
    },
    {
      value: 247,
      day: '2017-07-06',
    },
    {
      value: 352,
      day: '2015-04-22',
    },
    {
      value: 160,
      day: '2017-02-04',
    },
    {
      value: 53,
      day: '2017-10-09',
    },
    {
      value: 211,
      day: '2017-11-27',
    },
    {
      value: 293,
      day: '2015-11-16',
    },
    {
      value: 33,
      day: '2017-08-07',
    },
    {
      value: 24,
      day: '2016-01-09',
    },
    {
      value: 350,
      day: '2016-09-06',
    },
    {
      value: 169,
      day: '2017-09-26',
    },
    {
      value: 360,
      day: '2018-06-06',
    },
    {
      value: 387,
      day: '2017-12-28',
    },
    {
      value: 308,
      day: '2016-06-21',
    },
    {
      value: 397,
      day: '2017-10-19',
    },
    {
      value: 80,
      day: '2017-09-09',
    },
    {
      value: 141,
      day: '2018-01-08',
    },
    {
      value: 314,
      day: '2016-11-25',
    },
    {
      value: 207,
      day: '2017-05-30',
    },
    {
      value: 386,
      day: '2016-08-14',
    },
    {
      value: 70,
      day: '2017-04-18',
    },
    {
      value: 220,
      day: '2018-06-11',
    },
    {
      value: 291,
      day: '2018-08-02',
    },
    {
      value: 268,
      day: '2017-06-04',
    },
    {
      value: 307,
      day: '2015-09-24',
    },
    {
      value: 287,
      day: '2017-09-14',
    },
    {
      value: 335,
      day: '2016-03-09',
    },
    {
      value: 249,
      day: '2018-03-26',
    },
    {
      value: 110,
      day: '2018-03-27',
    },
    {
      value: 121,
      day: '2018-02-20',
    },
    {
      value: 300,
      day: '2015-10-06',
    },
    {
      value: 123,
      day: '2016-12-10',
    },
    {
      value: 36,
      day: '2016-04-04',
    },
    {
      value: 399,
      day: '2015-10-24',
    },
    {
      value: 330,
      day: '2016-03-18',
    },
    {
      value: 153,
      day: '2016-03-08',
    },
    {
      value: 99,
      day: '2017-07-15',
    },
    {
      value: 142,
      day: '2015-11-23',
    },
    {
      value: 270,
      day: '2016-06-28',
    },
    {
      value: 390,
      day: '2017-01-19',
    },
    {
      value: 228,
      day: '2017-09-23',
    },
    {
      value: 262,
      day: '2016-11-17',
    },
    {
      value: 337,
      day: '2016-12-25',
    },
    {
      value: 54,
      day: '2016-11-02',
    },
    {
      value: 127,
      day: '2015-06-14',
    },
    {
      value: 127,
      day: '2018-04-27',
    },
    {
      value: 340,
      day: '2018-01-23',
    },
    {
      value: 104,
      day: '2017-07-26',
    },
    {
      value: 346,
      day: '2018-04-23',
    },
    {
      value: 109,
      day: '2015-08-25',
    },
    {
      value: 336,
      day: '2017-02-25',
    },
    {
      value: 171,
      day: '2015-10-01',
    },
    {
      value: 336,
      day: '2016-08-16',
    },
    {
      value: 5,
      day: '2018-03-19',
    },
    {
      value: 40,
      day: '2018-01-28',
    },
    {
      value: 65,
      day: '2016-10-01',
    },
    {
      value: 331,
      day: '2016-11-23',
    },
    {
      value: 266,
      day: '2017-03-23',
    },
    {
      value: 231,
      day: '2016-02-01',
    },
    {
      value: 192,
      day: '2015-12-04',
    },
    {
      value: 139,
      day: '2015-04-30',
    },
    {
      value: 301,
      day: '2017-06-27',
    },
    {
      value: 50,
      day: '2016-04-09',
    },
  ]
  return (
    <div
      className="row justify-center align-center gap-large padding-large bg-white"
      style={{height: '600px', padding: '63px 110px'}}
    >
      <Calendar
        data={data}
        width={1000}
        height={400}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{top: 40, right: 40, bottom: 40, left: 40}}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
      )
    </div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    ['67.3%', '26.3.2022'],
    ['42.4%', '26.3.2022'],
    ['33.7%', '26.3.2022'],
    ['22.1%', '26.3.2022'],
  ]
  const weights = ['bolder', 'bold', 'normal', 'light']
  return (
    <div
      className="row space-between align-center gap-large padding-large "
      style={{padding: '63px 110px'}}
    >
      {stats.map(([percentage, date], index) => (
        <div className="column">
          <p className={`font-xxl font-highlight font-${weights[index]}`}>
            {percentage}
          </p>
          <p>{date}</p>
        </div>
      ))}
    </div>
  )
}

const Tools: React.FC = () => {
  const tools = {
    github,
    heroku,
    datadog,
    launchdarkly,
  }
  return (
    <div
      className="row space-between align-center gap-large padding-large bg-white"
      style={{padding: '63px 110px'}}
    >
      {Object.entries(tools).map(([key, value]) => (
        <img key={key} src={value} />
      ))}
    </div>
  )
}

const Footer: React.FC = () => (
  <div
    className="row align-center gap-large padding-nav"
    style={{height: '172px'}}
  >
    <img width="84" src={engineeringSmall} />
  </div>
)

export default function Index() {
  return (
    <div>
      <Navbar />
      <Stats />
      <RadarSection />
      <CalendarSection />
      <Tools />
      <Footer />
    </div>
  )
}
