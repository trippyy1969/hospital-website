import "../styles/global.css";
import { FaUserMd, FaHospital, FaHeartbeat, FaSmile } from "react-icons/fa";

function Stats() {
  const stats = [
    { icon: <FaUserMd />, number: "150+", text: "Expert Doctors" },
    { icon: <FaSmile />, number: "50K+", text: "Happy Patients" },
    { icon: <FaHeartbeat />, number: "24/7", text: "Emergency Care" },
    { icon: <FaHospital />, number: "25+", text: "Departments" },
  ];

  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">{item.icon}</div>
          <h2>{item.number}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;