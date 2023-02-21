import { fetchFavorites } from "./fetches/fetchFavorites";
import { Carving } from "./interfaces";

export const fetchFavoriteCarvings = (
  userId: number,
  carvingArray: Carving[]
) => {
  let arr = [];
  return fetchFavorites().then((favorites) => {
    console.log(favorites);
    favorites
      .filter((favorite) => favorite.userId === userId)
      .map((favorite) => {
        let findCarving = carvingArray.find(
          (carving) => carving.id === favorite.carvingId
        );
        console.log(findCarving);
        arr.push(findCarving);
      });
    return arr;
  });
};
