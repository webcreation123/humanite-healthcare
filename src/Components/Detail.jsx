import React from "react";
import "./Detail.css"; // CSS import

export default function Detail() {
  return (
    <div id="detail">
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 data-aos="zoom-in">HUMANITE HEALTH CARE PRIVATE LIMITED</h2>
            <p data-aos="zoom-out">
              is a Private Limited Company, governed by the Companies Act as a company
              limited by shares. Classified as a Non-government company, it is registered
              under the Registrar of Companies RoC-Chhattisgarh. According to the Ministry
              of Corporate Affairs (MCA), this company was incorporated on 15-02-2025 and
              last updated on 12-08-2025. Its Corporate Identification Number (CIN) is
              U46497CT2025PTC017456, and it carries the registration number 017456.
             
            </p>
          </div>
          <div className="col-md-6 " >
            <img
              src="/images/gyno6.jpg"
              alt="About"
              className="image img-fluid rounded shadow-sm" data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
