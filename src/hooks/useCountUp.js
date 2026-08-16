import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const stepTime = Math.max(Math.floor(duration / target), 15)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return { count, ref }
}
