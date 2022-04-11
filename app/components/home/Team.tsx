import Arrow from '~/components/Arrow'
import Circle from '~/components/Circle'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'

const Team = () => {
  return (
    <div className="flex flex-col xl:p-16 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32">
      <div className="flex flex-row gap-8 pt-80 w-2/3 m-auto">
        <div>
          <Circle id="hiring-circle" className="ml-3" />
        </div>
        <div className="flex flex-col gap-8 font-light">
          <H3>Interested in joining the team?</H3>
          <Paragraph className="font-inter">
            Interested in joining the team? Do you like what you see at Capdesk? Are you looking to join a product team
            with solid processes and room for growth? Check out our latest positions or drop us an email at
            careers@capdesk.com find out more
          </Paragraph>
          <a href="https://careers.capdesk.com/" className="text-orangeish text-xl hover:underline">
            Find out more
          </a>
        </div>

        <Arrow start="hiring-arrow" end="hiring-circle" lineColor="#dddddd" showHead={false} endAnchor="left" />
      </div>
    </div>
  )
}

export default Team
