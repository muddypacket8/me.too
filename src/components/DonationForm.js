import React, { useState } from 'react';

const DonationForm = ({ selectedCharity, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleDonation = () => {
    // Validate donation amount and other details before proceeding
    onDonate(selectedCharity, donationAmount, isAnonymous);
  };

  return (
    <div className="donation-form">
      <h3>Donate to {selectedCharity.name}</h3>
      <label>
        Donation Amount:
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </label>
      <label>
        Anonymous Donation:
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous(!isAnonymous)}
        />
      </label>
      <button onClick={handleDonation}>Donate</button>
    </div>
  );
};

export default DonationForm;
