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
         Aurora Health combines clinical expertise with advanced medical technology to deliver comprehensive healthcare for patients of every age. From preventive care to complex treatments, our multidisciplinary team focuses on providing safe, ethical, and compassionate medical services in a patient-centered environment.
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