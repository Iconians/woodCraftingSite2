import { Favorite } from "../interfaces";

export const deleteFetch = (getFavorite: Favorite) => {
  return fetch(`http://localhost:3000/favorites/${getFavorite.id}`, {
    method: "DELETE",
  });
};
