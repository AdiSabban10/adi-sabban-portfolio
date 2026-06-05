import { Pill } from './Pill'
import { TemplateAccordion } from './TemplateAccordion'

function IdentityContent({ project }) {
  return (
    <dl className="detail-list">
      <div className="detail-list__row">
        <dt>Project Name</dt>
        <dd>{project.title}</dd>
      </div>
      <div className="detail-list__row">
        <dt>Short Pitch</dt>
        <dd>{project.shortPitch}</dd>
      </div>
      <div className="detail-list__row">
        <dt>Main Technologies</dt>
        <dd>
          <div className="pill-group">
            {project.mainTechnologies.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </div>
        </dd>
      </div>
    </dl>
  )
}

function InventoryContent({ project }) {
  return (
    <dl className="detail-list">
      <div className="detail-list__row">
        <dt>Core Stack</dt>
        <dd>
          <ul className="stack-list">
            <li>
              <strong>Frontend:</strong> {project.coreStack.frontend}
            </li>
            <li>
              <strong>Backend:</strong> {project.coreStack.backend}
            </li>
            {project.coreStack.tools && (
              <li>
                <strong>Tools:</strong> {project.coreStack.tools}
              </li>
            )}
          </ul>
        </dd>
      </div>
      <div className="detail-list__row">
        <dt>Key Features</dt>
        <dd>
          <ul className="bullet-list">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="detail-list__row">
        <dt>Architecture / Pattern</dt>
        <dd>{project.architecturePattern}</dd>
      </div>
      <div className="detail-list__row">
        <dt>Data Persistence</dt>
        <dd>{project.dataPersistence}</dd>
      </div>
    </dl>
  )
}

function AssetPrepContent({ project }) {
  return (
    <dl className="detail-list">
      <div className="detail-list__row">
        <dt>Elevator Pitch (for Resume)</dt>
        <dd>{project.elevatorPitch}</dd>
      </div>
      <div className="detail-list__row">
        <dt>Technical Challenges Solved</dt>
        <dd>
          <ul className="bullet-list">
            {project.technicalChallenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </dd>
      </div>
      <div className="detail-list__row">
        <dt>Skill Tags</dt>
        <dd>
          <div className="pill-group">
            {project.skillTags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </dd>
      </div>
    </dl>
  )
}

function PositioningContent({ project }) {
  return (
    <dl className="detail-list">
      <div className="detail-list__row">
        <dt>My Role</dt>
        <dd>{project.myRole}</dd>
      </div>
      <div className="detail-list__row">
        <dt>Key Strengths Demonstrated</dt>
        <dd>
          <ul className="bullet-list">
            {project.keyStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </dd>
      </div>
      {project.constraintNote && (
        <div className="detail-list__row">
          <dt>Note</dt>
          <dd className="detail-list__note">{project.constraintNote}</dd>
        </div>
      )}
    </dl>
  )
}

export function CaseStudy({ project }) {
  const sections = [
    {
      title: '1. Project Identity',
      content: <IdentityContent project={project} />,
    },
    {
      title: '2. Technical Inventory',
      content: <InventoryContent project={project} />,
    },
    {
      title: '3. Portfolio Asset Prep',
      content: <AssetPrepContent project={project} />,
    },
    {
      title: '4. Professional Positioning (Resume Readiness)',
      content: <PositioningContent project={project} />,
    },
  ]

  return (
    <section id={project.slug} className="case-study">
      <div className="case-study__header">
        <div>
          <p className="case-study__eyebrow">{project.collaboration}</p>
          <h2 className="case-study__title">{project.title}</h2>
          {project.subtitle && (
            <p className="case-study__subtitle">{project.subtitle}</p>
          )}
        </div>
        <div className="case-study__links">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              GitHub
            </a>
          ) : (
            <span className="btn btn--ghost btn--disabled" title="Link coming soon">
              GitHub
            </span>
          )}
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Live demo
            </a>
          ) : (
            <span className="btn btn--primary btn--disabled" title="Link coming soon">
              Live demo
            </span>
          )}
        </div>
      </div>
      <p className="case-study__pitch">{project.shortPitch}</p>
      <TemplateAccordion sections={sections} />
    </section>
  )
}
