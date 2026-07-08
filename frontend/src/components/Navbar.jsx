import "../styles/global.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">+</div>
        <h2>MedCare</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#departments">Departments</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#appointment">Appointment</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="nav-button">
        Book Appointment
      </button>
    </nav>
  );
}

export default Navbar;