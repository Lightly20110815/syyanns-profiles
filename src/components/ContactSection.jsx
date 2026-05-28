export default function ContactSection({ contact }) {
  return (
    <div className="bento-card bento-card--full">
      <div className="bento-card__title">
        {contact.title} <span className="bento-card__title-accent">· 来敲门</span>
      </div>
      <div className="contact-list">
        {contact.items.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">{item.emoji}</div>
            <div>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
      <p className="contact-quote">{contact.quote}</p>
    </div>
  );
}
