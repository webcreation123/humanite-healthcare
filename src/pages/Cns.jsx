import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cns = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="cns" style={{ width: "100%", background: "#e8f0f8", padding: "50px 0" }}>
      <div className="container">
        <h1 className="fw-bold mb-5 text-center" data-aos="fade-down">
          CNS (Central Nervous System) 
        </h1>

        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <img src="/images/cns1.jpg" alt="CNS 1" className="img-fluid rounded shadow-sm" />
          </div>
 
        </div>

        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <img src="/images/cns2.jpg" alt="CNS 2" className="img-fluid rounded shadow-sm" />
          </div>
     
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <img src="/images/cns3.jpg" alt="CNS 3" className="img-fluid rounded shadow-sm" />
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Cns;
