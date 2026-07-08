import { useState } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock
} from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import api from "../services/api";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("contact/", formData);

      alert("Thank you! Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Unable to send your message. Please try again.");
    }
  };

  return (
    <section className="contact">

      <div className="contact-info">

        <span className="section-tag">
          CONTACT US
        </span>

        <h2>
          We're Here Whenever You Need Us
        </h2>

        <p>
          Whether you have questions about our services, need help booking an
          appointment, or require emergency assistance, our team is always
          ready to help.
        </p>

        <div className="contact-item">
          <FaPhoneAlt />
          <div>
            <h4>Emergency Helpline</h4>
            <span>+91 98765 43210</span>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <span>support@medcarehospital.com</span>
          </div>
        </div>

        <div className="contact-item">
          <FaLocationDot />
          <div>
            <h4>Address</h4>
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>

        <div className="contact-item">
          <FaClock />
          <div>
            <h4>Working Hours</h4>
            <span>Open 24 Hours • 7 Days a Week</span>
          </div>
        </div>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
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

        <textarea
          rows="7"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default ContactSection;