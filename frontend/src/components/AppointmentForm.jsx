import { useEffect, useState } from "react";
import api from "../services/api";

function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    doctor: "",
    patient_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    symptoms: "",
  });

  useEffect(() => {
    api
      .get("doctors/")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("appointments/create/", formData);

      alert("Appointment booked successfully!");

      setFormData({
        doctor: "",
        patient_name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        symptoms: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="appointment">

      <span className="section-tag">
        BOOK APPOINTMENT
      </span>

      <h2>Schedule Your Consultation</h2>

      <p>
        Fill in your details below and our team will confirm your appointment
        as soon as possible.
      </p>

      <form onSubmit={handleSubmit}>

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>

          {doctors.map((doctor) => (
            <option
              key={doctor.id}
              value={doctor.id}
            >
              {doctor.name}
            </option>
          ))}

        </select>

        <input
          type="text"
          name="patient_name"
          placeholder="Full Name"
          value={formData.patient_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          name="symptoms"
          placeholder="Describe your symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Request Appointment
        </button>

      </form>

    </section>
  );
}

export default AppointmentForm;