import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

type TerminalPanelProps = {
  children: ReactNode
}

function TerminalPanel({ children }: TerminalPanelProps) {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/home'

  return (
    <div className={`site-frame${isHome ? ' site-frame--home' : ' site-frame--internal'}`}>
      <header className="site-header">
        <Navbar />
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <span>© 2026 SRINIVAS I B</span>
        <nav className="site-footer__links" aria-label="Social links">
          <a href="mailto:ibsrinivas27@gmail.com">Email</a>
          <a href="https://linkedin.com/in/srinivasib" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/IBS27" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/srinivas_i_b" target="_blank" rel="noreferrer">X</a>
        </nav>
      </footer>
    </div>
  )
}

export default TerminalPanel
