import { useEffect, useRef } from 'react';

export default function CustomContextMenu({
  x,
  y,
  isClosing,
  isWeightlessMode,
  themeMode,
  onToggleWeightless,
  onToggleTheme,
  onDisableWeightless,
  onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    let left = x;
    let top = y;

    if (left + rect.width > winW) left = winW - rect.width - 8;
    if (top + rect.height > winH) top = winH - rect.height - 8;
    if (left < 8) left = 8;
    if (top < 8) top = 8;

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }, [x, y]);

  return (
    <div
      ref={ref}
      className={`context-menu${isClosing ? ' context-menu--closing' : ''}`}
      role="menu"
    >
      <button className="context-menu-item" role="menuitem" onClick={onToggleTheme}>
        <span>{themeMode === 'dark' ? '☀️' : '🌙'}</span>
        <span>换成{themeMode === 'dark' ? '日光' : '夜间'}版</span>
      </button>

      <div className="context-menu-sep" />

      {isWeightlessMode ? (
        <button className="context-menu-item" role="menuitem" onClick={onDisableWeightless}>
          <span>🪐</span>
          <span>回到地面</span>
        </button>
      ) : (
        <button className="context-menu-item" role="menuitem" onClick={onToggleWeightless}>
          <span>🌌</span>
          <span>飘起来</span>
        </button>
      )}

      <div className="context-menu-sep" />

      <button className="context-menu-item" role="menuitem" onClick={onClose}>
        <span>✕</span>
        <span>关掉</span>
      </button>
    </div>
  );
}
