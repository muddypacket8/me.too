import React, { useState } from 'react';
import CharityCard from './CharityCard';
import DonationForm from './DonationForm';
import StoryCard from './StoryCard';
import './home.css';

const charitiesData = [
  // Add sample data for charities
  {
    id: 1,
    name: 'Charity A',
    description: 'Description of Charity A',
  },
  {
    id: 2,
    name: 'Charity B',
    description: 'Description of Charity B',
  },
  // Add more charities as needed
];

const storiesData = [
  // Add sample data for stories
  {
    id: 1,
    title: 'Story 1',
    content: 'Content of Story 1',
  },
  {
    id: 2,
    title: 'Story 2',
    content: 'Content of Story 2',
  },
  // Add more stories as needed
];

const HomePage = () => {
  const [selectedCharity, setSelectedCharity] = useState(null);

  const handleSelectCharity = (charity) => {
    setSelectedCharity(charity);
  };

  const handleDonate = (selectedCharity, donationAmount, isAnonymous) => {
    // Implement donation logic here, e.g., calling backend APIs to handle the donation
    console.log('Donating to:', selectedCharity.name);
    console.log('Donation Amount:', donationAmount);
    console.log('Anonymous Donation:', isAnonymous);
  };

  return (
    <div>
      <h1>Charities</h1>
      <div className="charities-list">
        {charitiesData.map((charity) => (
          <CharityCard
            key={charity.id}
            charity={charity}
            onSelectCharity={handleSelectCharity}
          />
        ))}
      </div>
      {selectedCharity && <DonationForm selectedCharity={selectedCharity} onDonate={handleDonate} />}
      <h1>Stories</h1>
      <div className="stories-list">
        {storiesData.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

