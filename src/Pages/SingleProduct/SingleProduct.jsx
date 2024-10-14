import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import RelatedProduct from "./RelatedProduct/RelatedProduct";
import SingleProductOne from "./SingleProductOne/SingleProductOne";
import Description from "./Description/Description";




export default function SingleProduct() {
  const { id } = useParams();

  const staticProducts = [
    {
      id: "asgaard-sofa",
      name: "Asgaard sofa",
      price: "250,000.00",
      description: "Setting the bar as one of the loudest speakers in its class...",
      rating: 4.5,
      sizes: ["L", "XL", "XS"],
      colors: ["#816DFA", "#000000", "#B88E2F"],
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
      images: ["/path/to/p1.png", "/path/to/p3.png", "/path/to/p4.png", "/path/to/p5.png"],
      mainImage: "/path/to/p2.png",
    }

  ];

  const product = staticProducts.find((p) => p.id === id);

  return (

    <>
      <Navbar />
      <div className="content">
        <SingleProductOne />
        <Description />
        <RelatedProduct />
      </div>
      <Footer />
    </>

  );
}
