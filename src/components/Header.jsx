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
          <a href="#case-studies">Case studies</a>
          <div className="header__dropdown">
            <button
              type="button"
              className="header__dropdown-trigger"
              aria-haspopup="true"
              disabled
            >
              Jump to
              <span aria-hidden="true">▾</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
