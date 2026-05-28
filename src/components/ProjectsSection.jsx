export default function ProjectsSection({ projects }) {
  return (
    <div className="bento-card bento-card--wide">
      <div className="bento-card__title">
        {projects.title} <span className="bento-card__title-accent">· {projects.titleEn}</span>
      </div>
      <div className="project-list">
        {projects.items.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-item"
            aria-label={`${project.name} · ${project.linkText}`}
          >
            <div className="project-icon">{project.emoji}</div>
            <div className="project-info">
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-link">{project.linkText}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
