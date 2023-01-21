import React, { createContext, ReactNode, useContext } from "react";

interface FavoriteContextInterface {
  children?: ReactNode;
}

const FavoritesContext = createContext({});

export const FavoriteProvider = ({ children }: FavoriteContextInterface) => {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);
};
