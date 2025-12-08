import React from 'react';
import '../styles/components.css';

function RequestCard({ request, onAction }) {
  return (
    <div className="request-card">
      <h4>{request.student_name}</h4>
      <p><strong>Slot:</strong> {request.slot_time}</p>
      <p><strong>Status:</strong> {request.status}</p>
      {request.status === "Pending" && (
        <div className="request-buttons">
          <button onClick={() => onAction(request.request_id, "Confirmed")}>Accept</button>
          <button onClick={() => onAction(request.request_id, "Rejected")}>Reject</button>
        </div>
      )}
    </div>
  );
}

export default RequestCard;
