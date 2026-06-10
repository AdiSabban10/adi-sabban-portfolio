import { contact } from '../data/contact'

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Full-Stack / Frontend Developer</p>
        <h1 className="hero__title">
          Hi, I&apos;m <span className="hero__accent">Adi Sabban</span>
        </h1>
        <p className="hero__text">
          Drawing on an M.A. in Mathematics Education and years of teaching
          experience, I bring strong analytical skills and clear communication to
          full-stack development. I build robust, user-friendly applications using
          React, Node.js, and .NET Core — integrating REST APIs and working with
          MongoDB and SQL. Most recently, on a freelance production platform, I
          focused on frontend development and also contributed to the ASP.NET Core
          backend. Coding Academy Full-Stack Bootcamp graduate.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
        </div>
      </div>
      <aside className="hero__contact" aria-label="Contact information">
        <h2 className="hero__contact-title">Contact</h2>
        <ul className="contact-list">
          <li className="contact-list__item">
            <span className="contact-list__label">Email</span>
            <a href={`mailto:${contact.email}`} className="contact-list__value">
              {contact.email}
            </a>
          </li>
          <li className="contact-list__item">
            <span className="contact-list__label">Phone</span>
            <a href={contact.phoneHref} className="contact-list__value">
              {contact.phone}
            </a>
          </li>
          <li className="contact-list__item">
            <span className="contact-list__label">Location</span>
            <span className="contact-list__value">{contact.location}</span>
          </li>
          <li className="contact-list__item">
            <span className="contact-list__label">GitHub</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-list__value"
            >
              github.com/AdiSabban10
            </a>
          </li>
          {contact.linkedin && (
            <li className="contact-list__item">
              <span className="contact-list__label">LinkedIn</span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-list__value"
              >
                LinkedIn profile
              </a>
            </li>
          )}
        </ul>
      </aside>
    </section>
  )
}
