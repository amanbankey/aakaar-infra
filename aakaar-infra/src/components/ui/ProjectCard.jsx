import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { scaleIn } from '../../animations/variants.js'

export default function ProjectCard({ title, category, location, image, index = 0 }) {
  return (
    <motion.div
      custom={index * 0.06}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-2xl bg-[#171B22] break-inside-avoid mb-6"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-64 md:h-72 object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-primary text-xs uppercase tracking-widest font-semibold">
          {category}
        </span>
        <div className="flex items-center justify-between mt-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-[#B8C1CC] text-xs flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5" /> {location}
            </p>
          </div>
          <span className="w-9 h-9 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ArrowUpRight className="w-4 h-4 text-background" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
