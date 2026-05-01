import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#hero',     label: 'Início' },
  { href: '#problema', label: 'Filosofia' },
  { href: '#pilares',  label: 'Método' },
  { href: '#portfolio',label: 'Portfólio' },
  { href: '#sobre',    label: 'Sobre' },
  { href: '#planos',   label: 'Planos' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-dark/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-dark text-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 duration-500 shadow-lg shadow-dark/10 text-lg font-display font-bold">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tighter leading-none text-dark">
              PAULA VIEIRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-brand/70">
              Design Gráfico
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center glass rounded-full px-2 py-1.5 border border-dark/5 shadow-sm gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2 text-[10px] font-semibold uppercase tracking-widest text-dark/70 hover:text-dark hover:bg-white rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#planos"
          className="hidden md:flex items-center gap-2 group relative overflow-hidden bg-dark text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-dark/20 transition-all hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Iniciar Projeto
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-dark/5 hover:bg-dark/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-dark/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-dark/70 hover:text-brand transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-dark text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-center hover:bg-brand transition-colors"
          >
            Iniciar Projeto
          </a>
        </nav>
      </div>
    </header>
  )
}
