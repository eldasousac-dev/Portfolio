import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.visible)')
    if (!els.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 0.15 + 's'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
}
