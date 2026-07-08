import { useState } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock
} from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import api from "../services/api";

function ContactSection() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

    setLoading(true);
    setMessage("");

    try {

      await api.post("contact/", formData);

      setMessage(
        "✅ Thank you for reaching out. Our team will get back to you shortly."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {

      console.log(err);

      setMessage(
        "❌ Unable to send your message. Please try again."
      );

    }

    setLoading(false);

  };

  return (

    <section className="contact" id="contact">

      <div className="contact-info">

        <span className="section-tag">
          CONTACT US
        </span>

        <h2>
          We're Here Whenever You Need Us
        </h2>

        <p>
          Have a question about our services, need help scheduling an
          appointment, or require immediate medical assistance? Our
          dedicated team is available around the clock to provide
          the support and guidance you need.
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

            <h4>Email Address</h4>

            <span>support@aurorahealth.com</span>

          </div>

        </div>

        <div className="contact-item">

          <FaLocationDot />

          <div>

            <h4>Location</h4>

            <span>Mumbai, Maharashtra, India</span>

          </div>

        </div>

        <div className="contact-item">

          <FaClock />

          <div>

            <h4>Working Hours</h4>

            <span>24 Hours • 7 Days a Week</span>

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
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        {message &&

          <p className="form-message">

            {message}

          </p>

        }

        <button
          type="submit"
          disabled={loading}
        >

          {loading ? "Sending..." : "Send Message"}

        </button>

      </form>

    </section>

  );

}

export default ContactSection;