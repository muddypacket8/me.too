import React from 'react';

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <h3>{story.title}</h3>
      <p>{story.content}</p>
    </div>
  );
};

export default StoryCard;
