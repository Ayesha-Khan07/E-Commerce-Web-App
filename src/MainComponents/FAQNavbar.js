import React from 'react';
import './styles/home.css';
import './styles/faq.css';

export default function FAQNavbar({toggleCart, cartCount}){
    return(
        <>
       <nav className="navbar navbar-expand-md navbar-light pt-4 pb-2 mt-9 shadow-lg" id="faqs-nav-bar">
                <div className="container-xxl">
                    <a className="navbar-brand" href="/">
                        <img className="logo-img" src="/images/logo2.jpg" alt="Website Logo" />
                        <span className="fw-bold" id="brand-name">EliteWear</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" id="faq-nav">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search" id="cat">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us" id="contact-us">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#intro" id="abt">About Us</a>
                            </li>
                            <li className="nav-item">
                              <button className="ms-2 d-none d-md-inline" onClick={toggleCart} style={{ border: "none", backgroundColor: "white" }}>
                                 <i className="bi bi-bag-fill" style={{ color: "#f5c61d", fontSize: "1.6em" }}></i>
                                 <sup style={{ fontWeight: "bold", fontSize: "18px" }}>[{cartCount}]</sup>
                               </button>
                                 { console.log("Cart Count in Navbar:", {cartCount})}
                             </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
  );
}