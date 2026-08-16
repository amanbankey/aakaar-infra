import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants.js'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      custom={index * 0.08}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group relative rounded-2xl bg-[#171B22] p-7 md:p-8 border border-white/5 hover:-translate-y-2 hover:rotate-[0.5deg] transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/40 via-transparent to-accent/20 -z-10 blur-xl" />
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.6} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#B8C1CC] text-sm md:text-base leading-relaxed">{description}</p>
    </motion.div>
  )
}
