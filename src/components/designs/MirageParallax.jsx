import React from 'react'

const MirageParallax = ({ members, metrics }) => {
  const [hero, ...others] = members

  return (
    <section className="design-surface design-parallax">
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
