import React, { useState, useEffect } from 'react';
import siteConfig from './siteConfig';
import ThemeToggle from './components/ThemeToggle';
import ProfileCard from './components/ProfileCard';
import MoodCard from './components/MoodCard';
import AboutCard from './components/AboutCard';
import ProjectsCard from './components/ProjectsCard';
import TagsCard from './components/TagsCard';
import ContactCard from './components/ContactCard';
import FavoritesCard from './components/FavoritesCard';
import MagicEffects from './components/MagicEffects';

function detectTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'day' || stored === 'night') return stored;
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'day' : 'night';
}

function App() {
  const [theme, setTheme] = useState(detectTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'day' ? 'night' : 'day';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <div className="app-container flex-col gap-4">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <MagicEffects />
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="col-span-2 row-span-2 md-col-span-3 sm-col-span-2">
          <ProfileCard profile={siteConfig.profile} />
        </div>
        <div className="col-span-2 row-span-1 md-col-span-2 sm-col-span-2">
          <MoodCard mood={siteConfig.mood} status={siteConfig.status} />
        </div>
        <div className="col-span-1 row-span-1 md-col-span-1 sm-col-span-1">
          <TagsCard tags={siteConfig.tags} />
        </div>
        <div className="glass-card flex-col justify-center items-center gap-2 col-span-1 row-span-1 md-col-span-1 sm-col-span-1">
           <div className="text-4xl">{siteConfig.location.emoji}</div>
           <div className="font-bold">{siteConfig.location.label}</div>
           <div className="text-sm text-muted text-center">{siteConfig.location.cities}</div>
        </div>

        {/* Row 2 */}
        <div className="col-span-2 row-span-2 md-col-span-3 sm-col-span-2">
          <AboutCard about={siteConfig.about} />
        </div>
        <div className="col-span-2 row-span-2 md-col-span-3 sm-col-span-2">
          <ProjectsCard projects={siteConfig.projects} />
        </div>

        {/* Row 3 */}
        <div className="col-span-2 row-span-1 md-col-span-2 sm-col-span-2">
          <FavoritesCard favorites={siteConfig.favorites} />
        </div>
        <div className="col-span-2 row-span-1 md-col-span-3 sm-col-span-2">
          <ContactCard contact={siteConfig.contact} />
        </div>
      </div>
      
      <footer className="text-center text-muted text-sm" style={{ padding: '2rem 0' }}>
        <p>{siteConfig.slogan}</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>{siteConfig.footer}</p>
      </footer>
    </div>
  );
}

export default App;