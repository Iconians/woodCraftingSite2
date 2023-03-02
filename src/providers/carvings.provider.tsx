import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCarvings } from "../fetches/getCarvings";
import { Carving } from "../interfaces";

interface CarvingContextInterface {
  carvingArray: Carving[];
  addPurchaseItems: (item: Carving) => void;
  cartItems: Carving[];
}

type CarvingProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

const CarvingContext = createContext({} as CarvingContextInterface);

export const CarvingProvider = ({ children }: CarvingProviderProps) => {
  const [carvingArray, setCarvingArray] = useState<Carving[]>([]);
  const [cartItems, setCartItems] = useState<Carving[]>([]);

  useEffect(() => {
    fetchCarvings().then((data) => setCarvingArray(data));
  }, []);

  const addToLocalStorage = (item: Carving) => {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      const parseCart = JSON.parse(cart);
      parseCart.push(item);
      console.log(parseCart);
      localStorage.setItem("cart", JSON.stringify(parseCart));
    }
  };

  const addPurchaseItems = (item: Carving) => {
    setCartItems([...cartItems, item]);
    addToLocalStorage(item);
  };

  const checkCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart !== null) {
      const parseCart = JSON.parse(cart);
      setCartItems(parseCart);
    }
  };

  useEffect(() => {
    checkCart();
  }, []);

  return (
    <CarvingContext.Provider
      value={{
        carvingArray,
        addPurchaseItems,
        cartItems,
      }}
    >
      {children}
    </CarvingContext.Provider>
  );
};

export const useCarvingContext = () => {
  const context = useContext(CarvingContext);
  return {
    carvingArray: context.carvingArray,
    addPurchaseItems: context.addPurchaseItems,
    cartItems: context.cartItems,
  };
};
