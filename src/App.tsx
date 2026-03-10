import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import TerminalPanel from './components/TerminalPanel'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <TerminalPanel>
              <Home />
            </TerminalPanel>
          }
        />
        <Route
          path="/projects"
          element={
            <TerminalPanel>
              <Projects />
            </TerminalPanel>
          }
        />
        <Route
          path="/about"
          element={
            <TerminalPanel>
              <About />
            </TerminalPanel>
          }
        />
        <Route
          path="/contact"
          element={
            <TerminalPanel>
              <Contact />
            </TerminalPanel>
          }
        />
      </Routes>
    </div>
  )
}

export default App
