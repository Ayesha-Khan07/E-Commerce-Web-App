import React from 'react';
import './styles/home.css';
import './styles/faq.css';

export default function FAQContent(){
    const faqs = [
        {
          id: "One",
          question: "How do I place an order on EliteWear?",
          answer:
            "Placing an order is simple! Browse our collection, select your favorite items, choose the right size, and add them to your cart. Once you’re ready, proceed to checkout, fill in your shipping details, and complete the payment. You’ll receive an order confirmation email shortly.",
        },
        {
          id: "Two",
          question: "What are your shipping charges and delivery times?",
          answer:
            "Shipping charges vary based on your location and order value. We offer free shipping on orders above a certain amount. Delivery typically takes 3-7 business days depending on your location.",
        },
        {
          id: "Three",
          question: "What is your return and exchange policy?",
          answer:
            "We accept returns and exchanges within 7 days of delivery. Items must be unused, in original packaging, and with tags attached. To initiate a return, contact our support team with your order details.",
        },
        {
          id: "Four",
          question: "Can I cancel or modify my order after placing it?",
          answer:
            "You can cancel or modify your order within 24 hours of placing it. Once your order is processed and shipped, cancellation is not possible.",
        },
        {
          id: "Five",
          question: "Can I delete products from my cart?",
          answer: "Yes, you can change the cart. You can do this by simply removing item from the cart.",
        },
        {
          id: "Six",
          question: "Are your products sustainable and eco-friendly?",
          answer:
            "At EliteWear, we are committed to sustainability. Many of our products are made from eco-friendly materials and are sourced ethically. Check the product description for details.",
        },
        {
          id: "Seven",
          question: "Do you restock sold-out items?",
          answer:
            "Yes, we frequently restock popular items. You can sign up for restock notifications on the product page to get an alert when your favorite item is back in stock.",
        },
      ];

    return(
    <>
    <section id="faq" style={{ paddingTop: "0px" }}>
      <div className="container-lg" style={{ maxWidth: "1900px" }}>
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center d-none d-md-block">
            <img src="images/faq-mus-1.png" className="img-fluid" alt="eshop" />
          </div>
          <div className="col-md-5 text-center text-md-start">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}