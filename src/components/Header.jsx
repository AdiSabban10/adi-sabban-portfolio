import { projects } from '../data/projects'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-mark">AS</span>
          <span className="header__logo-text">Adi Sabban</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <div className="header__dropdown">
            <button
              type="button"
              className="header__dropdown-trigger"
              aria-haspopup="true"
            >
              Jump to
              <span aria-hidden="true">▾</span>
            </button>
            <ul className="header__dropdown-menu" role="menu">
              {projects.map((project) => (
                <li key={project.id} role="none">
                  <a href={`#${project.slug}`} role="menuitem">
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
