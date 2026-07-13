import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import TerminalPanel from './components/TerminalPanel'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

const pageTitles: Record<string, string> = {
  '/': 'Home — Srinivas I B',
  '/home': 'Home — Srinivas I B',
  '/projects': 'Projects — Srinivas I B',
  '/about': 'About — Srinivas I B',
  '/contact': 'Contact — Srinivas I B',
}

function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? 'Srinivas I B — Portfolio'

    window.scrollTo({ top: 0, behavior: 'auto' })
    const focusFrame = window.requestAnimationFrame(() => {
      document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(focusFrame)
  }, [location.pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <TerminalPanel>
        <div className="page-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </TerminalPanel>
      <p className="sr-only" aria-live="polite">
        {pageTitles[location.pathname] ?? 'Srinivas I B — Portfolio'}
      </p>
      <Analytics />
    </div>
  )
}

export default App
