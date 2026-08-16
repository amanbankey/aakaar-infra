import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../../ui/ProjectCard.jsx'
import { projects, projectCategories } from '../../../constants/projects.js'

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-background border-primary'
                  : 'border-white/10 text-[#B8C1CC] hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} index={index} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
