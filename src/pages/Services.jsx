import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ServicesGrid from '../components/sections/services/ServicesGrid.jsx'
import ServicesCTA from '../components/sections/services/ServicesCTA.jsx'

const serviceImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920",
  "https://images.unsplash.com/photo-1590644365607-1c5a4c4b1f1f?q=80&w=1920",
];

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
        images={serviceImages}
      />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
