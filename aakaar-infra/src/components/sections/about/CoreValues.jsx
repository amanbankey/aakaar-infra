import { motion } from 'framer-motion'
import { ShieldCheck, Gem, HardHat, Clock } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading.jsx'
import { coreValues } from '../../../constants/testimonials.js'
import { fadeUp } from '../../../animations/variants.js'

const icons = [ShieldCheck, Gem, HardHat, Clock]

export default function CoreValues() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={value.title}
                custom={index * 0.1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl bg-[#171B22] border border-white/5 p-7 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-9 h-9 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-[#B8C1CC] text-sm mt-2">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
