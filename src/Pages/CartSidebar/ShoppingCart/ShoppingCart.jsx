import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import "./ShoppingCart.css";
import cartIcon from "../../../Assets/Vectorrr.png";

const ShoppingCart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const getProductImage = (id) => {
    try {
      return require(`../../../Assets/Shop/image${id}.png`);
    } catch (error) {
      return require("../../../Assets/OurProducts/Leviosa.png"); 
    }
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  const handleItemClick = (itemId) => {
    navigate(`/product/${itemId}`); 
  };

  if (!isOpen) return null;

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>
          Shopping Cart
          <img
            src={cartIcon}
            alt="Cart Icon"
            className="cart-icon"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
              marginLeft: "110px",
            }}
          />
        </h2>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
      <hr />

      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <div 
            className="cart-item" 
            key={item.id} 
            onClick={() => handleItemClick(item.id)} 
          >
            <img
              className="cart-item-image"
              src={getProductImage(item.id)} 
              alt={item.name}
            />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>
                {item.quantity} x &nbsp; Rs. {item.price.toLocaleString()}
              </p>
            </div>
            <button className="remove-item" onClick={(e) => {
              e.stopPropagation();
              removeItem(item.id);
            }}>
              ×
            </button>
          </div>
        ))
      )}

      <div className="subtotal">
        <h3>Subtotal:</h3>
        <p>Rs. {totalAmount.toLocaleString()}</p>
      </div>
      <hr />
      <div className="cart-buttons">
        <button className="cart-btn" onClick={() => navigate("/cart")}>
          Cart
        </button>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>
        <button className="compare-btn">Comparison</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
