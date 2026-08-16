import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../../animations/variants.js'

export default function PageHero({ eyebrow, title, description, image, images }) {
  const imageList = images && images.length > 0 ? images : (image ? [image] : [])
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (imageList.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [imageList.length])

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {imageList.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={imageList[currentImage]}
              alt={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        )}
        {/* Overall dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Bottom dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-background" />

        {/* Extra darkness at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-background via-background/40 to-transparent" />
        
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

