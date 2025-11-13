import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle, FaPhoneVolume, FaSearch } from 'react-icons/fa'
import ServCard from '../components/ServCard'
import "../styles/services.css"
import Footer from "../components/footer";
import {useLocation } from "react-router-dom";

const Services = () => {
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
                    <h1>Services</h1>
                    <div className="breadcrumb">
                        AGRIMO <span>{">"}</span>
                        <span>SERVICES</span>
                    </div>
                </div>
            </section>

            <section className="services-info">
                <ServCard
                    serv={{
                        img: "/service1.png",
                        label: "FERTILIZER",
                        title: "Harvest Concepts",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />

                <ServCard
                    serv={{
                        img: "/service4.png",
                        label: "FRUITS",
                        title: "Farming Products",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />

                <ServCard
                    serv={{
                        img: "/service5.png",
                        label: "FERTILIZER",
                        title: "Soil Fertilization",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service6.png",
                        label: "FRUITS",
                        title: "Fresh Vegetables",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service7.png",
                        label: "FERTILIZER",
                        title: "Dairy Production",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service8.png",
                        label: "VEGETABLES",
                        title: "Product Supplies",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service9.png",
                        label: "FRUITS",
                        title: "Natural Carrots",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service10.png",
                        label: "VEGETABLES",
                        title: "Nutrition Solutions",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
                <ServCard
                    serv={{
                        img: "/service11.png",
                        label: "FRUITS,VEGETABLE",
                        title: "Organic Vegetables",
                        desc: "Farming and animal husbandry and discuss with farmers and scientists."
                    }}
                />
            </section>

            <Footer />
        </>
    )
}

export default Services
