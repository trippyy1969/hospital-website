import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from "../services/api";

function DepartmentSection() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    api
      .get("departments/")
      .then((res) => setDepartments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="departments">

      <span className="section-tag">OUR DEPARTMENTS</span>

      <h2>Comprehensive Medical Specialties</h2>

      <p>
        Every department is staffed by experienced specialists committed to
        delivering evidence-based treatment and compassionate patient care.
      </p>

      <div className="department-grid">

        {departments.map((dept) => (

          <div className="department-card" key={dept.id}>

            <img src={dept.image} alt={dept.name} />

            <h3>{dept.name}</h3>

            <p>{dept.description}</p>

            <button>

              Learn More

              <FaArrowRight />

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default DepartmentSection;