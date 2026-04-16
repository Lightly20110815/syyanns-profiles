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

// ==================== 主应用 ====================
export default function App() {
  const theme = useMemo(() => themes[Math.floor(Math.random() * themes.length)], [])

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    document.body.style.backgroundColor = theme.vars['--bg-primary']
  }, [theme])

  return (
    <>
      <Particles />
      <div className="homepage-container">
        <div className="tile-grid">
          {/* 第一行: Profile占3×2, 右侧上下各放小磁贴填满 */}
          <TileProfile />    {/* A: 3×2 头像&名字 */}
          <TileStatus />     {/* B: 1×1 状态 */}
          <TileMood />       {/* C: 2×1 情绪气象 */}
          <TileLanguages />  {/* H: 1×1 语言 — 填充第2行 */}
          <TileLocation />   {/* G: 2×1 坐标 — 填充第2行 */}

          {/* 第二行: About 4×2 + Tags 2×2 = 完美 */}
          <TileAbout />      {/* D: 4×2 关于我 */}
          <TileTags />       {/* E: 2×2 标签墙 */}

          {/* 第三行: Favorites 3×2 + Devices 1×2 + Contact 2×2 = 6 */}
          <TileFavorites />  {/* F: 3×2 喜欢的东西 */}
          <TileDevices />    {/* K: 1×2 设备 */}
          <TileContact />    {/* J: 2×2 联系方式 */}

          {/* 第四行: Projects 3×2 + NowPlaying 2×1 + Wish 1×1 + (空1×1自动留给下一行) */}
          <TileProjects />   {/* I: 3×2 项目 */}
          <TileNowPlaying /> {/* N: 2×1 此刻在听 */}
          <TileWish />       {/* O: 1×1 小小心愿 */}
          <TileTechStack />  {/* P: 3×1 技术栈 — 填充Projects第2行 */}

          {/* 第五行 */}
          <TileSlogan />     {/* L: 6×1 底部标语 */}
          <TileFooter />     {/* M: 脚注 */}
        </div>
      </div>
    </>
  )
}
