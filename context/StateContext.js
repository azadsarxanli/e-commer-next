import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);
  const incQty = () => {
    setQty((prev) => prev + 1);
  };
  const decQty = () => {
    setQty((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  };
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    if (checkProductInCart) {
      setTotalPrice((prev) => prev + product.price * quantity);
      setTotalQuantity((prev) => prev + quantity);
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    }
    if (!checkProductInCart) {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${product.title} added to cart`);
  };
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        incQty,
        decQty,
        qty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
