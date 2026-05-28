const TAG_COLORS = {
  cyan: 'tag--cyan',
  pink: 'tag--pink',
  blue: 'tag--cyan',
  purple: 'tag--violet',
};

export default function AboutSection({ about, tags, techStack }) {
  return (
    <div className="bento-card bento-card--wider about-card">
      <div className="bento-card__title">
        {about.title} <span className="bento-card__title-accent">· {about.titleEn}</span>
      </div>

      <ul className="about-list">
        {about.items.map((item) => (
          <li key={item} className="about-item">{item}</li>
        ))}
      </ul>

      <p className="about-quote">{about.quote}</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <span key={tag.text} className={`tag ${TAG_COLORS[tag.color] || ''}`}>
            {tag.text}
          </span>
        ))}
        {techStack.items.map((item) => (
          <span key={item} className="tag tag--gold">{item}</span>
        ))}
      </div>
    </div>
  );
}
