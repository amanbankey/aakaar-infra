import { ArrowRight } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading.jsx'
import ServiceCard from '../../ui/ServiceCard.jsx'
import Button from '../../ui/Button.jsx'
import { services } from '../../../constants/services.js'

export default function ServicesPreview() {
  const preview = services.slice(0, 6)

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Construction Services Built On Precision"
          description="From residential homes to large-scale infrastructure, we deliver every project with engineering discipline and premium finishing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button to="/services" variant="outline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
