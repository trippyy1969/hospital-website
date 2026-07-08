import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaTwitter,
FaEnvelope,
FaLocationDot,
} from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>MedCare Hospital</h2>

          <p>
            Providing compassionate healthcare through experienced doctors,
            advanced technology, and a patient-first approach. Our mission is
            to help every individual lead a healthier and happier life.
          </p>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaTwitter /></a>

          </div>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>

          <a href="#">Departments</a>

          <a href="#">Doctors</a>

          <a href="#">Appointments</a>

          <a href="#">Contact</a>

        </div>

        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#">Emergency Care</a>

          <a href="#">Cardiology</a>

          <a href="#">Neurology</a>

          <a href="#">Orthopedics</a>

          <a href="#">Laboratory Services</a>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaLocationDot />
            Mumbai, Maharashtra
          </p>

          <p>
            <FaPhoneAlt />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope />
            support@medcarehospital.com
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 MedCare Hospital.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;