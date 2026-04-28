import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { pillars } from '../../data/portfolio'

export function Pillars() {
  const sectionRef = useScrollReveal()

  return (
    <section id="pilares" className="bg-light" ref={sectionRef}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="reveal">
          <SectionLabel>Metodologia</SectionLabel>
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-6">
          Os 4 Pilares<br />
          <span className="font-accent normal-case italic tracking-normal text-primary/80">
            da sua presença.
          </span>
        </h2>
        <p className="reveal reveal-delay-2 text-dark/50 max-w-lg mx-auto font-medium">
          Uma metodologia completa que cobre cada etapa da sua comunicação digital — do conceito à análise.
        </p>
      </div>

      {/* Full-width 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[75vh]">
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.id}
            className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-dark reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            {/* Background image */}
            <img
              src={pillar.image}
              alt={pillar.title}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent z-10" />

            {/* Label + Title */}
            <div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
              <span className="font-display text-[10px] text-secondary uppercase tracking-[0.3em] mb-2 block">
                Pilar {pillar.number}
              </span>
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter">
                {pillar.title}
              </h3>
            </div>

            {/* Hover panel — slides from right */}
            <div className="absolute inset-y-0 right-0 w-[70%] bg-brand/95 backdrop-blur-xl translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-30 flex flex-col justify-center p-8 border-l border-white/10">
              <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-display font-bold text-sm mb-4">
                {pillar.number}
              </div>
              <p className="text-brand text-[9px] uppercase tracking-widest font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {pillar.subtitle}
              </p>
              <div className="w-10 h-px bg-white/30 mb-6" />
              <p className="text-white text-sm leading-relaxed font-medium">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
