import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaCircle, FaPhoneVolume, FaSearch } from "react-icons/fa";
import StatsCard from "../components/stats";
import Footer from "../components/footer";
import {useLocation } from "react-router-dom";

const Contact = () => {
    const location = useLocation();
    return (
        <>
            <section id="contact-hero">
                {/* Background Image */}
                <img src="/contact-bg.png" alt="Contact background" className="contact-bg" />

                {/* SVG Decorations */}
                <img src="/svg-contact1.png" alt="Top-left curve" className="svg svg-contact-1" />
                <img src="/svg-contact2.png" alt="Bottom-right curve" className="svg svg-contact-2" />
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
                            <button className="nav-cta">
                                Get In Touch <span className="nav-cta-arrow">↗</span>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Overlay Content */}
                <div className="contact-overlay">
                    <h1>Contact Us</h1>
                    <div className="breadcrumb">
                        AGRIMO <span>{" > "}</span>
                        <span>CONTACT US</span>
                    </div>
                </div>
            </section>

            <section id="contact-stats">
                <StatsCard stats={{ title: 'Mail us 24/7', icon: '/cont-stats1.png', desc: 'pbminfo@admin.com \n. pbmadmin@info.com' }} />
                <StatsCard stats={{ title: 'Call us 24/7', icon: '/cont-stats2.png', desc: 'Phone : (+55) 654 - 545 - 5418\nMobile : (+01) 654 - 545 - 1235' }} />
                <StatsCard stats={{ title: 'Our Locations', icon: '/cont-stats3.png', desc: '4821 Ride Top, Anch St, Alaska\n997998, USA main city.' }} />
            </section>

            <section id="contact-serv">
                {/* Background Image */}
                <img src="/contact-serv.png" alt="field background" className="contact-serv-bg" />

                <div className="contact-serv-right">
                    <img src="/serv2-bg.png" alt="pattern" className="serv2-pattern" />

                    <div className="contact-serv-content">
                        <div className="contact-serv-title">
                            <div className="contact-serv-title-icon">
                                <img src="/about-icon.png" alt="about" />
                            </div>
                            <h4>Get To Contact Us</h4>
                        </div>

                        <h1>
                            Have any Questions? <br /> Get in Touch!
                        </h1>

                        <form className="contact-serv-form">
                            <div className="form-row">
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Phone Number" />
                            </div>

                            <div className="form-row">
                                <input type="email" placeholder="Email Address" />
                                <input type="text" placeholder="Subject" />
                            </div>

                            <textarea placeholder="Your Message"></textarea>

                            <button type="submit" className="send-btn">
                                Send Message <span>↗</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section id="labels">
                <div>
                    <img src="/label1.png" alt="" />
                </div>
                <div>
                    <img src="/label2.png" alt="" />
                </div>
                <div>
                    <img src="/label3.png" alt="" />
                </div>
                <div>
                    <img src="/label4.png" alt="" />
                </div>
                <div>
                    <img src="/label5.png" alt="" />
                </div>
                <div>
                    <img src="/label6.png" alt="" />
                </div>
            </section>

            <section className="contact-map">
                <img src="/map.png" alt="" className="map-img" />
            </section>

            <Footer />
        </>
    );
};

export default Contact;
