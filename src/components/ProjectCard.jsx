import { Pill } from './Pill'

export function ProjectCard({ project }) {
  const { title, subtitle, shortPitch, skillTags, collaboration } = project

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
        <span className="project-card__badge">{collaboration}</span>
      </div>
      <p className="project-card__pitch">{shortPitch}</p>
      <div className="project-card__tags">
        {skillTags.slice(0, 4).map((tag) => (
          <Pill key={tag} small>
            {tag}
          </Pill>
        ))}
      </div>
      <a href={`#${project.slug}`} className="project-card__link">
        View case study
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
