import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants.js'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      className={`flex flex-col ${alignment} max-w-2xl mb-12 md:mb-16`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow && (
        <span className="text-primary uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#B8C1CC]">
          {description}
        </p>
      )}
    </motion.div>
  )
}
