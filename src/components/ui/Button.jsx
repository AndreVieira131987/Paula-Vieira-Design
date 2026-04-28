/**
 * Button — UI Component
 *
 * Props:
 *  - variant: 'primary' | 'ghost' | 'outline'
 *  - size: 'sm' | 'md' | 'lg'
 *  - sonar: boolean — adds the sonar wave pulse effect
 *  - children, onClick, className, href, ...rest
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  sonar = false,
  href,
  className = '',
  ...rest
}) {
  const base =
    'relative inline-flex items-center justify-center font-display font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95'

  const sizes = {
    sm: 'px-6 py-2.5 text-[10px]',
    md: 'px-8 py-3.5 text-xs',
    lg: 'px-12 py-5 text-sm',
  }

  const variants = {
    primary:
      'bg-dark text-white rounded-full shadow-2xl shadow-dark/20 hover:bg-primary hover:scale-105',
    ghost:
      'border border-dark/20 text-dark rounded-full hover:bg-dark hover:text-white hover:border-dark',
    outline:
      'border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {sonar && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary opacity-30 sonar-ring pointer-events-none"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
