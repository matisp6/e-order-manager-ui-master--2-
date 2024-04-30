import React, { useContext } from 'react';
import { CartContext } from '../../CartContext'; // Załóżmy, że ścieżka do CartContext jest poprawna
import Button from 'react-bootstrap/Button'; // Załóżmy, że używasz React Bootstrap
import CartProduct from '../../components/CartProduct';
import "./styles.scss";

const CartPage = () => {
  const { items, getTotalCost } = useContext(CartContext);
  const productsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cart = useContext(CartContext);


  const checkout = async () => {
    try {
      const response = await fetch('http://localhost:9000/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart.items })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      if (responseData.url) {
        window.location.assign(responseData.url);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during checkout:", error);
        alert("Checkout failed: " + error.message);
      } else {
        console.error("Unexpected error", error);
        alert("Unexpected checkout failure");
      }
    }
  }
  
  
  return (
    <div className='cart'>
      {productsCount > 0 ? (
        <>
          <h1 className='title'>Przedmioty w koszyku:</h1>
          {items.map((currentProduct) => ( 
              // <h1 key={currentProduct.id}>{currentProduct.id} {currentProduct.title} ({currentProduct.quantity} x {currentProduct.price}zł)</h1>
              <CartProduct key={currentProduct.id} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
          ))}

          <h1 className='sum'>Suma: {getTotalCost().toFixed(2)} zł</h1>

          <Button className='buy' onClick={checkout}>Zapłać</Button>
        </>
      ) : (
        <h1 className='empty'>Koszyk jest pusty</h1>
      )}
    </div>
  );
};

export default CartPage;
