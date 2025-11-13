import React from 'react'

const HaloHexGrid = ({ members }) => {
  return (
    <section className="design-surface design-hex">
      <header>
        <p className="eyebrow">Design 09</p>
        <h3>
          Halo Hex <span className="gradient-text">Array</span>
        </h3>
        <p>Hexagonal tessellation referencing industrial sensor grids.</p>
      </header>
      <div className="hex-grid">
        {members.map((member) => (
          <article className="hex" key={member.id}>
            <div className="hex-inner">
              <div className="hex-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="hex-info">
                <h5>{member.name}</h5>
                <p>{member.title}</p>
                <small>{member.category}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HaloHexGrid
