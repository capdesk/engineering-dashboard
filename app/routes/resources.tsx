import Hero from '~/components/layout/Hero'
import Section from '~/components/layout/Section'

export default function Resources() {
  return (
    <div>
      <Hero title="Resources">
        <span className="text-mono text-xl">12.02.2022</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Hero>
      <Section title="Videos" />
      <Section title="Articles and assets" light />
    </div>
  )
}
