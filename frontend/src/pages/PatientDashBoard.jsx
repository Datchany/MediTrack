import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PatientDashboard() {
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    axios
      .get('http://127.0.0.1:8000/api/patient/me/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setDoctor(response.data.doctor);
      })
      .catch(error => {
        console.error('Error fetching doctor data:', error);
        if (error.response?.status === 401) {
          navigate('/login');
        }
      });
  }, [navigate]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">👤 Patient Dashboard</h2>
      {doctor ? (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Assigned Doctor</h3>
          <p><strong>Name:</strong> {doctor.name}</p>
          <p><strong>Specialization:</strong> {doctor.specialization}</p>
          <p><strong>Email:</strong> {doctor.email}</p>
        </div>
      ) : (
        <p className="text-center">No assigned doctor found.</p>
      )}
    </div>
  );
}

export default PatientDashboard;
