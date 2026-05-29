import React, { useEffect, useState } from 'react';

function MagicEffects() {
  const [trails, setTrails] = useState([]);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    let trailId = 0;
    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 40) return; // Throttle 40ms to avoid too many elements
      lastTime = now;

      // Random Trans color
      const color = ['#f5a9b8', '#5bcefa', '#ffffff'][Math.floor(Math.random() * 3)];
      const char = ['✨', '🌸', '❄️'][Math.floor(Math.random() * 3)];
      
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        color,
        char,
      };
      
      setTrails(prev => [...prev.slice(-15), newTrail]);
      
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id));
      }, 1000);
    };

    let rippleId = 0;
    const handleMouseDown = (e) => {
      const color = ['#f5a9b8', '#5bcefa', '#ffffff'][Math.floor(Math.random() * 3)];
      const newRipple = {
        id: rippleId++,
        x: e.clientX,
        y: e.clientY,
        color,
      };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {trails.map(t => (
        <div 
          key={t.id} 
          className="mouse-trail-star" 
          style={{ left: t.x, top: t.y, color: t.color, textShadow: '0 0 5px rgba(255,255,255,0.8)' }}
        >
          {t.char}
        </div>
      ))}
      {ripples.map(r => (
        <div 
          key={r.id} 
          className="click-ripple" 
          style={{ left: r.x, top: r.y, borderColor: r.color }} 
        />
      ))}
    </>
  );
}

export default MagicEffects;