
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/CheckOut.jsx";
import CartSidebar from "./Pages/CartSidebar/CartSidebar.jsx";
import { CartProvider } from "./Context/CartContext";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";

import Products from "./Pages/SingleProduct/Sproducts/Products.jsx";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/products/:category" element={<Products />} />

    
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/cartSidebar" element={<CartSidebar />} />

        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/SingleProduct/:productId" element={<SingleProduct />} />

      </Routes>
    </CartProvider>
  );
}
