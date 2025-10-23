import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons import

export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container text-center">
        <p><strong>HUMANITE HEALTH CARE PRIVATE LIMITED</strong></p>

        {/* Address with icon */}
        <p>
          <FaMapMarkerAlt className="me-2 text-danger" />
         HUMANITE HEALTH CARE PRIVATE LIMITED
R/N 09, Near Hindustan Naka, Charcop
Kandivali West, Mumbai, Maharashtra - 400067
        </p>

        {/* Email with icon */}
        <p>
          <FaEnvelope className="me-2 text-warning" />
          <a href="mailto:humanitehealthcare@gmail.com" className="text-white">
            humanitehealthcare@gmail.com
          </a>
        </p>

        <p className="mt-3">
          &copy; {new Date().getFullYear()} Humanite Health Care Pvt. Ltd. All rights reserved.
          
        </p>
            <p className="mt-3">
           <a href="https://humanitehealthcare.com/images/sitemap.xml" className="text-white">
           Sitemap
          </a>
          </p>
      </div>
    </footer>
  );
}
