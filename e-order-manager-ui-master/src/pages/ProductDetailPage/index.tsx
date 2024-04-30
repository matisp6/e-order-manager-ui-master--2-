import { useState } from "react";
// import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import useResetScroll from "../../hooks/useResetScroll";
import ProductDetailHighlights from "../../components/ProductDetailHighlights";
//import { ProductDetailHighlightsProps } from "../../components/ProductDetailHighlights";

import detailHighlightsData from "../../utils/detailHighlightsData";
import "./styles.scss";
import {useParams } from "react-router-dom";
import data from "../../utils/data";
import { Form, Button, Col, Row } from "react-bootstrap";

interface ProductDetailPageProps {
  product: {
    id: string;
    imageUrl: string;
    title: string;
    author: string;
    rating: number;
    hasVideo: boolean;
    tag: string;
    price: number; // Dodanie ceny
  };
  productDetails?: {
    title: string;
    author: string;
    description: string;
    tags: string[];
    price: number; // Dodanie ceny
  };
}

const ProductDetailPage: React.FC = () => {
  {
    useResetScroll();

    const [collapsed, setCollapsed] = useState<Boolean>(true);
    const { productId } = useParams<{ productId: string }>();
    const numericProductId = productId ? parseInt(productId) : null;
    const cart = useContext(CartContext);
    const productDetails = data.find(product => product.id === productId);  // Porównanie jako strin
    const productQuantity = productDetails ? cart.getProductQuantity(productDetails.id) : 0;
    console.log(cart.items);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

  return (
    <div className="product-detail__wrapper">
      <div className="product-detail">
        <h1 className="product-detail__breadcrumb-path">
          Strona główna {">"} Tytuły {">"} Kategoria
        </h1>
        <div className="product-detail__view">
          <div className="product-detail__view-image__wrapper">
            <img
              className="product-detail__view-image"
              src={
                "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage4.webp?alt=media&token=c1100445-feef-4419-b6a7-5a7ed019e9c4"
              }
              alt="product image"
            />
          </div>
          {productQuantity > 0 ? (
          <Row>
            <Col sm="6">
              <Form.Label>W koszyku: {productQuantity}</Form.Label>
            </Col>
            <Col sm="6">
            <Button onClick={() => productId && cart.removeOneFromCart(productId)} className="product-detail__view-add-to-cart-btn-2">-</Button>
                <Button onClick={() => productId && cart.addOneToCart(productId)} className="product-detail__view-add-to-cart-btn-2">+</Button>
            </Col>
            <Button onClick={() => productId && cart.deleteFromCart(productId)} className="product-detail__view-add-to-cart-btn">
                Usuń produkt z koszyka
              </Button>
            </Row>
          ) : (
            <Button onClick={() => productId && cart.addOneToCart(productId)} className="product-detail__view-add-to-cart-btn">
              Dodaj do koszyka
          </Button>
          )}
        </div>
        <div className="product-detail__info">
        <h1 className="price">{productDetails?.price.toFixed(2)} zł</h1>
          <h1 className="product-detail__info-title">
            {productDetails?.title}{/*{productDetails.title}*/}
          </h1>
          <div className="product-detail__info-author">
          {productDetails?.author}{/*{productDetails.author}*/}
          </div>
          <div className="product-detail__info-highlights">
            <ProductDetailHighlights {...detailHighlightsData} />
          </div>
          <div className="product-detail__info-description__wrapper">
            <div
              className={`product-detail__info-description ${
                collapsed ? "product-detail__info-description--collapsed" : ""
              }`}
            >
              {/* {productDetails.description} */}
              Opis: Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
              {collapsed && (
                <div className="product-detail__info-description__text-fade"></div>
              )}
            </div>
            <button
              className="product-detail__info-description__expand-btn"
              onClick={toggleCollapsed}
            >
              {collapsed ? "Pokaż więcej ↓" : "Pokaż mniej ↑"}
            </button>
          </div>
          <div className="product-detail__info-tags">
            #tag #tag #tag #tag
            {/* {props.tags.map((tag) => (
              <p>{tag}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
};
export default ProductDetailPage;