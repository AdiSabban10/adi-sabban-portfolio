import { CaseStudy } from './components/CaseStudy'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { projects } from './data/projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section__header">
              <p className="section__eyebrow">Selected work</p>
              <h2 className="section__title">Projects</h2>
              <p className="section__desc">
                A progression from vanilla JavaScript fundamentals to React SPAs
                and full-stack collaboration.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section id="case-studies" className="section case-studies-section">
          <div className="container">
            <div className="section__header">
              <p className="section__eyebrow">Deep dives</p>
              <h2 className="section__title">Case studies</h2>
              <p className="section__desc">
                Each project follows the same structured breakdown — identity,
                technical inventory, portfolio assets, and professional
                positioning.
              </p>
            </div>
            <div className="case-studies-list">
              {projects.map((project) => (
                <CaseStudy key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
