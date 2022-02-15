import engineeringSmall from '~/assets/images/engineering-small.svg'
import Arrow from '~/components/Arrow'
import Circle from '~/components/Circle'

const Footer: React.FC = () => (
  <div className="px-14 py-12 bg-dark-300">
    <div className="flex flex-col">
      <div className="flex flex-col justify-end items-center" style={{ width: '250px', marginLeft: '-2px' }}>
        <Circle className="bg-dark-300" id="footer" />
        <Arrow start="tools" end="footer" endAnchor="top" />
        <img width="84" src={engineeringSmall} />
      </div>
    </div>
  </div>
)

export default Footer
