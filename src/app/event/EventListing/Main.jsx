// src/Main.jsx
import React from 'react';
import './Main.css';
import EventListing from './Events/EventListing.jsx';

const Main = () => {
  return (
    <div className="main-container">
      <EventListing/>
    </div>
  );
};

export default Main;
