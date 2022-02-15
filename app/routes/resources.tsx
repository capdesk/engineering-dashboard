import Hero from '~/components/layout/Hero'
import Section from '~/components/layout/Section'
import Placeholder from '~/components/Placeholder'
import image1 from '~/assets/images/image1.png'
import image2 from '~/assets/images/image2.png'
import image3 from '~/assets/images/image3.png'

export default function Resources() {
  return (
    <div>
      <Hero title="Resources">
        <span className="text-mono text-xl">12.02.2022</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Hero>
      <Section title="Videos">
        <div className="flex flex-row justify-between gap-16">
          <div>
            <img width="390" src={image1} />
            <Placeholder />
          </div>
          <div>
            <img width="390" src={image2} />
            <Placeholder />
          </div>
          <div>
            <img width="390" src={image3} />
            <Placeholder />
          </div>
        </div>
      </Section>
      <Section title="Articles and assets" light>
        <div className="flex flex-row justify-between gap-16">
          <div>
            <img width="390" src={image1} />
            <Placeholder />
          </div>
          <div>
            <img width="390" src={image2} />
            <Placeholder />
          </div>
          <div>
            <img width="390" src={image3} />
            <Placeholder />
          </div>
        </div>
      </Section>
    </div>
  )
}
