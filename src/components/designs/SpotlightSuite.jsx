import React from 'react'

const SpotlightSuite = ({ members }) => {
  const [primary, ...rest] = members

  return (
    <section className="design-surface design-spotlight">
      <div className="spotlight-panel">
        <div className="spotlight-frame glass">
          <img src={primary.image} alt={primary.name} />
          <div className="spotlight-info">
            <p className="eyebrow">Spotlight Leadership</p>
            <h3>{primary.name}</h3>
            <p>{primary.title}</p>
            <small>{primary.bio}</small>
            <div className="signature-line">
              <span>{primary.quote}</span>
            </div>
            <div className="spotlight-stats">
              <div>
                <span>{primary.stats.programs}</span>
                <small>Programs</small>
              </div>
              <div>
                <span>{primary.stats.patents}</span>
                <small>Patents</small>
              </div>
              <div>
                <span>{primary.experience}</span>
                <small>Experience</small>
              </div>
            </div>
          </div>
        </div>

        <div className="spotlight-scroll">
          {rest.map((person) => (
            <article className="spotlight-chip" key={person.id}>
              <div className="spotlight-chip__meta">
                <img src={person.image} alt={person.name} />
                <div>
                  <h5>{person.name}</h5>
                  <p>{person.title}</p>
                </div>
              </div>
              <div className="spotlight-chip__tags">
                {person.focus.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="spotlight-side glass">
        <p className="eyebrow">Immersion Mode</p>
        <h4>Touch any profile to deploy micro-spotlight overlays, bios, and field notes.</h4>
        <p>
          Designed for executive rooms where teams are not just listed—they are staged with narrative context,
          achievements, and interactive depth.
        </p>
        <ul>
          <li>Motion scrubbing timeline</li>
          <li>Instant talent heat map</li>
          <li>Project lineage overlays</li>
        </ul>
      </div>
    </section>
  )
}

export default SpotlightSuite
