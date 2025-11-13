import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Services from "./pages/Services";
import "./App.css"; // Assuming you have a CSS file for styling

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">Logo</Link>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
            <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfoliodetail" element={<PortfolioDetail />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
