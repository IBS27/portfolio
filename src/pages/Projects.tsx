type ProjectItem = {
  id: number
  title: string
  description: string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A scalable online store built with React and Node.js.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task manager using Python and Django.',
  },
  {
    id: 3,
    title: 'Data Visualization Tool',
    description: 'Interactive charts for large datasets using D3.js.',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This minimalist site built with HTML/CSS.',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time messaging app with WebSockets.',
  },
]

function Projects() {
  return (
    <section>
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> ls projects/
      </h1>
      <ol className="terminal-copy project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="project-line">
              <span className="project-title">{project.title}</span>
            </div>
            <div className="project-details terminal-copy terminal-copy--dim">
              {project.description}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Projects
