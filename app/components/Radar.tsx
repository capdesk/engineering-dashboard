import {Radar as BaseRadar} from '@nivo/radar'

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

const Radar: React.FC = () => (
  <BaseRadar
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
)

export {Radar}
