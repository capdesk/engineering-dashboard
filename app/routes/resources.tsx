import Hero from '~/components/layout/Hero'
import Section from '~/components/layout/Section'
import Placeholder from '~/components/Placeholder'
import image1 from '~/assets/images/image1.png'
import image2 from '~/assets/images/image2.png'
import image3 from '~/assets/images/image3.png'
import TodayDate from '~/components/TodayDate'
import Paragraph from '~/components/typography/Paragraph'

const videos = [
  {
    title: 'Video',
    description:
      'Find out about life as an Engineer at Capdesk with Vincent Seguin, Head of Engineering. “It’s not a feature factory, you get to really do what you love!”',
    label: 'watch',
    image: 'vincent.png',
    url: 'https://rmcdeo8p.videomarketingplatform.co/secret/73422078/1e9a39048627aacd2cbf4d790cefa06d',
  },

  {
    title: 'Podcast',
    description:
      'Best practice in software development — can startups do it? — with Marc-Antoine from Capdesk and Mustafa Shreet from the Silicon Roundabout Podcast.',
    label: 'listen',
    image: 'podcast.png',
    url: 'https://open.spotify.com/episode/6tjggH5MFxA8sHIj3VuUvK?si=304074ae3a7848c5',
  },
  {
    title: 'Product Demo',
    description:
      'Discover the key features of Capdesk with a comprehensive walk-through of the product, with James Bardwell, Enterprise SDR.',
    label: 'watch',
    image: 'product_demo.png',
    url: 'https://rmcdeo8p.videomarketingplatform.co/v.ihtml/player.html?token=064e04957fcbb7452dd29cda9d39a199&source=embed&photo%5fid=72316216',
  },
]

const articles = [
  {
    title: 'Design System',
    description:
      'Check out our comprehensive design system for the Capdesk product. A single source of truth that groups all the design elements together in one place.',
    label: 'view',
    image: 'design_system.png',
    url: 'https://camo.capdesk.com',
  },
  {
    title: 'Article',
    description: (
      <div className="flex flex-col gap-2">
        <p>What it’s like to be a student developer at Capdesk</p>
        <p>Written on July 14, 2021, by Krystof Spiller, Student Developer at Capdesk read</p>
      </div>
    ),
    label: 'read',
    image: 'capdesk_spaceship.png',
    url: 'https://blog.capdesk.com/life-as-a-student-developer',
  },
  {
    title: 'Article',
    description: (
      <div className="flex flex-col gap-2">
        <p>Five learnings in five years at Capdesk</p>
        <p>Written on May 27, 2021, by Alexander Olsen, Senior Backend Developer</p>
      </div>
    ),
    label: 'read',
    image: 'eat_sleep_code.png',
    url: 'https://blog.capdesk.com/five-years-five-learnings',
  },
]

type ResourceAttributes = typeof articles[number]

const Resource: React.FC<ResourceAttributes & { playable: boolean }> = ({
  title,
  description,
  label,
  image,
  url,
  playable,
}) => {
  return (
    <div className="max-w-[390px] mx-auto">
      <div className="group relative">
        <a href={url} target="_blank">
          <img className="m-auto md:m-0" width="390" src={`/img/resources/${image}`} />
          {playable && (
            <>
              <div className="absolute inset-0 bg-grey-400 opacity-50 group-hover:opacity-30 transition-all duration-200 ease-in-out" />

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img src={`/img/resources/play.png`} />
              </div>
            </>
          )}
        </a>
      </div>
      <div className="flex flex-col gap-8 pt-8 pb-4 font-light">
        <h3 className="text-2xl font-mono">{title}</h3>
        <div className="font-inter text-xl">{description}</div>
        <a href={url} target="_blank" className="text-orangeish text-lg font-mono hover:underline">
          {label}
        </a>
      </div>
    </div>
  )
}

const ResourcesSection: React.FC<{ title: string; playable?: boolean; resources: ResourceAttributes[] }> = ({
  title,
  resources,
  playable = false,
}) => {
  return (
    <Section title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16">
        {resources.map((resource) => (
          <Resource key={resource.title} {...resource} playable={playable} />
        ))}
      </div>
    </Section>
  )
}

export default function Resources() {
  return (
    <div>
      <Hero title="Resources">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between">
          <Paragraph className="w-full lg:w-1/2">
            Dive in and discover the latest from our Engineering Team.We’ve got videos, podcasts and articles to keep
            you entertained. Plus, check out our detailed design system. Enjoy!
          </Paragraph>
          <TodayDate />
        </div>
      </Hero>
      <ResourcesSection title="Videos" resources={videos} playable />
      <ResourcesSection title="Articles and assets" resources={articles} />
    </div>
  )
}
