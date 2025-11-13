import React from 'react'

const CelestialCommandGrid = ({ members, metrics, streams }) => {
  const leadership = members.filter((member) => member.category === 'Leadership')
  const advisory = members.filter((member) => member.category === 'Advisory')
  const engineering = members.filter((member) => member.category === 'Engineering')
  const operations = members.filter((member) => member.category === 'Operations')
  const research = members.filter((member) => member.category === 'Research')
  const design = members.filter((member) => member.category === 'Design')

  return (
    <section className="design-surface design-celestial">
      <div className="design-celestial__hero glass">
        <div className="celestial-hero__content">
          <p className="eyebrow">Executive Signal</p>
          <h3>
            Command Center <span className="gradient-text">01</span>
          </h3>
          <p>
            Precision leadership pods, advisory intelligence, and build squads orchestrated inside a
            luminous grid system.
          </p>
          <div className="hero-streams">
            {streams.map((stream) => (
              <div className="stream-pill" key={stream.label}>
                <strong>{stream.label}</strong>
                <span>{stream.detail}</span>
              </div>
            ))}
          </div>
        </div>
        {leadership.map((leader) => (
          <article className="celestial-hero__card" key={leader.id}>
            <img src={leader.image} alt={leader.name} />
            <div>
              <p className="eyebrow">{leader.title}</p>
              <h4>{leader.name}</h4>
              <p>{leader.bio}</p>
              <div className="card-metrics">
                <span>{leader.stats.programs} programs</span>
                <span>{leader.stats.patents} patents</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="design-celestial__grid">
        {[{ label: 'Advisory Board', data: advisory }, { label: 'Engineering Guild', data: engineering }].map(
          (group) => (
            <div className="celestial-column glass" key={group.label}>
              <header>
                <p className="eyebrow">{group.label}</p>
                <span className="soft-pill">{group.data.length} Experts</span>
              </header>
              <div className="celestial-column__list">
                {group.data.map((person) => (
                  <article className="celestial-card" key={person.id}>
                    <div className="avatar" style={{ backgroundImage: `url(${person.image})` }} />
                    <div>
                      <h5>{person.name}</h5>
                      <p>{person.title}</p>
                      <small>{person.focus.join(' • ')}</small>
                    </div>
                    <div className="micro-stat">
                      <span>{person.stats.programs}</span>
                      <small>Programs</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ),
        )}

        <div className="celestial-stack">
          {[{ label: 'Operations Nerve', data: operations }, { label: 'Research & Design', data: [...research, ...design] }].map(
            (cluster) => (
              <div className="celestial-stack__panel glass" key={cluster.label}>
                <header>
                  <p className="eyebrow">{cluster.label}</p>
                  <span className="soft-pill">{cluster.data.length} Minds</span>
                </header>
                <div className="cluster-avatars">
                  {cluster.data.map((member) => (
                    <div className="cluster-avatar" key={member.id}>
                      <img src={member.image} alt={member.name} />
                      <span>{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="design-celestial__metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <h3>{metric.value}</h3>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CelestialCommandGrid
