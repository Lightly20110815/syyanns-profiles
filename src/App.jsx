import { useCallback, useEffect, useRef, useState } from 'react';
import AboutSection from './components/AboutSection';
import AppBackground from './components/AppBackground';
import ContactSection from './components/ContactSection';
import CustomContextMenu from './components/CustomContextMenu';
import FavoritesSection from './components/FavoritesSection';
import MoodCard from './components/MoodCard';
import {
  LocationMini,
  NowPlayingMini,
  StatusMini,
  TechStackMini,
  WishMini,
} from './components/MiniCards';
import PrinterLoader from './components/PrinterLoader';
import ProfileCard from './components/ProfileCard';
import ProjectsSection from './components/ProjectsSection';
import config from './siteConfig';

const THEME_KEY = 'bento-aurora-theme';
const moodVariants = config.mood.moods || [];

export default function App() {
  const menuTimerRef = useRef(null);
  const loaderTimerRef = useRef(null);

  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isWeightlessMode, setIsWeightlessMode] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [printerLoader, setPrinterLoader] = useState({
    title: '正在铺好小窝',
    detail: '把光、云朵和软软的气泡摆好……',
  });

  const [currentMood, setCurrentMood] = useState(config.mood);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', themeMode);
    window.localStorage.setItem(THEME_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    loaderTimerRef.current = window.setTimeout(() => {
      setPrinterLoader(null);
    }, 1700);

    return () => {
      if (loaderTimerRef.current) window.clearTimeout(loaderTimerRef.current);
      if (menuTimerRef.current) window.clearTimeout(menuTimerRef.current);
    };
  }, []);

  const closeContextMenu = useCallback(() => {
    if (menuTimerRef.current) window.clearTimeout(menuTimerRef.current);

    setContextMenu((current) => {
      if (!current || current.isClosing) return current;
      return { ...current, isClosing: true };
    });

    menuTimerRef.current = window.setTimeout(() => {
      setContextMenu(null);
    }, 180);
  }, []);

  const triggerPrinterLoader = useCallback((title, detail, duration = 1450) => {
    if (loaderTimerRef.current) window.clearTimeout(loaderTimerRef.current);

    setPrinterLoader({ title, detail });
    loaderTimerRef.current = window.setTimeout(() => {
      setPrinterLoader(null);
    }, duration);
  }, []);

  useEffect(() => {
    if (!contextMenu) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeContextMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', closeContextMenu);
    window.addEventListener('scroll', closeContextMenu, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', closeContextMenu);
      window.removeEventListener('scroll', closeContextMenu, true);
    };
  }, [contextMenu, closeContextMenu]);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    if (menuTimerRef.current) window.clearTimeout(menuTimerRef.current);
    setContextMenu({ x: event.clientX, y: event.clientY, isClosing: false });
  }, []);

  const shuffleMood = useCallback(() => {
    if (!moodVariants.length) return;
    const next = moodVariants[Math.floor(Math.random() * moodVariants.length)];
    setCurrentMood(next);
  }, [moodVariants]);

  const resetMood = useCallback(() => {
    setCurrentMood(config.mood);
  }, []);

  const toggleThemeMode = useCallback(() => {
    const next = themeMode === 'dark' ? 'light' : 'dark';
    triggerPrinterLoader(
      next === 'dark' ? '正在换上夜间的被子' : '正在拉开晨光窗帘',
      next === 'dark'
        ? '把星星和软软的暗色铺好……'
        : '让阳光、奶油和气泡涌进来……',
    );
    setThemeMode(next);
    closeContextMenu();
  }, [themeMode, triggerPrinterLoader, closeContextMenu]);

  const toggleWeightlessMode = useCallback(() => {
    setIsWeightlessMode((v) => !v);
    closeContextMenu();
  }, [closeContextMenu]);

  const disableWeightlessMode = useCallback(() => {
    setIsWeightlessMode(false);
    closeContextMenu();
  }, [closeContextMenu]);

  const activeLangs = config.languages.filter((l) => l.check);

  return (
    <div
      className={`app-shell${isWeightlessMode ? ' weightless-mode' : ''}`}
      onContextMenu={handleContextMenu}
    >
      {printerLoader && (
        <PrinterLoader title={printerLoader.title} detail={printerLoader.detail} />
      )}

      <AppBackground />

      <div className="orbit-hint">
        <span className="orbit-hint-dot" />
        右键打开小菜单
      </div>

      {isWeightlessMode && (
        <div className="weightless-banner">
          <span>🫧</span> 失重中
        </div>
      )}

      <div className="bento-grid">
        <ProfileCard
          profile={config.profile}
          languages={activeLangs}
          devices={config.devices}
          onShuffleMood={shuffleMood}
          onResetMood={resetMood}
        />

        <MoodCard mood={currentMood} onShuffle={shuffleMood} />
        <StatusMini status={config.status} />
        <NowPlayingMini nowPlaying={config.nowPlaying} />
        <WishMini wish={config.wish} />
        <TechStackMini techStack={config.techStack} />
        <LocationMini location={config.location} />

        <AboutSection about={config.about} tags={config.tags} techStack={config.techStack} />
        <FavoritesSection favorites={config.favorites} />
        <ProjectsSection projects={config.projects} />
        <ContactSection contact={config.contact} />

        <footer className="bento-card bento-card--full site-footer">
          <p className="footer-slogan">{config.slogan}</p>
          <p className="footer-copy">{config.footer}</p>
        </footer>
      </div>

      {contextMenu && (
        <CustomContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          isClosing={contextMenu.isClosing}
          isWeightlessMode={isWeightlessMode}
          themeMode={themeMode}
          onToggleWeightless={toggleWeightlessMode}
          onToggleTheme={toggleThemeMode}
          onDisableWeightless={disableWeightlessMode}
          onClose={closeContextMenu}
        />
      )}
    </div>
  );
}
