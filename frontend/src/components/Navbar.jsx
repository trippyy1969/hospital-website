import { useState, useEffect } from "react";
import "../styles/global.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo">
        <span className="logo-icon">✚</span>
        <div>
          <h2>Aurora Health</h2>
          <p>Compassion • Care • Excellence</p>
        </div>
      </div>

      <nav>

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#departments">Departments</a>

        <a href="#doctors">Doctors</a>

        <a href="#appointment">Appointments</a>

        <a href="#contact">Contact</a>

      </nav>

      <button
        className="nav-btn"
        onClick={() =>
          document
            .getElementById("appointment")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Book Appointment
      </button>

    </header>
  );
}

export default Navbar;