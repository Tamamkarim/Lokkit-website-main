import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer_section_padding">
        <div className="footer_links_col">
          <div className="footer_links-div">
            <h4>For Business</h4>
            <Link to="/marketing" className="footer-links">
              Marketing
            </Link>
            <Link to="/consulting" className="footer-links">
              Consulting
            </Link>
            <Link to="/design" className="footer-links">
              Design
            </Link>
          </div>
          <div className="footer_links-div">
            <h4>For Business</h4>
            <Link to="/marketing" className="footer-links">
              Marketing
            </Link>
            <Link to="/consulting" className="footer-links">
              Consulting
            </Link>
            <Link to="/design" className="footer-links">
              Design
            </Link>
          </div>
          <div className="footer_links-div">
            <h4>For Business</h4>
            <Link to="/marketing" className="footer-links">
              Marketing
            </Link>
            <Link to="/consulting" className="footer-links">
              Consulting
            </Link>
            <Link to="/design" className="footer-links">
              Design
            </Link>
          </div>
          <div className="footer_links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <Link to="/" className="footer-links">
                Facebook
                <i className="fa-brands fa-square-facebook"></i>
              </Link>
              <Link to="/" className="footer-links">
                Facebook
                <i className="fa-brands fa-square-facebook"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>@{new Date().getFullYear()} </p>
          </div>
          <div className="footer-below-links">
            <a href="/">Term & Conditions</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
