import { useEffect, useRef } from 'react'

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref,
 * adding 'is-visible' to all child elements with class 'reveal' when they
 * enter the viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} containerRef — attach to your section wrapper
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Once revealed, unobserve for performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    )

    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return containerRef
}

/**
 * useSingleReveal — attach to a single element ref directly.
 */
export function useSingleReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => { if (el) observer.unobserve(el) }
  }, [])

  return ref
}
