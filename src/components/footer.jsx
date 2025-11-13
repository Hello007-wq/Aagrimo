import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP YELLOW BAR */}
      <div className="footer-top">
        <div className="footer-top-inner">
          <ul className="footer-menu">
            <li>FARMERS</li>
            <li>ORGANIC</li>
            <li>FOODS</li>
            <li>PRODUCT</li>
          </ul>

          <div className="footer-contacts">
            <div className="contact-item">
              <img src="/footer-icon1.png" alt="phone" />
              <p>+1(212) 255-511</p>
            </div>
            <div className="contact-item">
              <img src="/footer-icon2.png" alt="email" />
              <p>noreply@pbminfotech.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN WHITE SECTION */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-left">
            <img src="/footer-logo.png" alt="Grimo logo" className="footer-logo" />
            <p>
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
              In vitae sapien viverra est Duo ei ullum inani senserit.
            </p>

            <div className="footer-socials">
              <img src="/social-1.png" alt="facebook" />
              <img src="/social-2.png" alt="twitter" />
              <img src="/social-3.png" alt="linkedin" />
              <img src="/social-4.png" alt="instagram" />
            </div>
          </div>

          <div className="footer-right">
            <h1>
              Professional & modern, a theme designed to help your business stand out
              from the rest.
            </h1>

            <div className="footer-links">
              <div>
                <h4>Useful Link</h4>
                <ul>
                  <li>Company</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4>Working Time</h4>
                <ul>
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>

              <div>
                <h4>Our Address</h4>
                <p>
                  Old Westbury 256, New York
                  <br />
                  11201, United States
                </p>
              </div>
            </div>

            <hr />

            <div className="footer-policy">
              <div>
                <a href="#">Terms & Conditions</a> |{" "}
                <a href="#">Privacy Policy</a>
              </div>
              <p>Copyright © 2024 Agrimo, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
