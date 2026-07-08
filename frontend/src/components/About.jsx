import "../styles/global.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-left">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          Exceptional Care,
          <br />
          Every Step of Your Journey
        </h2>

        <p>
          At MedCare Hospital, we combine advanced medical technology with
          compassionate healthcare professionals to provide personalized
          treatment for every patient. From preventive care to specialized
          treatments, your well-being is always at the center of everything
          we do.
        </p>

        <div className="about-list">

          <div>
            <FaCheckCircle />
            <span>Experienced Medical Specialists</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>24×7 Emergency Support</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Modern Diagnostic Facilities</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Patient-Centered Care</span>
          </div>

        </div>

        <button className="primary-btn">
          Learn More
        </button>

      </div>

      <div className="about-right">

        <div className="about-image">

          🏥

        </div>

      </div>

    </section>
  );
}

export default About;