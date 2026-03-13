import { useEffect, useState } from 'react'

function Home() {
  const [typedText, setTypedText] = useState('')
  const [showContent, setShowContent] = useState(false)

  const fullText = 'whoami'

  useEffect(() => {
    let i = 0
    let timeout: ReturnType<typeof setTimeout>
    const interval = setInterval(() => {
      i++
      setTypedText(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        timeout = setTimeout(() => setShowContent(true), 200)
      }
    }, 80)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="home-page">
      <p className="terminal-copy home-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> {typedText}
        {typedText.length < fullText.length && (
          <span className="terminal-cursor" aria-hidden="true" />
        )}
      </p>
      <div className={`home-block ${showContent ? 'home-block--visible' : ''}`}>
        <h1 className="home-title">Srinivas I B</h1>
        <p className="terminal-copy home-role">CS @ UW-Madison '28</p>
        <p className="terminal-copy home-summary">
          Building at the intersection of applied ML, systems, and AI agents.
        </p>
        <p className="terminal-copy terminal-copy--dim home-note">
          2x hackathon winner. Always shipping.
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}

export default Home
