import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import CompanyStory from '../components/sections/about/CompanyStory.jsx'
import MissionVision from '../components/sections/about/MissionVision.jsx'
import Timeline from '../components/sections/about/Timeline.jsx'
import CoreValues from '../components/sections/about/CoreValues.jsx'
import StatsSection from '../components/sections/home/StatsSection.jsx'
import WhyChooseUs from '../components/sections/home/WhyChooseUs.jsx'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Aakaar Infra's story, mission, vision and core values as a leading construction company in Khandwa, Madhya Pradesh."
      />
      <PageHero
        eyebrow="About Aakaar Infra"
        title="Building With Purpose Since Day One"
        description="A decade of construction expertise rooted in Khandwa, Madhya Pradesh."
        image="https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=1920"
      />
      <CompanyStory />
      <MissionVision />
      <StatsSection />
      <Timeline />
      <CoreValues />
      <WhyChooseUs />
    </>
  )
}
