import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants.js'

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      </div>
      <div className="absolute inset-0 -z-10 grid-overlay opacity-25" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary uppercase tracking-[0.25em] text-xs md:text-sm font-semibold"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 text-[#B8C1CC] text-base md:text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
