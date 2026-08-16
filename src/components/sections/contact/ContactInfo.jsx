import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Star, CheckCircle2 } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import { business } from '../../../constants/business.js'
import { slideInRight } from '../../../animations/variants.js'

export default function ContactInfo() {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      <div className="rounded-2xl bg-[#171B22] border border-white/5 p-7 md:p-8">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="text-white text-sm ml-2">{business.rating.toFixed(1)} Google Rating</span>
        </div>

        <ul className="space-y-5">
          <li className="flex gap-4">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Our Address</h4>
              <p className="text-[#B8C1CC] text-sm mt-1">{business.fullAddress}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <a href={business.phoneHref} className="text-[#B8C1CC] text-sm mt-1 hover:text-primary transition-colors duration-300">
                {business.phone}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              {business.workingHours.map((wh) => (
                <p key={wh.day} className="text-[#B8C1CC] text-sm mt-1">
                  {wh.day}: {wh.hours}
                </p>
              ))}
            </div>
          </li>
        </ul>

        <div className="mt-7 pt-7 border-t border-white/5">
          <h4 className="font-semibold mb-3">Amenities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {business.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2 text-sm text-[#B8C1CC]">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <Button href={business.whatsappHref} className="w-full justify-center">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
