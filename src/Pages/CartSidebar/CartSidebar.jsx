import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import SingleProductOne from "../SingleProduct/SingleProductOne/SingleProductOne";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Description  from "../SingleProduct/Description/Description";
import RelatedProduct from "../SingleProduct/RelatedProduct/RelatedProduct";

export default function CartSidebar() {
  return (

    <div>
      <Navbar />
      <div className="content">
        <SingleProductOne />
        <ShoppingCart />
        <Description/>
       <RelatedProduct />
      </div>
      <Footer />
    </div>

  );
}
