import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../Assets/Product/image 1.png';
import img2 from '../../../Assets/Product/image 2 .png';
import img3 from '../../../Assets/Product/image 3.png';
import img4 from '../../../Assets/Product/image 4.png';
import './RelatedProduct.css';

export default function RelatedProduct() {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const totalProducts = 8;
  const navigate = useNavigate();

  const products = [
    { id: 1, img: img1, name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%" },
    { id: 2, img: img2, name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000" },
    { id: 3, img: img3, name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%" },
    { id: 4, img: img4, name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New" },
    { id: 5, img: img1, name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "-30%" },
    { id: 6, img: img2, name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000" },
    { id: 7, img: img3, name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "-50%" },
    { id: 8, img: img4, name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", tag: "New" },
   
  ];

  const handleProductClick = (productId) => {
    navigate(`/singleproduct`); 
  };

  const handleToggleProducts = () => {
    if (showMore) {
      setVisibleProducts((prevVisibleProducts) => Math.min(prevVisibleProducts + 4, totalProducts)); // عرض 4 منتجات إضافية
    } else {
      setVisibleProducts(4);
    }
    setShowMore(!showMore); 
  };

  return (
    <div>
      <div className="related-products-container-xyz">
        <div className="related-product-heading-xyz">
          <span>Related Products</span>
        </div>

        <div className="related-products-xyz">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              className="r-prod-card-xyz"
              key={product.id}
              onClick={() => handleProductClick(product.id)}  >
              
              {product.name === "Respira" && (
                <div className="new-label">
                  <span>New</span>
                </div>
              )}

              {product.discount && (
                <div className="bubble-label">
                  <span className="discount-text">{product.discount}</span>
                </div>
              )}

              <img className='img-fluid' src={product.img} alt={product.name} />
              <div className="r-prod-desc-xyz">
                <ul className="ul-content">
                  <li className="li-bc-xyz">{product.name}</li>
                  <li className="li-content">{product.desc}</li>
                  <li className='li-contentt'>
                    {product.price} {product.oldPrice && <span>{product.oldPrice}</span>}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="r-button-xyz">
        <button onClick={handleToggleProducts}>
          {showMore ? 'Show More' : 'Show Less'}
        </button>
      </div>

      <br /> <br />
    </div>
  );
}
