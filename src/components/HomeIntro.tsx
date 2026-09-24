import AFMonogram from './AFMonogram'

type HomeIntroProps = {
  isRunning: boolean
  onComplete: () => void
}

function HomeIntro({ isRunning, onComplete }: HomeIntroProps) {
  return (
    <div
      className={`home-intro-sequence${isRunning ? ' home-intro-sequence--running' : ''}`}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === 'intro-layer') {
          onComplete()
        }
      }}
    >
      <AFMonogram className="home-intro-mark" decorative />
    </div>
  )
}

export default HomeIntro
