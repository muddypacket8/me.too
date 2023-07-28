import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Charity from './components/Charity';
import DonationForm from './components/DonationForm';
import StoryCard from './components/StoryCard';
import CharityCard from './components/CharityCard';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/Charity" element={<Charity/>} />
          <Route path="/DonationForm" element={<DonationForm/>} />
          <Route path="/StoryCard" element={<StoryCard/>} />
          <Route path="/CharityCard" element={< CharityCard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

