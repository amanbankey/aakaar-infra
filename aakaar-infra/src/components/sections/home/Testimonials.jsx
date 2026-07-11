import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading.jsx'
import { testimonials } from '../../../constants/testimonials.js'
import { fadeUp } from '../../../animations/variants.js'

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say About Us"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index * 0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl bg-[#171B22] border border-white/5 p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="w-7 h-7 text-primary/60 mb-4" />
              <p className="text-[#B8C1CC] text-sm leading-relaxed flex-1">{testimonial.text}</p>
              <div className="flex items-center gap-1 mt-5 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-xs text-[#B8C1CC]">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
