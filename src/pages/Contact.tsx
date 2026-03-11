function Contact() {
  return (
    <section className="contact-page">
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> ./contact --details
      </h1>
      <p className="terminal-copy terminal-copy--dim contact-intro">
        Best way to reach me is email. I usually reply within 1-2 business days.
      </p>
      <div className="contact-card">
        <div className="contact-list" aria-label="Contact details">
          <div className="contact-item">
            <span className="contact-item__label terminal-copy terminal-copy--dim">
              email
            </span>
            <a className="terminal-link contact-item__value" href="mailto:alex.chen@example.com">
              alex.chen@example.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label terminal-copy terminal-copy--dim">
              linkedin
            </span>
            <a
              className="terminal-link contact-item__value"
              href="https://linkedin.com/in/alexchen"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/alexchen
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label terminal-copy terminal-copy--dim">
              github
            </span>
            <a
              className="terminal-link contact-item__value"
              href="https://github.com/alexchen"
              target="_blank"
              rel="noreferrer"
            >
              github.com/alexchen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
