import Hero from '~/components/layout/Hero'
import Section from '~/components/layout/Section'
import scar from '~/assets/images/scar.png'
import martin from '~/assets/images/martin.png'
import victor from '~/assets/images/victor.png'

const Member: React.FC<{ file: string }> = ({ file }) => {
  return (
    <div>
      <img width="390" src={file} />
      <div className="flex flex-col gap-2 pt-6">
        <p className="text-lg">Full Name </p>
        <p>
          <span className="text-highlight-on pr-2">Location:</span>Copenhagen
        </p>
        <span className="text-highlight-on pr-2">Languages:</span>
        <ul className="pl-4">
          <ol>· Ruby</ol>
          <ol>· Python</ol>
          <ol>· Java script</ol>
        </ul>
        <p>
          <span className="text-highlight-on pr-2">Fave game:</span>lorem ipsum
        </p>
        <p>
          <span className="text-highlight-on pr-2">Fun fact:</span>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do.
        </p>
        <a href="#" className="text-orangeish pt-8">
          link here
        </a>
      </div>
    </div>
  )
}

const Squad = () => (
  <div className="flex flex-row justify-between gap-16">
    <Member file={scar} />
    <Member file={martin} />
    <Member file={victor} />
  </div>
)

export default function Resources() {
  return (
    <div>
      <Hero title="Team">
        <span className="text-mono text-xl">12.02.2022</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Hero>
      <Section title="Hardcore">
        <Squad />
      </Section>
      <Section title="Los Correros" light>
        <Squad />
      </Section>
      <Section title="VC">
        <Squad />
      </Section>
      <Section title="Transaction" light>
        <Squad />
      </Section>
    </div>
  )
}
