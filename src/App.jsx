import React, { useState } from 'react';
import config from './siteConfig';
import './styles/index.css';

export default function App() {
  const [currentMood, setCurrentMood] = useState(config.mood);

  return (
    <div className="apple-dashboard">
      {/* 极简网格渐变背景 (Mesh Gradient) */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="dashboard-container">
        
        {/* ================= 左侧：个人中控台 (Sidebar) ================= */}
        <aside className="dashboard-sidebar glass-panel">
          <div className="profile-section">
            <div className="avatar-wrapper">
              <img src={config.profile.avatar} alt="avatar" className="avatar-img" />
              {config.profile.isOnline && <div className="status-dot"></div>}
            </div>
            <h1 className="profile-name">{config.profile.name}</h1>
            <span className="profile-id">{config.profile.id}</span>
            <p className="profile-bio">{config.profile.signature}</p>
          </div>

          <div className="sidebar-widgets">
            {/* 心情组件 */}
            <div className="widget" onMouseEnter={() => {
              if (config.mood.moods) {
                setCurrentMood(config.mood.moods[Math.floor(Math.random() * config.mood.moods.length)]);
              }
            }} onMouseLeave={() => setCurrentMood(config.mood)}>
              <div className="widget-icon-box">{currentMood.emoji}</div>
              <div className="widget-info">
                <span className="widget-title">状态 · {currentMood.weather}</span>
                <span className="widget-desc">{currentMood.text}</span>
              </div>
            </div>

            {/* 音乐组件 */}
            <div className="widget">
              <div className="widget-icon-box">{config.nowPlaying.emoji}</div>
              <div className="widget-info">
                <span className="widget-title">{config.nowPlaying.label}</span>
                <div className="marquee-box">
                  {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                  <marquee scrollamount="3">{config.nowPlaying.text}</marquee>
                </div>
              </div>
            </div>

            {/* 位置组件 */}
            <div className="widget">
              <div className="widget-icon-box">{config.location.emoji}</div>
              <div className="widget-info">
                <span className="widget-title">{config.location.label}</span>
                <span className="widget-desc">{config.location.cities}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* ================= 右侧：内容信息流 (Main Content) ================= */}
        <main className="dashboard-content">
          
          {/* 关于我 */}
          <section className="content-section glass-panel">
            <h2 className="section-heading">
              <span className="heading-icon">📝</span> {config.about.title}
            </h2>
            <div className="section-body">
              <ul className="feature-list">
                {config.about.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <blockquote className="quote-block">{config.about.quote}</blockquote>
              
              <div className="tags-row">
                <span className="apple-tag highlight">{config.status.number}</span>
                {config.tags.map((tag, i) => (
                  <span key={i} className="apple-tag">{tag.text}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 喜欢的事物 */}
          <section className="content-section glass-panel">
            <h2 className="section-heading">
              <span className="heading-icon">🌟</span> {config.favorites.title}
            </h2>
            <div className="list-grid">
              {config.favorites.sections.map((fav, i) => (
                <div className="list-item" key={i}>
                  <div className="item-icon-box">{fav.emoji}</div>
                  <div className="item-content">
                    <h3>{fav.label}</h3>
                    <p>{fav.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 项目作品 */}
          <section className="content-section glass-panel">
            <h2 className="section-heading">
              <span className="heading-icon">🎀</span> {config.projects.title}
            </h2>
            <div className="card-grid">
              {config.projects.items.map((proj, i) => (
                <a href={proj.link} target="_blank" rel="noreferrer" className="project-card" key={i}>
                  <div className="proj-icon">{proj.emoji}</div>
                  <div className="proj-details">
                    <h4>{proj.name}</h4>
                    <p>{proj.description}</p>
                  </div>
                  <div className="proj-arrow">↗</div>
                </a>
              ))}
            </div>
          </section>

          {/* 联系方式 */}
          <section className="content-section glass-panel">
            <h2 className="section-heading">
              <span className="heading-icon">💌</span> {config.contact.title}
            </h2>
            <div className="section-body contact-body">
              <p className="contact-text">{config.contact.quote}</p>
              <div className="action-buttons">
                {config.contact.items.map((item, i) => (
                  <a href={item.link} target="_blank" rel="noreferrer" className="action-btn" key={i}>
                    <span className="btn-icon">{item.emoji}</span>
                    <span className="btn-text">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* 页脚 */}
          <footer className="dashboard-footer">
            <p className="footer-slogan">{config.slogan}</p>
            <p className="footer-copyright">{config.footer}</p>
          </footer>

        </main>
      </div>
    </div>
  );
}
