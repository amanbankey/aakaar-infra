import { useEffect } from 'react'

function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | Aakaar Infra`
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
  }, [title, description])

  return null
}
