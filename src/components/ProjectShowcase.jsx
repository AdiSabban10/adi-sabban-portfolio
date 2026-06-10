import { projectCategories, projectTypes } from '../data/projects'
import { Pill } from './Pill'

function ProjectLinks({ links }) {
  if (links.confidential) {
    return (
      <span className="project-showcase__confidential">
        Private client work
      </span>
    )
  }

  return (
    <div className="project-showcase__links">
      {links.githubRepos?.map((repo) => (
        <a
          key={repo.label}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost btn--sm"
        >
          GitHub ({repo.label})
        </a>
      ))}
      {links.github && !links.githubRepos && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost btn--sm"
        >
          GitHub
        </a>
      )}
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--sm"
        >
          Live demo
        </a>
      )}
    </div>
  )
}

export function ProjectShowcase({ project, compact = false }) {
  const typeLabel = projectTypes[project.type]
  const categoryLabel = projectCategories[project.category]

  return (
    <article
      id={project.slug}
      className={`project-showcase${project.category === 'featured' ? ' project-showcase--featured' : ''}${compact ? ' project-showcase--compact' : ''}`}
    >
      <header className="project-showcase__header">
        <div className="project-showcase__titles">
          <div className="project-showcase__meta">
            <span className="project-showcase__type">{typeLabel}</span>
            {project.category === 'featured' && (
              <span className="project-showcase__category">{categoryLabel}</span>
            )}
          </div>
          <h3 className="project-showcase__title">{project.title}</h3>
          {project.subtitle && (
            <p className="project-showcase__subtitle">{project.subtitle}</p>
          )}
        </div>
        <ProjectLinks links={project.links} />
      </header>

      <p className="project-showcase__summary">{project.summary}</p>

      {!compact && <p className="project-showcase__role">{project.role}</p>}

      <ul className="project-showcase__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-showcase__stack">
        {project.stack.map((tech) => (
          <Pill key={tech} small>
            {tech}
          </Pill>
        ))}
      </div>

      {project.note && (
        <p className="project-showcase__note">{project.note}</p>
      )}
    </article>
  )
}
