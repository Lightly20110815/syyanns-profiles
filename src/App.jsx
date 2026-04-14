import { useState, useCallback } from 'react'
import config from './siteConfig'
import Particles from './components/Particles'

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
  return (
    <>
      <Particles />
      <div className="homepage-container">
        <div className="tile-grid">
          {/* 第一行 */}
          <TileProfile />    {/* A: 3×2 头像&名字 */}
          <TileStatus />     {/* B: 1×1 状态 */}
          <TileMood />       {/* C: 2×1 情绪气象 */}

          {/* 第二行 */}
          <TileAbout />      {/* D: 4×2 关于我 */}
          <TileTags />       {/* E: 2×2 标签墙 */}

          {/* 第三行 */}
          <TileFavorites />  {/* F: 3×2 喜欢的东西 */}
          <TileLocation />   {/* G: 2×1 坐标 */}
          <TileLanguages />  {/* H: 1×1 语言 */}

          {/* 第四行 */}
          <TileProjects />   {/* I: 3×2 项目 */}
          <TileContact />    {/* J: 2×2 联系方式 */}
          <TileDevices />    {/* K: 1×2 设备 */}

          {/* 第五行 */}
          <TileSlogan />     {/* L: 6×1 底部标语 */}
          <TileFooter />     {/* M: 脚注 */}
        </div>
      </div>
    </>
  )
}
