import React from 'react';

const CharityCard = ({ charity, onSelectCharity }) => {
  return (
    <div className="charity-card" onClick={() => onSelectCharity(charity)}>
      <h3>{charity.name}</h3>
      <p>{charity.description}</p>
    </div>
  );
};

export default CharityCard;
