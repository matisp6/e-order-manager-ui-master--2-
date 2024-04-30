import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import data from "../../utils/data"; // Upewnij się, że ścieżka do danych jest poprawna
import "./styles.scss";

interface CartProductProps {
  id: string;
  quantity: number;
}

function CartProduct(props: CartProductProps) {
    const cart = useContext(CartContext);
    const { id, quantity } = props;

    // Pobieranie danych o produkcie bezpośrednio z tablicy `data`
    const productData = data.find(product => product.id === id);

    if (!productData) {
        return <p>Produkt nie został znaleziony.</p>;
    }

    return (
        <>
            <div className="item">
            <img src={productData.imageUrl} alt={productData.title} className="product-image" />
                <div className="product-details">
                    <h3>{productData.title}</h3>
                    <p>Ilość: {quantity}</p>
                    <p>Cena: {(quantity * productData.price).toFixed(2)} zł</p>
                    <Button onClick={() => cart.deleteFromCart(id)} className="remove-btn">Usuń</Button>
                    <hr />
                </div>
            </div>
        </>
    );
}

export default CartProduct;
