function Home() {
  return (
    <div className="home-page">
      <p className="terminal-copy">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> whoami
        {'\n'}
        Alex Chen - Full-Stack Developer.
        {'\n'}
        Building clean, efficient, and user-centric web applications.
        <span className="terminal-cursor" aria-hidden="true" />
      </p>
    </div>
  )
}

export default Home
