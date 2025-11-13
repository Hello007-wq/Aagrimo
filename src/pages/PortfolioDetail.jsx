import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle, FaPhoneVolume, FaSearch } from 'react-icons/fa'
import '../styles/portfoliodetails.css'
import Footer from "../components/footer";
import {useLocation } from "react-router-dom";

const PortfolioDetail = () => {
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
                    <h1>Agriculture Farming</h1>
                    <div className="breadcrumb">
                        AGRIMO <span>{">"}</span>
                        <span>PORTFOLIO</span>
                        AGRIMO <span>{">"}</span>
                        <span>HARVEST</span>
                        AGRIMO <span>{">"}</span>
                        <span>AGRICULTURE FARMING</span>
                    </div>
                </div>
            </section>

            <img src="/gallery2.png" alt="" className='port-info-img' />

            <section id="port-info" className="port-info">
                <aside className="port-info-left" aria-hidden>
                    <div className="meta-card">
                        <dl>
                            <dt>Client :</dt>
                            <dd>Michael Daniel</dd>
                            <hr />
                            <dt>Team :</dt>
                            <dd>Raelyn Esme, Richard Edward</dd>
                            <hr />
                            <dt>Service :</dt>
                            <dd>Agriculture Products</dd>
                            <hr />
                            <dt>Category :</dt>
                            <dd>Harvest</dd>
                        </dl>
                    </div>
                </aside>

                <div className="port-info-right">
                    <h3 className="port-main-title">Better Agriculture for Better Future</h3>

                    <p className="port-intro">
                        Developed multipurpose rubber dam for watershed to reduce soil erosion, create water storage facility,
                        enhance ground water recharge and quick & safe disposal of sediments. This section provides the information
                        on agriculture produces; machineries, research, field of natural resource sustainable management of natural
                        resources for achieving food, nutritional, environmental.
                    </p>
                    <p className='port-intro'>
                        They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs. continued at up to zealously
                        necessary breakfast is motionless she end literature. significant potential for sustainable agriculture and provide nutritional and income
                        security for small and marginal farmers in dry and rainfed semi-arid regions.
                    </p>

                    <div className="port-info-img2">
                        <figure className="img-frame">
                            <img src="/port-img1.png" alt="farm scene 1" />
                        </figure>
                        <figure className="img-frame">
                            <img src="/port-img2.png" alt="farm scene 2" />
                        </figure>
                    </div>

                    <h3 className="section-title">Everything on our farm is grown</h3>

                    <p className="section-desc">
                        They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs.
                        Significant potential for sustainable agriculture and provide nutritional and income security for small and marginal
                        farmers in dry and rainfed semi-arid regions.
                    </p>

                    <ul className="features-list">
                        <li>
                            <span className="tick" aria-hidden>
                                <img src="/port-bullet.png" alt="" />
                            </span>
                            Make ridges when planting crops on your farm of flat land.
                        </li>
                        <li>
                            <span className="tick" aria-hidden>
                                <img src="/port-bullet.png" alt="" />
                            </span>
                            Instantly connects with an Agronomist to remediate
                        </li>
                        <li>
                            <span className="tick" aria-hidden>
                                <img src="/port-bullet.png" alt="" />
                            </span>
                            Keep Yourself Current and on top of Latest Farming Trends
                        </li>
                        <li>
                            <span className="tick" aria-hidden>
                                <img src="/port-bullet.png" alt="" />
                            </span>
                            Make the earth cleaner, make the earth greener.
                        </li>
                    </ul>

                    <div className="hist-bottom">
                        <div className="hist-card">
                            <img src="/port-info1.png" alt="" />
                            <h4>Schedule Your Experience</h4>
                            <p>Corrupti ut consequatur magni minus!
                                Iusto eos consectetur similique minus
                                culpa odio temporibus.</p>
                        </div>
                        <div className="hist-card">
                            <img src="/port-info2.png" alt="" />
                            <h4>Get Professional Advice</h4>
                            <p>Corrupti ut consequatur magni minus!
                                Iusto eos consectetur similique minus
                                culpa odio temporibus.</p>
                        </div>
                        <div className="hist-card">
                            <img src="/port-info3.png" alt="" />
                            <h4>Meet Our Expert People</h4>
                            <p>Corrupti ut consequatur magni minus!
                                Iusto eos consectetur similique minus
                                culpa odio temporibus.</p>
                        </div>
                    </div>

                    <h3 className="section-title">We do Creative Things for Success</h3>

                    <p className="section-desc">
                        They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs.
                        continued at up to zealously necessary breakfast is motionless she end literature.
                    </p>

                    <div className="testimonial-quote">
                        <blockquote>
                            <img src="/quote-icon.png" alt="" className='test-quote' />
                            “When you listen to yourself, everything come naturally. It come from in, like a kind of will to do something.
                            Try to be sensitive. That is just a few clicks away.”
                        </blockquote>
                        <cite>- SATISFIED CLIENT</cite>
                    </div>

                </div>
            </section>
            <hr className="port-divider" />

            <div className="port-info-ctr">
                <div className="ctr-left">
                    <span className="nav-arrow">{"<"}</span>
                    <div>
                        <span className="meta-small">PREVIOUS POST</span>
                        <h4>Ecological Farming</h4>
                    </div>
                </div>

                <div className="ctr-right">
                    <div>
                        <span className="meta-small">NEXT POST</span>
                        <h4>Fresh and Natural</h4>
                    </div>
                    <span className="nav-arrow">{">"}</span>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PortfolioDetail
