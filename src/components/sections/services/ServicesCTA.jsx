import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import { fadeUp } from '../../../animations/variants.js'

export default function ServicesCTA() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0D11]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto px-5 md:px-8 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold">Not Sure Which Service You Need?</h2>
        <p className="mt-4 text-[#B8C1CC] text-base md:text-lg">
          Talk to our team and get a free, no-obligation project estimate today.
        </p>
        <div className="mt-8">
          <Button to="/contact">
            Request a Free Estimate <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
