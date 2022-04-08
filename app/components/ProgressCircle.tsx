import style from 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'

export function links() {
  return [{ rel: 'stylesheet', href: style }]
}

const ProgressCircle: React.FC<{ color: string; percentage: number }> = ({ color, percentage, children }) => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          trailColor: '#C4C4C4',
          pathColor: color,
        })}
      >
        {children}
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default ProgressCircle
