import React, { createContext, ReactNode, useContext, useState } from "react";
import { fetchFavorites } from "../fetches/fetchFavorites";
import { fetchCarvings } from "../fetches/getCarvings";
import { Carving, Favorite } from "../interfaces";

interface FavoriteContextInterface {
  children?: ReactNode;
  fetchFavoriteCarvings: () => Promise<Carving[]>;
  getUserId: () => any;
  // this is what I get when I hover over the getUserId
}

const FavoritesContext = createContext({} as FavoriteContextInterface);

export const FavoriteProvider = ({ children }: FavoriteContextInterface) => {
  const getUserId = () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const userId = JSON.parse(user)["id"];
      return userId;
    }
  };

  const findFavorites = (favorites: Favorite[], carvings: Carving[]) => {
    const user = getUserId();
    let arr: Carving[] = [];
    favorites
      .filter((favorite) => favorite.userId === user)
      .map((favorite) => {
        let findCarving = carvings.find(
          (carving) => carving.id === favorite.carvingId
        );
        if (findCarving !== undefined) arr.push(findCarving);
      });
    return arr;
  };

  const fetchFavoriteCarvings = async () => {
    const carvings = await fetchCarvings();
    const favorites = await fetchFavorites();
    return findFavorites(favorites, carvings);
  };

  return (
    <FavoritesContext.Provider
      value={{
        fetchFavoriteCarvings,
        getUserId,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);
  return {
    getUserId: context.getUserId,
    fetchFavoriteCarvings: context.fetchFavoriteCarvings,
  };
};
