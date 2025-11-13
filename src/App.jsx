import { useMemo, useState } from 'react'
import {
  CelestialCommandGrid,
  GlassPulseShowcase,
  SpotlightSuite,
  ContinuumTimeline,
  QuantumMasonry,
  SignatureDeck,
  PrismFlipGallery,
  Orbitalscape,
  HaloHexGrid,
  MirageParallax,
} from './components/designs'
import { principleStreams, signatureMetrics, teamMembers } from './data/teamData'
import './App.css'

const designLibrary = [
  {
    id: 'celestial',
    label: '01 • Celestial Command Grid',
    description: 'Executive grid with leadership, advisory, and build tribes.',
    component: CelestialCommandGrid,
  },
  {
    id: 'glasspulse',
    label: '02 • Glass Pulse Board',
    description: 'Glassmorphic hero deck with cinematic lighting.',
    component: GlassPulseShowcase,
  },
  {
    id: 'spotlight',
    label: '03 • Immersive Spotlight Suite',
    description: 'Hero spotlight with kinetic roster scroll.',
    component: SpotlightSuite,
  },
  {
    id: 'timeline',
    label: '04 • Continuum Timeline',
    description: 'Vertical halo timeline for narrated walkthroughs.',
    component: ContinuumTimeline,
  },
  {
    id: 'masonry',
    label: '05 • Quantum Masonry',
    description: 'Staggered editorial layout with neon seams.',
    component: QuantumMasonry,
  },
  {
    id: 'signature',
    label: '06 • Signature Deck',
    description: 'Dossier split between advisors and build guild.',
    component: SignatureDeck,
  },
  {
    id: 'prism',
    label: '07 • Prism Flip Gallery',
    description: '3D flip interaction with holographic accents.',
    component: PrismFlipGallery,
  },
  {
    id: 'orbit',
    label: '08 • Orbitalscape Control',
    description: 'Radial narrative anchored by leadership core.',
    component: Orbitalscape,
  },
  {
    id: 'hex',
    label: '09 • Halo Hex Array',
    description: 'Sensor-inspired tessellation for roster reveals.',
    component: HaloHexGrid,
  },
  {
    id: 'parallax',
    label: '10 • Mirage Parallax',
    description: 'Cinematic split with parallax hero and roster rail.',
    component: MirageParallax,
  },
]

function App() {
  const [activeDesign, setActiveDesign] = useState(designLibrary[0].id)
  const ActiveComponent = useMemo(
    () => designLibrary.find((design) => design.id === activeDesign)?.component ?? CelestialCommandGrid,
    [activeDesign],
  )

  return (
    <div className="app-shell">
      <div className="background-aurora gradient-animated" />
      <div className="particle-field">
        {new Array(18).fill(null).map((_, index) => (
          <span key={index} className={`particle particle-${index % 6}`} />
        ))}
      </div>

      <header className="hero container">
        <div>
          <p className="eyebrow">Rosalytics Team Studio</p>
          <h1>
            10 bespoke <span className="gradient-text">team experiences</span> for enterprise navigation.
          </h1>
          <p>
            Crafted for dark-navy command centers with couture typography, micro-animations, and cinematic
            lighting. Each option is tuned for executive wow-moments.
          </p>
        </div>
        <div className="hero-metrics">
          {signatureMetrics.map((metric) => (
            <article key={metric.label} className="glass">
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </header>

      <section className="selector container glass">
        <div className="selector-head">
          <div>
            <p className="eyebrow">Select a visual system</p>
            <h4>{designLibrary.find((item) => item.id === activeDesign)?.label}</h4>
            <p>{designLibrary.find((item) => item.id === activeDesign)?.description}</p>
          </div>
          <select value={activeDesign} onChange={(event) => setActiveDesign(event.target.value)}>
            {designLibrary.map((design) => (
              <option value={design.id} key={design.id}>
                {design.label}
              </option>
            ))}
          </select>
        </div>
        <div className="selector-grid">
          {designLibrary.map((design) => (
            <button
              key={design.id}
              className={`selector-pill ${design.id === activeDesign ? 'active' : ''}`}
              onClick={() => setActiveDesign(design.id)}
            >
              <span>{design.label}</span>
              <small>{design.description}</small>
            </button>
          ))}
        </div>
      </section>

      <div className="design-stage container">
        <ActiveComponent members={teamMembers} metrics={signatureMetrics} streams={principleStreams} />
      </div>

      <footer className="container footer-note">
        <p>Need additional explorations? We can extend any concept into motion prototypes or full build-outs.</p>
      </footer>
    </div>
  )
}

export default App
