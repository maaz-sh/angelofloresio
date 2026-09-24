import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIntro from '../components/HomeIntro'
import '../styles/Home.css'

function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !reduceMotion && sessionStorage.getItem('af-intro-played') !== 'true'
  })

  useEffect(() => {
    if (!showIntro) return

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('af-intro-played', 'true')
      setShowIntro(false)
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [showIntro])

  return (
    <div className={`home-hero${showIntro ? ' home-hero--introducing' : ''}`}>
      {showIntro && <HomeIntro />}
      <div className="home-identity">
        <p className="home-eyebrow">Full-Stack Software Engineer · Cloud · AI</p>
        <h1 className="home-title">Angelo Flores</h1>
      </div>
      <div className="home-overlay">
        <p className="home-intro">
          Building thoughtful, reliable applications across frontend, backend, and
          cloud systems.
        </p>
        <p className="home-summary">
          Experience with Java, React, REST APIs, cloud infrastructure, and
          AI-integrated solutions.
        </p>
        <div className="home-actions">
          <Link className="btn btn-light" to="/projects">
            View projects
          </Link>
          <Link className="home-about-link" to="/about">
            More about me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
