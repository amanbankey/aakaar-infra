import { ArrowRight } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading.jsx'
import ProjectCard from '../../ui/ProjectCard.jsx'
import Button from '../../ui/Button.jsx'
import { projects } from '../../../constants/projects.js'

import { useState } from 'react'

export default function ProjectsPreview() {
  const preview = projects.slice(0, 6)

  return (
    <section className="relative py-20 md:py-28 bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That Shape Khandwa's Skyline"
          description="A glimpse into the residential, commercial and infrastructure projects delivered by our team."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {preview.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button to="/projects" variant="outline">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      
    </section>
  )
}
