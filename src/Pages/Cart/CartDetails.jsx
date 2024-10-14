import React, { useContext, useEffect, useState } from "react";
import { TbTrashFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartDetails.css";

import productsData from "../../Data/products.json"; 

import defaultImage from "../../Assets/OurProducts/Leviosa.png";

export default function CartDetails() {
  const { cartItems, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(productsData)) {
      setProducts(productsData);
    } else {
      console.error("The data imported is not an array:", productsData);
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const findProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <div className="Main-cartContainer">
      <div className="cart-content">
        <div className="cart-Product">
          <div className="cart-nav">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const product = findProductById(item.id);
              return (
                <div key={item.id} className="cart-product-details">
                  <div className="image-designing">
                    <img
                      src={
                        product && product.images && product.images.length > 0
                          ? require(`../../Assets/OurProducts/${product.images[0]}`).default
                          : defaultImage 
                      }
                      alt={product?.name || "Product Image"}
                      className="cart-product-image"
                    />
                  </div>

                  <span className="cart-span">
                    {product?.name || "No title available"}
                  </span>

                  <span className="cart-pricing">
                    Rs. {product?.price.toLocaleString()}
                  </span>
                  <span className="cart-quantity">{item.quantity}</span>
                  <span className="cart-subtotal">
                    Rs. {(product?.price * item.quantity).toLocaleString()}
                  </span>

                  <TbTrashFilled
                    className="trash-icon"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              );
            })
          ) : (
            <div className="empty-cart">Your cart is empty</div>
          )}
        </div>


        <div className="cart-Total" id="totalall">
          <div className="cart-heading">
            <span>Cart Totals</span>
          </div>

          <div className="cart-items-price">
            <div className="cart-items-st">
              <span className="textt">Subtotal</span>
              <br />
              <span className="text">Total</span>
            </div>

            <div className="cart-rs">
              <span className="st">
                Rs. {calculateTotal().toLocaleString()}
              </span>
              <br />
              <span className="to">
                Rs. {calculateTotal().toLocaleString()}
              </span>
            </div>
          </div>

          <div className="cart-checkout-button">
            <button
              className="cart-button"
              onClick={() => navigate("/checkout")} 

              >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
