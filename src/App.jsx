import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectShowcase } from './components/ProjectShowcase'
import { featuredProjects, learningProjects } from './data/projects'

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
                Freelance production work and full-stack apps — from complex UI
                flows to database-backed APIs.
              </p>
            </div>

            <div className="projects-showcase-list">
              {featuredProjects.map((project) => (
                <ProjectShowcase key={project.id} project={project} />
              ))}
            </div>

            <div className="projects-learning">
              <h3 className="projects-learning__title">Earlier projects</h3>
              <p className="projects-learning__desc">
                Smaller apps from Coding Academy — React, routing, and vanilla JavaScript.
              </p>
              <div className="projects-learning__grid">
                {learningProjects.map((project) => (
                  <ProjectShowcase key={project.id} project={project} compact />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
