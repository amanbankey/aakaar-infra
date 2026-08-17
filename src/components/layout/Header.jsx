import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition.js'
import { navLinks } from '../../constants/navLinks.js'
import { business } from '../../constants/business.js'
import Button from '../ui/Button.jsx'
import logo from "../../assets/Images/aakar.png"

export default function Header() {
  const scrolled = useScrollPosition(30)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
        <span>
          <img src={logo} className='w-36 h-12' />
        </span>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            {/* AAKAAR <span className="text-primary">INFRA</span> */}
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                  isActive ? 'text-primary' : 'text-white hover:text-primary'
                }`
              }
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-4 h-4" /> {business.phone}
          </a>
          <Button to="/contact">Get a Quote</Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end px-5 py-5">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8 mt-10"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-semibold ${isActive ? 'text-primary' : 'text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button to="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
