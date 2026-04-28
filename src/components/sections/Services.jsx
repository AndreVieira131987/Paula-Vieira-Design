import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Button } from '../ui/Button'
import { planEssential } from '../../data/portfolio'
import { Check, MessageCircle, Zap } from 'lucide-react'

export function Services() {
  const sectionRef = useScrollReveal()

  return (
    <section id="planos" className="py-32 bg-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal">
            <SectionLabel>Serviços & Planos</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-6">
            Comece a construir<br />
            <span className="font-accent normal-case italic tracking-normal text-primary/70">
              sua autoridade hoje.
            </span>
          </h2>
          <p className="reveal reveal-delay-2 text-dark/50 max-w-md mx-auto font-medium">
            Um plano pensado para gerar resultados consistentes, sem complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Main Plan Card ── */}
          <div className="reveal reveal-delay-1 relative bg-dark text-white rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl shadow-dark/30">

            {/* Background grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-1.5 rounded-full mb-8">
              <Zap size={12} className="text-secondary" />
              <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">
                Mais popular
              </span>
            </div>

            {/* Plan name & price */}
            <div className="mb-8">
              <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-2">
                {planEssential.name}
              </p>
              <div className="flex items-end gap-2">
                <span className="font-display text-7xl md:text-8xl font-bold tracking-tight text-white">
                  {planEssential.price}
                </span>
                <span className="text-white/40 text-xl mb-3 font-medium">{planEssential.period}</span>
              </div>
              <p className="font-accent italic text-lg text-secondary mt-2">
                {planEssential.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-8" />

            {/* Includes */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-5">
                O que está incluído:
              </p>
              <ul className="space-y-3.5">
                {planEssential.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-secondary" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={planEssential.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-white text-dark rounded-full py-4 font-display font-bold uppercase tracking-[0.2em] text-xs hover:bg-secondary transition-colors duration-300 shadow-xl"
            >
              <MessageCircle size={16} />
              {planEssential.cta}
            </a>
          </div>

          {/* ── Right side: Plus benefits ── */}
          <div className="reveal reveal-delay-2 flex flex-col gap-8">

            {/* Plus callout */}
            <div className="bg-white rounded-3xl p-10 border border-dark/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-brand" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight font-bold">O "Plus"</h3>
              </div>
              <p className="text-dark/60 text-sm mb-6 leading-relaxed">
                {planEssential.highlight}
              </p>
              <ul className="space-y-4">
                {planEssential.plus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-brand" />
                    </div>
                    <span className="text-dark/70 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial / promise card */}
            <div className="bg-brand rounded-3xl p-10 text-white">
              <p className="font-accent italic text-xl leading-snug mb-6">
                "Não vendemos posts. Construímos presença digital que trabalha por você 24 horas por dia."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="font-bold text-sm">Paula Vieira</p>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest">Designer & Social Media</p>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <Button
              href="https://wa.me/5541999999999?text=Olá%20Paula,%20quero%20saber%20mais%20sobre%20os%20seus%20serviços!"
              variant="ghost"
              size="lg"
              className="w-full justify-center"
            >
              <MessageCircle size={16} />
              Falar com Paula
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
