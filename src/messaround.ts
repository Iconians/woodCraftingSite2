import { fetchFavorites } from "./fetches/fetchFavorites";
import { Carving } from "./interfaces";

export const fetchFavoriteCarvings = (
  userId: number,
  carvingArray: Carving[]
) => {
  let arr: Carving[] = [];
  return fetchFavorites().then((favorites) => {
    favorites
      .filter((favorite) => favorite.userId === userId)
      .map((favorite) => {
        let findCarving = carvingArray.find(
          (carving) => carving.id === favorite.carvingId
        );
        if (findCarving !== undefined) arr.push(findCarving);
      });
    console.log(arr);
    return arr;
  });
};
