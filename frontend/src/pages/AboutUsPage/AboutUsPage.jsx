import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <div className="aboutus-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-aboutuspage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">About Us</h1>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span class="ltn__secondary-color">
                            <i class="bi bi-house-fill"></i>
                          </span>
                          Home
                        </Link>
                      </li>
                      <li>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
      </div>

      {/* AboutUs Content      */}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center" }}>Book Your Appointment Now</h2>
        <p>
          HerbCollab, was established in 1961 as a sole Proprietor business
          entity by our Late founder Mr. Shirley Rodrigo, We are a chain
          pharmacy with 7 outlets. HerbCollab, has served the nation for Over 3
          Generations, with Prescription Medication, Preparation mixing local
          Applications, supplying of Wheelchairs, Orthopaedic supports, Home and
          professional medical Care equipment, Surgical consumable.
        </p>
        <p>
          With present busy schedules and traffic situations to customers, we
          have established our “Online Pharmacy” service. Customers can log in
          to “HerbCollab” Upload the medical Prescription or buy home or
          Professional Medical equipment Orthopaedic supports Wheel chairs, from
          our “Pharmacy Online service”.
        </p>
        <p>
          HerbCollab delivery service will send your order through our
          experience qualified dispenser to your doorstep. Our team is trained
          on Medicinal Product or prescription Advice and Explanation, Medical
          Equipment Demonstration and installation.
        </p>
      </div>

      {/* Second Paragraph */}
      <div style={{ width: "65%", margin: "0 auto" }}>
        <p>
          <strong>Superior care</strong>
        </p>
        <p>
          Our Ayurwedic pharmacies are well-equipped with modern facilities that
          make use of the latest technological advancements to ensure your
          comfort as well as best clinical outcome. As an internationally
          accredited hospital chain, we always remain mindful of the requirement
          to offer world class services to you and your family. We’ve secured
          the services of some of the country’s finest talent in the medical
          arena to provide the best possible care and guidance to you. Our
          aesthetically pleasing hospital interiors, were specifically designed
          so to help you gain a sense of peace to help with the healing process.
        </p>
        <p>
          <strong>Our Services</strong>
        </p>
        <p>
          We take care of your preventive and curative healthcare requirements
          at our state-of-the-art facilities. Collectively, our hospitals can
          accommodate 190 in-house patients where you can be rest assured of
          receiving care on par with international standards. Our island wide
          laboratory services network is well-equipped with the cutting-edge
          technology, equipment and skilled professionals to provide accurate
          diagnostic investigations. We’ve purposely built our hospitals to
          align with international standards and equipped each area with the
          latest technological advancements. You can visit our Accident and
          Emergency units any time during the day and night to receive medical
          or surgical emergency care.
        </p>
      </div>

      {/* Element */}
      <div
        style={{
          backgroundColor: "#003c1f",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="white" style={{ color: "#fffaf1" }}>
                  Experience the natural beauty with Ayurveda
                  <br />
                </h2>
              </div>
              <div className="col-md-7">
                <div className="contact-us d-blue-bg">
                  <h4 className="green">
                    <a href="/about" style={{ color: "#fffaf1" }}>
                      CONTACT US
                    </a>
                  </h4>
                  <p style={{ color: "black" }}>+94-114-312 777</p>
                  <p style={{ color: "black" }}>herbcollab@gmail.com</p>
                </div>
                <div className="appointment-intro-btn">
                  <a
                    className="appointment-btn"
                    style={{ color: "#fffaf1" }}
                    href="/"
                  >
                    MAKE AN APPOINTMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
