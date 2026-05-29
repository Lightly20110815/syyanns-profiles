import React from 'react';

function TagsCard({ tags }) {
  return (
    <div className="glass-card flex-row justify-center items-center flex-wrap" style={{ height: '100%', alignContent: 'center', gap: '2.5rem 1rem' }}>
      {tags.map((tag, index) => {
        // If it's pure short English or punctuation, keep it horizontal
        const isHorizontal = /^[a-zA-Z\s\?]+$/.test(tag.text) && tag.text.length < 6;
        
        const delay = index * 0.4;
        
        return (
          <span 
            key={index} 
            className={`tag-soundwave ${isHorizontal ? 'horizontal' : 'upright'} ${tag.color}`}
            style={{ 
              animationDelay: `-${delay}s`
            }}
          >
            {tag.text}
          </span>
        );
      })}
    </div>
  );
}

export default TagsCard;