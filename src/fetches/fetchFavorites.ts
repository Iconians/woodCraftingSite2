import { Carving, Favorite } from "../interfaces";
const loggit = <T>(something: T) => {
  // console.log(something);
  return something;
};

export const fetchFavorites = (): Promise<Favorite[]> => {
  return fetch("http://localhost:3000/favorites")
    .then((data) => data.json())
    .then(loggit);
};

// export const fetchFavoriteCarvings = (userId: number): Promise<Carving[]> => {
//   fetchFavorites().then((favorites) => {
//     favorites
//       .filter((favorite) => favorite.userId === userId)
//       .map((favorite) => fetchCarvingForFavorite);
//   });
// };
