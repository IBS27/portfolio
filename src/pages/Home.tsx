import { useEffect, useState } from 'react'

function useTypewriter(text: string) {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTyped(text)
      setDone(true)
      return
    }

    let i = 0
    let interval: ReturnType<typeof setInterval> | undefined
    const delay = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setTyped(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 75)
    }, 300)

    return () => {
      clearTimeout(delay)
      if (interval) clearInterval(interval)
    }
  }, [text])

  return { typed, done }
}

function Home() {
  const whoami = useTypewriter('whoami')

  return (
    <section className="home-page" aria-labelledby="home-title">
      <div className="terminal-home">
        <div className="terminal-home__body">
          <span className="sr-only">Terminal command: whoami.</span>
          <p className="terminal-home__command" aria-hidden="true">
            <span className="terminal-prompt">$</span> {whoami.typed}
            <span className="terminal-cursor" />
          </p>

          <div className={`terminal-home__response${whoami.done ? ' terminal-home__response--visible' : ''}`}>
            <div className="terminal-reveal">
              <h1 id="home-title">Srinivas I B</h1>
              <p className="home-role">CS @ UW–Madison '28</p>
            </div>

            <p className="home-summary terminal-reveal">
              Building at the intersection of applied ML, systems, and AI agents.
            </p>

            <dl className="home-stats terminal-reveal">
              <div>
                <dt>Uptime</dt>
                <dd>~10 years coding</dd>
              </div>
              <div>
                <dt>Signal</dt>
                <dd>2× hackathon winner</dd>
              </div>
            </dl>

            <p className="terminal-home__status terminal-reveal">
              <i className="status-dot" aria-hidden="true" />
              <span>status</span>
              <strong>building palantir for small businesses</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
