import React, { useState } from 'react';

function ProfileCard({ profile }) {
  const [isSquishing, setIsSquishing] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleAvatarClick = (e) => {
    if (isSquishing) return;
    
    setIsSquishing(true);
    setTimeout(() => setIsSquishing(false), 300);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const newHearts = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: x,
      y: y,
      color: ['#f5a9b8', '#5bcefa', '#ffffff'][Math.floor(Math.random() * 3)],
      tx: (Math.random() - 0.5) * 150,
      ty: -80 - Math.random() * 100,
      rot: (Math.random() - 0.5) * 60,
    }));

    setHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 1000);
  };

  return (
    <div className="glass-card flex-col justify-center items-center gap-4" style={{ height: '100%', position: 'relative' }}>
      {hearts.map(h => (
        <div 
          key={h.id} 
          className="floating-heart"
          style={{ 
            left: h.x, top: h.y, 
            '--tx': `${h.tx}px`, '--ty': `${h.ty}px`, '--rot': `${h.rot}deg`,
            color: h.color,
            textShadow: '0 0 5px rgba(255,255,255,0.8)'
          }}
        >
          ❤
        </div>
      ))}
      <div 
        style={{ position: 'relative', cursor: 'pointer', zIndex: 10 }} 
        onClick={handleAvatarClick}
        className={isSquishing ? 'avatar-squish' : ''}
      >
        <img src={profile.avatar} alt="Avatar" className="avatar-img" style={{ pointerEvents: 'none' }} />
        {profile.isOnline && <div className="online-dot"></div>}
      </div>
      <div className="text-center">
        <h1 className="text-2xl">{profile.name}</h1>
        <div className="text-muted text-sm">{profile.id}</div>
      </div>
      <div className="text-center text-sm text-muted" style={{ whiteSpace: 'pre-wrap' }}>
        {profile.signature}
      </div>
    </div>
  );
}

export default ProfileCard;