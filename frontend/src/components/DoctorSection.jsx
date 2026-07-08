import { useEffect, useState } from "react";
import api from "../services/api";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa";

function DoctorSection() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {

        api.get("doctors/")
            .then((res) => setDoctors(res.data))
            .catch((err) => console.log(err));

    }, []);

    return (

        <section className="doctors">

            <span className="section-tag">
                OUR DOCTORS
            </span>

            <h2>
                Meet Our Medical Specialists
            </h2>

            <p>
                Our team of experienced physicians brings together expertise,
                compassion, and modern medical practices to provide the highest
                quality healthcare.
            </p>

            <div className="doctor-grid">

                {doctors.map((doctor) => (

                    <div className="doctor-card" key={doctor.id}>

                        <img
                            src={doctor.photo}
                            alt={doctor.name}
                        />

                        <div className="doctor-info">

                            <h3>{doctor.name}</h3>

                            <h4>{doctor.specialization}</h4>

                            <p>

                                <FaUserMd />

                                {doctor.qualification}

                            </p>

                            <p>

                                Experience :
                                {" "}
                                {doctor.experience}
                                {" "}
                                Years

                            </p>

                            <span
                                className={
                                    doctor.available
                                        ? "available"
                                        : "unavailable"
                                }
                            >
                                {doctor.available
                                    ? "Available Today"
                                    : "Currently Unavailable"}
                            </span>
                            <button
                              onClick={() =>
                                document
                                  .getElementById("appointment")
                                  ?.scrollIntoView({ behavior: "smooth" })
                              }
                            >
                              <FaCalendarCheck />
                              Book Appointment
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default DoctorSection;