import { motion } from 'framer-motion'
import { business } from '../../../constants/business.js'
import { fadeIn } from '../../../animations/variants.js'

export default function MapSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/5 h-[420px] md:h-[500px]"
        >
          <iframe
            title="Aakaar Infra location map"
            src={business.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
