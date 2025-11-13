import React, { useEffect, useRef, useState } from 'react'

const MirageParallax = ({ members, metrics }) => {
  const [hero, ...others] = members
  const surfaceRef = useRef(null)
  const [heroOffset, setHeroOffset] = useState(0)
  const [rosterOffset, setRosterOffset] = useState(0)
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateParallax = () => {
      if (!surfaceRef.current) return

      const rect = surfaceRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const midpoint = rect.top + rect.height / 2
      const distanceFromCenter = midpoint - viewportHeight / 2
      const normalized = Math.max(Math.min(distanceFromCenter / viewportHeight, 1), -1)

      setHeroOffset(normalized * -60)
      setRosterOffset(normalized * 40)
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)

    return () => {
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
    }
  }, [])

  const handlePointerMove = (event) => {
    if (!surfaceRef.current) return

    const rect = surfaceRef.current.getBoundingClientRect()
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height

    setPointerOffset({
      x: Math.max(Math.min(offsetX, 0.5), -0.5),
      y: Math.max(Math.min(offsetY, 0.5), -0.5),
    })
  }

  const handlePointerLeave = () => {
    setPointerOffset({ x: 0, y: 0 })
  }

  const dynamicStyles = {
    '--hero-parallax-offset': `${heroOffset + pointerOffset.y * -20}px`,
    '--hero-parallax-tilt': `${pointerOffset.x * 4}deg`,
    '--roster-parallax-base': `${rosterOffset + pointerOffset.y * 16}px`,
  }

  return (
    <section
      ref={surfaceRef}
      className="design-surface design-parallax"
      style={dynamicStyles}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
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
        {others.map((member, index) => (
          <article
            className="parallax-card"
            key={member.id}
            style={{ '--card-parallax-offset': `calc(var(--roster-parallax-base) + ${index * 6}px)` }}
          >
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
