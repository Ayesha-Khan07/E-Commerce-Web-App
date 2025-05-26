import React from 'react';
import './styles/home.css';
import './styles/faq.css';

export default function FAQHeadingSection(){
    return(
        <>
      <section style={{ paddingTop: "0px" }}>
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 text-center text-md-start">
            <h2 className="products-category">Frequently Asked Questions</h2>
            <h4 className="product-cat-line">
              <em>Got Questions? Explore Our FAQs</em>
            </h4>
            <p className="product-cat-description">
              We've got answers! Explore our FAQ section for everything you need to know about orders, shipping, returns, and more. Your convenience is our priority!
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    );
}