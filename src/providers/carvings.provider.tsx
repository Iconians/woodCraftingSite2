import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchCarvings } from "../fetches/getCarvings";
import { carvingArray } from "../interfaces";

interface CarvingContextInterface {
  carvingArray: carvingArray[];
  children?: ReactNode;
  addPurchaseItems: any;
  cartItems: carvingArray[];
}

const CarvingContext = createContext({} as CarvingContextInterface);

export const CarvingProvider = ({ children }: CarvingContextInterface) => {
  const [carvingArray, setCarvingArray] = useState<carvingArray[]>([]);
  const [cartItems, setCartItems] = useState<carvingArray[]>([]);

  useEffect(() => {
    fetchCarvings().then((data) => setCarvingArray(data));
  }, []);

  const addPurchaseItems = (item: any) => {
    setCartItems([...cartItems, item]);
  };

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
