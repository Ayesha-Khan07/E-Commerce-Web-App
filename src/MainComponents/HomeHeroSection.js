import React from 'react';
import './styles/home.css';

export default function HomeHeroSection(){
    const backgroundImageStyle = {
        backgroundImage: `url('images/background1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:' 50px',
    }
    return (
        <div>
            <section style={{paddingTop: '0px'}}>
                 <div className="bg-image text-center shadow-1-strong rounded mb-5 text-white" style={backgroundImageStyle}>

                     <h1 className="mb-3 h1 fw-bold" style={{ fontSize: '56px' , color:'white'}}>EliteWear</h1>
                     <p className="bg-img-text"> EliteWear – Redefining Fashion with Elegance </p>
                     <p className="bg-img-text">Discover trendsetting styles crafted for comfort and confidence. </p>  
                     <p className="bg-img-text">Upgrade your wardrobe with premium quality and timeless designs. </p>
        </div>
    </section>
        </div>
    );
}