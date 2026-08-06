import { Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contato" className="bg-dark text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Big CTA Headline */}
        <div className="text-center mb-16">
          <p className="font-accent italic text-lg text-secondary mb-6">
            — Vamos conversar?
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-10 text-white">
            PRONTO PARA CONSTRUIR<br />
            <span className="text-secondary">UMA IMAGEM SÓLIDA?</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto font-medium mb-10">
            Transforme sua presença digital em uma ferramenta real de crescimento. Comece hoje.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5541988063680?text=Olá%20Paula,%20quero%20construir%20minha%20imagem%20digital!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/PAULAVIEIRACOMUNICA/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
            >
              <Instagram size={18} />
              @PAULAVIEIRACOMUNICA
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/favicon.png"
              alt="Paula Vieira Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            © 2026 Paula Vieira — Design Gráfico. Todos os direitos reservados.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/PAULAVIEIRACOMUNICA/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/5541988063680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
