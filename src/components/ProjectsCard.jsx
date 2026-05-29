import React from 'react';

function ProjectsCard({ projects }) {
  return (
    <div className="glass-card flex-col gap-3" style={{ height: '100%' }}>
      <div className="flex-row items-center justify-between" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
        <h2 className="text-xl">{projects.title}</h2>
        <span className="text-sm text-muted">{projects.titleEn}</span>
      </div>
      <div className="flex-col gap-3" style={{ overflowY: 'auto', paddingRight: '0.5rem' }}>
        {projects.items.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-row items-center gap-3 p-2 hover-bg"
            style={{ 
              background: 'rgba(255,255,255,0.4)', 
              borderRadius: 'var(--radius-sm)', 
              padding: '0.75rem',
              transition: 'background 0.2s'
            }}
          >
            <div className="text-2xl">{item.emoji}</div>
            <div className="flex-col flex-1">
              <div className="font-bold">{item.name}</div>
              <div className="text-sm text-muted">{item.description}</div>
            </div>
            <div className="text-sm" style={{ color: 'var(--accent-pink)' }}>↗</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;