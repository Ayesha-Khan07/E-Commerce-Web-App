import React from "react";
import './styles/home.css'; 

export default function HomeAboutUS(){
  const shopNowStyle = {
    backgroundColor: '#f5c61d',
    color:'#000',
    border: 'none',
    fontSize:'large',
    fontWeight: 'bold',
  };
      return(
        <> 
        <section id="intro" style={{paddingTop: '8px'}}>
        <div className="container-lg">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
            <h2>
                <div className="display-6 fw-bold">ABOUT US</div>
            </h2>
            <h5>
                <div className="display-12 text-muted"> <em>Fashion legacy beyond a decade</em> </div>
            </h5>
              <p className="lead my-4 ">At <span style={{fontWeight:'bold'}}>EliteWear</span>, your trust is our top priority. We are committed to providing a seamless and secure shopping experience with high-quality, trendy designs that keep you ahead of the fashion game. With secure payment options, reliable customer support, and a hassle-free return policy, we ensure that you shop with confidence and peace of mind. Whether you're looking for the latest styles or timeless classics, we bring you fashion that’s not just stylish but also trustworthy. Your satisfaction is at the heart of everything we do!" 🛍️✨
              </p>
              <a href="/search" className="btn btn-mustard btn-lg" style={shopNowStyle}
               onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f6b30a"; 
                e.target.style.color = "#716e6e";
              }}

               onMouseLeave={(e) => {
               e.target.style.backgroundColor = "#f5c61d"; 
               e.target.style.color = "black";}}>
                        Shop Now
                </a>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
             <img src='/images/home-section.jpg' className="img-fluid" alt="EliteWear Store" />
            </div>
          </div>
        </div>
    </section>
    </>
    );
};
