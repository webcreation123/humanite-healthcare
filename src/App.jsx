import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gastroenterology from "./pages/Gastroenterology";
import Cns from "./pages/Cns";
import Gynecology from "./pages/Gynecology";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gastroenterology" element={<Gastroenterology />} />
        <Route path="/cns" element={<Cns />} />
        <Route path="/gynecology" element={<Gynecology />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="*" element={<h2 className="text-center my-5">Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
