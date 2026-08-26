import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <main className="projects-page container py-5">
      <div className="projects-heading">
        <p className="projects-eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p>
          A few hands-on applications that highlight the experiences I enjoy building.
          Expand a project to learn more.
        </p>
        <a className="projects-source-link" href="https://github.com/maaz-sh/angelofloresio" target="_blank" rel="noreferrer">
          View this portfolio's collaborative source <span aria-hidden="true">↗</span>
        </a>
      </div>

      <section className="project-grid" aria-label="Project portfolio">
        <details
          className="project-card"
          open={expandedProject === 'careerflow'}
        >
          <summary
            onClick={(event) => {
              event.preventDefault()
              setExpandedProject(expandedProject === 'careerflow' ? null : 'careerflow')
            }}
          >
            <div>
              <p className="project-number">01</p>
              <h2>
                <a
                  className="project-title-link"
                  href="https://careerflow-three-steel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  CareerFlow
                </a>
              </h2>
              <p className="project-type">Career management application</p>
            </div>
            <span className="project-expand" aria-hidden="true">+</span>
          </summary>
          <div className="project-details">
            <p>
              A career-focused application with a polished sign-in and registration
              experience, plus light and dark theme support.
            </p>
            <div className="project-tags" aria-label="CareerFlow focus areas">
              <span>Career workflow</span>
              <span>Account access</span>
              <span>Theme support</span>
            </div>
            <div className="project-demo">
              <p className="project-demo-label">Live demo</p>
              <video controls preload="metadata">
                <source src="/CareerFlow_example.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
            <a className="project-link" href="https://github.com/maaz-sh/CareerFlow" target="_blank" rel="noreferrer">
              View collaborative source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </details>

        <details
          className="project-card"
          open={expandedProject === 'chess'}
        >
          <summary
            onClick={(event) => {
              event.preventDefault()
              setExpandedProject(expandedProject === 'chess' ? null : 'chess')
            }}
          >
            <div>
              <p className="project-number">02</p>
              <h2>Chess</h2>
              <p className="project-type">Interactive chess application</p>
            </div>
            <span className="project-expand" aria-hidden="true">+</span>
          </summary>
          <div className="project-details">
            <p>
              A browser-based chess experience with an interactive board, turn
              indicator, score display, and a New Game reset control.
            </p>
            <div className="project-tags" aria-label="Chess focus areas">
              <span>Game state</span>
              <span>Board UI</span>
              <span>Interactive controls</span>
            </div>
            <a className="project-link" href="https://chess-tau-umber.vercel.app/" target="_blank" rel="noreferrer">
              View live demo <span aria-hidden="true">↗</span>
            </a>
            <a className="project-link project-link-secondary" href="https://github.com/maaz-sh/chess" target="_blank" rel="noreferrer">
              View collaborative source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </details>
      </section>
    </main>
  )
}

export default Projects
