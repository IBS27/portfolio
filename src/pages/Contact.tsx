function Contact() {
  return (
    <section>
      <h1 className="section-title terminal-copy">### CONTACT</h1>
      <div className="contact-card">
        <pre className="terminal-copy">
          <code>
            $ cat contact.txt
            {'\n'}
            <span className="contact-arrow">-&gt;</span>{' '}
            <span className="contact-label">Email:</span>{' '}
            <a className="terminal-link" href="mailto:alex.chen@example.com">
              alex.chen@example.com
            </a>
            {'\n'}
            <span className="contact-arrow">-&gt;</span>{' '}
            <span className="contact-label">LinkedIn:</span>{' '}
            <a
              className="terminal-link"
              href="https://linkedin.com/in/alexchen"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/alexchen
            </a>
            {'\n'}
            <span className="contact-arrow">-&gt;</span>{' '}
            <span className="contact-label">GitHub:</span>{' '}
            <a
              className="terminal-link"
              href="https://github.com/alexchen"
              target="_blank"
              rel="noreferrer"
            >
              github.com/alexchen
            </a>
          </code>
        </pre>
      </div>
    </section>
  )
}

export default Contact
