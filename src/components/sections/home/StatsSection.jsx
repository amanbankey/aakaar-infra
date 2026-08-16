import useCountUp from '../../../hooks/useCountUp.js'
import { stats } from '../../../constants/testimonials.js'

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.value, 1800)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-6xl font-bold text-gradient">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-[#B8C1CC] text-sm md:text-base">{stat.label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 border-y border-white/5 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
