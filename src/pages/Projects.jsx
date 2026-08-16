import SEO from '../components/SEO.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import ProjectsGallery from '../components/sections/projects/ProjectsGallery.jsx'

const projectImages = [
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1920",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1920",
];

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
        images={projectImages}
      />
      <ProjectsGallery />
    </>
  )
}
