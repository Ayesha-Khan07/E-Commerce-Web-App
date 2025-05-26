import React from "react";
import './styles/home.css'; 
import {FaPhone, FaEnvelope,FaWhatsapp,FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


export default function ContactUsMain(){
    return(
        <section id="intro" style={{paddingTop: '8px'}}>
        <div className="container-lg">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <p className="lead my-4 ">We<span style={{fontWeight:'bold'}}>&nbsp; EliteWear</span> We've got answers! Contact US for everything you need to know about orders, shipping, returns, and more. Your convenience is our priority!
              </p>
              <p className="lead">You can contact us on given below number and mail for customer support</p>
              
              <div className="text-md-start">
              <p className="lead fw-bold"><FaPhone size={22} />&nbsp; (042)-896754321</p>
              <p className="lead fw-bold"><FaEnvelope size={22} /> &nbsp;EliteWear.customers@gmail.com</p>
              <p className="lead fw-bold"><FaWhatsapp size={22} />&nbsp; +92-055782915</p>
              <p className="lead fw-bold"><FaMapMarkerAlt size={22} />&nbsp; Johar Town, Lahore</p>
              </div>              
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
            <motion.img 
                 src='/images/ContactUs.png' 
                 className="img-fluid contact-img" 
                 alt="EliteWear Store"
                 initial={{ scale: 0.8, opacity: 0 }} 
                 animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
            />
            </div>
          </div>
        </div>
    </section>
    );
}