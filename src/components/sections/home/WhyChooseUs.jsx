import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading.jsx'
import { whyChooseUs } from '../../../constants/testimonials.js'
import { fadeUp, slideInLeft } from '../../../animations/variants.js'

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 blueprint-pattern opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1200"
            alt="Construction workers on site"
            loading="lazy"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Trusted Construction Partner in Madhya Pradesh"
            description="We combine engineering precision with honest client relationships to deliver projects that stand the test of time."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index * 0.1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-[#B8C1CC] text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
