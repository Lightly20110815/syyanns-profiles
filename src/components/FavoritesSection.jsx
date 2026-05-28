export default function FavoritesSection({ favorites }) {
  return (
    <div className="bento-card bento-card--wide">
      <div className="bento-card__title">
        {favorites.title} <span className="bento-card__title-accent">♡</span>
      </div>
      <div className="favorite-list">
        {favorites.sections.map((item) => (
          <div key={item.label} className="favorite-item">
            <div className="favorite-icon">{item.emoji}</div>
            <div className="favorite-info">
              <div className="favorite-label">{item.label}</div>
              <div className="favorite-desc">{item.description}</div>
              {item.detail ? <div className="favorite-detail">{item.detail}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
