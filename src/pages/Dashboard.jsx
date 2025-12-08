import { useEffect, useState } from 'react';
import { getTeacherProfiles } from '../services/api';

function Dashboard() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeacherProfiles().then(data => setTeachers(data));
  }, []);

  return (
    <div className="container">
      <h2>Teacher Profiles</h2>
      {teachers.map(t => (
        <div key={t.profile_id}>
          <h3>{t.name}</h3>
          <p>{t.subject} | {t.experience_years} years experience</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
