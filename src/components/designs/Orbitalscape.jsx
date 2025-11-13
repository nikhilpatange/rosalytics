import React from 'react'

const Orbitalscape = ({ members }) => {
  const core = members[0]
  const satellites = members.slice(1, 7)
  const constellation = members.slice(7)

  return (
    <section className="design-surface design-orbit">
      <div className="orbit-core glass">
        <p className="eyebrow">Design 08</p>
        <h3>
          Orbitalscape <span className="gradient-text">Control</span>
        </h3>
        <p>Central command orb with rotating satellites and runway roster.</p>
        <div className="core-person">
          <img src={core.image} alt={core.name} />
          <div>
            <h4>{core.name}</h4>
            <p>{core.title}</p>
            <small>{core.bio}</small>
          </div>
        </div>
      </div>
      <div className="orbit-map">
        {satellites.map((member, index) => (
          <div className={`orbit-node orbit-node-${index + 1}`} key={member.id}>
            <div className="orbit-node__inner">
              <img src={member.image} alt={member.name} />
              <div>
                <h5>{member.name}</h5>
                <small>{member.category}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="orbit-constellation">
        {constellation.map((member) => (
          <article className="orbit-tile" key={member.id}>
            <div>
              <h5>{member.name}</h5>
              <p>{member.title}</p>
            </div>
            <span>{member.location}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Orbitalscape
