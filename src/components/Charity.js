import React, { useState } from 'react';
import './Charity.css';

const Charity = () => {
  const [charityDetails, setCharityDetails] = useState({
    name: '',
    description: '',
    totalAmountDonated: 0,
    donors: [],
    anonymousDonations: [],
    beneficiaries: [],
    inventory: [],
    isApproved: false,
    isApplicationSubmitted: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharityDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const applyForCharity = () => {
    // Here, you can implement the code to submit the charity application to the platform
    // The platform administrator will need to review and approve the application
    // Once approved, `isApproved` should be set to true
    // For now, we will just set isApplicationSubmitted to true to show the success message
    setCharityDetails((prevDetails) => ({ ...prevDetails, isApplicationSubmitted: true }));
  };

  const addDonation = (donor, amount, isAnonymous) => {
    // ... (unchanged)
  };

  const addBeneficiary = (beneficiaryName) => {
    // ... (unchanged)
  };

  const addInventory = (item) => {
    // ... (unchanged)
  };

  return (
    <div>
      <h1>Charity Details</h1>
      {!charityDetails.isApproved ? (
        <div>
          {!charityDetails.isApplicationSubmitted ? (
            <button onClick={applyForCharity}>Apply for Charity</button>
          ) : (
            <p>Application submitted successfully! Waiting for approval.</p>
          )}
        </div>
      ) : (
        <form>
          <label>
            Charity Name:
            <input
              type="text"
              name="name"
              value={charityDetails.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={charityDetails.description}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* Additional input fields can be added here as needed */}
        </form>
      )}

      <h2>Total Amount Donated: ${charityDetails.totalAmountDonated}</h2>
      <h3>Donors:</h3>
      <ul>
        {charityDetails.donors.map((donor, index) => (
          <li key={index}>{donor}</li>
        ))}
      </ul>

      <h3>Anonymous Donations:</h3>
      <ul>
        {charityDetails.anonymousDonations.map((donation, index) => (
          <li key={index}>
            {donation.donor} donated ${donation.amount}{' '}
            {donation.isAnonymous ? '(Anonymous)' : ''}
          </li>
        ))}
      </ul>

      <h3>Beneficiaries:</h3>
      <ul>
        {charityDetails.beneficiaries.map((beneficiary, index) => (
          <li key={index}>{beneficiary}</li>
        ))}
      </ul>

      <h3>Inventory Sent to Beneficiaries:</h3>
      <ul>
        {charityDetails.inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Charity;
