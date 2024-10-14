import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Home/Banner/Banner";
import Inspirations from "../../Components/Home/Inspirations/Inspirations";
import Header from "../../Components/Home/Banner/Header";
import { Box as Share } from "../../Components/Home/Share/Share";

import OurProducts from "../../Components/Home/OurProducts/OurProducts/OurProducts";

export default function Home() {

  return (

    <>
      <Navbar />
      <Header />
      <div className="content">
        <Banner />
        <OurProducts />
        <Inspirations />
        <Share />
      </div>
      <Footer />
    </>
  );
}
