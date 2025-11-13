import React, { useState } from "react";
import "../styles/blog.css";
import { Link } from "react-router-dom";
import {
    FaChevronRight,
    FaCircle,
    FaPhoneVolume,
    FaSearch,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";

const categories = [
    "All",
    "Agriculture",
    "Extensive",
    "Farming Tips",
    "Food Crops",
    "Mixed Farming",
    "Organic Farm",
];

const Blog = () => {
    const location = useLocation();
    const [active, setActive] = useState("All");

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
                                <li><Link to="/portfoliodetail" className={location.pathname.startsWith("/portfolio") ? "active-link" : ""}
                                >PORTFOLIO DETAILS</Link></li>
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
                    <h1>Blog</h1>
                    <div className="breadcrumb">
                        AGRIMO <span>{">"}</span>
                        <span>BLOG SORTABLE COL 3</span>
                    </div>
                </div>
            </section>

            {/* Category Filter Bar */}
            <div className="category-filter">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${active === cat ? "active" : ""}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <section id="blog">
                <div className="blog-bottom">
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog1.png" alt="blog1" className="blog-img" />
                            <div className="blog-label">
                                <h4>FOOD CROPS</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>What technology is used in vertical farming?</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog2.png" alt="blog2" className="blog-img" />
                            <div className="blog-label">
                                <h4>ORGANIC FARM</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>Which type of farming is more prevalent today?</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog3.png" alt="blog3" className="blog-img" />
                            <div className="blog-label">
                                <h4>FARMING TIPS</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>The Farmers Sentiment Darkens Hopes Fade</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog4.png" alt="blog4" className="blog-img" />
                            <div className="blog-label">
                                <h4>MIXED FARMING</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>A farmer is a person who works in
                                agriculture.</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog5.png" alt="blog5" className="blog-img" />
                            <div className="blog-label">
                                <h4>AGRICULTURE</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>Organic Fruits: Hidden Advantages
                                And Information</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog6.png" alt="blog6" className="blog-img" />
                            <div className="blog-label">
                                <h4>EXTENSIVE</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>How to Include Organic Vegetables
                                in Your Diet</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog7.png" alt="blog7" className="blog-img" />
                            <div className="blog-label">
                                <h4>FARMING TIPS</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>Agricultural Infrastructure in Rural
                                Areas</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog8.png" alt="blog8" className="blog-img" />
                            <div className="blog-label">
                                <h4>FOOD CROPS</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>Are You Prepared for the Upcoming
                                Season?</h4>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-top">
                            <img src="/blog9.png" alt="blog9" className="blog-img" />
                            <div className="blog-label">
                                <h4>MIXED FARMING</h4>
                            </div>
                            <div className="blog-float-btn">
                                <img src="/blog-btn.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="blog-card-bottom">
                            <div className="blog-info">
                                <div>
                                    <img src="/blog-icon1.png" alt="" />
                                    <p>March 28, 2024</p>
                                </div>
                                <div>
                                    <img src="/blog-icon2.png" alt="" />
                                    <p>ADMIN</p>
                                </div>
                            </div>
                            <h4>A Beginner’s Guide for Managing a
                                Successful Farm</h4>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Blog;
