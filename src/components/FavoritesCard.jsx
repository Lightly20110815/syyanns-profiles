import React from 'react';

function FavoritesCard({ favorites }) {
  return (
    <div className="glass-card flex-col gap-3" style={{ height: '100%' }}>
      <h2 className="text-xl" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{favorites.title}</h2>
      <div className="flex-col gap-2 mt-2">
        {favorites.sections.map((sec, index) => (
          <div key={index} className="flex-row items-start gap-3">
            <div className="text-xl">{sec.emoji}</div>
            <div className="flex-col">
              <div className="font-bold text-sm">{sec.label}</div>
              <div className="text-sm text-muted">{sec.description}</div>
              {sec.detail && <div className="text-sm" style={{ opacity: 0.7 }}>{sec.detail}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesCard;