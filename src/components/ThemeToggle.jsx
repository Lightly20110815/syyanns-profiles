import React from 'react';

function ThemeToggle({ theme, onToggle }) {
  const isNight = theme === 'night';
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title={isNight ? '切换白天模式' : '切换夜晚模式'}
      aria-label={isNight ? '切换白天模式' : '切换夜晚模式'}
    >
      <span
        className="theme-toggle-emoji"
        style={{ transform: `rotate(${isNight ? 360 : 0}deg)` }}
      >
        {isNight ? '🌙' : '☀️'}
      </span>
    </button>
  );
}

export default ThemeToggle;