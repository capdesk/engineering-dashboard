import contributions from '~/assets/contributions.json'
import {Calendar as BaseCalendar} from '@nivo/calendar'

const Calendar: React.FC = () => (
  <BaseCalendar
    data={contributions}
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

export {Calendar}
