import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects" className="section section--placeholder">
          <div className="container">
            <p className="section__desc">Projects section — coming in Stage 5.</p>
          </div>
        </section>
        <section id="case-studies" className="section section--placeholder">
          <div className="container">
            <p className="section__desc">Case studies — coming in Stage 6.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
