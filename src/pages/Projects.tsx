type ProjectItem = {
  id: number
  title: string
  description: string
  tech: string[]
  url: string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Aleithia',
    description: 'Best OpenAI Hack @ UIUC — AI platform that aggregates regulatory, political, and consumer data to deliver actionable insights for small businesses. Features GPU-accelerated inference, Graph-RAG, and recursive AI agents.',
    tech: ['Python', 'Modal', 'vLLM', 'Graph-RAG'],
    url: 'https://github.com/gt12889/aleithia',
  },
  {
    id: 2,
    title: 'TruChain',
    description: 'Best Blockchain Hack @ UW-Madison — Blockchain-based video authenticity verification for elected officials. Combats deepfake misinformation through source-level provenance on Solana with AI-powered clip matching.',
    tech: ['TypeScript', 'Solana', 'AI/ML'],
    url: 'https://github.com/IBS27/truchain',
  },
  {
    id: 3,
    title: 'Atmosphere',
    description: 'HackMIT 2025 project — smart glasses that generate real-time music matching your environment. Uses AI scene detection and music generation for a seamless, hands-free soundtrack.',
    tech: ['Node.js', 'Claude API', 'Suno API', 'WebSocket'],
    url: 'https://github.com/IBS27/atmosphere',
  },
  {
    id: 4,
    title: 'SplitSmart',
    description: 'AI-enhanced group expense tracker with smart receipt OCR, flexible bill splitting, and real-time sync across devices.',
    tech: ['Flutter', 'FastAPI', 'Firebase', 'Dart'],
    url: 'https://github.com/IBS27/splitsmart',
  },
  {
    id: 5,
    title: 'PoliSight',
    description: 'Political literacy tool that decomposes policy arguments, detects omissions in articles, and calculates personal financial impact of proposed policies.',
    tech: ['TypeScript', 'Next.js', 'AI/NLP'],
    url: 'https://polisight.vercel.app',
  },
]

function Projects() {
  return (
    <section>
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; srinivasib@portfolio:~$</span> ls projects/
      </h1>
      <div className="project-grid">
        {projects.map((project) => (
          <a key={project.id} className="project-card" href={project.url} target="_blank" rel="noreferrer">
            <div className="project-card__header">
              <span className="project-title">{project.title}</span>
              <span className="project-card__arrow" aria-hidden="true">{'\u2192'}</span>
            </div>
            <p className="terminal-copy terminal-copy--dim project-details">
              {project.description}
            </p>
            <div className="project-badges">
              {project.tech.map((t) => (
                <span key={t} className="project-badge">{t}</span>
              ))}
            </div>
          </a>
        ))}
        <a
          className="project-card project-card--cta"
          href="https://github.com/IBS27"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card__header">
            <span className="project-title">more on github</span>
            <span className="project-card__arrow" aria-hidden="true">{'\u2192'}</span>
          </div>
          <p className="terminal-copy terminal-copy--dim project-details">
            Check out the rest of my projects, experiments, and contributions.
          </p>
        </a>
      </div>
    </section>
  )
}

export default Projects
