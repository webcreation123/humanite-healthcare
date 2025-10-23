import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import AOS from "aos";

import "./Product.css";

function GynecologyHero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = ["gyno5.jpg", "gyno4.jpg", "gyno6.jpg"];

  return (
    <div
      id="gynecologyHero"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {slides.map((img, i) => (
          <div
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            key={i}
            style={{ position: "relative" }}
          >
            <img
              src={`/images/${img}`}
              className="d-block w-100 hero-img"
              alt={`Slide ${i + 1}`}
            />
            <div className="overlay"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2
                className="fw-bold display-6 text-white mb-2 text-center"
                data-aos="fade-up"
              >
                Welcome to Gynecology
              </h2>
              <p
                className="text-light small mb-3 text-center"
                data-aos="fade-down"
              >
                Quality healthcare products for your well-being
              </p>
              <a
                href="#gynecologyProducts"
                className="btn btn-success rounded-pill shadow"
                style={{ width: "200px", maxWidth: "100%" }}
                data-aos="zoom-in"
              >
                Explore Products
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#gynecologyHero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#gynecologyHero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default function Gynecology() {
  const [visible, setVisible] = useState(4);
  const showMore = () => setVisible((prev) => prev + 4);

  return (
    <>
      <GynecologyHero />
      <div id="gynecologyProducts" className="container my-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">
          Our Gynecology Products
        </h2>
        <div className="row g-4">
          {products.slice(0, visible).map((prod) => (
            <div
              key={prod.id}
              className="col-sm-6 col-md-4 col-lg-3"
              data-aos="fade-up"
            >
              <div className="product-card h-100 shadow-sm border-0">
                <div className="product-image-box">
                  <Link
                    to={`/products/${prod.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <img
                      src={`/images/Products/${prod.image}`}
                      alt={prod.name}
                      className="product-image"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h5 className="product-title fw-bold">{prod.name}</h5>
                  <p className="product-desc text-muted">{prod.description}</p>
                  <Link
                    to={`/products/${prod.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="btn btn-outline-primary mt-2"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visible < products.length && (
          <div className="text-center mt-4">
            <button
              onClick={showMore}
              className="btn btn-outline-primary px-4"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
