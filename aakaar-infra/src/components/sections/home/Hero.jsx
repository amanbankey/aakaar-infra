import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Star, ShieldCheck } from 'lucide-react'
import Button from '../../ui/Button.jsx'
import { business } from '../../../constants/business.js'
import { fadeUp, fadeIn } from '../../../animations/variants.js'

export default function Hero() {
  const orbOneRef = useRef(null)
  const orbTwoRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60
      const y = (e.clientY / window.innerHeight - 0.5) * 60
      gsap.to(orbOneRef.current, { x, y, duration: 1.2, ease: 'power3.out' })
      gsap.to(orbTwoRef.current, { x: -x, y: -y, duration: 1.4, ease: 'power3.out' })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920"
          alt="Construction site at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
      </div>

      <div className="absolute inset-0 -z-10 grid-overlay opacity-30" />
      <div className="absolute inset-0 -z-10 noise-overlay" />

      <div ref={orbOneRef} className="absolute top-24 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float -z-10" />
      <div ref={orbTwoRef} className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-float -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex items-center gap-2 mb-6">
          <span className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs md:text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-white">{business.rating.toFixed(1)} {business.reviewLabel}</span>
          </span>
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] max-w-4xl"
        >
          Building Landmarks Across <span className="text-gradient">Khandwa</span>
        </motion.h1>

        <motion.p
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-[#B8C1CC] text-base md:text-xl max-w-2xl"
        >
          Aakaar Infra is a trusted real estate builder and construction company delivering
          residential, commercial, industrial and infrastructure projects with precision and integrity.
        </motion.p>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/contact">
            Get Free Estimate <ArrowRight className="w-4 h-4" />
          </Button>
          <Button to="/projects" variant="outline">
            View Our Projects
          </Button>
        </motion.div>

        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-3 text-sm text-[#B8C1CC]"
        >
          <ShieldCheck className="w-5 h-5 text-primary" />
          Licensed &amp; trusted builder serving Khandwa, Madhya Pradesh
        </motion.div>
      </div>
    </section>
  )
}
