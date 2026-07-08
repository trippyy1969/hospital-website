import "../styles/global.css";
import { FaHeartbeat } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          Trusted Healthcare Since 2005
        </span>

        <h1>
          Your Health <br />
          Our Highest Priority
        </h1>

        <p>
          Experienced doctors, modern medical facilities,
          and compassionate care—all in one place.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book Appointment
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <FaHeartbeat className="heart-icon" />

          <h2>24/7 Emergency Care</h2>

          <p>
            We are always available when you need us most.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;