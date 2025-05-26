import "./styles/home.css";
import "./styles/search.css";
import { useState, useEffect } from "react";

export default function Cart({ cartItems, toggleCart, changeQuantity, clearCart }) {
  const plusMinusBtns = {
    backgroundColor: '#f5c61d',
    color:'#000',
    border: 'none',
    fontSize:'large',
    fontWeight: 'bold',
  };

  useEffect(() => {
    console.log("Cart component mounted");
  }, []);

  console.log("Received cartItems in Cart:", {cartItems});

  const deliveryCharge = 10;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = cartItems.length > 0 ? subtotal + deliveryCharge : 0;

  return (
    <div id="cart" className="cart shadow-lg position-fixed end-0 top-0 p-3" style={{ visibility: "visible", width: "300px", background: "white" }}>
      <em>
        <h3 className="fw-bold">Your Shopping Cart</h3>
      </em>
      <ul className="list-group">
        {cartItems.length === 0 ? (
          <li className="list-group-item" style={{marginBottom:"320px", marginTop:"8px"}}>Cart is empty</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <img src={item.image} width="40" className="me-2" alt={item.title} />
              <div className="flex-grow-1">
                <span className="d-block">{item.title}</span>
                <span className="d-block fw-bold">${item.price.toFixed(2)}</span>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-sm btn-mustard" onClick={() => changeQuantity(index, -1)} style={plusMinusBtns}>➖</button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button className="btn btn-sm btn-mustard" onClick={() => changeQuantity(index, 1)} style={plusMinusBtns}>➕</button>
              </div>
            </li>
          ))
        )}
        <li className="list-group-item d-flex justify-content-between">
          <strong>Subtotal:</strong>
          <span>${subtotal.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <strong>Delivery Charges:</strong>
          <span>${cartItems.length > 0 ? deliveryCharge.toFixed(2) : "0.00"}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light fw-bold">
          <strong>Total:</strong>
          <span>${total.toFixed(2)}</span>
        </li>
      </ul>
      <button className="btn btn-mustard mt-3 w-100" onClick={clearCart}>Clear Cart</button>
      <button className="btn btn-danger w-100 mt-2" onClick={toggleCart}>Close</button>
    </div>
  );
}
