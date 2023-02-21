import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchFavorites } from "../fetches/fetchFavorites";

interface FavoriteContextInterface {
  children?: ReactNode;
  favoriteArray: { carvingId: number; userId: number; id: number }[];
  // setFavoriteArray: React.Dispatch<React.SetStateAction<never[]>>;
  setFavorites: (favorites: []) => void;
}

const FavoritesContext = createContext({} as FavoriteContextInterface);

export const FavoriteProvider = ({ children }: FavoriteContextInterface) => {
  const [favoriteArray, setFavoriteArray] = useState([]);

  const setFavorites = (favorites: []) => {
    console.log("hello");
    setFavoriteArray(favorites);
  };

  // const getUserId = () => {
  //   const user = localStorage.getItem("user");
  //   if (user !== null) {
  //     const userId = JSON.parse(user)["id"];
  //     return userId;
  //   }
  // };

  // useEffect(() => {
  //   fetchFavorites().then((data) => {
  //     setFavoriteArray;
  //   });
  //   console.log(favoriteArray);
  // }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteArray,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);
  return {
    favoriteArray: context.favoriteArray,
    setFavorites: context.setFavorites,
  };
};
