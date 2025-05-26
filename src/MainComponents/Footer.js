import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-md-4">
            <h5 className="fw-bold">EliteWear</h5>
            <p>Your one-stop shop for all your needs. Quality products, best prices! Wear the Trend, Own the Moment</p>
            <p>Find interesting and trendy clothes that define your style.Your one-stop shop for all your needs.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="/search" className="text-white text-decoration-none">Search</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><FaFacebook size={22} /></a>
              <a href="#" className="text-white"><FaTwitter size={22} /></a>
              <a href="#" className="text-white"><FaInstagram size={22} /></a>
              <a href="#" className="text-white"><FaLinkedin size={22} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} EliteWear. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
