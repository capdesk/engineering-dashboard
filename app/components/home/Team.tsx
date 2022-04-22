import { Component } from 'react'
import Arrow from '~/components/Arrow'
import Circle from '~/components/Circle'
import H3 from '~/components/typography/H3'
import Paragraph from '~/components/typography/Paragraph'
import { Map } from './Map'

const Metric = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <div
      key="key"
      className="bg-dark-300 rounded-sm flex flex-col px-16 py-10 gap-8 items-center w-full m-auto z-10"
      style={{ maxWidth: '250px' }}
    >
      <span className="text-mono text-highlight-on text-5xl">{value}</span>
      <span className="text-xl font-light whitespace-nowrap">{title}</span>
    </div>
  )
}

const Team = () => {
  return (
    <div className="flex flex-col xl:p-16 xl:pb-8 pb-0 gap-8 xl:gap-20 pt-16 xl:pt-32">
      <div className="w-full">
        <Map />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <Metric title="Squads" value={3} />
        <Metric title="Members" value={18} />
        <Metric title="Countries" value={9} />
        <Metric title="Languages" value={7} />
      </div>

      <div className="flex flex-row gap-8 w-2/3 m-auto">
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
