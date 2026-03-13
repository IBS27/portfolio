function Contact() {
  return (
    <section className="contact-page">
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; srinivasib@portfolio:~$</span> ./contact --details
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
            <a className="terminal-link contact-item__value" href="mailto:ibsrinivas27@gmail.com">
              ibsrinivas27@gmail.com
              <span className="contact-item__icon" aria-hidden="true">{'\u2197'}</span>
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label terminal-copy terminal-copy--dim">
              linkedin
            </span>
            <a
              className="terminal-link contact-item__value"
              href="https://linkedin.com/in/srinivasib"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/srinivasib
              <span className="contact-item__icon" aria-hidden="true">{'\u2197'}</span>
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label terminal-copy terminal-copy--dim">
              github
            </span>
            <a
              className="terminal-link contact-item__value"
              href="https://github.com/IBS27"
              target="_blank"
              rel="noreferrer"
            >
              github.com/IBS27
              <span className="contact-item__icon" aria-hidden="true">{'\u2197'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
