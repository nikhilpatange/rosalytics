import React from 'react'

const SignatureDeck = ({ members, streams }) => {
  const advisory = members.filter((member) => member.category === 'Advisory')
  const build = members.filter((member) => member.category !== 'Advisory')

  return (
    <section className="design-surface design-signature">
      <div className="signature-intro glass">
        <p className="eyebrow">Design 06</p>
        <h3>
          Signature <span className="gradient-text">Deck</span>
        </h3>
        <p>Layered dossier for leadership summits with rotating principle streams.</p>
        <div className="signature-streams">
          {streams.map((stream) => (
            <article key={stream.label}>
              <h5>{stream.label}</h5>
              <p>{stream.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="signature-columns">
        <div>
          <p className="eyebrow">Advisory Council</p>
          {advisory.map((member) => (
            <article className="signature-card" key={member.id}>
              <img src={member.image} alt={member.name} />
              <div>
                <h4>{member.name}</h4>
                <p>{member.title}</p>
                <small>{member.quote}</small>
              </div>
              <div className="signature-card__stat">
                <span>{member.stats.patents}</span>
                <small>Patents</small>
              </div>
            </article>
          ))}
        </div>
        <div className="signature-gallery">
          {build.map((member) => (
            <article className="signature-gallery__tile" key={member.id}>
              <div className="tile-image" style={{ backgroundImage: `url(${member.image})` }} />
              <div className="tile-body">
                <p className="eyebrow">{member.category}</p>
                <h5>{member.name}</h5>
                <small>{member.title}</small>
              </div>
              <div className="tile-meta">
                <span>{member.stats.programs}</span>
                <small>Programs</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureDeck
