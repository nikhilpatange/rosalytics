import React, { useEffect, useRef } from 'react'

const MirageParallax = ({ members, metrics }) => {
  const [hero, ...others] = members
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )
    if (prefersReducedMotion.matches) {
      section.style.setProperty('--parallax-shift-x', '0')
      section.style.setProperty('--parallax-shift-y', '0')
      section.style.setProperty('--parallax-tilt', '0')
      return
    }

    const state = {
      pointerX: 0,
      pointerY: 0,
      scrollY: 0,
    }

    let frame = null

    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        const x = (state.pointerX || 0) * 24
        const y = (state.pointerY || 0) * 24 + (state.scrollY || 0) * 36
        const tilt = state.pointerX * 6
        section.style.setProperty('--parallax-shift-x', x.toFixed(2))
        section.style.setProperty('--parallax-shift-y', y.toFixed(2))
        section.style.setProperty('--parallax-tilt', tilt.toFixed(2))
      })
    }

    const updatePointer = (event) => {
      const rect = section.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
      state.pointerX = Math.max(-1, Math.min(1, x))
      state.pointerY = Math.max(-1, Math.min(1, y))
      scheduleUpdate()
    }

    const resetPointer = () => {
      state.pointerX = 0
      state.pointerY = 0
      scheduleUpdate()
    }

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()
      const centerOffset =
        rect.top + rect.height / 2 - window.innerHeight / 2
      const normalized = Math.max(
        -1,
        Math.min(1, centerOffset / (window.innerHeight / 1.2))
      )
      state.scrollY = normalized
      scheduleUpdate()
    }

    section.addEventListener('pointermove', updatePointer)
    section.addEventListener('pointerleave', resetPointer)
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)

    updateScroll()

    return () => {
      section.removeEventListener('pointermove', updatePointer)
      section.removeEventListener('pointerleave', resetPointer)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={sectionRef} className="design-surface design-parallax">
      <div className="parallax-hero">
        <div className="parallax-hero__image">
          <img src={hero.image} alt={hero.name} />
          <div className="parallax-overlay" />
        </div>
        <div className="parallax-hero__content">
          <p className="eyebrow">Design 10</p>
          <h3>
            Mirage <span className="gradient-text">Parallax</span>
          </h3>
          <h4>{hero.name}</h4>
          <p>{hero.bio}</p>
          <div className="parallax-hero__stats">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.value}</span>
                <small>{metric.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="parallax-roster">
        {others.map((member) => (
          <article className="parallax-card" key={member.id}>
            <div>
              <h5>{member.name}</h5>
              <p>{member.title}</p>
              <small>{member.location}</small>
            </div>
            <div>
              <span>{member.stats.programs}</span>
              <small>Programs</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MirageParallax
