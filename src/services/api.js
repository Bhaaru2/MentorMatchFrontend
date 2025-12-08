const API_URL = "http://localhost:5000"; // backend server

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const getTeacherProfiles = async () => {
  const res = await fetch(`${API_URL}/teachers`);
  return res.json();
};
