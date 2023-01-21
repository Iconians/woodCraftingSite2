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
}

const CarvingContext = createContext({} as CarvingContextInterface);

export const CarvingProvider = ({ children }: CarvingContextInterface) => {
  const [carvingArray, setCarvingArray] = useState<carvingArray[]>([]);

  useEffect(() => {
    fetchCarvings().then((data) => setCarvingArray(data));
  }, []);

  // retrieve user object from local storage to find user id and pass carving id from product page, use one object for all users favorites
  // use state to store favorite object

  return (
    <CarvingContext.Provider
      value={{
        carvingArray,
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
  };
};
