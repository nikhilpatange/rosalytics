import React from 'react'

const ContinuumTimeline = ({ members }) => {
  return (
    <section className="design-surface design-timeline">
      <header>
        <p className="eyebrow">Design 04</p>
        <h3>
          Continuum <span className="gradient-text">Timeline</span>
        </h3>
        <p>Vertical kinetic timeline for executive briefings with scroll-triggered halos.</p>
      </header>
      <div className="timeline-grid">
        {members.map((member, index) => (
          <article className="timeline-card" key={member.id}>
            <div className="timeline-marker">
              <span>{index + 1}</span>
              <div className="timeline-line" />
            </div>
            <div className="timeline-body">
              <div className="timeline-header">
                <h4>{member.name}</h4>
                <span className="soft-pill">{member.category}</span>
              </div>
              <p>{member.bio}</p>
              <div className="timeline-meta">
                <div>
                  <strong>{member.stats.programs}</strong>
                  <span>Programs</span>
                </div>
                <div>
                  <strong>{member.stats.patents}</strong>
                  <span>Patents</span>
                </div>
                <div>
                  <strong>{member.location}</strong>
                  <span>Base</span>
                </div>
              </div>
            </div>
            <div className="timeline-avatar">
              <img src={member.image} alt={member.name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContinuumTimeline
