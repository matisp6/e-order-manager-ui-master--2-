import React, { createContext, useState, ReactNode, useEffect } from "react";
import { ProductCardProps } from "./components/ProductCard";  // Załóżmy, że ten import jest poprawny
import data from "./utils/data";

interface CartProduct extends ProductCardProps {
    quantity: number;
}

interface CartContextType {
    items: CartProduct[];
    productsCount: number;
    getProductQuantity: (id: string) => number;
    addOneToCart: (id: string) => void;
    removeOneFromCart: (id: string) => void;
    deleteFromCart: (id: string) => void;
    getTotalCost: () => number;
}

const defaultContextValue: CartContextType = {
    items: [],
    productsCount: 0,
    getProductQuantity: (id: string) => 0, // Typ `string` zamiast `number`
    addOneToCart: (id: string) => {},
    removeOneFromCart: (id: string) => {},
    deleteFromCart: (id: string) => {},
    getTotalCost: () => 0
};

export const CartContext = createContext<CartContextType>(defaultContextValue);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        const newProductsCount = cartProducts.reduce((sum, product) => sum + product.quantity, 0);
        setProductsCount(newProductsCount);
    }, [cartProducts]);

    const [productsCount, setProductsCount] = useState(0);

    function getProductQuantity(id: string) {
        return cartProducts.find(product => product.id === id)?.quantity ?? 0;
    }

    function addOneToCart(id: string) {
        const existingProduct = cartProducts.find(product => product.id === id);
        if (existingProduct) {
            setCartProducts(cartProducts.map(product =>
                product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            ));
        } else {
            // Znajdź produkt w danych, aby uzyskać dostęp do jego ceny
            const productToAdd = data.find(product => product.id === id);
            if (productToAdd) {
                const newProduct: CartProduct = {
                    ...productToAdd,  // kopiowanie wszystkich właściwości produktu
                    quantity: 1  // ustawianie początkowej ilości
                };
                setCartProducts([...cartProducts, newProduct]);
            }
        }
    }
    

    function removeOneFromCart(id: string) {
        setCartProducts(cartProducts.reduce((acc, product) => {
            if (product.id === id) {
                if (product.quantity > 1) {
                    acc.push({ ...product, quantity: product.quantity - 1 });
                }
            } else {
                acc.push(product);
            }
            return acc;
        }, [] as CartProduct[]));
    }

    function deleteFromCart(id: string) {
        setCartProducts(cartProducts.filter(product => product.id !== id));
    }

    function getTotalCost() {
        return cartProducts.reduce((total, product) => {
            return total + (product.price * product.quantity);  // Załóżmy, że `rating` jest używane jako cena, dostosuj w razie potrzeby
        }, 0);
    }

    const contextValue = {
        items: cartProducts,
        productsCount,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;
