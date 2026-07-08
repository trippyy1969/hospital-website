import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeartbeat
} from "react-icons/fa";

import "../styles/global.css";

function Footer() {

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">

            <FaHeartbeat />

            <h2>Aurora Health</h2>

          </div>

          <p>
            Delivering compassionate, patient-centered healthcare with
            experienced specialists, modern medical technology, and a
            commitment to excellence. Your health is our highest priority.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <button onClick={() => scrollTo("home")}>Home</button>

          <button onClick={() => scrollTo("about")}>About</button>

          <button onClick={() => scrollTo("departments")}>Departments</button>

          <button onClick={() => scrollTo("doctors")}>Doctors</button>

          <button onClick={() => scrollTo("appointment")}>Appointments</button>

          <button onClick={() => scrollTo("contact")}>Contact</button>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>

            <FaPhoneAlt />

            +91 98765 43210

          </p>

          <p>

            <FaEnvelope />

            support@aurorahealth.com

          </p>

          <p>

            <FaMapMarkerAlt />

            Mumbai, Maharashtra, India

          </p>

          <p>

            Open 24 Hours • 7 Days

          </p>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Aurora Health. All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;