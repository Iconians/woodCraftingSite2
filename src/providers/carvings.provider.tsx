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
