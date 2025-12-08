import React, { useEffect, useState } from 'react';
import RequestCard from '../components/RequestCard';
import { mockRequests } from '../api/mockData';
import '../styles/dashboard.css';
import Navbar from '../components/Navbar';


function MentorDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Load mock requests
    setRequests(mockRequests);
  }, []);

  // Handle Accept / Reject
  const handleAction = (id, newStatus) => {
    setRequests(prev =>
      prev.map(r => (r.request_id === id ? { ...r, status: newStatus } : r))
    );
    alert(`Request ${id} ${newStatus.toLowerCase()} (mock)`);
  };

  return (
    <div className="dashboard-container">
      <h2>Incoming Requests</h2>
      {requests.length === 0 ? (
        <p>No requests at the moment.</p>
      ) : (
        requests.map(req => (
          <RequestCard key={req.request_id} request={req} onAction={handleAction} />
        ))
      )}
    </div>
  );
}

export default MentorDashboard;
