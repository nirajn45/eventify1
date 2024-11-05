"use client";
import React, { useState } from 'react';
import cardData from '../Cards/cardData';
import Card from '../Cards/Card';
import './EventListing.css';
const EventListing = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const uniqueLocations = ['All', ...new Set(cardData.map(event => event.location))];
  const filteredEvents = selectedLocation === 'All'
    ? cardData
    : cardData.filter(event => event.location === selectedLocation);
  return (
    <div className="event-listing">
      <div className="filter-container">
        <label htmlFor="location-filter">Filter by Location: </label>
        <select
          id="location-filter"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)} >
          {uniqueLocations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="event-grid">
        {filteredEvents.map(event => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventListing;
