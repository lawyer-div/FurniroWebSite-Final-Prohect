import React from "react";
import ShopHeader from "./HeaderAndFeatures/ShopHeader";
import FeaturesDetail from "./HeaderAndFeatures/FeatureDetail";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ShopFilter from "./ShopFilter/ShopFilter";
import ShopProductList from "../Shop/ShopProductList/ShopProductList";


const Shop = () => {
  return (
       <> 
          <Navbar />
          <ShopHeader />
          <ShopFilter />
          <div className="content">
            <ShopProductList />
            <FeaturesDetail />
          </div>
          <Footer />
        </> 
  );
};

export default Shop;
