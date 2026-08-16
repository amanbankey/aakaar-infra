import { motion } from 'framer-motion'
import SectionHeading from '../../ui/SectionHeading.jsx'
import { timeline } from '../../../constants/testimonials.js'
import { fadeUp } from '../../../animations/variants.js'

export default function Timeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="Our Journey" title="Milestones That Shaped Aakaar Infra" />

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              custom={index * 0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              <span className="absolute -left-8 md:left-auto md:top-1 w-3 h-3 rounded-full bg-primary md:static md:inline-block" />
              <span className="text-primary font-bold text-xl">{item.year}</span>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              <p className="text-[#B8C1CC] text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
