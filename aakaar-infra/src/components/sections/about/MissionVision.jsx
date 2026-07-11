import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { fadeUp } from '../../../animations/variants.js'

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To deliver safe, high-quality and timely construction that improves the way people live, work and connect in Khandwa and beyond.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become Madhya Pradesh\u2019s most trusted construction partner, known for transparency, craftsmanship and community impact.',
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            custom={index * 0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl bg-[#171B22] border border-white/5 p-8 md:p-10"
          >
            <item.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-[#B8C1CC] leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
