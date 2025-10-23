import React from "react";
import { FaEnvelope, FaGlobe, FaBuilding, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" data-aos="zoom-out">
          Contact Us
        </h1>
        <p className="text-muted" data-aos="zoom-out">
          Get in touch with <strong>HUMANITE HEALTH CARE PRIVATE LIMITED</strong>
        </p>
      </div>

      <div className="row g-4">
        {/* Head Office */}
        <div className="col-md-6" data-aos="fade-right">
          <div className="card h-100 shadow-sm border-0 rounded-3">
            <div className="card-body">
              <h5 className="fw-bold mb-3">
                <FaBuilding className="text-primary me-2" />
                Head Office
              </h5>
              <p className="text-muted">
                <FaMapMarkerAlt className="text-danger me-2" />
                R/N 09, Near Hindustan Naka, Charcop,
                Kandivali West, Mumbai, Maharashtra - 400067
              </p>
              <p className="text-muted">
                <FaEnvelope className="text-danger me-2" />
                <a
                  href="mailto:humanitehealthcare@gmail.com"
                  className="text-decoration-none"
                >
                  humanitehealthcare@gmail.com
                </a>
              </p>
            
              <p className="text-muted">
                <FaGlobe className="text-success me-2" />
                <a
                  href="https://humanitehealthcare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  www.humanitehealthcare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="col-md-6" data-aos="fade-left">
          <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <iframe
                title="Humanite Health Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.095203898241!2d72.82583087496074!3d19.1401921521207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b29b9c93d%3A0x1234567890abcdef!2sKandivali%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696078345678!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
