import React, { useEffect, useState } from 'react';
import MentorCard from '../components/MentorCard';
import { mockMentors } from '../api/mockData'; // import mock data
import '../styles/dashboard.css';
import Navbar from '../components/Navbar';


function StudentDashboard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Instead of API, use mock data
    setMentors(mockMentors);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Available Mentors</h2>
      <div className="mentor-list">
        {mentors.length === 0 ? (
          <p>No mentors available at the moment.</p>
        ) : (
          mentors.map(mentor => (
            <MentorCard key={mentor.profile_id} mentor={mentor} />
          ))
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
