import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { MapPin, GraduationCap, Star } from 'lucide-react'

export function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="sobre" className="py-32 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Photo ── */}
          <div className="reveal relative">
            {/* Photo container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl shadow-dark/20">
              <img
                src="/assets/paula.jpeg"
                alt="Paula Vieira — Designer"
                className="w-full h-full object-cover"
              />
              {/* Grain overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              {/* Name plate */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                  Paula Vieira
                </p>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold mt-1">
                  Design Gráfico & Social Media
                </p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -right-4 top-12 bg-white rounded-2xl p-5 shadow-2xl border border-dark/5 hidden md:block floating" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                  <Star size={18} className="text-brand fill-brand" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm">Curitiba, PR</p>
                  <p className="text-[10px] text-dark/40 uppercase tracking-widest">Brasil</p>
                </div>
              </div>
            </div>

            {/* Gold accent line */}
            <div className="absolute -bottom-4 -left-4 w-32 h-1 bg-secondary rounded-full hidden md:block" />
            <div className="absolute -bottom-10 -left-4 w-20 h-1 bg-secondary/40 rounded-full hidden md:block" />
          </div>

          {/* ── Right: Copy ── */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <SectionLabel>Sobre</SectionLabel>
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
                Quem é<br />
                <span className="text-primary">Paula Vieira?</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-1 space-y-5 text-dark/70 leading-relaxed">
              <p className="text-base">
                Brasileira, curitibana, com{' '}
                <strong className="text-dark">39 anos</strong> e uma visão muito clara:
                presença digital não é vaidade — é estratégia.
              </p>
              <p className="text-base">
                Designer gráfica em fase de conclusão acadêmica, combinando
                formação técnica com anos de experiência prática em criação de
                conteúdo, branding e gestão de redes sociais.
              </p>
            </div>

            {/* Highlight quote */}
            <div className="reveal reveal-delay-2 border-l-4 border-primary pl-6 py-2">
              <p className="font-accent italic text-xl md:text-2xl text-dark leading-snug">
                "Combinando criatividade com análise para maximizar sua visibilidade."
              </p>
            </div>

            {/* Tags */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
              {[
                { icon: <MapPin size={14} />, text: 'Curitiba, PR' },
                { icon: <GraduationCap size={14} />, text: 'Design Gráfico' },
                { icon: <Star size={14} />, text: 'Social Media Strategy' },
              ].map((tag) => (
                <div
                  key={tag.text}
                  className="flex items-center gap-2 bg-white border border-dark/5 rounded-full px-4 py-2 text-xs font-semibold text-dark/60 shadow-sm"
                >
                  <span className="text-primary">{tag.icon}</span>
                  {tag.text}
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div className="reveal reveal-delay-4 grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Projetos entregues' },
                { value: '3', label: 'Anos de experiência' },
                { value: '100%', label: 'Projetos personalizados' },
                { value: '∞', label: 'Dedicação ao resultado' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-5 border border-dark/5 hover:shadow-lg transition-shadow"
                >
                  <p className="font-display text-2xl font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-[11px] text-dark/50 font-semibold uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
