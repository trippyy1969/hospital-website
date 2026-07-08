import "../styles/global.css";
import { FaHeartbeat } from "react-icons/fa";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          Trusted Healthcare Since 2005
        </span>

        <h1>
          Your Health,
          <br />
          <span>Our Highest Priority.</span>
        </h1>

        <p>
          Aurora Health is committed to delivering world-class healthcare
          through experienced specialists, cutting-edge medical technology,
          and compassionate patient care. Every treatment plan is designed
          with your health, comfort, and long-term well-being in mind.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("appointment")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("doctors")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Find a Doctor
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={heroImage}
          alt="Aurora Health"
          className="hero-image"
        />

        <div className="floating-card">

          <FaHeartbeat className="heart-icon" />

          <h3>24×7 Emergency</h3>

          <p>
            Immediate emergency assistance with highly trained specialists
            and advanced life-support facilities.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;