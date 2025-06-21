import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  const [doctorForm, setDoctorForm] = useState({
    username: '', password: '', name: '', email: '', specialization: ''
  });

  const [patientForm, setPatientForm] = useState({
    username: '', password: '', name: '', email: '', age: '', gender: '', assigned_doctor_id: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('access');
    axios.get('http://127.0.0.1:8000/api/admin/dashboard/', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setDoctors(res.data.doctors);
      setPatients(res.data.patients);
    }).catch(err => console.error(err));
  }, []);

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');
    axios.post('http://127.0.0.1:8000/api/admin/create-doctor/', doctorForm, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      alert('Doctor created');
      window.location.reload();
    });
  };

  const handlePatientSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');
    axios.post('http://127.0.0.1:8000/api/admin/create-patient/', patientForm, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      alert('Patient created');
      window.location.reload();
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Doctor Section */}
      <h3 className="text-lg font-semibold mt-4">Doctors</h3>
      <ul className="list-disc ml-5">
        {doctors.map((doc, idx) => (
          <li key={idx}>{doc.name} - {doc.specialization} - {doc.email}</li>
        ))}
      </ul>

      <form onSubmit={handleDoctorSubmit} className="mt-4 space-y-2">
        <h4 className="font-bold">Add Doctor</h4>
        <input type="text" placeholder="Username" onChange={e => setDoctorForm({ ...doctorForm, username: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={e => setDoctorForm({ ...doctorForm, password: e.target.value })} required />
        <input type="text" placeholder="Name" onChange={e => setDoctorForm({ ...doctorForm, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={e => setDoctorForm({ ...doctorForm, email: e.target.value })} required />
        <input type="text" placeholder="Specialization" onChange={e => setDoctorForm({ ...doctorForm, specialization: e.target.value })} required />
        <button type="submit">Add Doctor</button>
      </form>

      {/* Patient Section */}
      <h3 className="text-lg font-semibold mt-6">Patients</h3>
      <ul className="list-disc ml-5">
        {patients.map((pat, idx) => (
          <li key={idx}>{pat.name} - {pat.gender}, {pat.age} - {pat.email}</li>
        ))}
      </ul>

      <form onSubmit={handlePatientSubmit} className="mt-4 space-y-2">
        <h4 className="font-bold">Add Patient</h4>
        <input type="text" placeholder="Username" onChange={e => setPatientForm({ ...patientForm, username: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={e => setPatientForm({ ...patientForm, password: e.target.value })} required />
        <input type="text" placeholder="Name" onChange={e => setPatientForm({ ...patientForm, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={e => setPatientForm({ ...patientForm, email: e.target.value })} required />
        <input type="number" placeholder="Age" onChange={e => setPatientForm({ ...patientForm, age: e.target.value })} required />
        <input type="text" placeholder="Gender" onChange={e => setPatientForm({ ...patientForm, gender: e.target.value })} required />
        <input type="text" placeholder="Assigned Doctor ID" onChange={e => setPatientForm({ ...patientForm, assigned_doctor_id: e.target.value })} required />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
