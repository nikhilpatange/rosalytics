import React from 'react'

const PrismFlipGallery = ({ members }) => {
  return (
    <section className="design-surface design-prism">
      <header>
        <p className="eyebrow">Design 07</p>
        <h3>
          Prism Flip <span className="gradient-text">Gallery</span>
        </h3>
        <p>3D flip system with holographic edges and biography backs.</p>
      </header>
      <div className="prism-grid">
        {members.map((member) => (
          <div className="prism-card" key={member.id}>
            <div className="prism-card__inner">
              <div className="prism-card__face prism-card__front">
                <img src={member.image} alt={member.name} />
                <div>
                  <h4>{member.name}</h4>
                  <p>{member.title}</p>
                </div>
              </div>
              <div className="prism-card__face prism-card__back">
                <p className="eyebrow">{member.category}</p>
                <p>{member.bio}</p>
                <div className="chip-row">
                  {member.focus.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PrismFlipGallery
