import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import { business } from '../../../constants/business.js'
import { fadeUp } from '../../../animations/variants.js'

export default function GoogleRatingCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-accent/10 animate-gradient -z-10" />
      <div className="absolute inset-0 grid-overlay opacity-20 -z-10" />

      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center gap-1 mb-6"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-primary text-primary" />
          ))}
        </motion.div>

        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Rated {business.rating.toFixed(1)} Stars by Our Clients
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-5 text-[#B8C1CC] text-base md:text-lg"
        >
          Ready to build your next project with a team Khandwa trusts?
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8"
        >
          <Button to="/contact">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
