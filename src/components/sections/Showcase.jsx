import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { portfolioProjects } from '../../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export function Showcase() {
  const sectionRef = useScrollReveal()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="reveal">
            <SectionLabel>Portfólio Selecionado</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
              Cases que<br />
              <span className="font-accent normal-case italic tracking-normal text-brand/70">
                geram resultados.
              </span>
            </h2>
          </div>
          <p className="reveal reveal-delay-1 text-dark/50 max-w-sm font-medium leading-relaxed">
            Cada projeto é tratado como uma estratégia única — porque cada marca tem uma história diferente.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group reveal reveal-delay-${idx + 1}`}
              style={{ height: idx % 3 === 0 ? '520px' : '440px' }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Always-visible footer gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

              {/* Niche tag */}
              <div className="absolute top-6 left-6 z-20">
                <span
                  className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 backdrop-blur-md"
                  style={{ background: `${project.color}55` }}
                >
                  {project.niche}
                </span>
              </div>

              {/* Arrow icon */}
              <div
                className={`absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 ${
                  hovered === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {/* Info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-1">
                  {project.tag}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-2">
                  {project.client}
                </h3>

                {/* Description (hover reveal) */}
                <p
                  className={`text-white/70 text-sm leading-relaxed font-medium transition-all duration-500 ${
                    hovered === project.id
                      ? 'max-h-20 opacity-100 translate-y-0'
                      : 'max-h-0 opacity-0 translate-y-4'
                  } overflow-hidden`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
