import { motion } from 'framer-motion'
import SectionHeading from '../../ui/SectionHeading.jsx'
import { slideInLeft, slideInRight } from '../../../animations/variants.js'

export default function CompanyStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Decade of Building Trust in Khandwa"
          />
          <p className="text-[#B8C1CC] leading-relaxed">
            Aakaar Infra began as a small residential contracting team in Khandwa with one
            goal: build homes that families could rely on for generations. Over the years,
            that same discipline has carried us into commercial complexes, industrial estates
            and government infrastructure projects across Madhya Pradesh.
          </p>
          <p className="text-[#B8C1CC] leading-relaxed mt-4">
            Today, Aakaar Infra is recognised as a dependable real estate builder and
            construction company, backed by a perfect 5.0 star Google rating and a growing
            portfolio of completed landmarks.
          </p>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
            alt="Aakaar Infra construction team at work"
            loading="lazy"
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
