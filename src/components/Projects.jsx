import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-id">{project.id}</div>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demo !== '#' && <a href={project.demo} target="_blank" rel="noreferrer">Demo ↗</a>}
                {project.repo !== '#' && <a href={project.repo} target="_blank" rel="noreferrer">Repo ↗</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
