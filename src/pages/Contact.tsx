const contactLinks = [
  {
    label: 'Email',
    value: 'ibsrinivas27@gmail.com',
    href: 'mailto:ibsrinivas27@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/srinivasib',
    href: 'https://linkedin.com/in/srinivasib',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/IBS27',
    href: 'https://github.com/IBS27',
    external: true,
  },
  {
    label: 'X',
    value: 'x.com/srinivas_i_b',
    href: 'https://x.com/srinivas_i_b',
    external: true,
  },
]

function Contact() {
  return (
    <section className="editorial-page contact-page" aria-labelledby="contact-title">
      <header className="editorial-page__header">
        <h1 id="contact-title">Contact</h1>
        <p className="editorial-page__intro">
          The best way to reach me is email. I usually reply within one or two days.
        </p>
      </header>

      <address className="contact-list">
        {contactLinks.map((link) => (
          <a
            className="contact-row"
            href={link.href}
            key={link.label}
            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            <span className="contact-row__label"><i className="status-dot" aria-hidden="true" /> {link.label}</span>
            <span className="contact-row__value">{link.value}</span>
            <span className="contact-row__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </address>

      <p className="contact-note">
        <span className="micro-label">Response window</span>
        <span>1–2 days · Central Time</span>
      </p>
    </section>
  )
}

export default Contact
