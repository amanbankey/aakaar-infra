import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ContactForm from '../components/sections/contact/ContactForm.jsx'
import ContactInfo from '../components/sections/contact/ContactInfo.jsx'
import MapSection from '../components/sections/contact/MapSection.jsx'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Aakaar Infra for a free construction estimate. Visit us at Shivaji Chowk, Khandwa, Madhya Pradesh, or call 07470742896."
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something Together"
        description="Reach out for a free, no-obligation estimate on your next construction project."
        image="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1920"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <MapSection />
    </>
  )
}
