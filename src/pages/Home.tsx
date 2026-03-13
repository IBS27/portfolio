import { useEffect, useState } from 'react'

function useTypewriter(text: string, speed: number, startDelay: number) {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const delay = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setTyped(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(delay)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { typed, done }
}

function Home() {
  const [showWhoamiOutput, setShowWhoamiOutput] = useState(false)
  const [showUptimeOutput, setShowUptimeOutput] = useState(false)

  const whoami = useTypewriter('whoami', 80, 0)
  // Start uptime typing after whoami output has faded in
  const uptimeDelay = 6 * 80 + 200 + 600 // whoami typing + pause + fade-in
  const uptime = useTypewriter('uptime', 80, uptimeDelay)

  useEffect(() => {
    if (whoami.done) {
      const t = setTimeout(() => setShowWhoamiOutput(true), 200)
      return () => clearTimeout(t)
    }
  }, [whoami.done])

  useEffect(() => {
    if (uptime.done) {
      const t = setTimeout(() => setShowUptimeOutput(true), 200)
      return () => clearTimeout(t)
    }
  }, [uptime.done])

  return (
    <section className="home-page">
      <p className="terminal-copy home-command">
        <span className="terminal-prompt">&gt; srinivasib@portfolio:~$</span> {whoami.typed}
        {!whoami.done && (
          <span className="terminal-cursor" aria-hidden="true" />
        )}
      </p>
      <div className={`home-block ${showWhoamiOutput ? 'home-block--visible' : ''}`}>
        <h1 className="home-title">Srinivas I B</h1>
        <p className="terminal-copy home-role">CS @ UW-Madison '28</p>
        <p className="terminal-copy home-summary">
          Building at the intersection of applied ML, systems, and AI agents.
        </p>
        <p className="terminal-copy terminal-copy--dim home-note">
          2x hackathon winner. Always shipping.
        </p>
      </div>

      {showWhoamiOutput && (
        <>
          <p className="terminal-copy home-command">
            <span className="terminal-prompt">&gt; srinivasib@portfolio:~$</span> {uptime.typed}
            {!uptime.done && (
              <span className="terminal-cursor" aria-hidden="true" />
            )}
          </p>
          <div className={`home-block ${showUptimeOutput ? 'home-block--visible' : ''}`}>
            <p className="terminal-copy terminal-copy--dim home-note">
              up ~10 years (coding since 5th grade) — currently building palantir for small businesses
              <span className="terminal-cursor" aria-hidden="true" />
            </p>
          </div>
        </>
      )}
    </section>
  )
}

export default Home
