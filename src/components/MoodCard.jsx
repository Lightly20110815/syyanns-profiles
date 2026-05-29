import React, { useState } from 'react';

function MoodCard({ mood, status }) {
  const [currentMood, setCurrentMood] = useState(mood);

  const handleMouseEnter = () => {
    if (mood.moods && mood.moods.length > 0) {
      const randomIndex = Math.floor(Math.random() * mood.moods.length);
      setCurrentMood(mood.moods[randomIndex]);
    }
  };

  const handleMouseLeave = () => {
    setCurrentMood(mood);
  };

  return (
    <div 
      className="glass-card flex-row items-center gap-4" 
      style={{ height: '100%', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-col justify-center items-center" style={{ minWidth: '80px', borderRight: '1px solid var(--card-border)', paddingRight: '1rem' }}>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1, color: 'var(--accent-pink)' }}>{status.number}</div>
        <div className="text-sm font-bold text-muted">{status.label}</div>
      </div>
      <div className="flex-col justify-center gap-2 flex-1">
        <div className="text-2xl">{currentMood.emoji} {currentMood.weather}</div>
        <div className="text-sm text-muted">{currentMood.text}</div>
      </div>
    </div>
  );
}

export default MoodCard;