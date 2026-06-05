function App() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">Portfolio</p>
            <h1 className="section__title">Adi Sabban</h1>
            <p className="section__desc">
              Design system preview — light theme colors, typography, and layout
              primitives are wired up and ready for Stage 3.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn--primary">
              Primary button
            </a>
            <a href="#about" className="btn btn--ghost">
              Ghost button
            </a>
            <span className="pill">Skill tag</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
