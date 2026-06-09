export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Fullstack Developer</p>
        <h1 className="hero__title">
          Hi, I&apos;m <span className="hero__accent">Adi Sabban</span>
        </h1>
        <p className="hero__text">
          I build thoughtful web experiences — from vanilla JavaScript games and
          canvas editors to React SPAs and full-stack apps with Node.js and
          MongoDB. This portfolio highlights the projects and skills I bring to
          my job search.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
          <a href="#case-studies" className="btn btn--ghost">
            Read case studies
          </a>
        </div>
      </div>
      <div className="hero__stats" aria-label="Portfolio highlights">
        <div className="stat-card">
          <span className="stat-card__value">5</span>
          <span className="stat-card__label">Projects</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">Vanilla → Full-Stack</span>
          <span className="stat-card__label">Growth arc</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">React · Node · MongoDB</span>
          <span className="stat-card__label">Core stack</span>
        </div>
      </div>
    </section>
  )
}
