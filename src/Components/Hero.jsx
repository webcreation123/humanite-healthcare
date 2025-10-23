import React from "react";


function Hero() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active position-relative">
          <img
            src="/images/background2.jpg"
            className="d-block w-100"
            alt="Banner 1"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          {/* Dark overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          ></div>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
             <h2 className="fw-bold display-6 text-white mb-2 text-center"data-aos="zoom-in">
            About Us
            </h2>
          
            <p className="text-light small mb-3 text-center"data-aos="zoom-out">
              Quality healthcare products for your well-being
            </p>
            <a
              href="/Gynecology"
              className="btn btn-success rounded-pill shadow"
              style={{ width: "200px", maxWidth: "100%" }}
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item position-relative">
          <img
            src="/images/gyno4.jpg"
            className="d-block w-100"
            alt="Banner 2"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          {/* Dark overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          ></div>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fw-bold display-6 text-white mb-2 text-center" data-aos="zoom-in">
             Welcome to Humanite Health Care
            </h2>
            <p className="text-light small mb-3 text-center" data-aos="zoom-out">
              Delivering reliable healthcare solutions
            </p>
            <a
              href="/Gynecology"
              className="btn btn-success rounded-pill shadow"
              style={{ width: "200px", maxWidth: "100%" }}
            >
            Explore Products
            </a>
          </div>
        </div>
    <div className="carousel-item position-relative">
          <img
            src="/images/gyno5.jpg"
            className="d-block w-100"
            alt="Banner 2"
            style={{ height: "75vh", objectFit: "cover" }}
          />
          {/* Dark overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          ></div>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fw-bold display-6 text-white mb-2 text-center" data-aos="zoom-in">
              Trusted by Doctors
            </h2>
            <p className="text-light small mb-3 text-center"data-aos="zoom-out">
              Empowering women with best healthcare solutions
            </p>
            <a
              href="/Gynecology"
              className="btn btn-success rounded-pill shadow"
              style={{ width: "200px", maxWidth: "100%" }}
            >
             Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  


  );
}

export default Hero;
