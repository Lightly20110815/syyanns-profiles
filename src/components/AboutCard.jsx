import React from 'react';

function AboutCard({ about }) {
  return (
    <div className="glass-card flex-col gap-3" style={{ height: '100%' }}>
      <div className="flex-row items-center justify-between border-b pb-2 mb-2" style={{ borderBottom: '1px solid var(--card-border)' }}>
        <h2 className="text-xl">{about.title}</h2>
        <span className="text-sm text-muted">{about.titleEn}</span>
      </div>
      <ul className="flex-col gap-2 text-sm" style={{ paddingLeft: '1.2rem', listStyleType: 'circle' }}>
        {about.items.map((item, index) => (
          <li key={index} className="text-muted">{item}</li>
        ))}
      </ul>
      <div className="mt-auto pt-4 text-sm text-muted" style={{ fontStyle: 'italic', opacity: 0.8, marginTop: 'auto' }}>
        "{about.quote}"
      </div>
    </div>
  );
}

export default AboutCard;