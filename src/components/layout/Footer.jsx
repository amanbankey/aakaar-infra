import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Star, MessagesSquare, Camera, Briefcase, PlayCircle } from 'lucide-react'
import { navLinks } from '../../constants/navLinks.js'
import { business } from '../../constants/business.js'

const socialIcons = {
  Facebook: MessagesSquare,
  Instagram: Camera,
  LinkedIn: Briefcase,
  YouTube: PlayCircle,
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0D11] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div>
          <span className="text-2xl font-bold">
            AAKAAR <span className="text-primary">INFRA</span>
          </span>
          <p className="text-[#B8C1CC] text-sm mt-4 leading-relaxed">
            Real estate builder and construction company delivering premium residential,
            commercial and infrastructure projects across Khandwa, Madhya Pradesh.
          </p>
          <div className="flex items-center gap-1 mt-4 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary" />
            ))}
            <span className="text-white text-sm ml-2">{business.rating.toFixed(1)} Google Rating</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="text-[#B8C1CC] text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-[#B8C1CC]">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{business.fullAddress}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href={business.phoneHref} className="hover:text-primary transition-colors duration-300">
                {business.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Follow Us</h4>
          <div className="flex gap-3">
            {business.socials.map((social) => {
              const Icon = socialIcons[social.name]
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#B8C1CC] hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#B8C1CC]">
        <p>&copy; {new Date().getFullYear()} Aakaar Infra. All rights reserved.</p>
        <p>Shivaji Chowk, Vidhyuth Nagar, Khandwa, Madhya Pradesh 450001</p>
      </div>
    </footer>
  )
}
