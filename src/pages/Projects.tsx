import { useState } from 'react'

type ProjectItem = {
  id: string
  title: string
  summary: string
  description: string
  tech: string[]
  url: string
}

const projects: ProjectItem[] = [
  {
    id: 'aleithia',
    title: 'Aleithia',
    summary: 'Intelligence for small businesses.',
    description: 'Best OpenAI Hack at UIUC. An AI platform that combines regulatory, political, and consumer data into practical intelligence for small businesses, powered by GPU inference, Graph-RAG, and recursive agents.',
    tech: ['Fine-Tuning', 'Agentic Research', 'React', 'Python', 'FastAPI', 'Modal', 'vLLM', 'Graph-RAG'],
    url: 'https://github.com/IBS27/aleithia',
  },
  {
    id: 'trackspace',
    title: 'Trackspace',
    summary: 'A command center for humanity’s return to the Moon.',
    description: 'A source-backed dashboard tracking NASA’s path from Artemis missions toward a sustained lunar base through realtime ingestion, capability dependencies, mission timelines, and an interactive 3D Earth–Moon view.',
    tech: ['Lunar Missions', 'Systems Mapping', 'Next.js', 'TypeScript', 'Convex', 'Three.js', 'React Flow', 'Vitest'],
    url: 'https://trackspace.info',
  },
  {
    id: 'nuviya',
    title: 'Nuviya',
    summary: 'A personal agent that handles customer support cases on your behalf.',
    description: 'Designed and built Nuviya’s animated production marketing experience for an agentic customer-support platform, with responsive product storytelling, workflow demonstrations, and conversion-focused interactions.',
    tech: ['Multimodal Agents', 'Long-Horizon Automation', 'React', 'TypeScript', 'Vite', 'Framer Motion', 'Formspree'],
    url: 'https://nuviya.ai',
  },
  {
    id: 'truchain',
    title: 'TruChain',
    summary: 'Source-level provenance for public video.',
    description: 'Best Blockchain Hack at UW–Madison. A video-authenticity system for elected officials that combats deepfake misinformation with Solana provenance and AI-powered clip matching.',
    tech: ['Media Provenance', 'Deepfake Detection', 'React', 'TypeScript', 'Solana', 'AI/ML'],
    url: 'https://github.com/IBS27/truchain',
  },
  {
    id: 'atmosphere',
    title: 'Atmosphere',
    summary: 'A soundtrack generated from your surroundings.',
    description: 'A HackMIT 2025 project: smart glasses that read the environment and generate matching music in real time through scene detection, music generation, and a low-latency streaming loop.',
    tech: ['Ambient Computing', 'Generative Audio', 'React', 'Node.js', 'Claude API', 'Suno API', 'WebSocket'],
    url: 'https://github.com/IBS27/atmosphere',
  },
  {
    id: 'luminova',
    title: 'Luminova',
    summary: 'Solar potential and payback, mapped to your home.',
    description: 'A team hackathon project combining NREL irradiance data, geospatial input, and financial modeling to estimate household solar output, installation payback, lifetime savings, and avoided emissions.',
    tech: ['Solar Modeling', 'Geospatial Analysis', 'Django', 'Python', 'NREL', 'HSDS', 'OpenStreetMap'],
    url: 'https://github.com/psdecabooter/LUMINOVA-DotData2025',
  },
  {
    id: 'splitsmart',
    title: 'SplitSmart',
    summary: 'Group expenses without the spreadsheet.',
    description: 'An AI-enhanced expense tracker with receipt OCR, flexible bill splitting, and real-time synchronization across devices.',
    tech: ['Group Expenses', 'Receipt OCR', 'Flutter', 'FastAPI', 'Firebase'],
    url: 'https://github.com/IBS27/splitsmart',
  },
  {
    id: 'polisight',
    title: 'PoliSight',
    summary: 'Policy arguments, omissions, and impact—made legible.',
    description: 'A political-literacy tool that decomposes policy arguments, detects omissions in reporting, and estimates the personal financial impact of proposed policy.',
    tech: ['Policy Analysis', 'Financial Impact', 'TypeScript', 'Next.js', 'AI/NLP'],
    url: 'https://polisight.vercel.app',
  },
]

function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null)

  const toggleProject = (projectId: string) => {
    setOpenProject((current) => current === projectId ? null : projectId)
  }

  return (
    <section className="editorial-page projects-page" aria-labelledby="projects-title">
      <header className="editorial-page__header">
        <h1 id="projects-title">Projects</h1>
      </header>

      <div className="project-list">
        {projects.map((project) => {
          const isOpen = openProject === project.id
          const detailId = `project-${project.id}-detail`

          return (
            <article className={`project-row${isOpen ? ' project-row--open' : ''}`} key={project.id}>
              <h2>
                <button
                  className="project-row__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={detailId}
                  onClick={() => toggleProject(project.id)}
                >
                  <span className="project-row__primary">
                    <span className="project-row__title">{project.title}</span>
                    <span className="project-row__summary">{project.summary}</span>
                  </span>
                  <span className="project-row__meta">
                    <span>{project.tech.slice(0, 2).join(' · ')}</span>
                    <span className="project-row__caret" aria-hidden="true">›</span>
                  </span>
                </button>
              </h2>

              <div className="project-row__detail" id={detailId} hidden={!isOpen}>
                <p>{project.description}</p>
                <p className="project-row__stack">{project.tech.join(' · ')}</p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  View project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <a className="text-link project-github-link" href="https://github.com/IBS27" target="_blank" rel="noreferrer">
        More <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default Projects
