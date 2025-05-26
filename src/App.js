import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import './App.css';

import NavbarHome from './MainComponents/NavbarHome';
import HomeHeroSection from  './MainComponents/HomeHeroSection';
import AboutUS from './MainComponents/AboutUS';
import ProductCategories from './MainComponents/ProductCategories';

import FAQNavbar from './MainComponents/FAQNavbar';
import FAQHeadingSection from './MainComponents/FAQHeadingSection';
import FAQContent from './MainComponents/FAQContent';

import SearchNavbar from './MainComponents/SearchNavbar';
import Cart from './MainComponents/Cart';
import ProductsList from './MainComponents/ProductsList';
import Filter from './MainComponents/Filter';

import ContactUsHeading from './MainComponents/ContactUsHeading';
import ContactUsMain from './MainComponents/ContactUsMain';

import Footer from './MainComponents/Footer';

export default function App() {

  const [isCartOpen, setIsCartOpen] = useState(false); 

  const [products, setProducts] = useState([]);
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart && savedCart !== "undefined" ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "",
    maxPrice: "",
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) { // Only save if cart has items
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); // Clear storage when cart is empty
    }
  }, [cart]);


  useEffect(() => {
    fetch("http://localhost:5000/api/products")

      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data); 
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const filterProducts = () => {
    let filtered = [...products];

    if (filters.category !== "all") {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.minPrice !== "") {
      filtered = filtered.filter((product) => product.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice !== "") {
      filtered = filtered.filter((product) => product.price <= parseFloat(filters.maxPrice));
    }

    setFilteredProducts(filtered);
  };

  // Ensure state updates correctly when the filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
        updatedCart = cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);

    // Send updated cart data to backend
    fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
    });
};


  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const changeQuantity = (index, amount) => {
    const newCart = [...cart];
    if (newCart[index].quantity + amount > 0) {
      newCart[index].quantity += amount;
      setCart(newCart);
    } else {
      removeFromCart(newCart[index].id);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear cart from local storage
  };

  const toggleCart = () => {
    console.log("Cart button clicked");
    setIsCartOpen((prev) => !prev);
    console.log("isCartOpen:", isCartOpen);
  };

  return (
    <BrowserRouter>

            {isCartOpen && (
                <Cart
                  cartItems={cart}
                  toggleCart={toggleCart}
                  changeQuantity={changeQuantity}
                  clearCart={clearCart}
                />
              )}

      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <NavbarHome toggleCart={toggleCart} cartCount={cart.length} />
              <HomeHeroSection />
              <AboutUS />
              <ProductCategories />
              <Footer/>
            </>
          }
        />

        <Route
          exact path="/faq"
          element={
            <>
              <FAQNavbar toggleCart={toggleCart} cartCount={cart.length} />
              <HomeHeroSection />
              <FAQHeadingSection />
              <FAQContent />
              <Footer/>
            </>
          }
        />   

        <Route
          exact path="/search"
          element={
            <>
              <SearchNavbar toggleCart={toggleCart} cartCount={cart.length} />

              <Filter
                filters={filters}
                setFilters={setFilters}
                filterProducts={filterProducts}
              />
              <ProductsList products={filteredProducts} addToCart={addToCart} />
              <Footer/>
            </>
          }
        />

        <Route
          exact path="/contact-us"
          element={
            <>
              <FAQNavbar toggleCart={toggleCart} cartCount={cart.length} />
              <HomeHeroSection />
              <ContactUsHeading/>
              <ContactUsMain/>

              <Footer/>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
