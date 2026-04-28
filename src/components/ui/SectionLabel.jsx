/**
 * SectionLabel — small eyebrow label above section headings
 * Example: "Design Tokens", "Metodologia", "Portfólio"
 */
export function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-block text-[10px] uppercase font-bold tracking-[0.4em] mb-4 ${
        light ? 'text-secondary' : 'text-brand'
      }`}
    >
      {children}
    </span>
  )
}
