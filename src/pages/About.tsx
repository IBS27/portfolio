function About() {
  return (
    <section className="editorial-page about-page" aria-labelledby="about-title">
      <header className="editorial-page__header">
        <h1 id="about-title">About</h1>
      </header>

      <div className="about-brief">
        <p className="about-brief__copy">
          I’m Srinivas, a CS major at UW–Madison. I like building useful
          software, usually starting with something I’m curious about or a problem I want to solve.
        </p>

        <dl className="about-facts">
          <div><dt>Based</dt><dd>Madison, WI</dd></div>
          <div><dt>Studying</dt><dd>Computer Sciences, BS</dd></div>
          <div><dt>Outside</dt><dd>F1 · movies · basketball · ping pong</dd></div>
        </dl>
      </div>
    </section>
  )
}

export default About
