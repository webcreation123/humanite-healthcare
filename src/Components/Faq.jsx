import React from "react";

function Faq() {
  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <p className="text-muted">Find answers to common questions about Humanite Health Care</p>
      </div>

      <div className="accordion" id="faqAccordion">

        {/* Question 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the address for HUMANITE HEALTH CARE PRIVATE LIMITED?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              HUMANITE HEALTH CARE PRIVATE LIMITED
R/N 09, Near Hindustan Naka, Charcop
Kandivali West, Mumbai, Maharashtra - 400067
            </div>
          </div>
        </div>


        {/* Question 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I contact HUMANITE HEALTH CARE PRIVATE LIMITED?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can reach out via the official email address:{" "}
              <a href="mailto:humanitehealthcare@gmail.com">humanitehealthcare@gmail.com</a>.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              When was HUMANITE HEALTH CARE PRIVATE LIMITED established?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              It was founded on <b>15-02-2025</b> as per MCA data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
