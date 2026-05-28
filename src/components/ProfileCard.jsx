export default function ProfileCard({ profile, languages, devices, onShuffleMood, onResetMood }) {
  const activeLangs = languages.filter(l => l.check).map(l => `${l.flag} ${l.name}`);

  return (
    <div className="bento-card bento-card--tall profile-card">
      <div className="profile-header">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-avatar"
          loading="eager"
        />
        <div className="profile-meta">
          <div className="profile-name">{profile.name}</div>
          <div className="profile-id">{profile.id}</div>
          <div className="profile-status">
            <span className={`profile-status-dot${profile.isOnline ? '' : ' profile-status-dot--offline'}`} />
            <span>{profile.isOnline ? '在线' : '离线'}</span>
          </div>
        </div>
      </div>

      <p className="profile-signature">{profile.signature}</p>

      <div className="profile-footer">
        {activeLangs.map(l => (
          <span key={l} className="profile-chip">{l}</span>
        ))}
        {devices.map(d => (
          <span key={d} className="profile-chip">{d}</span>
        ))}
        <button className="profile-chip" onClick={onShuffleMood} title="随机心情">
          🎲 换心情
        </button>
        <button className="profile-chip" onClick={onResetMood} title="重置心情">
          ↺ 重置
        </button>
      </div>
    </div>
  );
}
