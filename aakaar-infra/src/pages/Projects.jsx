import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ProjectsGallery from '../components/sections/projects/ProjectsGallery.jsx'

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Browse Aakaar Infra's portfolio of residential, commercial, industrial and infrastructure construction projects across Khandwa, Madhya Pradesh."
      />
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects Delivered With Precision"
        description="Explore our completed and ongoing residential, commercial, industrial and infrastructure work."
        image="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1920"
      />
      <ProjectsGallery />
    </>
  )
}
