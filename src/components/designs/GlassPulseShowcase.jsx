import React from 'react'

const GlassPulseShowcase = ({ members, metrics }) => {
  const hero = members.slice(0, 3)
  const roster = members.slice(3)

  return (
    <section className="design-surface design-glasspulse">
      <header className="glasspulse-header">
        <div>
          <p className="eyebrow">Design 02</p>
          <h3>
            Glass Pulse <span className="gradient-text">Board</span>
          </h3>
          <p>Floating glass cards with cinematic lighting and a pulse indicator for each discipline.</p>
        </div>
        <div className="glasspulse-metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h4>{metric.value}</h4>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="glasspulse-hero">
        {hero.map((person) => (
          <article className="glass card-hover" key={person.id}>
            <span className="orb" />
            <div className="pulse-heading">
              <p className="eyebrow">{person.category}</p>
              <span className="soft-pill">{person.experience}</span>
            </div>
            <img src={person.image} alt={person.name} />
            <h4>{person.name}</h4>
            <p>{person.title}</p>
            <small>{person.bio}</small>
            <div className="chip-row">
              {person.focus.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="glasspulse-roster">
        {roster.map((person) => (
          <article className="glass roster-card" key={person.id}>
            <div className="roster-card__avatar">
              <img src={person.image} alt={person.name} />
              <div className="status-dot" />
            </div>
            <div>
              <h5>{person.name}</h5>
              <p>{person.title}</p>
              <small>{person.quote}</small>
            </div>
            <div className="roster-card__stats">
              <span>{person.stats.programs}</span>
              <small>Programs</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GlassPulseShowcase
