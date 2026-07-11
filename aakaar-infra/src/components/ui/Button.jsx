import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)'
  }

  const base =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300'

  const variants = {
    primary:
      'bg-primary text-background hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] hover:-translate-y-0.5',
    outline:
      'border border-white/20 text-white hover:border-primary hover:text-primary hover:-translate-y-0.5',
    ghost: 'text-primary hover:text-accent',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const sharedProps = {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: classes,
  }

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </button>
  )
}
