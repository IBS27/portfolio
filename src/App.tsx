import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import TerminalPanel from './components/TerminalPanel'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <TerminalPanel>
        <div className="page-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </TerminalPanel>
    </div>
  )
}

export default App
