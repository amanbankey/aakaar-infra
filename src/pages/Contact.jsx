import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ContactForm from '../components/sections/contact/ContactForm.jsx'
import ContactInfo from '../components/sections/contact/ContactInfo.jsx'
import MapSection from '../components/sections/contact/MapSection.jsx'

export default function Contact() {

  const contactImages = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920",
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1920",
];

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
        images={contactImages}
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
