import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import DepartmentSection from "../components/DepartmentSection";
import DoctorSection from "../components/DoctorSection";
import AppointmentForm from "../components/AppointmentForm";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <DepartmentSection />
      <DoctorSection />
      <AppointmentForm />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;