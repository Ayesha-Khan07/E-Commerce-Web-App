import React from 'react';
import './styles/home.css';

export default function ProductCategories() {
    const addToCartStyle = {
        backgroundColor: '#f5c61d',
        color:'#000',
        border: 'none',
        fontSize:'large',
      };

    const productsCat = [
        {title: "Jeans", 
        description: "Trendy, comfortable, and tailored for every occasion. Find your perfect fit in our premium collection! Wear and raise your standard",
        imgUrl: "/images/jeans2.jpg"
    },
    {
        title: "Shirts",
        description: "Stylish, versatile shirts, and designed for all-day comfort. Upgrade your wardrobe with our latest collection!",
        imgUrl: "/images/shirts2.jpg"
    },
    {
        title: "Winter Coats",
        description: "Stay warm in style with our cozy, high-quality coats, perfect for chilly days, Find your perfect fit! Wear casually.",
        imgUrl: "/images/winter_coat.jpg"
    },
    {
        title: "Jewelery",
        description: "Trendy, comfortable, and tailored for every occasion. Find your perfect fit in our premium collection! Wear the prime jewlery and behave royal",
        imgUrl: "/images/jewelery.jpg"
    }
    ]    
    return (
        <>
            <section id="cat-section">
                <div className="container-lg">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7 text-center text-md-start">
                            <h2 className="products-category">Top 4 Products</h2>
                            <h4 className="product-cat-line"><em>Wear the Trend, Own the Moment</em></h4>
                            <p className="product-cat-description">
                                Find interesting and trendy clothes that define your style. Step out with confidence, embrace the latest styles.
                                Elevate your wardrobe with pieces that speak to your personality and let you shine effortlessly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-lg mt-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {productsCat.map((product, index) => (
                            <div className="col" key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={product.imgUrl} className="card-img-top" alt={product.title} />
                                    <div className="card-body text-start">
                                        <h5 className="card-title" style={{ fontWeight: 'bold' }}>{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <a href="/search" className="btn btn-mustard btn-lg" style={addToCartStyle}
                                        onClick={(e) => e.preventDefault()} 
                                        onMouseEnter={(e) => {
                                         e.target.style.backgroundColor = "#f6b30a"; 
                                       }}
                                       onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "#f5c61d"; 
                                        e.target.style.color = "black";
                                        e.target.style.fontWeight="none";}}>
                                        Shop Now
                                      </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
