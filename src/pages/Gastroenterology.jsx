import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gastroenterology = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="gastroenterology" style={{ width: "100%", background: "#e8f0f8", padding: "50px 0" }}>
      <div className="container">
        <h1 className="fw-bold mb-5 text-center" data-aos="fade-down">
          Gastroenterology 
        </h1>

        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <img src="/images/gastro1.jpg" alt="Gastro 1" className="img-fluid rounded shadow-sm" />
          </div>
      
        </div>

        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <img src="/images/gastro2.jpg" alt="Gastro 2" className="img-fluid rounded shadow-sm" />
          </div>
     
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <img src="/images/gastro4.jpg" alt="Gastro 3" className="img-fluid rounded shadow-sm" />
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Gastroenterology;
