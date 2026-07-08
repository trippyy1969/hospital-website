import { useEffect, useState } from "react";
import api from "../services/api";

function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      await api.post("appointments/create/", formData);

      setMessage(
        "✅ Your appointment request has been submitted successfully. Our team will contact you shortly."
      );

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
      console.error(error);

      setMessage(
        "❌ Something went wrong. Please try again after a few moments."
      );
    }

    setLoading(false);
  };

  return (
    <section className="appointment" id="appointment">

      <span className="section-tag">
        BOOK APPOINTMENT
      </span>

      <h2>
        Schedule Your Consultation
      </h2>

      <p className="section-description">
        Choose your preferred specialist and submit your appointment request.
        Our healthcare team will confirm your booking at the earliest
        convenience.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">
            Select a Doctor
          </option>

          {doctors.map((doctor) => (
            <option
              key={doctor.id}
              value={doctor.id}
            >
              Dr. {doctor.name} — {doctor.specialization}
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
          type="tel"
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
          placeholder="Briefly describe your symptoms or reason for your visit..."
          value={formData.symptoms}
          onChange={handleChange}
          required
        />

        {message && (
          <div className="form-message">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request Appointment"}
        </button>

      </form>

    </section>
  );
}

export default AppointmentForm;