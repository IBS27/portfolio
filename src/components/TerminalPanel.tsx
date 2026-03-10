import type { ReactNode } from 'react'
import Navbar from './Navbar'

type TerminalPanelProps = {
  children: ReactNode
}

function TerminalPanel({ children }: TerminalPanelProps) {
  return (
    <main className="terminal-panel">
      <Navbar />
      <section className="terminal-panel__content">
        <div className="terminal-view">{children}</div>
      </section>
    </main>
  )
}

export default TerminalPanel
