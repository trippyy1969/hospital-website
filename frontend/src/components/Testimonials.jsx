import {
  FaQuoteLeft,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "Cardiology Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      review:
        "The doctors explained every step of my treatment with patience and clarity. From admission to discharge, I always felt supported and cared for. The professionalism of the entire staff exceeded my expectations.",
    },

    {
      id: 2,
      name: "Rahul Mehta",
      role: "Orthopedic Patient",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      review:
        "Booking an appointment was simple, the consultation started on time, and the medical team made me feel completely comfortable. I would confidently recommend MedCare Hospital to my friends and family.",
    },

    {
      id: 3,
      name: "Priya Kapoor",
      role: "Neurology Patient",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
      review:
        "Every member of the hospital staff treated me with kindness and respect. The doctors listened carefully to my concerns and created a treatment plan that gave me confidence throughout my recovery.",
    },
  ];

  return (
    <section className="testimonials">

      <span className="section-tag">
        PATIENT STORIES
      </span>

      <h2>
        Trusted by Thousands of Families
      </h2>

      <p>
        Every recovery journey is unique. Here's what some of our patients
        have shared about their experience at MedCare Hospital.
      </p>

      <div className="testimonial-grid">

        {testimonials.map((patient) => (

          <div
            className="testimonial-card"
            key={patient.id}
          >

            <FaQuoteLeft className="quote-icon" />

            <p className="testimonial-text">
              {patient.review}
            </p>

            <div className="stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />

            </div>

            <div className="patient">

              <img
                src={patient.image}
                alt={patient.name}
              />

              <div>

                <h3>{patient.name}</h3>

                <span>{patient.role}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;