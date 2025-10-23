import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";

AOS.init({ duration: 1000, once: true });

const rootEl = document.getElementById("root");

if (rootEl.hasChildNodes()) {
  import("react-dom/client").then(({ hydrateRoot }) => {
    hydrateRoot(rootEl, <App />);
  });
} else {
  ReactDOM.createRoot(rootEl).render(<App />);
}
