import { useState, useEffect } from "react";
import '../styles/home.css'
import { FaSearch, FaPhoneVolume, FaCircle } from "react-icons/fa";
import StatsCard from '../components/stats';
import ImagesCarousel from '../components/ImagesCarousel';
import TestCard from '../components/TestCard';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import ServCard from "../components/ServCard";
import {useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const cards = [
        {
            text:
                "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
            name: "Martin Bailey",
            role: "Supervisor",
            image: "/martin.png"
        },
        {
            text:
                "Outstanding service and premium organic vegetables. This is exactly what our family was looking for.",
            name: "Emma Greed",
            role: "Customer",
            image: "/emma.png"
        },
        {
            text:
                "The quality of produce from this farm is exceptional. Fresh, organic, and delivered right to our door!",
            name: "Daniel Craig",
            role: "Co Founder",
            image: "/daniel.png"
        }
    ];
    const heroImages = [
        "/hero.png",
        "/hero2.png",
        "/hero3.png"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % heroImages.length);
        }, 5000); // change image every 5 seconds
        return () => clearInterval(interval);
    },);
    return (
        <>
            <section id="nav-hero">
                <img
                    src={heroImages[current]}
                    alt="Hero background"
                    className="hero-bg"
                />
                {/* Carousel Dots */}
                <div className="carousel-dots">
                    {heroImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === current ? "active" : ""}`}
                            onClick={() => setCurrent(idx)}
                        ></span>
                    ))}
                </div>

                {/* SVG-1: Top left corner */}
                <img src="/svg-1.png" alt="" className="svg svg-1-corner" />

                {/* SVG-2: Bottom right of the Get In Touch card */}
                <img src="/svg-2.png" alt="" className="svg svg-2-corner" />

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
                    {/* Mobile menu toggle */}
                    <div className="mobile-menu-toggle" onClick={() => {
                        document.querySelector('.mobile-menu').classList.toggle('active');
                        document.querySelector('.mobile-menu-overlay').classList.toggle('active');
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                {/* Mobile menu overlay */}
                <div className="mobile-menu-overlay" onClick={() => {
                    document.querySelector('.mobile-menu').classList.remove('active');
                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                }}></div>

                {/* Mobile menu */}
                <div className="mobile-menu">
                    <div className="mobile-menu-close" onClick={() => {
                        document.querySelector('.mobile-menu').classList.remove('active');
                        document.querySelector('.mobile-menu-overlay').classList.remove('active');
                    }}></div>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={location.pathname === "/" ? "active-link" : ""}
                                onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}
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
                                <li><Link to="/portfoliodetail" className={location.pathname.startsWith("/portfolio") ? "active-link" : ""} onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}>PORTFOLIO DETAILS</Link></li>
                                <li><Link to="/services" onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}>SERVICE DETAILS</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "active-link" : ""}
                                onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}
                            >
                                PORTFOLIO <FaCircle className="nav-dot" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={location.pathname === "/blog" ? "active-link" : ""}
                                onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}
                            >
                                BLOG <FaCircle className="nav-dot" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "active-link" : ""}
                                onClick={() => {
                                    document.querySelector('.mobile-menu').classList.remove('active');
                                    document.querySelector('.mobile-menu-overlay').classList.remove('active');
                                }}
                            >
                                CONTACT US <FaCircle className="nav-dot" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hero background image */}
                <div className="hero-bg-wrapper">
                    {/* Carousel Dots */}
                    <div className="carousel-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                {/* Hero content overlay */}
                <div className="hero-content">
                    <div className="hero-label">BELIEVE IN QUALITY!</div>
                    <h1>
                        Quality Trust:<br /> Direct to the Farm
                    </h1>
                    <hr />
                    <p>
                        We all need a little space to grow. Give yourself the space you need to find your inner you.
                    </p>
                    <Link to="/contact" className="link-btn"><button className="hero-btn">
                        Contact Us <span className="hero-btn-arrow">↗</span>
                    </button></Link>
                </div>
            </section>

            <section id="stats">
                <StatsCard stats={{ title: 'Professional Farmers', icon: '/stats-icon.png', desc: 'Experienced and dedicated farmers at your service.' }} />
                <StatsCard stats={{ title: 'Fresh Vegetables', icon: '/stats-icon1.png', desc: 'Locally sourced, organic vegetables delivered fresh.' }} />
                <StatsCard stats={{ title: 'Agriculture Products', icon: '/stats-icon2.png', desc: 'High-quality agricultural products for your needs.' }} />
                <StatsCard stats={{ title: '100% Guaranteed', icon: '/stats-icon3.png', desc: 'Satisfaction guaranteed or your money back.' }} />
            </section>

            <section id="about">
                <div className="about-left">
                    <img src="/about.png" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-title">
                        <div>
                            <img src="/about-icon.png" alt="" />
                        </div>
                        <h4>Who We Are</h4>
                    </div>
                    <h1>Currently we are growing<br />and selling organic food</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.
                    </p>
                    <div className="about-bottom">
                        <div>
                            <img src="/about-bottom1.png" alt="" />
                            <h4>Eco Farms Worldwide</h4>
                            <p>
                                There are many variations of passages of lorem ipsum available
                                majority have suffered.
                            </p>
                        </div>
                        <div>
                            <img src="/about-bottom2.png" alt="" />
                            <h4>Special Equipment</h4>
                            <p>
                                There are many variations of passages of lorem ipsum available
                                majority have suffered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services-stats">
                <div className="services-stats-track">
                    {[
                        "Services",
                        "Agriculture",
                        "Farming",
                        "Organic",
                        "Vegetables",
                        "Services",
                        "Agriculture",
                        "Farming",
                        "Organic",
                        "Vegetables",
                    ].map((item, index) => (
                        <span key={index} className="services-stats-item">
                            {item}
                            <span className="services-stats-sep">
                                <img src="/services-stats.png" alt="*" />
                            </span>
                        </span>
                    ))}
                </div>
            </section>

            <section id="services" aria-label="Services">
                {/* decorative bottom artwork (kept in CSS as background, but keep img for fallback if needed) */}
                <div className="services-bg" aria-hidden />

                <div className="services-content">
                    <div className="top">
                        <div className="left">
                            <div className="test-title">
                                <div className="test-title-icon">
                                    <img src="/about-icon.png" alt="about" />
                                </div>
                                <h4>Our Services</h4>
                            </div>

                            <h1 className="services-heading">Best Agriculture Services</h1>
                        </div>

                        <div className="services-controls" aria-hidden>
                            <button className="serv-control-btn prev" title="Previous">
                                ‹
                            </button>
                            <button className="serv-control-btn next" title="Next">
                                ›
                            </button>
                        </div>
                    </div>

                    <div className="services-bottom">
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
                                img: "/service2.png",
                                label: "FRUITS",
                                title: "Farming Products",
                                desc: "Farming and animal husbandry and discuss with farmers and scientists."
                            }}
                        />

                        <ServCard
                            serv={{
                                img: "/service3.png",
                                label: "FERTILIZER",
                                title: "Soil Fertilization",
                                desc: "Farming and animal husbandry and discuss with farmers and scientists."
                            }}
                        />
                    </div>
                </div>
            </section>

            <section id="products">
                <div className="product-title">
                    <div>
                        <img src="/about-icon.png" alt="" />
                    </div>
                    <h4>Grow Naturally</h4>
                </div>
                <h1>Choose What's Perfect
                    For Your Field</h1>
                <div className="product-content">
                    <div className="product-left">
                        <div className="product-card">
                            <div>
                                <img src="/prod-card1.png" alt="" />
                            </div>
                            <div>
                                <h4>Agriculture Products</h4>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                        <div className="product-card">
                            <div>
                                <img src="/prod-card2.png" alt="" />
                            </div>
                            <div>
                                <h4>Quality Products</h4>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-middle">
                        <img src="/product-img.png" alt="" />
                    </div>
                    <div className="product-right">
                        <div className="product-card">
                            <div>
                                <img src="/prod-card3.png" alt="" />
                            </div>
                            <div>
                                <h4>Fresh Vegetables</h4>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                        <div className="product-card">
                            <div>
                                <img src="/prod-card4.png" alt="" />
                            </div>
                            <div>
                                <h4>Pure & Organic</h4>
                                <p>Nullam porta enim vel tellus commodo,
                                    eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="images">
                <ImagesCarousel />
            </section>

            <section id="testimonial" className="testimonial-section">
                <div className="test-top">
                    <div className="test-top-left">
                        <div className="test-title">
                            <div className="test-title-icon">
                                <img src="/about-icon.png" alt="about" />
                            </div>
                            <h4>Testimonials</h4>
                        </div>
                        <h1 className="test-heading">What our customers say</h1>
                    </div>
                    <div className="test-controls" aria-hidden>
                        <button className="control-btn prev" title="Previous">
                            ‹
                        </button>
                        <button className="control-btn next" title="Next">
                            ›
                        </button>
                    </div>
                </div>

                <div className="test-bottom">
                    {cards.map((c, i) => (
                        <TestCard
                            key={i}
                            test={{
                                text: c.text,
                                name: c.name,
                                role: c.role,
                                image: c.image,
                                bgImage: "/white-shape.png",
                                quoteIcon: "/quote-icon.png",
                                rating: 5
                            }}
                        />
                    ))}
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

            <section id="serv2">
                {/* Background Image */}
                <img src="/serv2.png" alt="field background" className="serv2-bg" />

                {/* Right side (yellow block) */}
                <div className="serv2-right">
                    <img src="/serv2-bg.png" alt="pattern" className="serv2-pattern" />

                    <div className="serv2-content">
                        <div className="serv2-title">
                            <div className="serv2-title-icon">
                                <img src="/about-icon.png" alt="about" />
                            </div>
                            <h4>What We Do</h4>
                        </div>

                        <h1>Healthy life with fresh <br /> products</h1>

                        <p>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even.
                        </p>

                        <div className="serv2-bottom">
                            <div className="serv2-circle">
                                <div className="circle-img">
                                    <img src="/serv-outer1.png" alt="outer" className="outer" />
                                    <img src="/serv-inner1.png" alt="inner" className="inner" />
                                </div>
                                <h4>
                                    Eco Farms <br /> Worldwide
                                </h4>
                            </div>

                            <div className="serv2-circle">
                                <div className="circle-img">
                                    <img src="/serv-outer2.png" alt="outer" className="outer" />
                                    <img src="/serv-inner2.png" alt="inner" className="inner" />
                                </div>
                                <h4>
                                    Special<br />Equipment
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="history">
                <div className="history-title">
                    <div className="history-title-icon">
                        <img src="/about-icon.png" alt="about" />
                    </div>
                    <h4>Our History</h4>
                </div>
                <div className="hist-top">
                    <h1>Farming have been since <br />
                        1866</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.</p>
                </div>
                <div className="hist-bottom">
                    <div className="hist-card">
                        <img src="/hist1.png" alt="" />
                        <h4>Open my Farm</h4>
                        <p>Corrupti ut consequatur magni minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                    </div>
                    <div className="hist-card">
                        <img src="/hist2.png" alt="" />
                        <h4>Farm Remodelacion</h4>
                        <p>Majority have suffered alteration in
                            some form by injected humor culpa
                            odio temporibus.</p>
                    </div>
                    <div className="hist-card">
                        <img src="/hist3.png" alt="" />
                        <h4>Grainfarmers Formed</h4>
                        <p>Always parties but trying she shewing
                            of moment minus Velit ratione hic
                            corporis veritatis odit.</p>
                    </div>
                    <div className="hist-card">
                        <img src="/hist4.png" alt="" />
                        <h4>Start of Agriculture</h4>
                        <p>Consequatur magni Corrupti ut minus!
                            Iusto eos consectetur similique minus
                            culpa odio temporibus.</p>
                    </div>
                </div>
            </section>

            <section id="discover">
                {/* Background + Overlay */}
                <img src="/disc-bg.png" alt="background" className="disc-bg" />
                <img src="/disc-overlay.png" alt="overlay" className="disc-overlay" />

                {/* Content */}
                <div className="discover-content">
                    <div className="disc-left">
                        <img src="/prod-card1.png" alt="icon" className="disc-icon" />
                        <h1>
                            We’re popular leader in <br />
                            agriculture market globally
                        </h1>
                    </div>

                    <div className="disc-right">
                        <Link to="/services" className="link-btn"><button className="disc-btn">
                            Discover More <span className="hero-btn-arrow">↗</span>
                        </button></Link>
                    </div>
                </div>
            </section>


            <section id="blog">
                <div className="blog-top">
                    <div className="blog-top-left">
                        <div className="blog-title">
                            <div className="blog-title-icon">
                                <img src="/about-icon.png" alt="about" />
                            </div>
                            <h4>Latest Blog</h4>
                        </div>
                        <h1 className="blog-heading">Latest posts & articles</h1>
                    </div>
                    <div className="blog-controls" aria-hidden>
                        <Link to="/blog" className="link-btn"><button className="control-btn prev" title="Previous">
                            ‹
                        </button></Link>
                        <Link to="/blog" className="link-btn"><button className="control-btn next" title="Next">
                            ›
                        </button></Link>
                    </div>
                </div>

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
                </div>

            </section>

            <Footer />
        </>

    );
};

export default Home;
