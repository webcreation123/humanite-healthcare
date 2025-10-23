import React from "react";
import { FaBullseye, FaGlobe } from "react-icons/fa"; // 🎯 Mission, 🌍 Vision


function AboutContent() {
  return (
    <section id="about-content"> {/* Full-width background */}
      <div className="container my-5">
        {/* Intro Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 " data-aos="zoom-in">About Us</h1>
          <p className="text-muted fs-5" data-aos="zoom-out">
            Learn more about{" "}
            <strong>HUMANITE HEALTH CARE PRIVATE LIMITED</strong>
          </p>
        </div>

        {/* Company Intro */}
        <div className="company-intro p-5 rounded shadow-sm mb-5">
          <p className="fs-5" data-aos="zoom-in">
            With an inherent drive for a greater healthcare, <b>Humanite</b> was
            established with much passion in <b>2025</b>. With deep-rooted belief
            in creative solutions filling the real-time medical gaps coupled with
            a strong core team, we are a pharmaceutical company committed to
            providing high-quality and cost-effective healthcare solutions.
          </p>
          <p className="fs-5" data-aos="zoom-in">
            Our dedication to <b>innovation</b>, <b>quality assurance</b>, and{" "}
            <b>customer satisfaction</b> sets us apart in the healthcare industry.
          </p>
          <p>
            <strong>Head Office:</strong> <br />
           HUMANITE HEALTH CARE PRIVATE LIMITED <br/>
R/N 09, Near Hindustan Naka, Charcop
Kandivali West, Mumbai, Maharashtra - 400067
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:humanitehealthcare@gmail.com" className="text-primary">
              humanitehealthcare@gmail.com
            </a>
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row g-4">
          {/* Mission */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-3 text-center">
              <div className="card-body p-4">
                <FaBullseye size={50} className="text-success mb-3" />
                <h3 className="card-title text-success fw-bold mb-3" data-aos="zoom-in">Our Mission</h3>
                <p className="card-text fs-5" data-aos="zoom-in">
                  To provide <b>high-quality, affordable healthcare solutions</b>{" "}
                  while upholding ethical standards and fostering innovation.
                </p>
                <p className="card-text fs-5" data-aos="zoom-in">
                  By developing an extensive distribution network and showing
                  unwavering commitment to <b>customer satisfaction</b>, we strive
                  to address industry challenges and serve as trusted partners in
                  the healthcare sector.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0 rounded-3 text-center">
              <div className="card-body p-4">
                <FaGlobe size={50} className="text-primary mb-3" />
                <h3 className="card-title text-primary fw-bold mb-3">Our Vision</h3>
                <p className="card-text fs-5" data-aos="zoom-in">
                  To become a <b>vertically integrated global healthcare
                  organization</b> recognized for our unwavering commitment to{" "}
                  <b>innovation, quality, and competence</b>.
                </p>
                <p className="card-text fs-5" data-aos="zoom-in">
                  We aim to lead the pharmaceutical industry by providing{" "}
                  <b>cost-effective, high-quality products</b> and establishing a
                  portfolio of affordable medicines accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
