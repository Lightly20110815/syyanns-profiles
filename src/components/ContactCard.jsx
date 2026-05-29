import React from 'react';

function ContactCard({ contact }) {
  return (
    <div className="glass-card flex-col gap-3" style={{ height: '100%' }}>
      <h2 className="text-xl" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{contact.title}</h2>
      <div className="flex-row flex-wrap gap-3 mt-2">
        {contact.items.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row items-center gap-2"
            style={{
              background: 'rgba(255,255,255,0.5)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              flex: '1 1 calc(50% - 0.75rem)',
              minWidth: '120px'
            }}
          >
            <span>{item.emoji}</span>
            <span className="font-bold text-sm">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;