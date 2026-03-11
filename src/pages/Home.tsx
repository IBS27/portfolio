function Home() {
  return (
    <section className="home-page">
      <p className="terminal-copy home-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> whoami
      </p>
      <div className="home-block">
        <h1 className="home-title">Alex Chen</h1>
        <p className="terminal-copy home-role">Full-Stack Developer</p>
        <p className="terminal-copy home-summary">
          Building clean, efficient, and user-centric web applications.
        </p>
        <p className="terminal-copy terminal-copy--dim home-note">
          Focused on performant interfaces, thoughtful systems, and calm product
          experiences.
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}

export default Home
