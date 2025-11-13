import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle, FaPhoneVolume, FaSearch } from 'react-icons/fa'
import '../styles/portfolio.css'
import Footer from "../components/footer";
import {useLocation } from "react-router-dom";

const galleryItems = [
    { id: 1, src: "/gallery1.png", link: "/portfoliodetail" },
    { id: 2, src: "/gallery2.png", link: "/portfoliodetail" },
    { id: 3, src: "/gallery3.png", link: "/portfoliodetail" },
    { id: 4, src: "/gallery4.png", link: "/portfoliodetail" },
    { id: 5, src: "/gallery5.png", link: "/portfoliodetail" },
    { id: 6, src: "/gallery6.png", link: "/portfoliodetail" },
    { id: 7, src: "/gallery7.png", link: "/portfoliodetail" },
    { id: 8, src: "/gallery8.png", link: "/portfoliodetail" },
    { id: 9, src: "/gallery9.png", link: "/portfoliodetail" },
];
const Portfolio = () => {
    const location = useLocation();
    return (
        <>
            <section id="contact-hero">
                {/* Background Image */}
                <img
                    src="/contact-bg.png"
                    alt="Contact background"
                    className="contact-bg"
                />

                {/* SVG Decorations */}
                <img src="/blog-svg.png" alt="Top-left curve" className="svg blog-svg" />
                <img
                    src="/svg-contact2.png"
                    alt="Bottom-right curve"
                    className="svg svg-contact-2"
                />

                {/* Navigation Bar */}
                <nav className="hero-nav">
                    <div className="nav-left">
                        <img src="/logo.png" alt="Grimo Logo" className="nav-logo" />
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <Link
                                to="/"
                                className={location.pathname === "/" ? "active-link" : ""}
                            >
                                HOME <FaCircle className="nav-dot" />
                            </Link>
                        </li>

                        <li className="nav-dropdown">
                            <Link
                                to="#"
                                className={location.pathname.startsWith("/pages") ? "active-link" : ""}
                            >
                                PAGES <FaCircle className="nav-dot" />
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/portfoliodetail" className={location.pathname.startsWith("/portfolio") ? "active-link" : ""}>PORTFOLIO DETAILS</Link></li>
                                <li><Link to="/services">SERVICE DETAILS</Link></li>
                                <li><Link to="/blog">BLOG DETAILS</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                to="/services"
                                className={location.pathname === "/services" ? "active-link" : ""}
                            >
                                SERVICES <FaCircle className="nav-dot" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "active-link" : ""}
                            >
                                PORTFOLIO <FaCircle className="nav-dot" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                className={location.pathname === "/blog" ? "active-link" : ""}
                            >
                                BLOG <FaCircle className="nav-dot" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "active-link" : ""}
                            >
                                CONTACT US <FaCircle className="nav-dot" />
                            </Link>
                        </li>
                    </ul>


                    <div className="nav-right">
                        <div>
                            <FaPhoneVolume className="phone-icon" />
                        </div>
                        <div className="nav-contact">
                            <span>Call us Now</span>
                            <span className="nav-phone">+1(212)345-5111</span>
                        </div>
                        <div className="search-btn">
                            <FaSearch className="search-icon" />
                        </div>
                        <div id="nav-cta">
                            <Link to="/contact" className="link-btn"><button className="nav-cta">
                                Get In Touch <span className="nav-cta-arrow">↗</span>
                            </button></Link>
                        </div>
                    </div>
                </nav>

                {/* Overlay Content */}
                <div className="contact-overlay">
                    <h1>Portfolio</h1>
                    <div className="breadcrumb">
                        AGRIMO <span>{">"}</span>
                        <span>PORTFOLIO</span>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <Link to={item.link} key={item.id} className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src={item.src} alt={`Gallery ${item.id}`} />
                                <div className="gallery-overlay">
                                    <span>View Project</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Portfolio
