import SEO from '../components/SEO.jsx'
import Hero from '../components/sections/home/Hero.jsx'
import StatsSection from '../components/sections/home/StatsSection.jsx'
import ServicesPreview from '../components/sections/home/ServicesPreview.jsx'
import ProjectsPreview from '../components/sections/home/ProjectsPreview.jsx'
import WhyChooseUs from '../components/sections/home/WhyChooseUs.jsx'
import Testimonials from '../components/sections/home/Testimonials.jsx'
import GoogleRatingCTA from '../components/sections/home/GoogleRatingCTA.jsx'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Aakaar Infra is a trusted real estate builder and construction company in Khandwa, Madhya Pradesh, delivering residential, commercial and infrastructure projects."
      />
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <Testimonials />
      <GoogleRatingCTA />
    </>
  )
}
