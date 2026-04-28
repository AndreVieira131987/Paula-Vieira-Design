import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { stats } from '../../data/portfolio'

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl font-bold tracking-tight">
      {count}{suffix}
    </span>
  )
}

export function Problem() {
  const sectionRef = useScrollReveal()

  return (
    <section id="problema" className="py-32 bg-surface" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Label */}
        <div className="reveal">
          <SectionLabel>A Realidade Digital</SectionLabel>
        </div>

        {/* Main quote */}
        <blockquote className="reveal reveal-delay-1 mb-6">
          <p className="font-accent italic text-3xl md:text-4xl lg:text-5xl text-dark leading-tight mb-0">
            "Hoje, a presença digital
          </p>
          <p className="font-accent italic text-3xl md:text-4xl lg:text-5xl text-brand leading-tight">
            influencia a decisão de compra.
          </p>
        </blockquote>

        <p className="reveal reveal-delay-2 font-display text-2xl md:text-3xl uppercase tracking-tight text-dark/40 mb-6">
          Você está sendo visto como
        </p>
        <p className="reveal reveal-delay-3 font-display text-3xl md:text-5xl uppercase tracking-tighter text-dark mb-16">
          uma autoridade ou{' '}
          <span className="line-through text-dark/25">apenas mais um?</span>
        </p>

        {/* Stats */}
        <div className="reveal reveal-delay-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 border border-dark/5 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="text-primary mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-dark/60 leading-relaxed font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
