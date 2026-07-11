import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ServicesGrid from '../components/sections/services/ServicesGrid.jsx'
import ServicesCTA from '../components/sections/services/ServicesCTA.jsx'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Aakaar Infra's construction services including residential, commercial, industrial, civil engineering, road construction and government projects in Khandwa."
      />
      <PageHero
        eyebrow="Our Services"
        title="End-to-End Construction Solutions"
        description="From concept to completion, Aakaar Infra delivers every category of construction with precision and care."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920"
      />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
