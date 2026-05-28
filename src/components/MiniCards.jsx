export function StatusMini({ status }) {
  return (
    <div className="bento-card mini-card mini-card--pink">
      <div className="bento-card__title">状态</div>
      <div>
        <div className="mini-card__value mini-card__value--accent">{status.number}</div>
        <div className="mini-card__sub">{status.label}</div>
      </div>
    </div>
  );
}

export function NowPlayingMini({ nowPlaying }) {
  return (
    <div className="bento-card mini-card mini-card--cyan">
      <div className="bento-card__title">{nowPlaying.label}</div>
      <div>
        <div className="mini-card__icon">{nowPlaying.emoji}</div>
        <div className="mini-card__sub">{nowPlaying.text}</div>
      </div>
    </div>
  );
}

export function WishMini({ wish }) {
  return (
    <div className="bento-card mini-card mini-card--gold">
      <div className="bento-card__title">{wish.label}</div>
      <div>
        <div className="mini-card__icon">{wish.emoji}</div>
        <div className="mini-card__sub">{wish.text}</div>
      </div>
    </div>
  );
}

export function TechStackMini({ techStack }) {
  return (
    <div className="bento-card mini-card mini-card--violet">
      <div className="bento-card__title">{techStack.label}</div>
      <div>
        <div className="mini-card__icon">{techStack.emoji}</div>
        <div className="mini-card__sub">{techStack.items.join(' · ')}</div>
      </div>
    </div>
  );
}

export function LocationMini({ location }) {
  return (
    <div className="bento-card mini-card mini-card--cyan">
      <div className="bento-card__title">{location.label}</div>
      <div>
        <div className="mini-card__value mini-card__value--small">{location.cities}</div>
        <div className="mini-card__sub">{location.quote}</div>
      </div>
    </div>
  );
}
