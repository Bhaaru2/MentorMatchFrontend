import React from 'react';
import '../styles/components.css';

function MentorCard({ mentor }) {
  const handleRequest = () => {
    alert(`Request sent to ${mentor.name} (mock)`); // mock alert
    // Later replace with real API call to /bookings
  };

  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p><strong>Subject:</strong> {mentor.subject}</p>
      <p><strong>Experience:</strong> {mentor.experience_years} years</p>
      <p>{mentor.bio}</p>
      <button onClick={handleRequest}>Request Session</button>
    </div>
  );
}

export default MentorCard;
