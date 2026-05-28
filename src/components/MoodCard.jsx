export default function MoodCard({ mood, onShuffle }) {
  return (
    <div className="bento-card mood-card" onClick={onShuffle} title="点击切换心情">
      <div className="bento-card__title">
        情绪气象 <span className="bento-card__title-accent">✦</span>
      </div>
      <div>
        <div className="mood-emoji">{mood.emoji}</div>
        <div className="mood-weather">{mood.weather}</div>
        <div className="mood-text">{mood.text}</div>
      </div>
      <div className="mood-hint">点一下换心情</div>
    </div>
  );
}
