import React from "react";
import { Link } from "react-router-dom";

export default function HeroImage() {
  return (
    <section className="py-5 background">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/medicine1.webp" // 👈 apna image public/images me rakho
              alt="Doctor"
              className="hero-img img-fluid rounded"
            />
          </div>

          {/* Right side - Text */}
          <div className="col-md-6">
            <h6 className="text-uppercase text-muted" data-aos="fade-up">Quality healthcare products for your well-being</h6>
            <h1 className="fw-bold display-5 h1"data-aos="fade-left">Welcome to Humanite Health Care</h1>
            <p className="text-secondary mb-4"data-aos="fade-right">
              To learn more about our products,quality healthcare products for your well-beingdelivering reliable healthcare solutions
            </p>
    
            <Link to="/contact" className="btn  px-4 py-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
