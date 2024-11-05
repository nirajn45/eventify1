"use client"
import React from 'react';
import './Card.css';

const Card = ({ name, date, time, fee, location, speaker, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{date}, {time}</p>
      <p>Fee: {fee}</p>
      <p>Location: {location}</p>
      <p>Speaker: {speaker}</p>
    </div>
  );
};

export default Card;
