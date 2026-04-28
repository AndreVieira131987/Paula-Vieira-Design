import { useState, useEffect } from 'react'
import { ArrowRight, Crown } from 'lucide-react'
import { Button } from '../ui/Button'

const slides = [
  {
    label: 'App WeGo',
    title: 'Digital\nStrategy',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'McLaren Curitiba',
    title: 'Luxury\nBranding',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Feed Organizado',
    title: 'Visual\nIdentity',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-light"
    >
      {/* Decorative blind bars */}
      <div className="absolute inset-0 pointer-events-none flex gap-[6vw] items-center justify-center opacity-40">
        {[96, 120, 144, 120, 96].map((h, i) => (
          <div
            key={i}
            className="blind-bar w-3 md:w-4"
            style={{ height: `${h * 1.5}px` }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col items-start">
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-dark/5 px-4 py-2 rounded-full mb-8"
              style={{ animation: 'animationIn 0.8s ease-out 0.2s both' }}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-dark/70">
                Disponível para novos projetos
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.88] tracking-tighter uppercase mb-8 text-glow"
              style={{ animation: 'animationIn 1.2s ease-out 0.4s both' }}
            >
              Conectando<br />
              <span className="text-brand">Marcas</span> ao<br />
              Público
            </h1>

            {/* Subheadline */}
            <p
              className="font-accent italic text-xl md:text-2xl text-dark/60 mb-10 max-w-lg leading-relaxed"
              style={{ animation: 'animationIn 1.2s ease-out 0.65s both' }}
            >
              Estratégias criativas e resultados impactantes para transformar sua autoridade digital.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-12"
              style={{ animation: 'animationIn 1.2s ease-out 0.85s both' }}
            >
              <Button
                href="https://wa.me/5541999999999?text=Olá%20Paula,%20quero%20iniciar%20um%20projeto!"
                size="lg"
                sonar
                className="shadow-2xl shadow-dark/20"
              >
                Iniciar Projeto
                <Crown size={16} />
              </Button>
              <Button href="#portfolio" variant="ghost" size="lg">
                Ver Portfólio
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Micro stats */}
            <div
              className="flex gap-8"
              style={{ animation: 'animationIn 1.2s ease-out 1s both' }}
            >
              {[
                { n: '50+', label: 'Projetos' },
                { n: '3', label: 'Anos exp.' },
                { n: '100%', label: 'Dedicação' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold tracking-tight">{s.n}</p>
                  <p className="text-[10px] uppercase tracking-widest text-dark/40 font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: iPhone Mockup ── */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{ animation: 'animationIn 1.5s ease-out 0.5s both' }}
          >
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

            {/* Phone outer shell */}
            <div className="relative w-[280px] h-[580px] md:w-[300px] md:h-[620px] floating">
              {/* iPhone 15 frame */}
              <div className="w-full h-full bg-dark rounded-[3.5rem] p-[10px] shadow-[0_50px_100px_-20px_rgba(45,50,47,0.6)] ring-1 ring-white/10">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-dark rounded-b-2xl z-50" />

                {/* Screen */}
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative bg-dark">
                  {/* Slides */}
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'slide-active' : 'slide-hidden'
                        }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

                      {/* Slide content */}
                      <div className="absolute top-10 left-5 right-5 flex justify-between items-center z-20">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center font-display text-dark font-bold text-xs">
                            P
                          </div>
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                            @paula.lvieira
                          </span>
                        </div>
                        <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                          <span className="text-[9px] font-bold text-white uppercase">Live</span>
                        </div>
                      </div>

                      <div className="absolute bottom-10 left-6 right-6 z-20">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-secondary mb-1 block">
                          {slide.label}
                        </span>
                        <h3 className="font-display text-3xl uppercase tracking-tight text-white leading-tight whitespace-pre-line">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  ))}

                  {/* Slide dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-10 top-1/3 glass bg-white/80 p-5 rounded-2xl shadow-2xl border border-dark/5 hidden md:block floating" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-sm">↑</div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-dark/40 tracking-widest">Engajamento</p>
                  <p className="text-lg font-display font-bold text-dark">+245%</p>
                </div>
              </div>
              <div className="h-1 w-full bg-dark/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4 rounded-full" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 bottom-24 bg-secondary text-dark p-5 rounded-2xl shadow-2xl hidden md:block floating" style={{ animationDelay: '2s' }}>
              <Crown size={28} className="mb-1.5 text-primary" />
              <p className="font-display text-sm font-bold uppercase leading-tight">
                Premium<br />Strategy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-10 bg-dark/30" />
      </div>
    </section>
  )
}
