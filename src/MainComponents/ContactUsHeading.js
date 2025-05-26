import React from 'react';
import './styles/home.css';
import './styles/faq.css';

export default function ContactUsHeading(){
    return(
        <>
      <section style={{ paddingTop: "0px" }}>
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-7 text-center text-md-start">
            <h2 className="products-category">Contact US</h2>
            <h4 className="product-cat-line">
              <em>Want to ask something? Contact US</em>
            </h4>
          </div>
        </div>
      </div>
    </section>
    </>
    );
}