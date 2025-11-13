import React from 'react'

const QuantumMasonry = ({ members }) => {
  return (
    <section className="design-surface design-masonry">
      <div className="masonry-headline">
        <p className="eyebrow">Design 05</p>
        <h3>
          Quantum <span className="gradient-text">Masonry</span>
        </h3>
        <p>Editorial staggered stack with cinematic depth, stitched with neon borders.</p>
      </div>
      <div className="masonry-grid">
        {members.map((member, index) => (
          <article className={`masonry-card tier-${(index % 3) + 1}`} key={member.id}>
            <div className="masonry-card__head">
              <div>
                <p className="eyebrow">{member.category}</p>
                <h4>{member.name}</h4>
              </div>
              <span>{member.experience}</span>
            </div>
            <p>{member.bio}</p>
            <div className="masonry-card__footer">
              <div className="avatar-sm">
                <img src={member.image} alt={member.name} />
              </div>
              <div>
                <small>{member.title}</small>
                <div className="chip-row">
                  {member.focus.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default QuantumMasonry
