import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCarvings } from "../fetches/getCarvings";
import { carvingArray } from "../interfaces";

interface CarvingContextInterface {
  carvingArry: carvingArray[];
}

const CarvingContext = createContext<CarvingContextInterface>({});

export const CarvingProvider = ({ children }) => {
  const [carvingArry, setCarvingArray] = useState<carvingArray[]>([]);

  useEffect(() => {
    fetchCarvings().then((data) => setCarvingArray(data));
  }, []);

  return (
    <CarvingContext.Provider>
      value =
      {{
        carvingArry,
      }}
      {children}
    </CarvingContext.Provider>
  );
};

export const useCarvingContext = () => {
  const context = useContext(CarvingContext);
  return {
    carvingArry: context.carvingArry,
  };
};
