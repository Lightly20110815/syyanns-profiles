import { useState, useCallback, useEffect, useMemo } from 'react'
import config from './siteConfig'
import Particles from './components/Particles'

// ==================== 主题系统 ====================
const themes = [
  {
    name: 'default',  // 深海赛博
    vars: {
      '--bg-primary': '#0a0e1a',
      '--bg-secondary': '#0f1428',
      '--fog-blue': '#7eb8d4',
      '--frost-white': '#e8edf2',
      '--soft-pink': '#d4a0b9',
      '--electric-cyan': '#00f0ff',
      '--tile-bg': 'rgba(255, 255, 255, 0.08)',
      '--tile-border': 'rgba(255, 255, 255, 0.12)',
    },
  },
  {
    name: 'sakura',  // 樱花暮色
    vars: {
      '--bg-primary': '#1a0a14',
      '--bg-secondary': '#241018',
      '--fog-blue': '#c4a0b8',
      '--frost-white': '#f2e8ee',
      '--soft-pink': '#ff8fbf',
      '--electric-cyan': '#ff6fa0',
      '--tile-bg': 'rgba(255, 200, 220, 0.07)',
      '--tile-border': 'rgba(255, 150, 180, 0.15)',
    },
  },
  {
    name: 'forest',  // 幽林晨雾
    vars: {
      '--bg-primary': '#0a1a10',
      '--bg-secondary': '#0f2818',
      '--fog-blue': '#88c4a0',
      '--frost-white': '#e8f2ec',
      '--soft-pink': '#a0d4b0',
      '--electric-cyan': '#40e890',
      '--tile-bg': 'rgba(100, 255, 180, 0.06)',
      '--tile-border': 'rgba(80, 220, 150, 0.14)',
    },
  },
  {
    name: 'dusk',  // 暮光紫霞
    vars: {
      '--bg-primary': '#12081e',
      '--bg-secondary': '#1a0f28',
      '--fog-blue': '#b0a0d4',
      '--frost-white': '#ede8f2',
      '--soft-pink': '#d0a0e0',
      '--electric-cyan': '#b480ff',
      '--tile-bg': 'rgba(180, 140, 255, 0.07)',
      '--tile-border': 'rgba(160, 120, 240, 0.15)',
    },
  },
  {
    name: 'amber',  // 琥珀暖光
    vars: {
      '--bg-primary': '#1a1408',
      '--bg-secondary': '#28200f',
      '--fog-blue': '#d4c088',
      '--frost-white': '#f2ede4',
      '--soft-pink': '#e0b878',
      '--electric-cyan': '#ffb040',
      '--tile-bg': 'rgba(255, 200, 100, 0.06)',
      '--tile-border': 'rgba(255, 180, 80, 0.14)',
    },
  },
  {
    name: 'ocean',  // 深海珊瑚
    vars: {
      '--bg-primary': '#051520',
      '--bg-secondary': '#0a2030',
      '--fog-blue': '#5ca8c8',
      '--frost-white': '#d8eaf4',
      '--soft-pink': '#f08080',
      '--electric-cyan': '#20d0d0',
      '--tile-bg': 'rgba(32, 208, 208, 0.06)',
      '--tile-border': 'rgba(32, 208, 208, 0.12)',
    },
  },
  {
    name: 'rose',  // 玫瑰晨露
    vars: {
      '--bg-primary': '#1c0f14',
      '--bg-secondary': '#2a161e',
      '--fog-blue': '#c8a0b0',
      '--frost-white': '#f5e8ee',
      '--soft-pink': '#f0a0c0',
      '--electric-cyan': '#ff7096',
      '--tile-bg': 'rgba(255, 160, 192, 0.06)',
      '--tile-border': 'rgba(255, 112, 150, 0.14)',
    },
  },
  {
    name: 'mint',  // 薄荷清晨
    vars: {
      '--bg-primary': '#f0f6f4',
      '--bg-secondary': '#e4efea',
      '--fog-blue': '#5a8a7a',
      '--frost-white': '#2a3a34',
      '--soft-pink': '#88b8a4',
      '--electric-cyan': '#30a080',
      '--tile-bg': 'rgba(48, 160, 128, 0.08)',
      '--tile-border': 'rgba(48, 160, 128, 0.15)',
    },
  },
  {
    name: 'latte',  // 拿铁午后
    vars: {
      '--bg-primary': '#f5f0e8',
      '--bg-secondary': '#eae4d8',
      '--fog-blue': '#8a7a60',
      '--frost-white': '#3a3028',
      '--soft-pink': '#c09878',
      '--electric-cyan': '#b07040',
      '--tile-bg': 'rgba(176, 112, 64, 0.08)',
      '--tile-border': 'rgba(176, 112, 64, 0.15)',
    },
  },
  {
    name: 'lavender',  // 薰衣草梦境
    vars: {
      '--bg-primary': '#f2eef8',
      '--bg-secondary': '#e8e0f2',
      '--fog-blue': '#7868a0',
      '--frost-white': '#2e2840',
      '--soft-pink': '#b090d0',
      '--electric-cyan': '#9060c8',
      '--tile-bg': 'rgba(144, 96, 200, 0.07)',
      '--tile-border': 'rgba(144, 96, 200, 0.14)',
    },
  },
  {
    name: 'midnight',  // 午夜霓虹
    vars: {
      '--bg-primary': '#0a0010',
      '--bg-secondary': '#10081c',
      '--fog-blue': '#a080e0',
      '--frost-white': '#e0d8f0',
      '--soft-pink': '#ff60a0',
      '--electric-cyan': '#a040ff',
      '--tile-bg': 'rgba(160, 64, 255, 0.07)',
      '--tile-border': 'rgba(255, 96, 160, 0.14)',
    },
  },
  {
    name: 'sunset',  // 日落海岸
    vars: {
      '--bg-primary': '#1a0c08',
      '--bg-secondary': '#281410',
      '--fog-blue': '#d0a080',
      '--frost-white': '#f5e8e0',
      '--soft-pink': '#f08050',
      '--electric-cyan': '#ff6830',
      '--tile-bg': 'rgba(255, 104, 48, 0.06)',
      '--tile-border': 'rgba(240, 128, 80, 0.14)',
    },
  },
  {
    name: 'snow',  // 初雪素白
    vars: {
      '--bg-primary': '#f8f9fc',
      '--bg-secondary': '#eef0f5',
      '--fog-blue': '#6080a0',
      '--frost-white': '#1a2030',
      '--soft-pink': '#90a8c0',
      '--electric-cyan': '#3070b0',
      '--tile-bg': 'rgba(48, 112, 176, 0.06)',
      '--tile-border': 'rgba(48, 112, 176, 0.12)',
    },
  },
]

// ==================== 磁贴 A: 头像 & 名字 ====================
function TileProfile() {
  const { name, id, signature, avatar, isOnline } = config.profile
  return (
    <div className="tile tile-3x2 tile-profile">
      <div className="avatar-wrapper">
        <img src={avatar} alt={name} className="avatar" />
        <span className={`status-dot ${isOnline ? 'online' : 'offline'}`} />
      </div>
      <div className="profile-name">{name}</div>
      <div className="profile-id">{id}</div>
      <div className="profile-signature">{signature}</div>
    </div>
  )
}

// ==================== 磁贴 B: 状态 ====================
function TileStatus() {
  const { number, label } = config.status
  return (
    <div className="tile tile-1x1 tile-status">
      <div className="status-number">{number}</div>
      <div className="status-label">{label}</div>
    </div>
  )
}

// ==================== 磁贴 C: 情绪气象 ====================
function TileMood() {
  const { mood } = config
  const [current, setCurrent] = useState({
    emoji: mood.emoji,
    weather: mood.weather,
    text: mood.text,
  })

  const handleClick = useCallback(() => {
    const moods = mood.moods
    const randomIndex = Math.floor(Math.random() * moods.length)
    setCurrent(moods[randomIndex])
  }, [mood.moods])

  return (
    <div className="tile tile-2x1 tile-mood" onClick={handleClick} title="点击切换情绪">
      <div className="mood-header">
        <span className="mood-emoji">{current.emoji}</span>
        <span className="mood-weather">今日情绪：{current.weather}</span>
      </div>
      <div className="mood-text">"{current.text}"</div>
    </div>
  )
}

// ==================== 磁贴 D: 关于我 ====================
function TileAbout() {
  const { title, titleEn, items, quote } = config.about
  return (
    <div className="tile tile-4x2 tile-about">
      <div className="tile-title">
        <h2>{title}</h2>
        <span>/ {titleEn}</span>
      </div>
      <hr className="tile-divider" />
      <ul className="about-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="about-quote">"{quote}"</div>
    </div>
  )
}

// ==================== 磁贴 E: 标签墙 ====================
function TileTags() {
  return (
    <div className="tile tile-2x2 tile-tags">
      <div className="tile-title">
        <h2>标签墙</h2>
      </div>
      <div className="tags-container">
        {config.tags.map((tag, i) => (
          <span key={i} className={`tag tag-${tag.color}`}>
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  )
}

// ==================== 磁贴 F: 喜欢的东西 ====================
function TileFavorites() {
  const { title, sections } = config.favorites
  return (
    <div className="tile tile-3x2 tile-favorites">
      <div className="tile-title">
        <h2>{title}</h2>
        <span>♫</span>
      </div>
      <hr className="tile-divider" />
      {sections.map((section, i) => (
        <div key={i} className="favorite-section">
          <div className="favorite-header">
            <span className="favorite-emoji">{section.emoji}</span>
            <span className="favorite-label">{section.label}</span>
          </div>
          <div className="favorite-desc">{section.description}</div>
          <div className="favorite-detail">{section.detail}</div>
        </div>
      ))}
    </div>
  )
}

// ==================== 磁贴 G: 坐标 ====================
function TileLocation() {
  const { emoji, label, cities, quote } = config.location
  return (
    <div className="tile tile-2x1 tile-location">
      <div className="location-header">
        <span>{emoji}</span>
        <span>{label}</span>
      </div>
      <div className="location-cities">{cities}</div>
      <div className="location-quote">"{quote}"</div>
    </div>
  )
}

// ==================== 磁贴 H: 语言 ====================
function TileLanguages() {
  return (
    <div className="tile tile-1x1 tile-languages">
      <span className="lang-icon">🌐</span>
      {config.languages.map((lang, i) => (
        <div key={i} className="lang-item">
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
          {lang.check && <span className="lang-check">✓</span>}
        </div>
      ))}
    </div>
  )
}

// ==================== 磁贴 N: 此刻在听 ====================
function TileNowPlaying() {
  const { emoji, label, text } = config.nowPlaying
  return (
    <div className="tile tile-2x1 tile-nowplaying">
      <div className="nowplaying-header">
        <span className="nowplaying-emoji">{emoji}</span>
        <span className="nowplaying-label">{label}</span>
      </div>
      <div className="nowplaying-text">{text}</div>
    </div>
  )
}

// ==================== 磁贴 O: 小小心愿 ====================
function TileWish() {
  const { emoji, label, text } = config.wish
  return (
    <div className="tile tile-1x1 tile-wish">
      <span className="wish-emoji">{emoji}</span>
      <div className="wish-label">{label}</div>
      <div className="wish-text">{text}</div>
    </div>
  )
}

// ==================== 磁贴 P: 技术栈 ====================
function TileTechStack() {
  const { emoji, label, items } = config.techStack
  return (
    <div className="tile tile-3x1 tile-techstack">
      <div className="techstack-header">
        <span>{emoji}</span>
        <span className="techstack-label">{label}</span>
      </div>
      <div className="techstack-items">
        {items.map((item, i) => (
          <span key={i} className="techstack-tag">{item}</span>
        ))}
      </div>
    </div>
  )
}

// ==================== 磁贴 I: 项目 ====================
function TileProjects() {
  const { title, titleEn, items } = config.projects
  return (
    <div className="tile tile-3x2 tile-projects">
      <div className="tile-title">
        <h2>{title}</h2>
        <span>/ {titleEn}</span>
      </div>
      <hr className="tile-divider" />
      {items.map((project, i) => (
        <div key={i} className="project-item">
          <div className="project-header">
            <span className="project-emoji">{project.emoji}</span>
            <span className="project-name">{project.name}</span>
          </div>
          <div className="project-desc">{project.description}</div>
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              {project.linkText}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

// ==================== 磁贴 J: 联系方式 ====================
function TileContact() {
  const { title, items, quote } = config.contact
  return (
    <div className="tile tile-2x2 tile-contact">
      <div className="tile-title">
        <h2>{title}</h2>
      </div>
      <hr className="tile-divider" />
      {items.map((item, i) => (
        <div key={i} className="contact-item">
          <span className="contact-emoji">{item.emoji}</span>
          <span className="contact-label">{item.label}</span>
          {item.link ? (
            <a href={item.link} className="contact-value" target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          ) : (
            <span className="contact-value">{item.value}</span>
          )}
        </div>
      ))}
      <div className="contact-quote">"{quote}"</div>
    </div>
  )
}

// ==================== 磁贴 K: 设备 ====================
function TileDevices() {
  return (
    <div className="tile tile-1x2 tile-devices">
      {config.devices.map((device, i) => (
        <span key={i} className="device-icon">{device}</span>
      ))}
    </div>
  )
}

// ==================== 磁贴 L: 底部标语 ====================
function TileSlogan() {
  return (
    <div className="tile tile-6x1 tile-slogan">
      <div className="slogan-text">"{config.slogan}"</div>
    </div>
  )
}

// ==================== 磁贴 M: 脚注 ====================
function TileFooter() {
  return (
    <div className="tile tile-footer">
      <div className="footer-text">{config.footer}</div>
    </div>
  )
}

// 主题名称映射
const themeLabels = {
  default: '深海赛博', sakura: '樱花暮色', forest: '幽林晨雾', dusk: '暮光紫霞',
  amber: '琥珀暖光', ocean: '深海珊瑚', rose: '玫瑰晨露', mint: '薄荷清晨',
  latte: '拿铁午后', lavender: '薰衣草梦境', midnight: '午夜霓虹', sunset: '日落海岸',
  snow: '初雪素白',
}

// ==================== UI 风格系统 ====================
const uiStyles = [
  { name: '玻璃磁贴', className: 'ui-glass', layout: 'grid' },
  { name: '单列长页', className: 'ui-single', layout: 'single' },
  { name: '赛博朋克', className: 'ui-cyberpunk', layout: 'grid' },
  { name: '左右分栏', className: 'ui-split', layout: 'split' },
  { name: '卡片瀑布', className: 'ui-masonry', layout: 'masonry' },
]

// ==================== 布局: 6列磁贴网格 ====================
function LayoutGrid() {
  return (
    <div className="tile-grid">
      <TileProfile />
      <TileStatus />
      <TileMood />
      <TileLanguages />
      <TileLocation />
      <TileAbout />
      <TileTags />
      <TileFavorites />
      <TileDevices />
      <TileContact />
      <TileProjects />
      <TileNowPlaying />
      <TileWish />
      <TileTechStack />
      <TileSlogan />
      <TileFooter />
    </div>
  )
}

// ==================== 布局: 单列长页 ====================
function LayoutSingle() {
  return (
    <div className="layout-single">
      <section className="single-hero">
        <TileProfile />
      </section>
      <section className="single-row">
        <TileStatus />
        <TileMood />
        <TileLanguages />
      </section>
      <section className="single-section">
        <TileAbout />
      </section>
      <section className="single-row">
        <TileLocation />
        <TileNowPlaying />
      </section>
      <section className="single-section">
        <TileTags />
      </section>
      <section className="single-section">
        <TileFavorites />
      </section>
      <section className="single-section">
        <TileProjects />
      </section>
      <section className="single-row">
        <TileTechStack />
        <TileWish />
      </section>
      <section className="single-section">
        <TileContact />
      </section>
      <section className="single-row">
        <TileDevices />
      </section>
      <section className="single-hero">
        <TileSlogan />
      </section>
      <TileFooter />
    </div>
  )
}

// ==================== 布局: 左右分栏 ====================
function LayoutSplit() {
  return (
    <div className="layout-split">
      <aside className="split-sidebar">
        <TileProfile />
        <TileStatus />
        <TileLanguages />
        <TileDevices />
        <TileContact />
      </aside>
      <main className="split-main">
        <div className="split-row">
          <TileMood />
          <TileLocation />
        </div>
        <TileAbout />
        <div className="split-row">
          <TileTags />
          <TileNowPlaying />
        </div>
        <TileFavorites />
        <TileProjects />
        <div className="split-row">
          <TileTechStack />
          <TileWish />
        </div>
        <TileSlogan />
        <TileFooter />
      </main>
    </div>
  )
}

// ==================== 布局: 瀑布流 ====================
function LayoutMasonry() {
  return (
    <div className="layout-masonry">
      <div className="masonry-col">
        <TileProfile />
        <TileMood />
        <TileFavorites />
        <TileNowPlaying />
        <TileDevices />
      </div>
      <div className="masonry-col">
        <TileAbout />
        <TileTags />
        <TileProjects />
        <TileWish />
      </div>
      <div className="masonry-col">
        <TileStatus />
        <TileLanguages />
        <TileLocation />
        <TileContact />
        <TileTechStack />
      </div>
      <TileSlogan />
      <TileFooter />
    </div>
  )
}

// ==================== 主应用 ====================
export default function App() {
  const [themeIndex, setThemeIndex] = useState(() => Math.floor(Math.random() * themes.length))
  const [uiIndex, setUiIndex] = useState(0)
  const theme = themes[themeIndex]
  const uiStyle = uiStyles[uiIndex]

  const nextTheme = useCallback(() => {
    setThemeIndex(i => (i + 1) % themes.length)
  }, [])

  const nextUi = useCallback(() => {
    setUiIndex(i => (i + 1) % uiStyles.length)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    document.body.style.backgroundColor = theme.vars['--bg-primary']
  }, [theme])

  const renderLayout = () => {
    switch (uiStyle.layout) {
      case 'single': return <LayoutSingle />
      case 'split': return <LayoutSplit />
      case 'masonry': return <LayoutMasonry />
      default: return <LayoutGrid />
    }
  }

  return (
    <>
      <Particles />
      <div className="switcher-group">
        <button className="theme-switcher" onClick={nextTheme} title="切换配色">
          🎨 {themeLabels[theme.name]}
        </button>
        <button className="theme-switcher" onClick={nextUi} title="切换UI风格">
          ✨ {uiStyle.name}
        </button>
      </div>
      <div className={`homepage-container ${uiStyle.className}`}>
        {renderLayout()}
      </div>
    </>
  )
}
