import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DoctorDashboard() {
  const [doctor, setDoctor] = useState({});
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (!token) return;

    axios.get('http://127.0.0.1:8000/api/doctor/me/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setDoctor(response.data.doctor);
      setPatients(response.data.patients);
    })
    .catch(error => {
      console.error('Error fetching doctor data:', error);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Doctor Dashboard</h2>
      <div className="mb-4">
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Assigned Patients</h3>
      <ul className="list-disc pl-5">
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} ({patient.age}, {patient.gender}) - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;
